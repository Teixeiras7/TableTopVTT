// Resolvedor genérico de teste 2d6 — a primitiva usada por perícias,
// ataques, magia, iniciativa e fadiga (Cap. 4, "Testes de Perícia"/"Ataques").

import { rolar2d6, rolarAmplificada, ehDuplo, ehAutoFalha, ehAutoSucesso, type ResultadoDados } from "./dados.js";

export interface ResultadoTeste {
  dados: ResultadoDados;
  bonus: number;
  total: number;
  critico: boolean; // os dois dados saíram iguais
  autoFalha: boolean; // duplo 1
  autoSucesso: boolean; // duplo 6
  /** undefined quando não há alvo (teste oposto — quem chama compara dois totais) */
  sucesso: boolean | undefined;
}

export function resolverTeste(params: {
  bonus: number;
  alvo?: number;
  amplificar?: boolean;
  aleatorio?: () => number;
}): ResultadoTeste {
  const dados = params.amplificar ? rolarAmplificada(params.aleatorio) : rolar2d6(params.aleatorio);
  const autoFalha = ehAutoFalha(dados);
  const autoSucesso = ehAutoSucesso(dados);
  const total = dados.total + params.bonus;

  let sucesso: boolean | undefined;
  if (params.alvo !== undefined) {
    sucesso = autoFalha ? false : autoSucesso ? true : total >= params.alvo;
  }

  return { dados, bonus: params.bonus, total, critico: ehDuplo(dados), autoFalha, autoSucesso, sucesso };
}

/** Teste oposto: maior total vence; empate = ambos falham (regra do manual). */
export function resolverTesteOposto(a: ResultadoTeste, b: ResultadoTeste): "a" | "b" | "empate" {
  if (a.total === b.total) return "empate";
  return a.total > b.total ? "a" : "b";
}
