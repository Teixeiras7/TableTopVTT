import { Router } from "express";
import { prisma } from "../db.js";
import { autenticar, type RequisicaoAutenticada } from "../auth.js";
import {
  validarECalcularCriacao,
  mesclarPericias,
  mesclarItens,
  dedupIds,
  calcularEspiralVitalInicial,
  type ConcessaoPericia,
  type ConcessaoItem,
  type PerfilAtributosRaca,
} from "../rules/criacaoPersonagem.js";
import { calcularDef, calcularIniciativa, calcularVon, type AtributosBase } from "../rules/atributos.js";
import { calcularFichaEfetiva, type ArmaEquipada } from "../rules/fichaPersonagem.js";
import { resolverTeste } from "../rules/teste.js";

export const personagensRouter = Router();
personagensRouter.use(autenticar);

personagensRouter.get("/", async (req: RequisicaoAutenticada, res) => {
  const mesaId = Number(req.query.mesaId);
  const personagens = await prisma.personagem.findMany({
    where: { usuarioId: req.usuarioId!, ...(mesaId ? { mesaId } : {}) },
    include: { raca: true, arquetipo: true, carreiras: { include: { carreira: true } } },
  });
  res.json(personagens);
});

personagensRouter.get("/:id", async (req: RequisicaoAutenticada, res) => {
  const id = Number(req.params.id);
  const personagem = await prisma.personagem.findUnique({
    where: { id },
    include: {
      raca: true,
      arquetipo: true,
      carreiras: { include: { carreira: true } },
      pericias: { include: { pericia: true } },
      habilidades: { include: { habilidade: true } },
      conexoes: { include: { conexao: true } },
      magias: { include: { magia: true } },
      inventario: { include: { item: { include: { arma: { include: { pericia: true } }, armadura: true } } } },
    },
  });
  if (!personagem || personagem.usuarioId !== req.usuarioId) {
    res.status(404).json({ erro: "Personagem não encontrado" });
    return;
  }

  const nivelPorPericiaId = new Map(personagem.pericias.map((p) => [p.periciaId, p.nivel]));
  const itensEquipados = personagem.inventario.filter((i) => i.equipado);
  const armaduraEquipada = itensEquipados.find((i) => i.item.armadura)?.item.armadura ?? undefined;
  const armasEquipadas: ArmaEquipada[] = itensEquipados
    .filter((i) => i.item.arma)
    .map((i) => ({
      nome: i.item.nome,
      periciaNome: i.item.arma!.pericia.nome,
      nivelPericia: nivelPorPericiaId.get(i.item.arma!.periciaId) ?? 0,
      modificadorAtaque: i.item.arma!.modificadorAtaque,
      pod: i.item.arma!.pod,
      distancia: i.item.arma!.distancia,
    }));

  const ficha = calcularFichaEfetiva({
    atributos: personagem as unknown as AtributosBase,
    armadura: armaduraEquipada ?? undefined,
    armas: armasEquipadas,
  });

  res.json({ ...personagem, ficha });
});

// Equipar/desequipar um item do inventário (só o que está equipado entra na ficha).
personagensRouter.patch("/:id/inventario/:itemId", async (req: RequisicaoAutenticada, res) => {
  const personagemId = Number(req.params.id);
  const itemId = Number(req.params.itemId);
  const { equipado } = req.body ?? {};

  const personagem = await prisma.personagem.findUnique({ where: { id: personagemId } });
  if (!personagem || personagem.usuarioId !== req.usuarioId) {
    res.status(404).json({ erro: "Personagem não encontrado" });
    return;
  }

  const atualizado = await prisma.inventarioItem.update({
    where: { personagemId_itemId: { personagemId, itemId } },
    data: { equipado: !!equipado },
  });
  res.json(atualizado);
});

