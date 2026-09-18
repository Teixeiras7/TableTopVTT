import { Router } from "express";
import type { Prisma } from "../../generated/prisma/index.js";
import { prisma } from "../db.js";
import { autenticar, type RequisicaoAutenticada } from "../auth.js";
import { calcularFichaEfetiva, type ArmaEquipada, type AtaqueDisponivel } from "../rules/fichaPersonagem.js";
import { calcularIniciativa, type AtributosBase } from "../rules/atributos.js";
import { resolverAtaque, resolverDano, resolverIniciativa } from "../rules/combate.js";
import { aplicarDano, escolherAspectoInicial, type EspiralVital } from "../rules/dano.js";

export const combatesRouter = Router();
combatesRouter.use(autenticar);

async function verificarMembroMesa(usuarioId: number, mesaId: number) {
  return prisma.mesaMembro.findUnique({ where: { usuarioId_mesaId: { usuarioId, mesaId } } });
}

function carregarEncontroCompleto(encontroId: number) {
  return prisma.combateEncontro.findUnique({
    where: { id: encontroId },
    include: {
      participantes: {
        orderBy: { ordem: "asc" },
        include: {
          personagem: {
            include: {
              pericias: true,
              inventario: { include: { item: { include: { arma: { include: { pericia: true } }, armadura: true } } } },
            },
          },
          condicoes: { include: { condicao: true } },
        },
      },
    },
  });
}

type EncontroCompleto = NonNullable<Awaited<ReturnType<typeof carregarEncontroCompleto>>>;
type ParticipanteCompleto = EncontroCompleto["participantes"][number];

function fichaDoParticipante(p: ParticipanteCompleto): { nome: string; def: number; arm: number; ataques: AtaqueDisponivel[]; tipo: "personagem" | "adhoc" } {
  if (p.personagem) {
    const nivelPorPericiaId = new Map(p.personagem.pericias.map((pp) => [pp.periciaId, pp.nivel]));
    const equipados = p.personagem.inventario.filter((i) => i.equipado);
    const armadura = equipados.find((i) => i.item.armadura)?.item.armadura ?? undefined;
    const armas: ArmaEquipada[] = equipados
      .filter((i) => i.item.arma)
      .map((i) => ({
        nome: i.item.nome,
        periciaNome: i.item.arma!.pericia.nome,
        nivelPericia: nivelPorPericiaId.get(i.item.arma!.periciaId) ?? 0,
        modificadorAtaque: i.item.arma!.modificadorAtaque,
        pod: i.item.arma!.pod,
        distancia: i.item.arma!.distancia,
      }));
    const ficha = calcularFichaEfetiva({ atributos: p.personagem as unknown as AtributosBase, armadura, armas });
    return { nome: p.personagem.nome, def: ficha.def, arm: ficha.arm, ataques: ficha.ataques, tipo: "personagem" };
  }
  return {
    nome: p.nomeAdHoc ?? "Inimigo",
    def: p.defAdHoc ?? 5,
    arm: p.armAdHoc ?? 0,
    ataques: p.bonusAtaqueAdHoc != null ? [{ nome: p.nomeAdHoc ?? "Ataque", bonusAtaque: p.bonusAtaqueAdHoc, pod: p.podAdHoc ?? null, corpoACorpo: false }] : [],
    tipo: "adhoc",
  };
}

function serializarEncontro(encontro: EncontroCompleto) {
  return {
    ...encontro,
    participantes: encontro.participantes.map((p) => ({
      id: p.id,
      personagemId: p.personagemId,
      bonusIniciativa: p.bonusIniciativa,
      rolagemIniciativa: p.rolagemIniciativa,
      ordem: p.ordem,
      adiado: p.adiado,
      vidaMaxAdHoc: p.vidaMaxAdHoc,
      vidaAtualAdHoc: p.vidaAtualAdHoc,
      espiralVital: p.personagem ? (p.personagem.espiralVital as unknown as EspiralVital) : undefined,
      condicoes: p.condicoes.map((c) => ({ id: c.id, nome: c.condicao.nome, rodadasRestantes: c.rodadasRestantes })),
      ficha: fichaDoParticipante(p),
    })),
  };
}

