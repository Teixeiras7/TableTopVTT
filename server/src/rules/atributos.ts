// Fórmulas de atributos derivados (manual, Cap. 3 "Atributos do Personagem").

export interface AtributosBase {
  fis: number;
  vel: number;
  for: number;
  agi: number;
  des: number;
  mae: number;
  int: number;
  per: number;
  arc: number;
}

export function calcularDef(a: AtributosBase, mods = 0): number {
  return a.vel + a.agi + a.per + mods;
}

export function calcularIniciativa(a: AtributosBase, mods = 0): number {
  return a.vel + a.mae + a.per + mods;
}

export function calcularArm(a: AtributosBase, modArmadura = 0, mods = 0): number {
  return a.fis + modArmadura + mods;
}

export function calcularVon(a: AtributosBase, mods = 0): number {
  return a.fis + a.int + mods;
}

/** ACO/ADI: atributo (MAE corpo-a-corpo, DES à distância) + nível de perícia + modificador da arma. */
export function calcularAtaque(params: { atributo: number; nivelPericia: number; modArma: number; mods?: number }): number {
  return params.atributo + params.nivelPericia + params.modArma + (params.mods ?? 0);
}
