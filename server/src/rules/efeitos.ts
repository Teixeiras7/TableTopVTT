// Vocabulário de efeitos mecânicos: o núcleo do Rules Engine. Raça,
// arquétipo, carreira, habilidade, equipamento e condição ativa concedem
// efeitos deste vocabulário; ficha e combate usam o MESMO `aplicarEfeitos`
// para chegar aos atributos efetivos de um personagem.
//
// Escopo desta etapa: os modificadores numéricos que a criação de
// personagem e o combate já precisam (Etapa 5+). O catálogo hoje guarda o
// texto de cada habilidade/carreira (Etapa 3); estruturar cada uma neste
// vocabulário é trabalho incremental de quando formos implementá-las de
// fato, não algo a fazer de uma vez agora.

import type { AtributosBase } from "./atributos.js";

export type EfeitoMecanico =
  | { tipo: "bonus-atributo"; atributo: keyof AtributosBase; valor: number }
  | { tipo: "bonus-def"; valor: number }
  | { tipo: "bonus-arm"; valor: number }
  | { tipo: "bonus-iniciativa"; valor: number }
  | { tipo: "bonus-ataque"; valor: number }
  | { tipo: "bonus-dano"; valor: number }
  | { tipo: "dado-adicional-dano"; quantidade: number };

export interface AtributosEfetivos extends AtributosBase {
  modDef: number;
  modArm: number;
  modIniciativa: number;
  modAtaque: number;
  modDano: number;
  dadosDanoExtra: number;
}

export function aplicarEfeitos(base: AtributosBase, efeitos: EfeitoMecanico[]): AtributosEfetivos {
  const efetivo: AtributosEfetivos = {
    ...base,
    modDef: 0,
    modArm: 0,
    modIniciativa: 0,
    modAtaque: 0,
    modDano: 0,
    dadosDanoExtra: 0,
  };

  for (const efeito of efeitos) {
    switch (efeito.tipo) {
      case "bonus-atributo":
        efetivo[efeito.atributo] += efeito.valor;
        break;
      case "bonus-def":
        efetivo.modDef += efeito.valor;
        break;
      case "bonus-arm":
        efetivo.modArm += efeito.valor;
        break;
      case "bonus-iniciativa":
        efetivo.modIniciativa += efeito.valor;
        break;
      case "bonus-ataque":
        efetivo.modAtaque += efeito.valor;
        break;
      case "bonus-dano":
        efetivo.modDano += efeito.valor;
        break;
      case "dado-adicional-dano":
        efetivo.dadosDanoExtra += efeito.quantidade;
        break;
    }
  }

  return efetivo;
}