combatesRouter.get("/", async (req: RequisicaoAutenticada, res) => {
  const mesaId = Number(req.query.mesaId);
  if (!mesaId) {
    res.status(400).json({ erro: "mesaId é obrigatório" });
    return;
  }
  const membro = await verificarMembroMesa(req.usuarioId!, mesaId);
  if (!membro) {
    res.status(403).json({ erro: "Você não é membro dessa mesa" });
    return;
  }
  const combates = await prisma.combateEncontro.findMany({ where: { mesaId }, orderBy: { criadoEm: "desc" } });
  res.json(combates);
});

combatesRouter.post("/", async (req: RequisicaoAutenticada, res) => {
  const { mesaId } = req.body ?? {};
  if (!mesaId) {
    res.status(400).json({ erro: "mesaId é obrigatório" });
    return;
  }
  const membro = await verificarMembroMesa(req.usuarioId!, mesaId);
  if (!membro) {
    res.status(403).json({ erro: "Você não é membro dessa mesa" });
    return;
  }
  const encontro = await prisma.combateEncontro.create({ data: { mesaId } });
  res.status(201).json(encontro);
});

combatesRouter.get("/:id", async (req: RequisicaoAutenticada, res) => {
  const encontroId = Number(req.params.id);
  const encontro = await carregarEncontroCompleto(encontroId);
  if (!encontro) {
    res.status(404).json({ erro: "Encontro não encontrado" });
    return;
  }
  const membro = await verificarMembroMesa(req.usuarioId!, encontro.mesaId);
  if (!membro) {
    res.status(403).json({ erro: "Você não é membro dessa mesa" });
    return;
  }
  res.json(serializarEncontro(encontro));
});

combatesRouter.post("/:id/participantes", async (req: RequisicaoAutenticada, res) => {
  const encontroId = Number(req.params.id);
  const encontro = await prisma.combateEncontro.findUnique({ where: { id: encontroId } });
  if (!encontro) {
    res.status(404).json({ erro: "Encontro não encontrado" });
    return;
  }
  const membro = await verificarMembroMesa(req.usuarioId!, encontro.mesaId);
  if (!membro) {
    res.status(403).json({ erro: "Você não é membro dessa mesa" });
    return;
  }

  const body = req.body ?? {};
  let bonusIniciativa: number;
  let personagemId: number | undefined;

  if (body.personagemId) {
    const personagem = await prisma.personagem.findUnique({ where: { id: Number(body.personagemId) } });
    if (!personagem || personagem.mesaId !== encontro.mesaId) {
      res.status(404).json({ erro: "Personagem não encontrado nessa mesa" });
      return;
    }
    bonusIniciativa = calcularIniciativa(personagem as unknown as AtributosBase);
    personagemId = personagem.id;
  } else {
    if (!body.nomeAdHoc) {
      res.status(400).json({ erro: "personagemId ou nomeAdHoc é obrigatório" });
      return;
    }
    bonusIniciativa = Number(body.bonusIniciativa ?? 0);
  }

  const participante = await prisma.combateParticipante.create({
    data: {
      encontroId,
      personagemId,
      bonusIniciativa,
      nomeAdHoc: personagemId ? undefined : body.nomeAdHoc,
      defAdHoc: body.defAdHoc != null ? Number(body.defAdHoc) : undefined,
      armAdHoc: body.armAdHoc != null ? Number(body.armAdHoc) : undefined,
      bonusAtaqueAdHoc: body.bonusAtaqueAdHoc != null ? Number(body.bonusAtaqueAdHoc) : undefined,
      podAdHoc: body.podAdHoc != null ? Number(body.podAdHoc) : undefined,
      vidaMaxAdHoc: body.vidaMaxAdHoc != null ? Number(body.vidaMaxAdHoc) : undefined,
      vidaAtualAdHoc: body.vidaMaxAdHoc != null ? Number(body.vidaMaxAdHoc) : undefined,
    },
  });
  res.status(201).json(participante);
});

