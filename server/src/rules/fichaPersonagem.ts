// Ficha efetiva: DEF/ARM/VON/Iniciativa/ACO/ADI calculados a partir dos
// atributos base + do que está de fato EQUIPADO (não só carregado). A mesma
// função alimenta a tela de ficha e, mais adiante, o combate — não há uma
// segunda cópia dessas fórmulas em nenhum lugar.

import { calcularAtaque, calcularArm, calcularDef, calcularIniciativa, calcularVon, type AtributosBase } from "./atributos.js";

export interface ArmaEquipada {
  nome: string;
  periciaNome: string;
  nivelPericia: number; // 0 quando o personagem não tem a perícia (uso sem treinamento)
  modificadorAtaque: number;
  pod: number | null;
  distancia: boolean; // false = corpo-a-corpo (usa MAE), true = à distância (usa DES)
}

export interface ArmaduraEquipada {
  modVelocidade: number;
  modDefesa: number;
  modArmadura: number;
}

export interface AtaqueDisponivel {
  nome: string;
  bonusAtaque: number; // ACO ou ADI já somado
  pod: number | null;
}

export interface FichaEfetiva {
  def: number;
  arm: number;
  von: number;
  iniciativa: number;
  ataques: AtaqueDisponivel[];
}

export function calcularFichaEfetiva(params: {
  atributos: AtributosBase;
  armadura?: ArmaduraEquipada;
  armas: ArmaEquipada[];
}): FichaEfetiva {
  const modArmadura = params.armadura?.modArmadura ?? 0;
  const modDef = params.armadura?.modDefesa ?? 0;

  return {
    def: calcularDef(params.atributos, modDef),
    arm: calcularArm(params.atributos, modArmadura),
    von: calcularVon(params.atributos),
    iniciativa: calcularIniciativa(params.atributos),
    ataques: params.armas.map((arma) => ({
      nome: arma.nome,
      bonusAtaque: calcularAtaque({
        atributo: arma.distancia ? params.atributos.des : params.atributos.mae,
        nivelPericia: arma.nivelPericia,
        modArma: arma.modificadorAtaque,
      }),
      pod: arma.pod,
    })),
  };
}
