// Aplicação de dano na espiral vital (manual, "Dano", p. 211).
//
// Regra confirmada no manual: ao sofrer dano, rola-se 1d6 para escolher qual
// dos 6 ramos (2 por aspecto: Físico/Agilidade/Intelecto) recebe o dano,
// preenchendo de fora pra dentro; ao encher um ramo, o excedente transborda
// "em sentido horário" para o próximo ramo com espaço livre.
//
// ponytail: a ordem exata dos 6 ramos no diagrama impresso (quais dois
// pertencem a cada aspecto e a sequência horária entre aspectos diferentes)
// não é descrita em texto — só no desenho da ficha física, que não temos
// como renderizar aqui. Como cada aspecto tem 2 ramos que juntos somam
// exatamente sua capacidade total, rastrear só o total por ASPECTO (em vez
// dos 6 ramos individualmente) já captura toda consequência de regra que
// importa (quando um aspecto fica "enfraquecido"); só o transbordo ENTRE
// aspectos diferentes depende da ordem não confirmada. Assumimos o ciclo
// Físico -> Agilidade -> Intelecto para esse caso raro (um único golpe que
// esgota um aspecto inteiro e ainda sobra dano). Upgrade: confirmar a ordem
// no diagrama da ficha impressa e ajustar CICLO_ASPECTOS se divergir.

export type Aspecto = "fis" | "agi" | "int";
const CICLO_ASPECTOS: readonly Aspecto[] = ["fis", "agi", "int"];

export interface EspiralVital {
  fis: { max: number; dano: number };
  agi: { max: number; dano: number };
  int: { max: number; dano: number };
}

/** 1d6 entre 6 ramos (2 por aspecto) equivale a 1d3 na escolha do aspecto. */
export function escolherAspectoInicial(aleatorio: () => number = Math.random): Aspecto {
  return CICLO_ASPECTOS[Math.floor(aleatorio() * 3)];
}

export function aplicarDano(espiral: EspiralVital, dano: number, aspectoInicial: Aspecto): EspiralVital {
  const nova: EspiralVital = { fis: { ...espiral.fis }, agi: { ...espiral.agi }, int: { ...espiral.int } };
  let restante = dano;
  let indice = CICLO_ASPECTOS.indexOf(aspectoInicial);

  for (let voltas = 0; voltas < CICLO_ASPECTOS.length && restante > 0; voltas++) {
    const aspecto = CICLO_ASPECTOS[indice % CICLO_ASPECTOS.length];
    const espacoLivre = nova[aspecto].max - nova[aspecto].dano;
    const aplicado = Math.min(espacoLivre, restante);
    nova[aspecto].dano += aplicado;
    restante -= aplicado;
    indice++;
  }

  return nova;
}

export function estaDebilitado(espiral: EspiralVital): boolean {
  return CICLO_ASPECTOS.every((a) => espiral[a].dano >= espiral[a].max);
}

export function aspectosEnfraquecidos(espiral: EspiralVital): Aspecto[] {
  return CICLO_ASPECTOS.filter((a) => espiral[a].dano >= espiral[a].max);
}
