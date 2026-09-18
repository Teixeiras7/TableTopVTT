// Validação e cálculo da criação de personagem (manual, Cap. 3 "Criação de
// Personagem", 5 passos: raça -> arquétipo -> 2 carreiras -> 3 pontos de
// progressão -> equipamento). Funções puras: recebem dados já buscados no
// banco pela rota e devolvem erros ou o resultado calculado — a rota só
// grava o que sai daqui, nunca decide sozinha.

import type { AtributosBase } from "./atributos.js";

const CHAVES_ATRIBUTO = ["fis", "vel", "for", "agi", "des", "mae", "int", "per", "arc"] as const satisfies readonly (keyof AtributosBase)[];

export interface PerfilAtributoRaca {
  inicial: number | null;
  maximo: { heroi: number | null; veterano: number | null; epico: number | null };
}
export type PerfilAtributosRaca = Partial<Record<keyof AtributosBase, PerfilAtributoRaca>>;

export interface CarreiraResumo {
  id: number;
  nome: string;
  racaExigida?: string | null;
  arquetipoExigido?: string | null;
  ouroInicial: number;
}

export interface EntradaCriacaoPersonagem {
  racaNome: string;
  perfilAtributos: PerfilAtributosRaca;
  arquetipoNome: string;
  arquetiposDaRaca: string[];
  carreiras: CarreiraResumo[];
  distribuicaoAtributos: Partial<Record<keyof AtributosBase, number>>;
}

export type ResultadoCriacaoPersonagem =
  | { ok: false; erros: string[] }
  | { ok: true; erros: []; atributos: AtributosBase; ouroTotal: number };

const PONTOS_PROGRESSAO_CRIACAO = 3;

export function validarECalcularCriacao(entrada: EntradaCriacaoPersonagem): ResultadoCriacaoPersonagem {
  const erros: string[] = [];

  if (!entrada.arquetiposDaRaca.includes(entrada.arquetipoNome)) {
    erros.push(`Arquétipo "${entrada.arquetipoNome}" não é uma opção para a raça "${entrada.racaNome}".`);
  }

  if (entrada.carreiras.length !== 2) {
    erros.push("É preciso escolher exatamente 2 carreiras iniciais.");
  }
  for (const carreira of entrada.carreiras) {
    if (carreira.racaExigida && carreira.racaExigida !== entrada.racaNome) {
      erros.push(`Carreira "${carreira.nome}" exige a raça "${carreira.racaExigida}".`);
    }
    if (carreira.arquetipoExigido && carreira.arquetipoExigido !== entrada.arquetipoNome) {
      erros.push(`Carreira "${carreira.nome}" exige o arquétipo "${carreira.arquetipoExigido}".`);
    }
  }

  const totalPontos = Object.values(entrada.distribuicaoAtributos).reduce((soma: number, v) => soma + (v ?? 0), 0);
  if (totalPontos !== PONTOS_PROGRESSAO_CRIACAO) {
    erros.push(`A criação de personagem concede exatamente ${PONTOS_PROGRESSAO_CRIACAO} pontos de progressão (foram alocados ${totalPontos}).`);
  }

  if (entrada.arquetipoNome !== "Dotado" && (entrada.distribuicaoAtributos.arc ?? 0) > 0) {
    erros.push("Só o arquétipo Dotado pode alocar pontos em ARC.");
  }

  const atributos = {} as AtributosBase;
  for (const chave of CHAVES_ATRIBUTO) {
    const perfil = entrada.perfilAtributos[chave];
    const base = perfil?.inicial ?? 0;
    const pontosAlocados = entrada.distribuicaoAtributos[chave] ?? 0;
    const tetoHeroi = perfil?.maximo.heroi;
    const valorFinal = base + pontosAlocados;
    if (tetoHeroi != null && valorFinal > tetoHeroi) {
      erros.push(`${chave.toUpperCase()} não pode passar de ${tetoHeroi} no nível Herói (ficaria ${valorFinal}).`);
    }
    atributos[chave] = valorFinal;
  }

  if (erros.length > 0) return { ok: false, erros };

  const ouroTotal = entrada.carreiras.reduce((soma, c) => soma + c.ouroInicial, 0);
  return { ok: true, erros: [], atributos, ouroTotal };
}

// ---- Concessões iniciais (perícias/habilidades/conexões/itens das 2 carreiras) ----

export interface ConcessaoPericia {
  periciaId: number;
  subtipo: string | null;
  nivel: number;
}
export interface ConcessaoItem {
  itemId: number;
  quantidade: number;
}

/** Perícia concedida por ambas as carreiras empilha o nível (regra do manual). */
export function mesclarPericias(concessoes: ConcessaoPericia[]): ConcessaoPericia[] {
  const mapa = new Map<string, ConcessaoPericia>();
  for (const c of concessoes) {
    const chave = `${c.periciaId}:${c.subtipo ?? ""}`;
    const atual = mapa.get(chave);
    mapa.set(chave, atual ? { ...atual, nivel: atual.nivel + c.nivel } : c);
  }
  return [...mapa.values()];
}

export function mesclarItens(itens: ConcessaoItem[]): ConcessaoItem[] {
  const mapa = new Map<number, ConcessaoItem>();
  for (const it of itens) {
    const atual = mapa.get(it.itemId);
    mapa.set(it.itemId, atual ? { itemId: it.itemId, quantidade: atual.quantidade + it.quantidade } : it);
  }
  return [...mapa.values()];
}

export function dedupIds(ids: number[]): number[] {
  return [...new Set(ids)];
}

/** Estado inicial da espiral vital: só o teto de cada eixo, sem dano. A
 * divisão em ramos (regra de combate) fica para a Etapa 7, quando a
 * aplicação de dano for implementada e puder ser conferida no manual. */
export function calcularEspiralVitalInicial(atributos: AtributosBase) {
  return {
    fis: { max: atributos.fis, dano: 0 },
    agi: { max: atributos.agi, dano: 0 },
    int: { max: atributos.int, dano: 0 },
  };
}
