// Árvore de pré-requisitos (E/OU) reutilizável por criação de personagem,
// carreiras, habilidades e equipamento — a mesma ideia do projeto antigo
// (prerequisitos.ts), reescrita para o novo Rules Engine.

import type { AtributosBase } from "./atributos.js";

export type Prerequisito =
  | { tipo: "atributo"; atributo: keyof AtributosBase; operador: ">=" | ">" | "<=" | "<" | "=="; valor: number }
  | { tipo: "pericia"; nome: string; nivelMinimo: number }
  | { tipo: "habilidade"; nome: string }
  | { tipo: "arquetipo"; nome: string }
  | { tipo: "raca"; nome: string };

export type GrupoPrerequisitos =
  | { modo: "todos"; itens: (Prerequisito | GrupoPrerequisitos)[] }
  | { modo: "algum"; itens: (Prerequisito | GrupoPrerequisitos)[] };

export interface ContextoVerificacao {
  atributos: AtributosBase;
  pericias: Map<string, number>; // nome da perícia -> nível
  habilidades: Set<string>;
  arquetipo?: string;
  raca?: string;
}

function ehGrupo(item: Prerequisito | GrupoPrerequisitos): item is GrupoPrerequisitos {
  return "modo" in item;
}

export function verificarPrerequisito(p: Prerequisito, ctx: ContextoVerificacao): boolean {
  switch (p.tipo) {
    case "atributo": {
      const valor = ctx.atributos[p.atributo];
      switch (p.operador) {
        case ">=":
          return valor >= p.valor;
        case ">":
          return valor > p.valor;
        case "<=":
          return valor <= p.valor;
        case "<":
          return valor < p.valor;
        case "==":
          return valor === p.valor;
      }
      break;
    }
    case "pericia":
      return (ctx.pericias.get(p.nome) ?? 0) >= p.nivelMinimo;
    case "habilidade":
      return ctx.habilidades.has(p.nome);
    case "arquetipo":
      return ctx.arquetipo === p.nome;
    case "raca":
      return ctx.raca === p.nome;
  }
}

export function verificarGrupo(g: GrupoPrerequisitos, ctx: ContextoVerificacao): boolean {
  const resultados = g.itens.map((item) => (ehGrupo(item) ? verificarGrupo(item, ctx) : verificarPrerequisito(item, ctx)));
  return g.modo === "todos" ? resultados.every(Boolean) : resultados.some(Boolean);
}