// Resolve um teste de perícia (ou atributo puro, sem periciaId) via Rules Engine —
// a mesma primitiva que o combate vai usar, já com o dado rolado no servidor.
personagensRouter.post("/:id/testar-pericia", async (req: RequisicaoAutenticada, res) => {
  const personagemId = Number(req.params.id);
  const { periciaId, alvo, amplificar } = req.body ?? {};

  const personagem = await prisma.personagem.findUnique({
    where: { id: personagemId },
    include: { pericias: { include: { pericia: true } } },
  });
  if (!personagem || personagem.usuarioId !== req.usuarioId) {
    res.status(404).json({ erro: "Personagem não encontrado" });
    return;
  }

  let bonus = 0;
  let nomeTeste = "Atributo";
  if (periciaId) {
    const pericia = await prisma.pericia.findUnique({ where: { id: Number(periciaId) } });
    if (!pericia) {
      res.status(404).json({ erro: "Perícia não encontrada" });
      return;
    }
    const concedida = personagem.pericias.find((p) => p.periciaId === pericia.id);
    if (!concedida && !pericia.semTreinamento) {
      res.status(400).json({ erro: `${pericia.nome} não pode ser usada sem treinamento.` });
      return;
    }
    const atributos = personagem as unknown as AtributosBase;
    const valorAtributo = pericia.atributo in atributos ? atributos[pericia.atributo as keyof AtributosBase] : 0;
    bonus = valorAtributo + (concedida?.nivel ?? 0);
    nomeTeste = pericia.nome;
  }

  const resultado = resolverTeste({ bonus, alvo: alvo != null ? Number(alvo) : undefined, amplificar: !!amplificar });
  res.json({ nomeTeste, ...resultado });
});

interface CorpoCriacaoPersonagem {
  mesaId: number;
  nome: string;
  racaId: number;
  arquetipoId: number;
  carreiraIds: number[];
  distribuicaoAtributos: Partial<Record<keyof AtributosBase, number>>;
  escolhas?: { escolhaId: number; opcaoIds: number[] }[];
  itensComprados?: { itemId: number; quantidade: number }[];
}

