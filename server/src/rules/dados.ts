// Primitivas de rolagem de dados (manual, Cap. 4 "O Jogo").
// `aleatorio` é injetável só para permitir testes determinísticos — em uso
// real, o padrão (Math.random) é suficiente, não há necessidade de RNG
// criptográfico para rolagens de RPG.

export interface ResultadoDados {
  dados: number[]; // os dois dados mantidos (uma jogada ampliada já descarta o menor)
  total: number;
}

export function rolarD6(aleatorio: () => number = Math.random): number {
  return Math.floor(aleatorio() * 6) + 1;
}

export function rolar2d6(aleatorio: () => number = Math.random): ResultadoDados {
  const dados = [rolarD6(aleatorio), rolarD6(aleatorio)];
  return { dados, total: dados[0] + dados[1] };
}

// Jogada ampliada: rola um d6 extra e descarta o menor dos três, mantendo os
// dois maiores — inclusive para fins de duplo (crítico/auto-falha/auto-sucesso).
export function rolarAmplificada(aleatorio: () => number = Math.random): ResultadoDados {
  const tres = [rolarD6(aleatorio), rolarD6(aleatorio), rolarD6(aleatorio)].sort((a, b) => b - a);
  const dados = [tres[0], tres[1]];
  return { dados, total: dados[0] + dados[1] };
}

export function ehDuplo(r: ResultadoDados): boolean {
  return r.dados[0] === r.dados[1];
}

export function ehAutoFalha(r: ResultadoDados): boolean {
  return ehDuplo(r) && r.dados[0] === 1;
}

export function ehAutoSucesso(r: ResultadoDados): boolean {
  return ehDuplo(r) && r.dados[0] === 6;
}
