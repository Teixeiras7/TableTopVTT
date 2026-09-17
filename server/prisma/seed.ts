// Orquestra a carga dos dados estáticos de Reinos de Ferro (Etapa 3).
// Os arquivos em seedData/ são só dados (transcritos do projeto antigo);
// este script resolve as referências por nome e grava tudo via Prisma,
// na ordem de dependência: catálogo simples -> itens -> magias -> carreiras.

import { PrismaClient } from "../generated/prisma/index.js";
import { racas } from "./seedData/racas.js";
import { arquetipos } from "./seedData/arquetipos.js";
import { pericias } from "./seedData/pericias.js";
import { habilidades } from "./seedData/habilidades.js";
import { conexoes } from "./seedData/conexoes.js";
import { armas, armaduras, itensGerais } from "./seedData/itens.js";
import { magias } from "./seedData/magias.js";
import { carreiras } from "./seedData/carreiras.js";

const prisma = new PrismaClient();
const avisos: string[] = [];

function aviso(msg: string) {
  avisos.push(msg);
}

/** Busca um id no mapa; se faltar, registra aviso e retorna undefined em vez de derrubar o seed inteiro. */
function buscar(mapa: Map<string, number>, nome: string, contexto: string): number | undefined {
  const id = mapa.get(nome);
  if (id === undefined) aviso(`${contexto}: referência não encontrada -> "${nome}"`);
  return id;
}

/**
 * Perícias/habilidades repetíveis (Conhecimento, Ofício, Especialização, Idioma...)
 * existem no catálogo só pela forma-base; carreiras referenciam a variante
 * parametrizada, ex.: "Conhecimento (Trolloide)". Tenta o nome completo primeiro
 * e cai para a base + parâmetro quando não bate exato.
 */
function resolverParametrizado(
  mapa: Map<string, number>,
  nomeCompleto: string,
  contexto: string,
): { id: number; parametro?: string } | undefined {
  const idExato = mapa.get(nomeCompleto);
  if (idExato !== undefined) return { id: idExato };

  const m = nomeCompleto.match(/^(.+?)\s*\(([^)]+)\)$/);
  if (m) {
    const [, base, parametro] = m;
    const idBase = mapa.get(base.trim());
    if (idBase !== undefined) return { id: idBase, parametro: parametro.trim() };
  }

  aviso(`${contexto}: referência não encontrada -> "${nomeCompleto}"`);
  return undefined;
}