combatesRouter.delete("/:id/participantes/:participanteId", async (req: RequisicaoAutenticada, res) => {
  const encontroId = Number(req.params.id);
  const encontro = await prisma.combateEncontro.findUnique({ where: { id: encontroId } });
  if (!encontro) {
    res.status(404).json({ erro: "Encontro não encontrado" });
    return;
  }
  const membro = await verificarMembroMesa(req.usuarioId!, encontro.mesaId);
  if (!membro) {
    res.status(403).json({ erro: "Você não é membro dessa mesa" });
    return;
  }
  await prisma.combateParticipante.delete({ where: { id: Number(req.params.participanteId) } });
  res.status(204).end();
});

// Rola iniciativa pra quem ainda não rolou e (re)calcula a ordem de todos,
// re-rolando empates (regra do manual).
combatesRouter.post("/:id/rolar-iniciativa", async (req: RequisicaoAutenticada, res) => {
  const encontroId = Number(req.params.id);
  const encontro = await prisma.combateEncontro.findUnique({ where: { id: encontroId }, include: { participantes: true } });
  if (!encontro) {
    res.status(404).json({ erro: "Encontro não encontrado" });
    return;
  }
  const membro = await verificarMembroMesa(req.usuarioId!, encontro.mesaId);
  if (!membro) {
    res.status(403).json({ erro: "Você não é membro dessa mesa" });
    return;
  }
  if (encontro.participantes.length === 0) {
    res.status(400).json({ erro: "Adicione participantes antes de rolar iniciativa" });
    return;
  }

  const rolagens = new Map<number, number>();
  for (const p of encontro.participantes) {
    rolagens.set(p.id, resolverIniciativa({ iniciativa: p.bonusIniciativa }).total);
  }

  for (let tentativa = 0; tentativa < 20; tentativa++) {
    const valores = [...rolagens.values()];
    const empatados = new Set(valores.filter((v, i) => valores.indexOf(v) !== i));
    if (empatados.size === 0) break;
    for (const [id, valor] of rolagens) {
      if (empatados.has(valor)) {
        const p = encontro.participantes.find((x) => x.id === id)!;
        rolagens.set(id, resolverIniciativa({ iniciativa: p.bonusIniciativa }).total);
      }
    }
  }

  const ordenados = [...rolagens.entries()].sort((a, b) => b[1] - a[1]);
  await prisma.$transaction(
    ordenados.map(([id, total], indice) => prisma.combateParticipante.update({ where: { id }, data: { rolagemIniciativa: total, ordem: indice } })),
  );
  res.json(serializarEncontro((await carregarEncontroCompleto(encontroId))!));
});

combatesRouter.post("/:id/avancar-turno", async (req: RequisicaoAutenticada, res) => {
  const encontroId = Number(req.params.id);
  const encontro = await prisma.combateEncontro.findUnique({ where: { id: encontroId }, include: { participantes: true } });
  if (!encontro) {
    res.status(404).json({ erro: "Encontro não encontrado" });
    return;
  }
  const membro = await verificarMembroMesa(req.usuarioId!, encontro.mesaId);
  if (!membro) {
    res.status(403).json({ erro: "Você não é membro dessa mesa" });
    return;
  }
  if (encontro.participantes.length === 0) {
    res.status(400).json({ erro: "Sem participantes" });
    return;
  }

  let proximoTurno = encontro.turnoAtual + 1;
  let proximaRodada = encontro.rodada;
  if (proximoTurno >= encontro.participantes.length) {
    proximoTurno = 0;
    proximaRodada += 1;
  }
  await prisma.combateEncontro.update({ where: { id: encontroId }, data: { turnoAtual: proximoTurno, rodada: proximaRodada } });
  res.json(serializarEncontro((await carregarEncontroCompleto(encontroId))!));
});