personagensRouter.post("/", async (req: RequisicaoAutenticada, res) => {
  const corpo = req.body as CorpoCriacaoPersonagem;
  if (!corpo?.nome || !corpo.mesaId || !corpo.racaId || !corpo.arquetipoId || corpo.carreiraIds?.length !== 2) {
    res.status(400).json({ erro: "nome, mesaId, racaId, arquetipoId e exatamente 2 carreiraIds são obrigatórios" });
    return;
  }

  const membro = await prisma.mesaMembro.findUnique({
    where: { usuarioId_mesaId: { usuarioId: req.usuarioId!, mesaId: corpo.mesaId } },
  });
  if (!membro) {
    res.status(403).json({ erro: "Você não é membro dessa mesa" });
    return;
  }

  const [raca, arquetipo, carreiras] = await Promise.all([
    prisma.raca.findUnique({ where: { id: corpo.racaId }, include: { arquetipos: true } }),
    prisma.arquetipo.findUnique({ where: { id: corpo.arquetipoId } }),
    prisma.carreira.findMany({
      where: { id: { in: corpo.carreiraIds } },
      include: {
        racaExigida: true,
        arquetipoExigido: true,
        pericias: true,
        habilidades: true,
        conexoes: true,
        itens: true,
        escolhas: { include: { opcoes: true } },
      },
    }),
  ]);

  if (!raca || !arquetipo || carreiras.length !== 2) {
    res.status(404).json({ erro: "Raça, arquétipo ou carreira não encontrados" });
    return;
  }

  const resultado = validarECalcularCriacao({
    racaNome: raca.nome,
    perfilAtributos: raca.atributos as unknown as PerfilAtributosRaca,
    arquetipoNome: arquetipo.nome,
    arquetiposDaRaca: raca.arquetipos.map((a) => a.nome),
    carreiras: carreiras.map((c) => ({
      id: c.id,
      nome: c.nome,
      racaExigida: c.racaExigida?.nome,
      arquetipoExigido: c.arquetipoExigido?.nome,
      ouroInicial: c.ouroInicial,
    })),
    distribuicaoAtributos: corpo.distribuicaoAtributos ?? {},
  });

  if (!resultado.ok) {
    res.status(400).json({ erros: resultado.erros });
    return;
  }

  // Resolve grupos de escolha (perícia/habilidade/item) contra as opções reais no banco.
  const escolhasBody = corpo.escolhas ?? [];
  const errosEscolha: string[] = [];
  const periciasDeEscolha: ConcessaoPericia[] = [];
  const habilidadesDeEscolha: { habilidadeId: number; parametro: string | null }[] = [];
  const itensDeEscolha: ConcessaoItem[] = [];

  for (const carreira of carreiras) {
    for (const grupo of carreira.escolhas) {
      const escolhida = escolhasBody.find((e) => e.escolhaId === grupo.id);
      const opcaoIds = escolhida?.opcaoIds ?? [];
      if (opcaoIds.length !== grupo.quantidade) {
        errosEscolha.push(
          `Carreira "${carreira.nome}": escolha "${grupo.descricao ?? grupo.tipo}" precisa de ${grupo.quantidade} opção(ões) (recebido ${opcaoIds.length}).`,
        );
        continue;
      }
      for (const opcaoId of opcaoIds) {
        const opcao = grupo.opcoes.find((o) => o.id === opcaoId);
        if (!opcao) {
          errosEscolha.push(`Opção inválida (${opcaoId}) na escolha "${grupo.descricao ?? grupo.tipo}" da carreira "${carreira.nome}".`);
          continue;
        }
        if (opcao.periciaId) periciasDeEscolha.push({ periciaId: opcao.periciaId, subtipo: opcao.parametro, nivel: opcao.nivel ?? 1 });
        else if (opcao.habilidadeId) habilidadesDeEscolha.push({ habilidadeId: opcao.habilidadeId, parametro: opcao.parametro });
        else if (opcao.itemId) itensDeEscolha.push({ itemId: opcao.itemId, quantidade: opcao.quantidade ?? 1 });
      }
    }
  }

  if (errosEscolha.length > 0) {
    res.status(400).json({ erros: errosEscolha });
    return;
  }

  const periciasConcedidas = mesclarPericias([
    ...carreiras.flatMap((c) =>
      c.pericias.filter((p) => p.nivelConcedido != null).map((p) => ({ periciaId: p.periciaId, subtipo: p.subtipo, nivel: p.nivelConcedido! })),
    ),
    ...periciasDeEscolha,
  ]);
  const habilidadesConcedidas = [
    ...carreiras.flatMap((c) => c.habilidades.filter((h) => h.concedidaInicial).map((h) => ({ habilidadeId: h.habilidadeId, parametro: h.parametro }))),
    ...habilidadesDeEscolha,
  ];
  const conexoesConcedidas = dedupIds(carreiras.flatMap((c) => c.conexoes.map((cc) => cc.conexaoId)));
  const itensDasCarreiras = mesclarItens([
    ...carreiras.flatMap((c) => c.itens.map((it) => ({ itemId: it.itemId, quantidade: it.quantidade }))),
    ...itensDeEscolha,
  ]);

  // Compras com o ouro inicial (dentro do orçamento das duas carreiras).
  const comprasBody = corpo.itensComprados ?? [];
  let itensComprados: ConcessaoItem[] = [];
  if (comprasBody.length > 0) {
    const itensCatalogo = await prisma.item.findMany({ where: { id: { in: comprasBody.map((c) => c.itemId) } } });
    const custoPorId = new Map(itensCatalogo.map((i) => [i.id, i.custo]));
    const custoTotal = comprasBody.reduce((soma, c) => soma + (custoPorId.get(c.itemId) ?? 0) * c.quantidade, 0);
    if (custoTotal > resultado.ouroTotal) {
      res.status(400).json({ erro: `Compras custam ${custoTotal} CO, mas o ouro inicial é ${resultado.ouroTotal} CO.` });
      return;
    }
    itensComprados = comprasBody;
  }

  const inventarioFinal = mesclarItens([...itensDasCarreiras, ...itensComprados]);
  const espiralVital = calcularEspiralVitalInicial(resultado.atributos);

  const personagem = await prisma.$transaction((tx) =>
    tx.personagem.create({
      data: {
        nome: corpo.nome,
        usuarioId: req.usuarioId!,
        mesaId: corpo.mesaId,
        racaId: corpo.racaId,
        arquetipoId: corpo.arquetipoId,
        ...resultado.atributos,
        espiralVital,
        carreiras: { create: carreiras.map((c, i) => ({ carreiraId: c.id, ordem: i + 1 })) },
        pericias: { create: periciasConcedidas.map((p) => ({ periciaId: p.periciaId, nivel: p.nivel, subtipo: p.subtipo })) },
        habilidades: { create: habilidadesConcedidas.map((h) => ({ habilidadeId: h.habilidadeId, parametro: h.parametro })) },
        conexoes: { create: conexoesConcedidas.map((conexaoId) => ({ conexaoId })) },
        inventario: { create: inventarioFinal.map((it) => ({ itemId: it.itemId, quantidade: it.quantidade })) },
      },
    }),
  );

  const derivados = {
    def: calcularDef(resultado.atributos),
    iniciativa: calcularIniciativa(resultado.atributos),
    von: calcularVon(resultado.atributos),
  };

  res.status(201).json({ ...personagem, derivados });
});