async function main() {
  const jaSemeado = await prisma.raca.count();
  if (jaSemeado > 0) {
    console.log("Banco já contém dados estáticos — nada a fazer. Use `prisma migrate reset` para começar do zero.");
    return;
  }

  // ---- Perícias ----------------------------------------------------------
  const periciaPorNome = new Map<string, number>();
  for (const p of pericias) {
    const row = await prisma.pericia.create({
      data: {
        nome: p.nome,
        atributo: p.atributo,
        categoria: p.categoria,
        semTreinamento: p.semTreinamento,
        repetivel: p.repetivel,
        observacao: p.observacao,
      },
    });
    periciaPorNome.set(p.nome, row.id);
  }
  console.log(`Perícias: ${periciaPorNome.size}`);

  // ---- Habilidades ---------------------------------------------------------
  const habilidadePorNome = new Map<string, number>();
  for (const h of habilidades) {
    const row = await prisma.habilidade.create({
      data: {
        nome: h.nome,
        preRequisito: h.preRequisito,
        efeito: h.efeito,
        repetivel: h.repetivel,
        parametroTipo: h.parametroTipo,
      },
    });
    habilidadePorNome.set(h.nome, row.id);
  }
  console.log(`Habilidades: ${habilidadePorNome.size}`);

  // ---- Conexões ------------------------------------------------------------
  const conexaoPorNome = new Map<string, number>();
  for (const c of conexoes) {
    const row = await prisma.conexao.create({ data: { nome: c.nome, beneficio: c.beneficio } });
    conexaoPorNome.set(c.nome, row.id);
  }
  console.log(`Conexões: ${conexaoPorNome.size}`);

  // ---- Arquétipos ------------------------------------------------------------
  const arquetipoPorNome = new Map<string, number>();
  for (const a of arquetipos) {
    const row = await prisma.arquetipo.create({
      data: { nome: a.nome, passivaFixa: a.passivaFixa, opcoesTexto: a.opcoesTexto },
    });
    arquetipoPorNome.set(a.nome, row.id);
  }
  console.log(`Arquétipos: ${arquetipoPorNome.size}`);

  // ---- Raças (conecta arquétipos por nome) ----------------------------------
  const racaPorNome = new Map<string, number>();
  for (const r of racas) {
    const nomesValidos = r.arquetipos.filter((nome) => {
      const ok = arquetipoPorNome.has(nome);
      if (!ok) aviso(`Raça "${r.nome}": arquétipo não encontrado -> "${nome}"`);
      return ok;
    });
    const row = await prisma.raca.create({
      data: {
        nome: r.nome,
        atributos: r.atributos,
        idiomas: r.idiomas,
        caracteristicas: r.caracteristicas,
        arquetipos: { connect: nomesValidos.map((nome) => ({ nome })) },
      },
    });
    racaPorNome.set(r.nome, row.id);
  }
  console.log(`Raças: ${racaPorNome.size}`);

  // ---- Itens: armas, armaduras, itens gerais --------------------------------
  const itemPorNome = new Map<string, number>();

  for (const a of armas) {
    const periciaId = buscar(periciaPorNome, a.periciaNome, `Arma "${a.nome}"`);
    if (periciaId === undefined) continue;
    const item = await prisma.item.create({
      data: { nome: a.nome, categoria: a.categoria, custo: a.custo, descricao: a.descricao, regrasEspeciais: a.regrasEspeciais },
    });
    await prisma.arma.create({
      data: {
        itemId: item.id,
        periciaId,
        modificadorAtaque: a.modificadorAtaque,
        pod: a.pod,
        distancia: a.distancia,
        alcanceEfetivo: a.alcanceEfetivo,
        alcanceExtremo: a.alcanceExtremo,
        ade: a.ade,
        municaoCapacidade: a.municaoCapacidade,
        municaoTipo: a.municaoTipo,
      },
    });
    itemPorNome.set(a.nome, item.id);
  }

  for (const a of armaduras) {
    const item = await prisma.item.create({
      data: { nome: a.nome, categoria: a.categoria, custo: a.custo, descricao: a.descricao, regrasEspeciais: a.regrasEspeciais },
    });
    await prisma.armadura.create({
      data: { itemId: item.id, modVelocidade: a.modVelocidade, modDefesa: a.modDefesa, modArmadura: a.modArmadura },
    });
    itemPorNome.set(a.nome, item.id);
  }

  for (const i of itensGerais) {
    const item = await prisma.item.create({
      data: { nome: i.nome, categoria: i.categoria, custo: i.custo, descricao: i.descricao, regrasEspeciais: i.regrasEspeciais },
    });
    itemPorNome.set(i.nome, item.id);
  }
  console.log(`Itens: ${itemPorNome.size} (${armas.length} armas, ${armaduras.length} armaduras, ${itensGerais.length} gerais)`);

  // ---- Magias (sem vínculo de carreira ainda) -------------------------------
  const magiaPorNome = new Map<string, number>();
  for (const m of magias) {
    const row = await prisma.magia.create({
      data: {
        nome: m.nome,
        custo: m.custo,
        alcance: m.alcance,
        ade: m.ade,
        pod: m.pod,
        sustentavel: m.sustentavel,
        atributo: m.atributo,
        efeito: m.efeito,
      },
    });
    magiaPorNome.set(m.nome, row.id);
  }
  console.log(`Magias: ${magiaPorNome.size}`);

  // ---- Carreiras -------------------------------------------------------------
  const carreiraPorNome = new Map<string, number>();
  for (const c of carreiras) {
    const racaExigidaId = c.racaExigida ? buscar(racaPorNome, c.racaExigida, `Carreira "${c.nome}"`) : undefined;
    const arquetipoExigidoId = c.arquetipoExigido ? buscar(arquetipoPorNome, c.arquetipoExigido, `Carreira "${c.nome}"`) : undefined;

    const carreira = await prisma.carreira.create({
      data: {
        nome: c.nome,
        racaExigidaId,
        arquetipoExigidoId,
        apenasInicial: c.apenasInicial,
        ouroInicial: c.ouroInicial,
        regrasExtra: c.regrasExtra,
      },
    });
    carreiraPorNome.set(c.nome, carreira.id);

    // Perícias: mescla concessão inicial (nível) com teto de progressão,
    // já que a mesma perícia pode aparecer nos dois grupos.
    const periciaMerge = new Map<string, { nivelConcedido?: number; nivelMaximo?: number }>();
    for (const p of c.periciasIniciais) {
      periciaMerge.set(p.nome, { ...periciaMerge.get(p.nome), nivelConcedido: p.nivel });
    }
    for (const p of [...c.progressaoPericiasMilitares, ...c.progressaoPericiasProfissionais]) {
      periciaMerge.set(p.nome, { ...periciaMerge.get(p.nome), nivelMaximo: p.nivelMaximo });
    }
    for (const [nome, dados] of periciaMerge) {
      const resolvido = resolverParametrizado(periciaPorNome, nome, `Carreira "${c.nome}" (perícia)`);
      if (resolvido === undefined) continue;
      await prisma.carreiraPericia.create({
        data: {
          carreiraId: carreira.id,
          periciaId: resolvido.id,
          subtipo: resolvido.parametro,
          nivelConcedido: dados.nivelConcedido,
          nivelMaximo: dados.nivelMaximo,
        },
      });
    }

    // Habilidades: mescla concessão inicial com disponibilidade de progressão.
    const habilidadeSet = new Map<string, boolean>();
    for (const h of c.habilidadesIniciais) habilidadeSet.set(h, true);
    for (const h of c.progressaoHabilidades) if (!habilidadeSet.has(h)) habilidadeSet.set(h, false);
    for (const [nome, concedidaInicial] of habilidadeSet) {
      const resolvido = resolverParametrizado(habilidadePorNome, nome, `Carreira "${c.nome}" (habilidade)`);
      if (resolvido === undefined) continue;
      await prisma.carreiraHabilidade.create({
        data: { carreiraId: carreira.id, habilidadeId: resolvido.id, parametro: resolvido.parametro, concedidaInicial },
      });
    }

    // Conexões iniciais.
    for (const nome of c.conexoesIniciais) {
      const conexaoId = buscar(conexaoPorNome, nome, `Carreira "${c.nome}" (conexão)`);
      if (conexaoId === undefined) continue;
      await prisma.carreiraConexao.create({ data: { carreiraId: carreira.id, conexaoId } });
    }

    // Itens iniciais.
    for (const it of c.itensIniciais) {
      const itemId = buscar(itemPorNome, it.nome, `Carreira "${c.nome}" (item inicial)`);
      if (itemId === undefined) continue;
      await prisma.carreiraItemInicial.create({ data: { carreiraId: carreira.id, itemId, quantidade: it.quantidade } });
    }

    // Grupos de escolha.
    for (const escolha of c.escolhas) {
      const escolhaRow = await prisma.carreiraEscolha.create({
        data: { carreiraId: carreira.id, tipo: escolha.tipo, quantidade: escolha.quantidade, descricao: escolha.descricao },
      });
      for (const opcao of escolha.opcoes) {
        const contexto = `Carreira "${c.nome}" (opção de escolha ${escolha.tipo})`;
        if (escolha.tipo === "pericia-militar" || escolha.tipo === "pericia-profissional") {
          const resolvido = resolverParametrizado(periciaPorNome, opcao.nome, contexto);
          if (resolvido === undefined) continue;
          await prisma.carreiraEscolhaOpcao.create({
            data: { escolhaId: escolhaRow.id, periciaId: resolvido.id, parametro: resolvido.parametro, nivel: opcao.nivel },
          });
        } else if (escolha.tipo === "habilidade") {
          const resolvido = resolverParametrizado(habilidadePorNome, opcao.nome, contexto);
          if (resolvido === undefined) continue;
          await prisma.carreiraEscolhaOpcao.create({
            data: { escolhaId: escolhaRow.id, habilidadeId: resolvido.id, parametro: resolvido.parametro },
          });
        } else {
          const itemId = buscar(itemPorNome, opcao.nome, contexto);
          if (itemId === undefined) continue;
          await prisma.carreiraEscolhaOpcao.create({ data: { escolhaId: escolhaRow.id, itemId, quantidade: opcao.quantidade } });
        }
      }
    }
  }
  console.log(`Carreiras: ${carreiraPorNome.size}`);

  // ---- Magia <-> Carreira ------------------------------------------------------
  let vinculosMagia = 0;
  for (const m of magias) {
    const magiaId = magiaPorNome.get(m.nome)!;
    for (const nomeCarreira of m.carreiras) {
      const carreiraId = buscar(carreiraPorNome, nomeCarreira, `Magia "${m.nome}"`);
      if (carreiraId === undefined) continue;
      await prisma.carreiraMagia.create({ data: { carreiraId, magiaId } });
      vinculosMagia++;
    }
  }
  console.log(`Vínculos magia-carreira: ${vinculosMagia}`);

  if (avisos.length > 0) {
    console.warn(`\n${avisos.length} referência(s) não resolvida(s) durante o seed:`);
    for (const a of avisos) console.warn(`  - ${a}`);
  }
}

main()
  .catch((err) => {
    console.error(err);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