combatesRouter.post("/:id/atacar", async (req: RequisicaoAutenticada, res) => {
  const encontroId = Number(req.params.id);
  const encontro = await carregarEncontroCompleto(encontroId);
  if (!encontro) {
    res.status(404).json({ erro: "Encontro não encontrado" });
    return;
  }
  const membro = await verificarMembroMesa(req.usuarioId!, encontro.mesaId);
  if (!membro) {
    res.status(403).json({ erro: "Você não é membro dessa mesa" });
    return;
  }

  const { atacanteId, alvoId, nomeAtaque, amplificar } = req.body ?? {};
  const atacante = encontro.participantes.find((p) => p.id === Number(atacanteId));
  const alvo = encontro.participantes.find((p) => p.id === Number(alvoId));
  if (!atacante || !alvo) {
    res.status(404).json({ erro: "Atacante ou alvo não encontrado neste encontro" });
    return;
  }

  const fichaAtacante = fichaDoParticipante(atacante);
  const fichaAlvo = fichaDoParticipante(alvo);
  const ataqueEscolhido = nomeAtaque ? fichaAtacante.ataques.find((a) => a.nome === nomeAtaque) : fichaAtacante.ataques[0];
  if (!ataqueEscolhido) {
    res.status(400).json({ erro: "Atacante não tem um ataque disponível (arma equipada?)" });
    return;
  }

  const resultadoAtaque = resolverAtaque({ bonusAtaque: ataqueEscolhido.bonusAtaque, defAlvo: fichaAlvo.def, amplificar: !!amplificar });

  let resultadoDano: ReturnType<typeof resolverDano> | undefined;
  if (resultadoAtaque.sucesso && ataqueEscolhido.pod != null) {
    const forcaAtacante = atacante.personagem ? (atacante.personagem as unknown as AtributosBase).for : 0;
    resultadoDano = resolverDano({ pod: ataqueEscolhido.pod, forca: forcaAtacante, corpoACorpo: ataqueEscolhido.corpoACorpo });

    if (alvo.personagem) {
      const espiralAtual = alvo.personagem.espiralVital as unknown as EspiralVital;
      const novaEspiral = aplicarDano(espiralAtual, resultadoDano.total, escolherAspectoInicial());
      await prisma.personagem.update({
        where: { id: alvo.personagem.id },
        data: { espiralVital: novaEspiral as unknown as Prisma.InputJsonValue },
      });
    } else {
      const vidaAtual = alvo.vidaAtualAdHoc ?? 0;
      await prisma.combateParticipante.update({
        where: { id: alvo.id },
        data: { vidaAtualAdHoc: Math.max(0, vidaAtual - resultadoDano.total) },
      });
    }
  }

  res.json({
    ataque: resultadoAtaque,
    dano: resultadoDano,
    nomeAtacante: fichaAtacante.nome,
    nomeAlvo: fichaAlvo.nome,
  });
});

combatesRouter.post("/:id/participantes/:participanteId/condicoes", async (req: RequisicaoAutenticada, res) => {
  const encontroId = Number(req.params.id);
  const encontro = await prisma.combateEncontro.findUnique({ where: { id: encontroId } });
  if (!encontro) {
    res.status(404).json({ erro: "Encontro não encontrado" });
    return;
  }
  const membro = await verificarMembroMesa(req.usuarioId!, encontro.mesaId);
  if (!membro) {
    res.status(403).json({ erro: "Você não é membro dessa mesa" });
    return;
  }
  const { condicaoId, rodadasRestantes } = req.body ?? {};
  const ativa = await prisma.combateCondicaoAtiva.create({
    data: { participanteId: Number(req.params.participanteId), condicaoId: Number(condicaoId), rodadasRestantes },
  });
  res.status(201).json(ativa);
});

combatesRouter.delete("/:id/condicoes/:condicaoAtivaId", async (req: RequisicaoAutenticada, res) => {
  const encontroId = Number(req.params.id);
  const encontro = await prisma.combateEncontro.findUnique({ where: { id: encontroId } });
  if (!encontro) {
    res.status(404).json({ erro: "Encontro não encontrado" });
    return;
  }
  const membro = await verificarMembroMesa(req.usuarioId!, encontro.mesaId);
  if (!membro) {
    res.status(403).json({ erro: "Você não é membro dessa mesa" });
    return;
  }
  await prisma.combateCondicaoAtiva.delete({ where: { id: Number(req.params.condicaoAtivaId) } });
  res.status(204).end();
});
