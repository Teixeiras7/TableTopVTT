export interface ItemBaseSeed {
  nome: string;
  categoria: string; // "arma-corpo-a-corpo" | "arma-distancia" | "armadura" | "municao" | "acessorio" | "equipamento-geral" | "vestuario" | "montaria" | "alimentacao" | "acomodacao" | "ingrediente-alquimico" | "composto-alquimico" | "arma-alquimica" | "componente-mekanico" | "runa-mekanica" | "dispositivo-mekanico"
  custo: number; // valor em CO (Coroas)
  descricao?: string;
  regrasEspeciais?: string;
}

export interface ArmaSeed extends ItemBaseSeed {
  periciaNome: string;
  modificadorAtaque: number;
  pod?: number;
  distancia: boolean;
  alcanceEfetivo?: number;
  alcanceExtremo?: number;
  ade?: string;
  municaoCapacidade?: number;
  municaoTipo?: string;
}

export interface ArmaduraSeed extends ItemBaseSeed {
  modVelocidade: number;
  modDefesa: number;
  modArmadura: number;
}

/* =========================================================
   ARMAS CORPO A CORPO + DISTÂNCIA
========================================================= */

export const armas: ArmaSeed[] = [
  // ---------- Corpo a corpo ----------
  {
    nome: "Adaga",
    categoria: "arma-corpo-a-corpo",
    custo: 5,
    descricao:
      "Faca curta de combate, leve e comum entre soldados e aventureiros.",
    periciaNome: "Arma de Mão",
    modificadorAtaque: 1,
    pod: 1,
    distancia: false,
  },
  {
    nome: "Alabarda",
    categoria: "arma-corpo-a-corpo",
    custo: 25,
    descricao:
      "Arma de haste versátil usada para manter distância e enfrentar cargas.",
    regrasEspeciais:
      "Tags: haste, alcance. Efeito: possui alcance (regra especial). Modos alternativos: Uma Mão (Arma Grande, ataque -1, pod 4, alcance); Duas Mãos (Arma Grande, ataque 0, pod 5, alcance, bônus de dano em investida +2).",
    periciaNome: "Arma Grande",
    modificadorAtaque: -1,
    pod: 4,
    distancia: false,
  },
  {
    nome: "Alfanje",
    categoria: "arma-corpo-a-corpo",
    custo: 15,
    descricao: "Espada curta, larga e curva, comum entre marinheiros e piratas.",
    periciaNome: "Arma de Mão",
    modificadorAtaque: -1,
    pod: 4,
    distancia: false,
  },
  {
    nome: "Baioneta",
    categoria: "arma-corpo-a-corpo",
    custo: 5,
    descricao:
      "Lâmina que pode ser usada sozinha ou afixada a uma arma longa.",
    regrasEspeciais:
      "Tags: lâmina, fuzil. Modos alternativos: Como Adaga ou em Arma Menor (Arma de Mão, ataque -1, pod 2); Presa a Fuzil (Arma Grande, ataque -1, pod 3, exige duas mãos, alcance, bônus de ataque em investida +2).",
    periciaNome: "Arma de Mão",
    modificadorAtaque: -1,
    pod: 2,
    distancia: false,
  },
  {
    nome: "Bengala-Espada",
    categoria: "arma-corpo-a-corpo",
    custo: 15,
    descricao: "Espada curta disfarçada dentro de uma bengala.",
    regrasEspeciais:
      "Tags: ocultável. Efeito: arma disfarçada (teste PER+Detectar, NA 14 para identificar). Modos alternativos: Como Bengala (Arma de Mão, ataque 0, pod 0); Espada Sacada (Arma de Mão, ataque 0, pod 2).",
    periciaNome: "Arma de Mão",
    modificadorAtaque: 0,
    pod: 2,
    distancia: false,
  },
  {
    nome: "Cajado",
    categoria: "arma-corpo-a-corpo",
    custo: 5,
    descricao: "Bordão longo de madeira resistente usado como arma de alcance.",
    regrasEspeciais:
      "Tags: alcance, bordão. Usa duas mãos. Efeitos: alcance; façanha de derrubar (custo 1 façanha, substitui o dano).",
    periciaNome: "Arma Grande",
    modificadorAtaque: 0,
    pod: 3,
    distancia: false,
  },
  {
    nome: "Cajado de Batalha",
    categoria: "arma-corpo-a-corpo",
    custo: 12,
    descricao: "Bordão reforçado e pesado, apropriado para golpes de impacto.",
    regrasEspeciais:
      "Tags: alcance, bordão, nocaute. Usa duas mãos. Efeitos: alcance; façanha de derrubar (custo 1 façanha, substitui dano); crítico de nocaute (exige causar dano, teste Força de Vontade, NA = FOR do atacante +9).",
    periciaNome: "Arma Grande",
    modificadorAtaque: 0,
    pod: 4,
    distancia: false,
  },
  {
    nome: "Clava",
    categoria: "arma-corpo-a-corpo",
    custo: 3,
    descricao: "Arma de impacto simples feita para golpes contundentes.",
    regrasEspeciais:
      "Tags: impacto, nocaute. Efeito: crítico de nocaute (exige causar dano, teste Força de Vontade, NA = FOR do atacante +9).",
    periciaNome: "Arma de Mão",
    modificadorAtaque: 0,
    pod: 2,
    distancia: false,
  },
  {
    nome: "Clava Cravejada",
    categoria: "arma-corpo-a-corpo",
    custo: 6,
    descricao: "Clava reforçada com metal, mais pesada e voltada ao combate.",
    regrasEspeciais:
      "Tags: impacto, nocaute. Pré-requisito: FOR >= 5. Efeito: crítico de nocaute (exige causar dano, teste Força de Vontade, NA = FOR do atacante +11).",
    periciaNome: "Arma Grande",
    modificadorAtaque: 1,
    pod: 4,
    distancia: false,
  },
  {
    nome: "Claymore Nyss",
    categoria: "arma-corpo-a-corpo",
    custo: 30,
    descricao: "Espada nyss de duas mãos, famosa pela qualidade e durabilidade.",
    regrasEspeciais:
      "Tags: nyss, espada. Usa duas mãos. Efeito: façanha de ampliar ataque (custo 1 façanha).",
    periciaNome: "Arma Grande",
    modificadorAtaque: 0,
    pod: 6,
    distancia: false,
  },
  {
    nome: "Escudo",
    categoria: "arma-corpo-a-corpo",
    custo: 20,
    descricao:
      "Escudo metálico defensivo que também pode ser usado para atacar.",
    regrasEspeciais:
      "Tags: escudo, defesa. Efeito: bônus de ARM por nível de perícia em Escudo (+1 por nível), somente no arco frontal, não acumula com escudo adicional.",
    periciaNome: "Escudo",
    modificadorAtaque: 0,
    pod: 0,
    distancia: false,
  },
  {
    nome: "Escudo de Combate",
    categoria: "arma-corpo-a-corpo",
    custo: 35,
    descricao: "Escudo reforçado e equipado para funcionar melhor como arma.",
    regrasEspeciais:
      "Tags: escudo, defesa. Efeito: bônus de ARM por nível de perícia em Escudo (+1 por nível), somente no arco frontal, não acumula com escudo adicional.",
    periciaNome: "Escudo",
    modificadorAtaque: -1,
    pod: 3,
    distancia: false,
  },
  {
    nome: "Espada",
    categoria: "arma-corpo-a-corpo",
    custo: 12,
    descricao: "Espada comum de uma mão, amplamente usada em Immoren.",
    periciaNome: "Arma de Mão",
    modificadorAtaque: 0,
    pod: 3,
    distancia: false,
  },
  {
    nome: "Espada de Trincheira",
    categoria: "arma-corpo-a-corpo",
    custo: 15,
    descricao: "Espada pesada com guarda reforçada para golpes de punho.",
    regrasEspeciais:
      "Tags: espada, trincheira. Modos alternativos: Lâmina (Arma de Mão, ataque -1, pod 4); Esmaga-Crânios (Combate Desarmado, ataque -1, pod 2, crítico de derrubar, bônus na tabela de nocaute +2 ao NA se causar dano).",
    periciaNome: "Arma de Mão",
    modificadorAtaque: -1,
    pod: 4,
    distancia: false,
  },
  {
    nome: "Espada Larga",
    categoria: "arma-corpo-a-corpo",
    custo: 20,
    descricao:
      "Grande espada de dois gumes, pesada e eficaz contra alvos blindados.",
    regrasEspeciais:
      "Tags: espada, alcance. Usa duas mãos. Efeito: alcance.",
    periciaNome: "Arma Grande",
    modificadorAtaque: 0,
    pod: 6,
    distancia: false,
  },
  {
    nome: "Faca de Trincheira",
    categoria: "arma-corpo-a-corpo",
    custo: 10,
    descricao: "Faca pesada com guarda de mão própria para golpes de soco.",
    regrasEspeciais:
      "Tags: faca, trincheira. Modos alternativos: Lâmina (Arma de Mão, ataque 0, pod 2); Esmaga-Crânios (Combate Desarmado, ataque -1, pod 2, bônus na tabela de nocaute +2 ao NA se causar dano).",
    periciaNome: "Arma de Mão",
    modificadorAtaque: 0,
    pod: 2,
    distancia: false,
  },
  {
    nome: "Florete",
    categoria: "arma-corpo-a-corpo",
    custo: 15,
    descricao: "Espada fina de duelo, leve e precisa.",
    regrasEspeciais:
      "Tags: duelo. Efeito: façanha de ampliar ataque e dano (custo 1 façanha).",
    periciaNome: "Arma de Mão",
    modificadorAtaque: 0,
    pod: 2,
    distancia: false,
  },
  {
    nome: "Kopis",
    categoria: "arma-corpo-a-corpo",
    custo: 15,
    descricao: "Arma cortante pesada tradicional entre tribos idrianas.",
    regrasEspeciais:
      "Tags: idriano. Efeitos: bônus de ataque em investida +2; crítico com façanha de dado de dano adicional (custo 1 façanha, +1 dado).",
    periciaNome: "Arma de Mão",
    modificadorAtaque: -1,
    pod: 3,
    distancia: false,
  },
  {
    nome: "Lâmina de Batalha Caspiana",
    categoria: "arma-corpo-a-corpo",
    custo: 20,
    descricao:
      "Espada robusta de dois gumes usada em estilos caspianos de combate.",
    regrasEspeciais:
      "Tags: espada, cygnar. Modos alternativos: Uma Mão (Arma Grande, ataque -1, pod 4, requer FOR >= 5); Duas Mãos (Arma Grande, ataque 0, pod 6).",
    periciaNome: "Arma Grande",
    modificadorAtaque: -1,
    pod: 4,
    distancia: false,
  },
  {
    nome: "Lâmina do Assassino",
    categoria: "arma-corpo-a-corpo",
    custo: 10,
    descricao: "Espada curta e pesada otimizada para ataques surpresa.",
    regrasEspeciais:
      "Tags: assassino, ocultável. Efeito: bônus de dano pelas costas +2.",
    periciaNome: "Arma de Mão",
    modificadorAtaque: -1,
    pod: 4,
    distancia: false,
  },
  {
    nome: "Lâmina Retrátil",
    categoria: "arma-corpo-a-corpo",
    custo: 12,
    descricao: "Adaga de lâmina retrátil acionada por mola.",
    regrasEspeciais: "Tags: ocultável. Efeito: pode ser sacada sem ação rápida.",
    periciaNome: "Arma de Mão",
    modificadorAtaque: 0,
    pod: 1,
    distancia: false,
  },
  {
    nome: "Lança Explosiva",
    categoria: "arma-corpo-a-corpo",
    custo: 50,
    descricao:
      "Arma de haste com ponta explosiva substituível, usada pelos Presas de Ferro.",
    regrasEspeciais:
      "Tags: alcance, explosiva, presa-de-ferro. Efeitos: alcance; crítico de derrubar; a ponta explosiva se consome após o ataque; trocar a ponta é uma ação rápida; custo de reposição de ponta explosiva 1 CO, ponta comum 1 CO. Modos alternativos: Ponta Explosiva (Arma Grande, ataque -2, pod 7, alcance, crítico de derrubar); Ponta Comum — Uma Mão (Arma Grande, ataque -2, pod 4, requer FOR >= 6, alcance); Ponta Comum — Duas Mãos (Arma Grande, ataque -2, pod 5, alcance).",
    periciaNome: "Arma Grande",
    modificadorAtaque: -2,
    pod: 7,
    distancia: false,
  },
  {
    nome: "Lança",
    categoria: "arma-corpo-a-corpo",
    custo: 15,
    descricao: "Arma de haste simples, leve e tradicional.",
    regrasEspeciais:
      "Tags: haste. Modos alternativos: Uma Mão (Arma Grande, ataque -1, pod 4); Duas Mãos (Arma Grande, ataque -1, pod 5, alcance, bônus de ataque em investida +2).",
    periciaNome: "Arma Grande",
    modificadorAtaque: -1,
    pod: 4,
    distancia: false,
  },
  {
    nome: "Lança de Cavalaria",
    categoria: "arma-corpo-a-corpo",
    custo: 15,
    descricao:
      "Lança pesada própria para combate montado e ataques de investida.",
    regrasEspeciais:
      "Tags: montaria, alcance. Pré-requisito: FOR >= 5. Efeitos: alcance; somente pode ser usada montado; somente em ataques de investida.",
    periciaNome: "Lança",
    modificadorAtaque: 0,
    pod: 8,
    distancia: false,
  },
  {
    nome: "Maça",
    categoria: "arma-corpo-a-corpo",
    custo: 15,
    descricao:
      "Clava metálica pesada, comum entre guerreiros religiosos e cavaleiros.",
    regrasEspeciais:
      "Tags: impacto, nocaute. Efeito: crítico de nocaute (exige causar dano, teste Força de Vontade, NA = FOR do atacante +9).",
    periciaNome: "Arma de Mão",
    modificadorAtaque: -1,
    pod: 4,
    distancia: false,
  },
  {
    nome: "Machado",
    categoria: "arma-corpo-a-corpo",
    custo: 8,
    descricao: "Machado simples que também funciona como ferramenta.",
    periciaNome: "Arma de Mão",
    modificadorAtaque: 0,
    pod: 3,
    distancia: false,
  },
  {
    nome: "Machado de Cavalaria",
    categoria: "arma-corpo-a-corpo",
    custo: 20,
    descricao:
      "Machado de cabo longo projetado para golpes a partir da sela.",
    regrasEspeciais:
      "Tags: machado, montaria, alcance. Modos alternativos: A Pé (Arma de Mão, ataque -1, pod 3, alcance); Montado (Arma de Mão, ataque 0, pod 5, alcance, bônus de dano em investida +2).",
    periciaNome: "Arma de Mão",
    modificadorAtaque: -1,
    pod: 3,
    distancia: false,
  },
  {
    nome: "Machado Grande",
    categoria: "arma-corpo-a-corpo",
    custo: 25,
    descricao:
      "Machado enorme de duas mãos criado para combatentes muito fortes.",
    regrasEspeciais:
      "Tags: machado. Usa duas mãos. Pré-requisito: FOR >= 5. Efeito: crítico com dado de dano adicional (+1 dado).",
    periciaNome: "Arma Grande",
    modificadorAtaque: 0,
    pod: 6,
    distancia: false,
  },
  {
    nome: "Machete de Guerra Ogrun",
    categoria: "arma-corpo-a-corpo",
    custo: 30,
    descricao: "Arma de haste enorme desenvolvida para a força de um ogrun.",
    regrasEspeciais:
      "Tags: ogrun, alcance. Usa duas mãos. Pré-requisito: FOR >= 6. Efeitos: alcance; bônus de ataque em investida +2 se o usuário tiver estatura enorme.",
    periciaNome: "Arma Grande",
    modificadorAtaque: -1,
    pod: 6,
    distancia: false,
  },
  {
    nome: "Malho",
    categoria: "arma-corpo-a-corpo",
    custo: 20,
    descricao: "Marreta militar de duas mãos feita para golpes devastadores.",
    regrasEspeciais:
      "Tags: impacto. Usa duas mãos. Pré-requisito: FOR >= 5. Efeito: crítico com façanha de lançar o alvo (custo 1 façanha, distância 1d3, dano ao alvo = FOR do atacante + POD da arma, dano colateral = FOR do atacante).",
    periciaNome: "Arma Grande",
    modificadorAtaque: 0,
    pod: 6,
    distancia: false,
  },
  {
    nome: "Mangual",
    categoria: "arma-corpo-a-corpo",
    custo: 15,
    descricao:
      "Arma de corrente capaz de contornar parte da proteção de escudos.",
    regrasEspeciais: "Tags: corrente. Efeito: ignora o bônus de ARM de escudo.",
    periciaNome: "Arma de Mão",
    modificadorAtaque: -1,
    pod: 4,
    distancia: false,
  },
  {
    nome: "Mangual de Duas Mãos",
    categoria: "arma-corpo-a-corpo",
    custo: 25,
    descricao:
      "Mangual pesado de duas mãos com grande alcance e força de impacto.",
    regrasEspeciais:
      "Tags: corrente, alcance. Usa duas mãos. Efeitos: alcance; ignora o bônus de ARM de escudo; crítico com façanha de empurrar e derrubar (custo 1 façanha, empurrão 2 m, avanço posterior 2 m).",
    periciaNome: "Arma Grande",
    modificadorAtaque: -2,
    pod: 6,
    distancia: false,
  },
  {
    nome: "Martelo de Guerra",
    categoria: "arma-corpo-a-corpo",
    custo: 20,
    descricao: "Grande martelo militar de ferro ou aço.",
    regrasEspeciais:
      "Tags: impacto, nocaute. Modos alternativos: Uma Mão (Arma Grande, ataque -1, pod 5, requer FOR >= 6, crítico de nocaute exige dano, NA = FOR do atacante +12); Duas Mãos (Arma Grande, ataque -1, pod 5, crítico de nocaute exige dano, NA = FOR do atacante +12).",
    periciaNome: "Arma Grande",
    modificadorAtaque: -1,
    pod: 5,
    distancia: false,
  },
  {
    nome: "Picareta",
    categoria: "arma-corpo-a-corpo",
    custo: 15,
    descricao:
      "Ferramenta de escavação que também funciona como arma perfurante.",
    regrasEspeciais:
      "Tags: ferramenta, perfurante. Efeito: façanha de dano extra contra alvo derrubado (custo 1 façanha, +1 dado).",
    periciaNome: "Arma de Mão",
    modificadorAtaque: -1,
    pod: 4,
    distancia: false,
  },
  {
    nome: "Soqueiras",
    categoria: "arma-corpo-a-corpo",
    custo: 5,
    descricao: "Peças metálicas usadas para aumentar o dano de socos.",
    regrasEspeciais:
      "Tags: desarmado. Efeito: bônus na tabela de nocaute (+2 ao NA se causar dano).",
    periciaNome: "Combate Desarmado",
    modificadorAtaque: 0,
    pod: 1,
    distancia: false,
  },

  // ---------- À distância ----------
  {
    nome: "Arco",
    categoria: "arma-distancia",
    custo: 20,
    descricao:
      "Arco convencional, ainda letal nas mãos de um arqueiro treinado.",
    regrasEspeciais: "Tags: arco. Usa duas mãos.",
    periciaNome: "Arco",
    modificadorAtaque: 0,
    pod: 10,
    distancia: true,
    alcanceEfetivo: 20,
    alcanceExtremo: 100,
    municaoCapacidade: 1,
    municaoTipo: "flecha",
  },
  {
    nome: "Arco Grande",
    categoria: "arma-distancia",
    custo: 45,
    descricao:
      "Arco enorme de puxada muito pesada, quase da altura do usuário.",
    regrasEspeciais: "Tags: arco. Usa duas mãos. Pré-requisito: FOR >= 6.",
    periciaNome: "Arco",
    modificadorAtaque: 0,
    pod: 12,
    distancia: true,
    alcanceEfetivo: 20,
    alcanceExtremo: 100,
    municaoCapacidade: 1,
    municaoTipo: "flecha-grande",
  },
  {
    nome: "Arco Nyss",
    categoria: "arma-distancia",
    custo: 35,
    descricao: "Arco composto nyss de alta qualidade e alcance superior.",
    regrasEspeciais: "Tags: arco, nyss. Usa duas mãos. Pré-requisito: FOR >= 5.",
    periciaNome: "Arco",
    modificadorAtaque: 0,
    pod: 10,
    distancia: true,
    alcanceEfetivo: 24,
    alcanceExtremo: 120,
    municaoCapacidade: 1,
    municaoTipo: "flecha",
  },
  {
    nome: "Atirador de Arpão",
    categoria: "arma-distancia",
    custo: 35,
    descricao:
      "Arma curta e robusta para disparar arpões ou ganchos presos a corda.",
    regrasEspeciais:
      "Tags: arpão, fuzil. Modo Arpão: Fuzil, ataque -2, pod 12, alcance 20/40, munição arpão (capacidade 1), regra de puxar o alvo se causar dano (contra alvos de base igual ou menor). Modo Gancho: Fuzil, ataque -4, pod 8, alcance 20/40, munição gancho (capacidade 1).",
    periciaNome: "Fuzil",
    modificadorAtaque: -2,
    pod: 12,
    distancia: true,
    alcanceEfetivo: 20,
    alcanceExtremo: 40,
    municaoCapacidade: 1,
    municaoTipo: "arpao",
  },
  {
    nome: "Azagaia",
    categoria: "arma-distancia",
    custo: 5,
    descricao: "Lança leve construída para arremesso.",
    regrasEspeciais: "Tags: arremesso. Efeito: soma FOR ao POD.",
    periciaNome: "Arma de Arremesso",
    modificadorAtaque: 0,
    pod: 3,
    distancia: true,
    alcanceEfetivo: 16,
  },
  {
    nome: "Bacamarte",
    categoria: "arma-distancia",
    custo: 30,
    descricao: "Fuzil curto e grosso, potente em distâncias menores.",
    regrasEspeciais:
      "Tags: fuzil, arma de fogo. Modos alternativos: Uma Mão (ataque -2, pod 12); Duas Mãos (ataque -1, pod 12).",
    periciaNome: "Fuzil",
    modificadorAtaque: -2,
    pod: 12,
    distancia: true,
    alcanceEfetivo: 16,
    alcanceExtremo: 80,
    municaoCapacidade: 1,
    municaoTipo: "municao-pesada",
  },
  {
    nome: "Bengala Rynica",
    categoria: "arma-distancia",
    custo: 40,
    descricao: "Arma de fogo curta escondida dentro de uma bengala.",
    regrasEspeciais:
      "Tags: fuzil, arma de fogo, ocultável. Efeito: arma disfarçada (teste PER+Detectar, NA 14 para identificar). Modos alternativos: Uma Mão (ataque -2, pod 10); Duas Mãos (ataque 0, pod 10).",
    periciaNome: "Fuzil",
    modificadorAtaque: -2,
    pod: 10,
    distancia: true,
    alcanceEfetivo: 16,
    alcanceExtremo: 80,
    municaoCapacidade: 1,
    municaoTipo: "municao-leve",
  },
  {
    nome: "Besta",
    categoria: "arma-distancia",
    custo: 20,
    descricao: "Besta convencional usada por caçadores e assassinos.",
    regrasEspeciais:
      "Tags: besta. Efeito: recarga exige ação completa. Modos alternativos: Uma Mão (ataque -2, pod 12); Duas Mãos (ataque 0, pod 12).",
    periciaNome: "Besta",
    modificadorAtaque: -2,
    pod: 12,
    distancia: true,
    alcanceEfetivo: 20,
    alcanceExtremo: 100,
    municaoCapacidade: 1,
    municaoTipo: "virote",
  },
  {
    nome: "Besta de Repetição",
    categoria: "arma-distancia",
    custo: 30,
    descricao: "Besta de seis virotes com pente substituível.",
    regrasEspeciais:
      "Tags: besta, repetição. Usa pente de seis virotes. Usa duas mãos. Efeitos: trocar o pente é ação rápida; recarregar cada munição é ação rápida.",
    periciaNome: "Besta",
    modificadorAtaque: -1,
    pod: 10,
    distancia: true,
    alcanceEfetivo: 20,
    alcanceExtremo: 100,
    municaoCapacidade: 6,
    municaoTipo: "virote",
  },
  {
    nome: "Boleadeira",
    categoria: "arma-distancia",
    custo: 5,
    descricao:
      "Arma de cordas e pesos destinada a enredar e derrubar o alvo.",
    regrasEspeciais:
      "Tags: arremesso, derrubar. Efeitos: soma FOR ao POD; teste para evitar ser derrubado (FOR+MAE, NA 15); para escapar: ação rápida, teste FOR ou AGI + Usar Cordas, NA 10.",
    periciaNome: "Arma de Arremesso",
    modificadorAtaque: -2,
    pod: 0,
    distancia: true,
    alcanceEfetivo: 16,
  },
  {
    nome: "Canhão de Batalha Ogrun",
    categoria: "arma-distancia",
    custo: 85,
    descricao:
      "Pequeno canhão rhúlico projetado para combatentes do porte de um ogrun.",
    regrasEspeciais:
      "Tags: ogrun, fuzil, arma de fogo. Pré-requisito: FOR >= 6. Efeito: restrição de proporção, exige porte ogrun. Modos alternativos: Uma Mão (ataque -2, pod 12); Duas Mãos (ataque -1, pod 12).",
    periciaNome: "Fuzil",
    modificadorAtaque: -2,
    pod: 12,
    distancia: true,
    alcanceEfetivo: 24,
    alcanceExtremo: 120,
    ade: "3",
    municaoCapacidade: 1,
    municaoTipo: "especial",
  },
  {
    nome: "Canhão de Mão",
    categoria: "arma-distancia",
    custo: 100,
    descricao: "Pistola pesada de alto poder e construção refinada.",
    regrasEspeciais: "Tags: pistola, arma de fogo.",
    periciaNome: "Pistola",
    modificadorAtaque: 0,
    pod: 12,
    distancia: true,
    alcanceEfetivo: 24,
    alcanceExtremo: 120,
    municaoCapacidade: 1,
    municaoTipo: "municao-pesada",
  },
  {
    nome: "Canhão de Mão Duplo",
    categoria: "arma-distancia",
    custo: 250,
    descricao:
      "Canhão de mão de dois canos, capaz de dispará-los separadamente ou juntos.",
    regrasEspeciais:
      "Tags: pistola, arma de fogo. Efeito: recarregar cada cano é ação rápida. Modos alternativos: Um Cano (ataque 0, pod 12); Dois Canos (ataque -2, pod 12, bônus na jogada de dano +3, consome 2 munições).",
    periciaNome: "Pistola",
    modificadorAtaque: 0,
    pod: 12,
    distancia: true,
    alcanceEfetivo: 24,
    alcanceExtremo: 120,
    municaoCapacidade: 2,
    municaoTipo: "municao-pesada",
  },
  {
    nome: "Canhão-Escudo",
    categoria: "arma-distancia",
    custo: 45,
    descricao:
      "Fuzil pesado de curto alcance integrado ao centro de um escudo.",
    regrasEspeciais:
      "Tags: fuzil, arma de fogo, escudo. Efeitos: também funciona como escudo comum; façanha de atirar durante investida (custo 1 façanha, ignora penalidade de combate corpo a corpo).",
    periciaNome: "Fuzil",
    modificadorAtaque: -2,
    pod: 12,
    distancia: true,
    alcanceEfetivo: 16,
    alcanceExtremo: 80,
    municaoCapacidade: 1,
    municaoTipo: "municao-pesada",
  },
  {
    nome: "Carabina",
    categoria: "arma-distancia",
    custo: 60,
    descricao: "Arma militar compacta alimentada por disco de cinco cartuchos.",
    regrasEspeciais:
      "Tags: fuzil, arma de fogo, repetição. Munição com revestimento metálico. Efeitos: trocar o disco é ação rápida; recarregar cada cilindro é ação rápida.",
    periciaNome: "Fuzil",
    modificadorAtaque: 0,
    pod: 10,
    distancia: true,
    alcanceEfetivo: 20,
    alcanceExtremo: 100,
    municaoCapacidade: 5,
    municaoTipo: "municao-leve",
  },
  {
    nome: "Carabina Radcliffe",
    categoria: "arma-distancia",
    custo: 250,
    descricao: "Carabina pesada de grande alcance e acabamento excepcional.",
    regrasEspeciais:
      "Tags: fuzil, arma de fogo, repetição. Munição com revestimento metálico. Efeitos: trocar o disco é ação rápida; recarregar cada cilindro é ação rápida. Modos alternativos: Uma Mão (ataque -2, pod 11); Duas Mãos (ataque 0, pod 11).",
    periciaNome: "Fuzil",
    modificadorAtaque: -2,
    pod: 11,
    distancia: true,
    alcanceEfetivo: 26,
    alcanceExtremo: 260,
    municaoCapacidade: 5,
    municaoTipo: "municao-pesada",
  },
  {
    nome: "Escopeta",
    categoria: "arma-distancia",
    custo: 40,
    descricao:
      "Arma pesada de curto alcance que dispara múltiplos projéteis.",
    regrasEspeciais:
      "Tags: fuzil, arma de fogo. Sem alcance extremo definido. Modos alternativos: Uma Mão (ataque -2, pod 12); Duas Mãos (ataque 0, pod 12).",
    periciaNome: "Fuzil",
    modificadorAtaque: -2,
    pod: 12,
    distancia: true,
    alcanceEfetivo: 16,
    municaoCapacidade: 1,
    municaoTipo: "municao-escopeta",
  },
  {
    nome: "Espada-Canhão de Repetição",
    categoria: "arma-distancia",
    custo: 100,
    descricao: "Arma híbrida que combina espada e fuzil de repetição.",
    regrasEspeciais:
      "Tags: fuzil, arma de fogo, híbrida, espada. Munição em disco com revestimento metálico. Efeitos: façanha de atirar durante investida (custo 1 façanha, ignora penalidade de combate corpo a corpo); trocar o disco é ação rápida; recarregar cada cilindro é ação rápida. Modos alternativos: À Distância (Fuzil, ataque -1, pod 10); Corpo a Corpo (Arma de Mão, ataque -1, pod 3).",
    periciaNome: "Fuzil",
    modificadorAtaque: -1,
    pod: 10,
    distancia: true,
    alcanceEfetivo: 20,
    alcanceExtremo: 100,
    municaoCapacidade: 5,
    municaoTipo: "municao-leve",
  },
  {
    nome: "Espada-Canhão Pesada",
    categoria: "arma-distancia",
    custo: 150,
    descricao:
      "Arma híbrida que integra um fuzil pesado de tiro único a uma espada.",
    regrasEspeciais:
      "Tags: fuzil, arma de fogo, híbrida, espada. Efeito: façanha de atirar durante investida (custo 1 façanha, ignora penalidade de combate corpo a corpo). Modos alternativos: À Distância (Fuzil, ataque -1, pod 12); Corpo a Corpo (Arma de Mão, ataque -1, pod 3).",
    periciaNome: "Fuzil",
    modificadorAtaque: -1,
    pod: 12,
    distancia: true,
    alcanceEfetivo: 20,
    alcanceExtremo: 100,
    municaoCapacidade: 1,
    municaoTipo: "municao-pesada",
  },
  {
    nome: "Faca de Arremesso",
    categoria: "arma-distancia",
    custo: 8,
    descricao: "Faca pesada e balanceada para arremesso.",
    regrasEspeciais:
      "Tags: arremesso, híbrida. Efeitos: soma FOR ao POD; também pode ser usada corpo a corpo com Arma de Mão.",
    periciaNome: "Arma de Arremesso",
    modificadorAtaque: 0,
    pod: 2,
    distancia: true,
    alcanceEfetivo: 12,
  },
  {
    nome: "Funda",
    categoria: "arma-distancia",
    custo: 5,
    descricao: "Arma ancestral usada para pedras, balas de funda ou granadas.",
    regrasEspeciais:
      "Tags: arremesso. Munição: bala de funda, pedra ou granada (especial, capacidade 1). Modos alternativos: Bala de Funda (ataque 0, pod 8); Pedra ou Granada (ataque -2, pod 8).",
    periciaNome: "Arma de Arremesso",
    modificadorAtaque: -2,
    pod: 8,
    distancia: true,
    alcanceEfetivo: 20,
    municaoCapacidade: 1,
    municaoTipo: "especial",
  },
  {
    nome: "Fuzil Arcano",
    categoria: "arma-distancia",
    custo: 200,
    descricao: "Fuzil longo raro construído para disparar balas rúnicas.",
    regrasEspeciais:
      "Tags: fuzil, arma de fogo, arcano. Usa duas mãos. Efeitos: aceita munição normal; balas rúnicas tornam a arma mágica.",
    periciaNome: "Fuzil",
    modificadorAtaque: 0,
    pod: 10,
    distancia: true,
    alcanceEfetivo: 28,
    alcanceExtremo: 140,
    municaoCapacidade: 1,
    municaoTipo: "bala-runica",
  },
  {
    nome: "Fuzil de Repetição",
    categoria: "arma-distancia",
    custo: 80,
    descricao: "Fuzil militar alimentado por disco de cinco cartuchos.",
    regrasEspeciais:
      "Tags: fuzil, arma de fogo, repetição. Usa duas mãos. Efeitos: trocar o disco é ação rápida; recarregar cada cilindro é ação rápida.",
    periciaNome: "Fuzil",
    modificadorAtaque: 0,
    pod: 10,
    distancia: true,
    alcanceEfetivo: 28,
    alcanceExtremo: 140,
    municaoCapacidade: 5,
    municaoTipo: "municao-leve",
  },
  {
    nome: "Fuzil Longo",
    categoria: "arma-distancia",
    custo: 50,
    descricao: "Fuzil de cano longo valorizado por caçadores e atiradores.",
    regrasEspeciais: "Tags: fuzil, arma de fogo. Usa duas mãos.",
    periciaNome: "Fuzil",
    modificadorAtaque: 0,
    pod: 10,
    distancia: true,
    alcanceEfetivo: 28,
    alcanceExtremo: 140,
    municaoCapacidade: 1,
    municaoTipo: "municao-leve",
  },
  {
    nome: "Fuzil Militar",
    categoria: "arma-distancia",
    custo: 45,
    descricao: "Fuzil militar robusto, de alcance moderado e alto poder.",
    regrasEspeciais: "Tags: fuzil, arma de fogo, militar. Usa duas mãos.",
    periciaNome: "Fuzil",
    modificadorAtaque: 0,
    pod: 11,
    distancia: true,
    alcanceEfetivo: 20,
    alcanceExtremo: 100,
    municaoCapacidade: 1,
    municaoTipo: "municao-pesada",
  },
  {
    nome: "Fuzil Pesado",
    categoria: "arma-distancia",
    custo: 120,
    descricao:
      "Fuzil de grande potência usado por caçadores de monstros e tropas especializadas.",
    regrasEspeciais: "Tags: fuzil, arma de fogo. Usa duas mãos.",
    periciaNome: "Fuzil",
    modificadorAtaque: 0,
    pod: 12,
    distancia: true,
    alcanceEfetivo: 28,
    alcanceExtremo: 140,
    municaoCapacidade: 1,
    municaoTipo: "municao-pesada",
  },
  {
    nome: "Granada de Concussão",
    categoria: "arma-distancia",
    custo: 20,
    descricao:
      "Granada de onda expansiva destinada a derrubar alvos e dissipar névoa.",
    regrasEspeciais:
      "Tags: granada, arremesso. Efeitos: puxar o pino exige ação rápida; não causa dano; derruba alvos na ADE; remove névoa sobreposta.",
    periciaNome: "Arma de Arremesso",
    modificadorAtaque: 0,
    pod: 0,
    distancia: true,
    alcanceEfetivo: 16,
    ade: "3",
  },
  {
    nome: "Granada de Fumaça",
    categoria: "arma-distancia",
    custo: 5,
    descricao: "Granada que cria uma nuvem densa de fumaça.",
    regrasEspeciais:
      "Tags: granada, arremesso, névoa. Efeitos: puxar o pino exige ação rápida; não causa dano; cria névoa por 1 rodada.",
    periciaNome: "Arma de Arremesso",
    modificadorAtaque: 0,
    pod: 0,
    distancia: true,
    alcanceEfetivo: 16,
    ade: "3",
  },
  {
    nome: "Granada de Gás Sufocante",
    categoria: "arma-distancia",
    custo: 20,
    descricao: "Granada que libera uma nuvem de gás sufocante.",
    regrasEspeciais:
      "Tags: granada, arremesso, gás, névoa. Efeitos: puxar o pino exige ação rápida; não causa dano; névoa de gás por 1 rodada, penalidade de -2 em DEF e -2 em ataque para criaturas vivas na área.",
    periciaNome: "Arma de Arremesso",
    modificadorAtaque: 0,
    pod: 0,
    distancia: true,
    alcanceEfetivo: 16,
    ade: "3",
  },
  {
    nome: "Granada Explosiva",
    categoria: "arma-distancia",
    custo: 10,
    descricao: "Granada metálica de fragmentação e explosão.",
    regrasEspeciais:
      "Tags: granada, arremesso, explosão. Efeito: puxar o pino exige ação rápida.",
    periciaNome: "Arma de Arremesso",
    modificadorAtaque: 0,
    pod: 12,
    distancia: true,
    alcanceEfetivo: 16,
    ade: "3",
  },
  {
    nome: "Machado de Arremesso",
    categoria: "arma-distancia",
    custo: 12,
    descricao: "Machado balanceado para ser lançado.",
    regrasEspeciais:
      "Tags: arremesso, machado, híbrida. Efeitos: soma FOR ao POD; também pode ser usado corpo a corpo com Arma de Mão.",
    periciaNome: "Arma de Arremesso",
    modificadorAtaque: 0,
    pod: 3,
    distancia: true,
    alcanceEfetivo: 12,
  },
  {
    nome: "Machado Fuzil",
    categoria: "arma-distancia",
    custo: 80,
    descricao: "Arma híbrida que combina fuzil pesado e lâmina de machado.",
    regrasEspeciais:
      "Tags: fuzil, arma de fogo, híbrida, machado. Efeito: façanha de atirar durante investida (custo 1 façanha, ignora penalidade de combate corpo a corpo). Modos alternativos: À Distância (Fuzil, ataque -1, pod 12); Corpo a Corpo (Arma de Mão, ataque -1, pod 3).",
    periciaNome: "Fuzil",
    modificadorAtaque: -1,
    pod: 12,
    distancia: true,
    alcanceEfetivo: 16,
    alcanceExtremo: 80,
    municaoCapacidade: 1,
    municaoTipo: "municao-pesada",
  },
  {
    nome: "Pistola",
    categoria: "arma-distancia",
    custo: 20,
    descricao: "Pistola comum usada por militares, aventureiros e civis.",
    regrasEspeciais: "Tags: pistola, arma de fogo.",
    periciaNome: "Pistola",
    modificadorAtaque: 0,
    pod: 10,
    distancia: true,
    alcanceEfetivo: 16,
    alcanceExtremo: 80,
    municaoCapacidade: 1,
    municaoTipo: "municao-leve",
  },
  {
    nome: "Pistola Arcana",
    categoria: "arma-distancia",
    custo: 150,
    descricao:
      "Pistola rara construída para suportar balas rúnicas e tiros arcanos.",
    regrasEspeciais:
      "Tags: pistola, arma de fogo, arcano. Efeitos: aceita munição normal; balas rúnicas tornam a arma mágica.",
    periciaNome: "Pistola",
    modificadorAtaque: 0,
    pod: 10,
    distancia: true,
    alcanceEfetivo: 20,
    alcanceExtremo: 100,
    municaoCapacidade: 1,
    municaoTipo: "bala-runica",
  },
  {
    nome: "Pistola-Bazuca",
    categoria: "arma-distancia",
    custo: 40,
    descricao:
      "Pistola especializada de carga pesada para atingir alvos blindados.",
    regrasEspeciais:
      "Tags: pistola, arma de fogo. Sem alcance extremo. Modos alternativos: Uma Mão (ataque -2, pod 14); Duas Mãos (ataque -1, pod 14).",
    periciaNome: "Pistola",
    modificadorAtaque: -2,
    pod: 14,
    distancia: true,
    alcanceEfetivo: 8,
    municaoCapacidade: 1,
    municaoTipo: "municao-carga",
  },
  {
    nome: "Pistola de Negociação",
    categoria: "arma-distancia",
    custo: 15,
    descricao: "Pistola pequena, ocultável e precisa em curtíssimo alcance.",
    regrasEspeciais: "Tags: pistola, arma de fogo, ocultável. Sem alcance extremo.",
    periciaNome: "Pistola",
    modificadorAtaque: 1,
    pod: 8,
    distancia: true,
    alcanceEfetivo: 8,
    municaoCapacidade: 1,
    municaoTipo: "municao-leve",
  },
  {
    nome: "Pistola de Repetição",
    categoria: "arma-distancia",
    custo: 35,
    descricao: "Pistola de cinco tiros alimentada por disco de munição.",
    regrasEspeciais:
      "Tags: pistola, arma de fogo, repetição. Efeitos: trocar o disco é ação rápida; recarregar cada cilindro é ação rápida.",
    periciaNome: "Pistola",
    modificadorAtaque: 0,
    pod: 10,
    distancia: true,
    alcanceEfetivo: 16,
    alcanceExtremo: 80,
    municaoCapacidade: 5,
    municaoTipo: "municao-leve",
  },
  {
    nome: "Pistola Quadrangular",
    categoria: "arma-distancia",
    custo: 200,
    descricao: "Pistola pesada de quatro canos capaz de disparos sucessivos.",
    regrasEspeciais:
      "Tags: pistola, arma de fogo. Efeitos: ataque adicional após acerto (1 ataque extra no mesmo alvo ou em outro a até 4 m, além das ações normais); recarregar cada cano é ação rápida.",
    periciaNome: "Pistola",
    modificadorAtaque: -1,
    pod: 10,
    distancia: true,
    alcanceEfetivo: 20,
    alcanceExtremo: 100,
    municaoCapacidade: 4,
    municaoTipo: "municao-leve",
  },
];

/* =========================================================
   ARMADURAS
========================================================= */

export const armaduras: ArmaduraSeed[] = [
  {
    nome: "Armadura de Batalha Personalizada",
    categoria: "armadura",
    custo: 60,
    descricao:
      "Armadura de placas leves combinadas com malha e couro, normalmente construída de acordo com as medidas e preferências do proprietário.",
    regrasEspeciais:
      "Classe leve. Personalizada. Tags: placas, malha, couro, personalizada. Se usada por outra pessoa que não o dono original, aplica penalidade total de -2 na DEF.",
    modVelocidade: 0,
    modDefesa: -1,
    modArmadura: 6,
  },
  {
    nome: "Armadura de Couro",
    categoria: "armadura",
    custo: 30,
    descricao:
      "Armadura produzida com couro endurecido, frequentemente reforçado com rebites, pequenas placas metálicas ou malha.",
    regrasEspeciais: "Classe leve. Tags: couro.",
    modVelocidade: 0,
    modDefesa: -1,
    modArmadura: 5,
  },
  {
    nome: "Couro de Alquimista",
    categoria: "armadura",
    custo: 50,
    descricao:
      "Armadura de couro folgada, acompanhada por proteção pesada e máscara de gás, tratada para proteger alquimistas contra explosões e agentes perigosos.",
    regrasEspeciais:
      "Classe leve. Tags: couro, alquimia, máscara de gás. Efeitos: +3 ARM contra explosão, frio, corrosão e fogo; imunidade a gás; máscara de gás integrada aplica -1 em testes de visão e -1 em testes de audição.",
    modVelocidade: 0,
    modDefesa: -1,
    modArmadura: 5,
  },
  {
    nome: "Sobretudo Blindado",
    categoria: "armadura",
    custo: 25,
    descricao:
      "Sobretudo reforçado com camadas de couro, malha e placas, popular entre aventureiros por combinar proteção com resistência ao clima.",
    regrasEspeciais: "Classe leve. Tags: couro, malha, placas, sobretudo.",
    modVelocidade: 0,
    modDefesa: -1,
    modArmadura: 5,
  },
  {
    nome: "Armadura de Infantaria",
    categoria: "armadura",
    custo: 85,
    descricao:
      "Armadura militar formada por proteção de torso, ombreiras e peças blindadas sobre couro, podendo incluir malha. Existem muitas variações entre exércitos.",
    regrasEspeciais: "Classe média. Tags: militar, infantaria, placas, couro, malha.",
    modVelocidade: 0,
    modDefesa: -2,
    modArmadura: 7,
  },
  {
    nome: "Armadura Sob Medida",
    categoria: "armadura",
    custo: 130,
    descricao:
      "Armadura de placas relativamente leve, produzida especificamente para o usuário e combinada com malha e couro. Também costuma funcionar como símbolo de status.",
    regrasEspeciais:
      "Classe média. Personalizada. Tags: placas, malha, couro, sob-medida. Se usada por outra pessoa que não o dono original, aplica penalidade total de -2 na DEF.",
    modVelocidade: 0,
    modDefesa: -1,
    modArmadura: 7,
  },
  {
    nome: "Cota de Malha",
    categoria: "armadura",
    custo: 75,
    descricao:
      "Armadura que cobre a maior parte do corpo com malha metálica, podendo receber reforços adicionais de couro ou placas.",
    regrasEspeciais: "Classe média. Tags: malha.",
    modVelocidade: 0,
    modDefesa: -2,
    modArmadura: 7,
  },
  {
    nome: "Armadura Completa",
    categoria: "armadura",
    custo: 100,
    descricao:
      "Conjunto completo de placas sobrepostas, normalmente usado sobre malha, couro e acolchoamento para oferecer proteção máxima.",
    regrasEspeciais: "Classe pesada. Tags: placas, pesada, completa.",
    modVelocidade: -1,
    modDefesa: -3,
    modArmadura: 8,
  },
  {
    nome: "Armadura de Lâmina Tempestuosa",
    categoria: "armadura",
    custo: 225,
    descricao:
      "Armadura de placas extremamente pesada usada pelos Lâminas Tempestuosas de Cygnar, montada sobre isolamento especial contra eletricidade.",
    regrasEspeciais:
      "Classe pesada. Tags: placas, pesada, cygnar, lâmina-tempestuosa, eletricidade. Efeito: concede imunidade a eletricidade enquanto vestida.",
    modVelocidade: -2,
    modDefesa: -3,
    modArmadura: 9,
  },
];

/* =========================================================
   ITENS GERAIS (alquimia, mekânica, munições/acessórios,
   vestuário, equipamento geral, montarias, alimentação,
   acomodação)
========================================================= */

export const itensGerais: ItemBaseSeed[] = [
  // ---------- Ingredientes alquímicos ----------
  {
    nome: "Ácido Mineral",
    categoria: "ingrediente-alquimico",
    custo: 2,
    descricao:
      "Líquido corrosivo obtido na natureza ou como subproduto da fundição de metais.",
    regrasEspeciais: "Preço por unidade. Tags: alquimia, ingrediente.",
  },
  {
    nome: "Ácido Orgânico",
    categoria: "ingrediente-alquimico",
    custo: 3,
    descricao:
      "Ingrediente corrosivo obtido de bile, secreções naturais ou determinados extratos vegetais.",
    regrasEspeciais: "Preço por unidade. Tags: alquimia, ingrediente.",
  },
  {
    nome: "Cristais Minerais",
    categoria: "ingrediente-alquimico",
    custo: 3,
    descricao:
      "Sais e cristais utilizados como agentes de ligação e retenção de energia em fórmulas alquímicas.",
    regrasEspeciais: "Preço por unidade. Tags: alquimia, ingrediente.",
  },
  {
    nome: "Ectoplasma",
    categoria: "ingrediente-alquimico",
    custo: 10,
    descricao:
      "Substância residual associada a criaturas mortas-vivas incorpóreas.",
    regrasEspeciais: "Preço por unidade. Tags: alquimia, ingrediente.",
  },
  {
    nome: "Extrato Arcano",
    categoria: "ingrediente-alquimico",
    custo: 5,
    descricao:
      "Líquido levemente luminescente impregnado com energia arcana residual.",
    regrasEspeciais: "Preço por unidade. Tags: alquimia, ingrediente.",
  },
  {
    nome: "Extrato Bioluminescente",
    categoria: "ingrediente-alquimico",
    custo: 2,
    descricao:
      "Material luminoso obtido de fungos, insetos ou criaturas aquáticas.",
    regrasEspeciais: "Preço por unidade. Tags: alquimia, ingrediente.",
  },
  {
    nome: "Extrato Mutagênico",
    categoria: "ingrediente-alquimico",
    custo: 8,
    descricao:
      "Extrato raro obtido de criaturas capazes de grandes transformações físicas.",
    regrasEspeciais: "Preço por unidade. Tags: alquimia, ingrediente.",
  },
  {
    nome: "Fúria de Menoth",
    categoria: "ingrediente-alquimico",
    custo: 3,
    descricao:
      "Agente alquímico altamente inflamável produzido a partir de óleo refinado.",
    regrasEspeciais: "Preço por unidade. Tags: alquimia, ingrediente.",
  },
  {
    nome: "Glândula Adrenal de Mawg-Escavador",
    categoria: "ingrediente-alquimico",
    custo: 5,
    descricao:
      "Glândula preservada alquimicamente e usada como reagente potente.",
    regrasEspeciais: "Preço por glândula. Tags: alquimia, ingrediente.",
  },
  {
    nome: "Metais Pesados",
    categoria: "ingrediente-alquimico",
    custo: 2,
    descricao: "Mistura de metais tóxicos usada em processos alquímicos.",
    regrasEspeciais: "Preço por unidade. Tags: alquimia, ingrediente.",
  },
  {
    nome: "Minerais Arcanos",
    categoria: "ingrediente-alquimico",
    custo: 7,
    descricao:
      "Minerais encontrados em locais fortemente associados a energias arcanas.",
    regrasEspeciais: "Preço por unidade. Tags: alquimia, ingrediente.",
  },
  {
    nome: "Óleo Orgânico",
    categoria: "ingrediente-alquimico",
    custo: 1,
    descricao: "Óleo de origem animal ou vegetal usado como base em diversas fórmulas.",
    regrasEspeciais: "Preço por unidade. Tags: alquimia, ingrediente.",
  },
  {
    nome: "Pedra Alquímica",
    categoria: "ingrediente-alquimico",
    custo: 1,
    descricao:
      "Pedra branca facilmente moída, usada como base de ligação para outros ingredientes.",
    regrasEspeciais: "Preço por unidade. Tags: alquimia, ingrediente.",
  },
  {
    nome: "Resíduo Alquímico — Cristal",
    categoria: "ingrediente-alquimico",
    custo: 1,
    descricao:
      "Subproduto cristalino gerado por processos de preparação alquímica.",
    regrasEspeciais: "Preço por unidade. Tags: alquimia, ingrediente.",
  },
  {
    nome: "Resíduo Alquímico — Líquido",
    categoria: "ingrediente-alquimico",
    custo: 1,
    descricao:
      "Subproduto líquido obtido durante a preparação de compostos alquímicos.",
    regrasEspeciais: "Preço por unidade. Tags: alquimia, ingrediente.",
  },
  {
    nome: "Toxina Orgânica",
    categoria: "ingrediente-alquimico",
    custo: 5,
    descricao: "Veneno extraído de criaturas e usado na criação de toxinas e antídotos.",
    regrasEspeciais: "Preço por unidade. Tags: alquimia, ingrediente.",
  },

  // ---------- Compostos alquímicos ----------
  {
    nome: "Ácido Alquímico",
    categoria: "composto-alquimico",
    custo: 30,
    descricao:
      "Composto corrosivo concentrado que pode ser usado diretamente ou como carga para armas alquímicas.",
    regrasEspeciais:
      "Preço por vidro. Tags: alquimia, composto, corrosão. Ingredientes: 2 Pedra Alquímica, 1 Ácido Mineral, 2 Ácido Orgânico. Custo de materiais: 10 CO. Tempo de preparo: 2 horas. NA 14 (perícia Alquimia). Falha: gera 1 unidade de resíduo alquímico líquido. Efeito: pode ser arremessado de forma improvisada, causa dano de corrosão.",
  },
  {
    nome: "Agente Corrosivo",
    categoria: "composto-alquimico",
    custo: 18,
    descricao:
      "Composto de duas partes que, depois de misturado, enfraquece temporariamente armaduras e estruturas metálicas.",
    regrasEspeciais:
      "Preço por dose de duas partes. Tags: alquimia, composto, corrosão, metal. Ingredientes: 1 Pedra Alquímica, 1 Resíduo Alquímico Cristal, 1 Metais Pesados, 1 Ácido Mineral. Custo de materiais: 6 CO. Tempo: 2 horas. NA 14 (Alquimia). Falha: ingredientes desperdiçados. Efeito: alcance 12 m, penalidade de -2 em ARM por 1 rodada contra armadura metálica e gigantes-a-vapor, ignorado por Imunidade: Corrosão; misturar exige ação rápida.",
  },
  {
    nome: "Antitoxina",
    categoria: "composto-alquimico",
    custo: 42,
    descricao: "Elixir usado para neutralizar venenos naturais e alquímicos.",
    regrasEspeciais:
      "Preço por dose. Tags: alquimia, composto, veneno, cura. Perícias: Alquimia e Medicina. Ingredientes: 1 Pedra Alquímica, 1 Ácido Orgânico, 2 Toxina Orgânica. Custo de materiais: 14 CO. Tempo: 1 hora. NA 14. Falha: gera 1 unidade de resíduo alquímico líquido. Efeito: atraso de 1d6+6 minutos, teste FIS+5, sucesso neutraliza veneno; falha concede +3 em FIS contra veneno.",
  },
  {
    nome: "Cinzas de Urcaen",
    categoria: "composto-alquimico",
    custo: 54,
    descricao:
      "Pó alquímico ligado a energias espirituais que força criaturas incorpóreas a assumir forma física.",
    regrasEspeciais:
      "Preço por aplicação. Tags: alquimia, composto, espiritual, incorpóreo. Ingredientes: 1 Pedra Alquímica, 1 Minerais Arcanos, 1 Ectoplasma. Custo de materiais: 18 CO. Tempo: 2 horas. NA 16. Falha: gera 1 unidade de resíduo alquímico cristal. Efeito: uso em ação rápida, ADE 3, remove incorporeidade por 1d3 rodadas.",
  },
  {
    nome: "Elixir da Sonolência",
    categoria: "composto-alquimico",
    custo: 36,
    descricao:
      "Elixir sedativo capaz de reduzir os sentidos ou deixar o alvo inconsciente.",
    regrasEspeciais:
      "Preço por dose. Tags: alquimia, composto, sono. Ingredientes: 1 Minerais Arcanos, 1 Ácido Orgânico, 2 Óleo Orgânico. Custo de materiais: 12 CO. Tempo: 2 horas. NA 14. Falha: gera 1 unidade de resíduo alquímico líquido. Efeito: teste FIS, NA 16; sucesso aplica -1 INT e -1 PER por 1 hora; falha deixa o alvo inconsciente.",
  },
  {
    nome: "Elixir Fortemórfico",
    categoria: "composto-alquimico",
    custo: 42,
    descricao:
      "Soro injetável que aumenta temporariamente a força, seguido por um período de exaustão motora e perceptiva.",
    regrasEspeciais:
      "Preço por dose. Tags: alquimia, composto, força. Ingredientes: 1 Pedra Alquímica, 1 Glândula Adrenal de Mawg-Escavador, 1 Extrato Mutagênico. Custo de materiais: 14 CO. Tempo: 2 horas. NA 15. Falha: gera 1 unidade de Toxina Orgânica. Efeito: exige seringa, atraso de 2 turnos, +2 FOR por rodadas iguais a FIS; depois, -2 AGI, -2 DES, -2 PER pelo mesmo período.",
  },
  {
    nome: "Fogo Vitriólico",
    categoria: "composto-alquimico",
    custo: 21,
    descricao:
      "Óleo alquímico inflamável que produz uma chama extremamente quente quando exposto ao ar.",
    regrasEspeciais:
      "Preço por vidro. Tags: alquimia, composto, fogo. Ingredientes: 2 Pedra Alquímica, 1 Metais Pesados, 1 Fúria de Menoth. Custo de materiais: 7 CO. Tempo: 2 horas. NA 14. Falha: gera 1 unidade de resíduo alquímico líquido. Efeito: pode ser arremessado de forma improvisada, causa dano de fogo.",
  },
  {
    nome: "Luz Engarrafada",
    categoria: "composto-alquimico",
    custo: 27,
    descricao:
      "Mistura de duas partes que emite luz quando agitada e pode ser reativada enquanto permanecer eficaz.",
    regrasEspeciais:
      "Preço por frasco. Tags: alquimia, composto, luz. Ingredientes: 1 Extrato Arcano, 2 Extrato Bioluminescente. Custo de materiais: 9 CO. Tempo: 1 hora. NA 14. Falha: gera 1 unidade de resíduo alquímico líquido. Efeito: ativação em ação rápida, dura 1d6+3 rodadas, validade de 2 semanas; lanterna líquida adicional custa +5 CO.",
  },
  {
    nome: "Sais Espirituais",
    categoria: "composto-alquimico",
    custo: 54,
    descricao:
      "Sais tratados alquimicamente que formam uma barreira temporária contra mortos-vivos e infernais.",
    regrasEspeciais:
      "Preço por frasco. Tags: alquimia, composto, espiritual, morto-vivo, infernal. Ingredientes: 2 Pedra Alquímica, 1 Ectoplasma, 2 Cristais Minerais. Custo de materiais: 18 CO. Tempo: 2 horas. NA 14. Falha: gera 1 unidade de resíduo alquímico cristal. Efeito: ativação em ação rápida, cria um muro que bloqueia mortos-vivos e infernais por 1d3+1 rodadas (duração conhecida apenas pelo mestre).",
  },
  {
    nome: "Tônico Alquímico",
    categoria: "composto-alquimico",
    custo: 33,
    descricao:
      "Remédio alquímico de ação rápida usado para estabilizar personagens gravemente feridos.",
    regrasEspeciais:
      "Preço por vidro. Tags: alquimia, composto, cura, estabilização. Ingredientes: 2 Pedra Alquímica, 1 Extrato Mutagênico, 1 Óleo Orgânico. Custo de materiais: 11 CO. Tempo: 2 horas. NA 14. Falha: gera 1 unidade de resíduo alquímico líquido. Efeito: estabiliza um personagem gravemente ferido.",
  },
  {
    nome: "Unguento Curativo",
    categoria: "composto-alquimico",
    custo: 27,
    descricao:
      "Pomada aplicada a ferimentos para acelerar a recuperação de vitalidade.",
    regrasEspeciais:
      "Preço por dose. Tags: alquimia, composto, cura. Ingredientes: 1 Pedra Alquímica, 1 Minerais Arcanos, 1 Óleo Orgânico. Custo de materiais: 9 CO. Tempo: 2 horas. NA 14. Falha: gera 1 unidade de resíduo alquímico líquido. Efeito: cura adicional por hora (+1), dura 1d3 + nível de Medicina do aplicador; exige benção de sacerdote veterano ou maior.",
  },

  // ---------- Alquimia de campo ----------
  {
    nome: "Ácido Simples",
    categoria: "composto-alquimico",
    custo: 0,
    descricao:
      "Ácido instável produzido rapidamente para uso imediato em campo.",
    regrasEspeciais:
      "Sem preço de venda (preparado em campo). Tags: alquimia, composto, campo, corrosão. Ingredientes: 1 Resíduo Alquímico Cristal, 1 Ácido Mineral. Custo de materiais: 3 CO. Tempo: 1 ação rápida. NA 11. Falha: ingredientes perdidos e o alquimista sofre 1d3 de dano de corrosão. Efeito: alcance 12 m, 1d3 de dano em criaturas, 1d3 de dano por rodada em objetos com redução de 1d3 em ARM, área de 2 m, dura 1d3 rodadas; não exige laboratório.",
  },
  {
    nome: "Estimulante Simples",
    categoria: "composto-alquimico",
    custo: 0,
    descricao:
      "Preparado rápido que permite a um aliado ignorar temporariamente penalidades de ferimentos.",
    regrasEspeciais:
      "Sem preço de venda (preparado em campo). Tags: alquimia, composto, campo, estimulante. Ingredientes: 1 Resíduo Alquímico Cristal, 1 Resíduo Alquímico Líquido. Custo de materiais: 2 CO. Tempo: 1 ação rápida. NA 11. Falha: ingredientes perdidos. Efeito: aplicado em aliado em contato, ignora penalidades de aspectos perdidos por 1 rodada; não exige laboratório.",
  },
  {
    nome: "Fumaça Simples",
    categoria: "composto-alquimico",
    custo: 0,
    descricao: "Mistura rápida que cria uma nuvem de fumaça temporária.",
    regrasEspeciais:
      "Sem preço de venda (preparado em campo). Tags: alquimia, composto, campo, fumaça, névoa. Ingredientes: 1 Ácido Mineral, 1 Cristais Minerais. Custo de materiais: 5 CO. Tempo: 1 ação rápida. NA 10. Falha: ingredientes perdidos. Efeito: ADE 3, cria névoa por 1 rodada centrada no criador; não exige laboratório.",
  },
  {
    nome: "Gás Fétido Simples",
    categoria: "composto-alquimico",
    custo: 0,
    descricao: "Mistura rápida que produz uma nuvem invisível de gás nocivo.",
    regrasEspeciais:
      "Sem preço de venda (preparado em campo). Tags: alquimia, composto, campo, gás. Ingredientes: 1 Resíduo Alquímico Líquido, 1 Ácido Orgânico. Custo de materiais: 4 CO. Tempo: 1 ação rápida. NA 12. Falha: ingredientes perdidos. Efeito: ADE 3, penalidade de -2 em ataques de personagens vivos na área por 1 rodada; não exige laboratório.",
  },

  // ---------- Armas alquímicas ----------
  {
    nome: "Granada Alquímica Vazia",
    categoria: "arma-alquimica",
    custo: 5,
    descricao:
      "Recipiente mecânico vazio preparado para receber uma aplicação de composto alquímico.",
    regrasEspeciais:
      "Tags: alquimia, arma-alquimica, granada. Tempo para preencher: 10 minutos; não exige teste para preencher.",
  },
  {
    nome: "Granada Alquímica — Bomba Ácida",
    categoria: "arma-alquimica",
    custo: 40,
    descricao: "Granada preenchida com ácido alquímico.",
    regrasEspeciais:
      "Tags: alquimia, arma-alquimica, granada. Usa perícia Arma de Arremesso, ataque 0, alcance efetivo 16 m, ADE 3, POD 12, dano de corrosão com efeito contínuo de corrosão. Puxar o pino exige ação rápida.",
  },
  {
    nome: "Granada Alquímica — Bomba Corrosiva",
    categoria: "arma-alquimica",
    custo: 30,
    descricao: "Granada que vaporiza agente corrosivo para enfraquecer metal.",
    regrasEspeciais:
      "Tags: alquimia, arma-alquimica, granada. Usa perícia Arma de Arremesso, ataque 0, alcance efetivo 16 m, ADE 3, sem dano direto; penalidade de -2 em ARM por 1 rodada contra armadura metálica e gigantes-a-vapor, ignorado por Imunidade: Corrosão. Puxar o pino exige ação rápida.",
  },
  {
    nome: "Granada Alquímica — Bomba Flamejante",
    categoria: "arma-alquimica",
    custo: 30,
    descricao:
      "Granada preenchida com fogo vitriólico que deixa uma área em chamas.",
    regrasEspeciais:
      "Tags: alquimia, arma-alquimica, granada. Usa perícia Arma de Arremesso, ataque 0, alcance efetivo 16 m, ADE 3, POD 12, dano de fogo; a área permanece em chamas por 1 rodada, causando fogo contínuo a quem terminar o turno nela. Puxar o pino exige ação rápida.",
  },
  {
    nome: "Granada Alquímica — Bomba Nocaute",
    categoria: "arma-alquimica",
    custo: 45,
    descricao:
      "Granada de gás sonífero capaz de deixar personagens inconscientes.",
    regrasEspeciais:
      "Tags: alquimia, arma-alquimica, granada. Usa perícia Arma de Arremesso, ataque 0, alcance efetivo 16 m, ADE 3, efeito de gás; teste Força de Vontade NA 16, falha deixa inconsciente; acorda ao sofrer dano; acordar um aliado exige ação rápida e bem-sucedida. Puxar o pino exige ação rápida.",
  },
  {
    nome: "Granada Alquímica — Cinzas de Urcaen",
    categoria: "arma-alquimica",
    custo: 75,
    descricao:
      "Granada com Cinzas de Urcaen usada para afetar criaturas incorpóreas.",
    regrasEspeciais:
      "Tags: alquimia, arma-alquimica, granada. Disponibilidade: por encomenda. Usa perícia Arma de Arremesso, ataque 0, alcance efetivo 16 m, ADE 3, sem dano direto; remove incorporeidade de quem for atingido por 1d3+1 rodadas, ou de quem entrar na área por 1 rodada. Puxar o pino exige ação rápida.",
  },
  {
    nome: "Flecha Explosiva Vazia",
    categoria: "arma-alquimica",
    custo: 10,
    descricao: "Flecha pesada preparada para receber um composto alquímico.",
    regrasEspeciais:
      "Tags: alquimia, arma-alquimica, granada. Usa o alcance do arco que a dispara, ADE 3, ataque -1; deve ser disparada logo após a ativação. Versão preenchida: preço da granada equivalente + 10 CO.",
  },
  {
    nome: "Granada para Fuzil Vazia",
    categoria: "arma-alquimica",
    custo: 10,
    descricao:
      "Recipiente vazio de granada projetado para ser disparado por um fuzil militar.",
    regrasEspeciais:
      "Tags: alquimia, arma-alquimica, granada. Compatível com Fuzil Militar, alcance 20 m sem alcance extremo, ataque -1; carregar exige ação rápida; não exige ativação separada. Versão preenchida: preço da granada equivalente + 10 CO.",
  },

  // ---------- Cárteres, placas e capacitores mekânicos ----------
  {
    nome: "Cárter Mekânico",
    categoria: "componente-mekanico",
    custo: 0,
    descricao:
      "Estrutura que abriga capacitor, placa rúnica, gatilhos e conduítes. O preço depende do item mundano usado como base.",
    regrasEspeciais:
      "Preço variável: depende do item mundano usado como cárter (multiplicador de compra x10, de materiais x3, de item adaptado x5; item adaptado sofre -1 no ataque; mantém as estatísticas do item base). Tags: mekanica, carter. Fabricação: exige Engenharia Mekânica, tempo do item mundano + 1 semana, NA 15, em oficina mekânica; falha permite repetir após mais 1 semana.",
  },
  {
    nome: "Placa Rúnica em Branco",
    categoria: "componente-mekanico",
    custo: 10,
    descricao:
      "Placa rúnica ainda sem fórmulas inscritas, pronta para receber runas mekânicas.",
    regrasEspeciais:
      "Tags: mekanica, placa-runica. Limite de 5 pontos rúnicos; as runas inscritas devem ser do mesmo tipo.",
  },
  {
    nome: "Acumulador Arcanodinâmico",
    categoria: "componente-mekanico",
    custo: 50,
    descricao: "Fonte de energia arcana duradoura para dispositivos portáteis.",
    regrasEspeciais:
      "Tags: mekanica, capacitor. Potência 4, vida útil de 1 mês, não recarregável. Fabricação: exige Ofício (vidraria) e Engenharia Mekânica, custo de materiais 15 CO, tempo 1 dia, NA 13, em oficina mekânica ou de vidraceiro; falha permite repetir após 4 horas.",
  },
  {
    nome: "Câmara Tempestuosa",
    categoria: "componente-mekanico",
    custo: 250,
    descricao:
      "Acumulador avançado cygnarano alimentado por energia elétrica contida.",
    regrasEspeciais:
      "Tags: mekanica, capacitor, eletricidade, cygnar. Potência 5, vida útil de 1 ano, não recarregável; manuseá-la ativada causa dano de eletricidade POD 12. Fabricação: exige Engenharia Mekânica, custo de materiais 80 CO, tempo 1 semana, NA 16, em oficina mekânica; falha permite repetir após 1 dia.",
  },
  {
    nome: "Capacitor Alquímico",
    categoria: "componente-mekanico",
    custo: 10,
    descricao: "Fonte de energia barata baseada em reação alquímica.",
    regrasEspeciais:
      "Tags: mekanica, capacitor, alquimia. Potência 3, vida útil de 1 semana, não recarregável, perde eficiência com o tempo mesmo sem uso. Fabricação: exige Alquimia e Engenharia Mekânica, custo de materiais 3 CO, tempo 4 horas, NA 13, em laboratório alquímico ou oficina mekânica; falha permite repetir após 1 hora.",
  },
  {
    nome: "Capacitor Mecânico",
    categoria: "componente-mekanico",
    custo: 80,
    descricao: "Capacitor recarregável por mecanismo de corda.",
    regrasEspeciais:
      "Tags: mekanica, capacitor. Potência 3, vida útil de 1 dia, recarregável (15 minutos para recarga completa). Fabricação: exige Engenharia Mekânica, custo de materiais 20 CO, tempo 3 dias, NA 15, em oficina mekânica; falha permite repetir após 4 horas.",
  },
  {
    nome: "Turbina Arcana",
    categoria: "componente-mekanico",
    custo: 500,
    descricao:
      "Gerador avançado que converte energia a vapor em energia arcana.",
    regrasEspeciais:
      "Tags: mekanica, capacitor, vapor. Potência 8, vida útil de 6 horas por carga em configuração normal; pode ligar itens externos (custo de conexão 10 CO por item, troca de item conectado em 10 minutos com teste INT+Engenharia Mekânica NA 11); custo de carvão 1 CO/dia, 12 horas de operação por dia. Fabricação: exige Engenharia Mekânica, custo de materiais 160 CO, tempo 1 semana, NA 17, em oficina mekânica; falha permite repetir após 1 dia.",
  },

  // ---------- Runas mekânicas ----------
  {
    nome: "Abençoada",
    categoria: "runa-mekanica",
    custo: 300,
    descricao:
      "Ataques ignoram efeitos mágicos que aumentem DEF ou ARM do alvo.",
    regrasEspeciais:
      "Tags: mekanica, runa. 2 pontos rúnicos. Compatível com qualquer arma.",
  },
  {
    nome: "Ataque Mekânico",
    categoria: "runa-mekanica",
    custo: 300,
    descricao: "Gigantes-a-vapor atingidos ficam imóveis por uma rodada.",
    regrasEspeciais:
      "Tags: mekanica, runa. 2 pontos rúnicos. Compatível com arma corpo a corpo.",
  },
  {
    nome: "Compensador",
    categoria: "runa-mekanica",
    custo: 150,
    descricao: "Reduz em 1 a penalidade de DEF da armadura energizada.",
    regrasEspeciais: "Tags: mekanica, runa. 1 ponto rúnico. Compatível com armadura.",
  },
  {
    nome: "Corrupção",
    categoria: "runa-mekanica",
    custo: 150,
    descricao: "Alvos atingidos sofrem o efeito contínuo de Corrosão.",
    regrasEspeciais:
      "Tags: mekanica, runa. 1 ponto rúnico. Compatível com qualquer arma.",
  },
  {
    nome: "Crematória",
    categoria: "runa-mekanica",
    custo: 150,
    descricao: "Dano contra mortos-vivos é ampliado.",
    regrasEspeciais:
      "Tags: mekanica, runa. 1 ponto rúnico. Compatível com arma corpo a corpo.",
  },
  {
    nome: "Desvinculante",
    categoria: "runa-mekanica",
    custo: 300,
    descricao: "Magias mantidas em personagens atingidos terminam imediatamente.",
    regrasEspeciais:
      "Tags: mekanica, runa. 2 pontos rúnicos. Compatível com arma corpo a corpo.",
  },
  {
    nome: "Édige",
    categoria: "runa-mekanica",
    custo: 150,
    descricao: "Concede imunidade a efeitos contínuos.",
    regrasEspeciais: "Tags: mekanica, runa. 1 ponto rúnico. Compatível com armadura.",
  },
  {
    nome: "Elétrica",
    categoria: "runa-mekanica",
    custo: 450,
    descricao: "Concede +1 POD e pode interromper gigantes-a-vapor atingidos.",
    regrasEspeciais:
      "Tags: mekanica, runa. 3 pontos rúnicos. Compatível com arma corpo a corpo. Interrupção dura 1 rodada.",
  },
  {
    nome: "Enguiçar",
    categoria: "runa-mekanica",
    custo: 450,
    descricao: "Concede +1 POD e aplica Enguiçar em gigantes-a-vapor atingidos.",
    regrasEspeciais:
      "Tags: mekanica, runa. 3 pontos rúnicos. Compatível com arma corpo a corpo. Enguiçado tem DEF base 7 e não pode correr nem investir.",
  },
  {
    nome: "Estável",
    categoria: "runa-mekanica",
    custo: 150,
    descricao: "Enquanto energizada, impede que o usuário seja derrubado.",
    regrasEspeciais: "Tags: mekanica, runa. 1 ponto rúnico. Compatível com armadura.",
  },
  {
    nome: "Explosão",
    categoria: "runa-mekanica",
    custo: 300,
    descricao: "Permite usar a arma normalmente ou conceder ADE 3 ao ataque.",
    regrasEspeciais:
      "Tags: mekanica, runa. 2 pontos rúnicos. Compatível com arma de fogo à distância.",
  },
  {
    nome: "Feridas Atrozes",
    categoria: "runa-mekanica",
    custo: 300,
    descricao:
      "Alvos atingidos perdem Durão e ficam temporariamente impedidos de curar ou transferir dano.",
    regrasEspeciais:
      "Tags: mekanica, runa. 2 pontos rúnicos. Compatível com arma corpo a corpo. Duração: 1 rodada.",
  },
  {
    nome: "Flamejante",
    categoria: "runa-mekanica",
    custo: 300,
    descricao:
      "Concede +1 POD e pode causar Fogo contínuo em acerto crítico.",
    regrasEspeciais:
      "Tags: mekanica, runa. 2 pontos rúnicos. Compatível com arma corpo a corpo.",
  },
  {
    nome: "Força Ampliada",
    categoria: "runa-mekanica",
    custo: 300,
    descricao: "Concede +1 FOR enquanto a armadura tiver energia.",
    regrasEspeciais: "Tags: mekanica, runa. 2 pontos rúnicos. Compatível com armadura.",
  },
  {
    nome: "Força Arcana",
    categoria: "runa-mekanica",
    custo: 450,
    descricao:
      "Concede +2 POD e permite lançar o alvo em um acerto crítico.",
    regrasEspeciais:
      "Tags: mekanica, runa. 3 pontos rúnicos. Compatível com arma corpo a corpo. Crítico: lança o alvo a 1d6, dano ao alvo = FOR do atacante + POD da arma, dano colateral = FOR do atacante.",
  },
  {
    nome: "Frio",
    categoria: "runa-mekanica",
    custo: 300,
    descricao:
      "Concede +1 POD e pode imobilizar alvos sem Imunidade: Frio em acerto crítico.",
    regrasEspeciais:
      "Tags: mekanica, runa. 2 pontos rúnicos. Compatível com arma corpo a corpo. Duração da imobilização: 1 rodada.",
  },
  {
    nome: "Halo de Fogo",
    categoria: "runa-mekanica",
    custo: 300,
    descricao:
      "Concede Imunidade: Fogo e permite ativar um halo flamejante temporário.",
    regrasEspeciais:
      "Tags: mekanica, runa. 2 pontos rúnicos. Compatível com armadura ou escudo. Ativação em ação rápida, dura 1 rodada; atacantes corpo a corpo sofrem fogo contínuo; no escudo, funciona apenas no arco frontal.",
  },
  {
    nome: "Ligeira",
    categoria: "runa-mekanica",
    custo: 450,
    descricao: "Concede +1 VEL e +1 DEF enquanto energizada.",
    regrasEspeciais: "Tags: mekanica, runa. 3 pontos rúnicos. Compatível com armadura.",
  },
  {
    nome: "Luz",
    categoria: "runa-mekanica",
    custo: 150,
    descricao: "Permite ao item emitir uma grande área de luz.",
    regrasEspeciais:
      "Tags: mekanica, runa. 1 ponto rúnico. Compatível com arma ou armadura. Ligar ou desligar é ação rápida.",
  },
  {
    nome: "Placa de Vínculo",
    categoria: "runa-mekanica",
    custo: 300,
    descricao:
      "Permite que um conjurador de guerra vinculado amplie ataques e danos com a arma.",
    regrasEspeciais:
      "Tags: mekanica, runa. 2 pontos rúnicos. Compatível com qualquer arma. Exige conjurador de guerra vinculado.",
  },
  {
    nome: "Precisão",
    categoria: "runa-mekanica",
    custo: 150,
    descricao: "Concede +1 nas jogadas de ataque da arma.",
    regrasEspeciais:
      "Tags: mekanica, runa. 1 ponto rúnico. Compatível com qualquer arma.",
  },
  {
    nome: "Proteção Mágica",
    categoria: "runa-mekanica",
    custo: 450,
    descricao:
      "Impede que o usuário seja alvo de magias enquanto energizada.",
    regrasEspeciais: "Tags: mekanica, runa. 3 pontos rúnicos. Compatível com armadura.",
  },
  {
    nome: "Rapidez",
    categoria: "runa-mekanica",
    custo: 300,
    descricao: "Uma vez por turno, permite avançar 4 m como ação rápida.",
    regrasEspeciais: "Tags: mekanica, runa. 2 pontos rúnicos. Compatível com armadura.",
  },
  {
    nome: "Repulsor",
    categoria: "runa-mekanica",
    custo: 300,
    descricao:
      "Ataques com o escudo empurram alvos, e atacantes frontais também podem ser repelidos.",
    regrasEspeciais:
      "Tags: mekanica, runa. 2 pontos rúnicos. Compatível com escudo. Empurrão de 2 m.",
  },
  {
    nome: "Silenciador",
    categoria: "runa-mekanica",
    custo: 150,
    descricao: "Ataques feitos com a arma não produzem som.",
    regrasEspeciais:
      "Tags: mekanica, runa. 1 ponto rúnico. Compatível com arma de fogo à distância.",
  },

  // ---------- Dispositivos mekânicos ----------
  {
    nome: "Gládio Tempestuoso",
    categoria: "dispositivo-mekanico",
    custo: 1560,
    descricao:
      "Arma mekânica de Lâmina Tempestuosa energizada por uma câmara tempestuosa dedicada.",
    regrasEspeciais:
      "Tags: mekanica, arma, eletricidade, lamina-tempestuosa. 4 pontos rúnicos. Usa perícia Arma Grande: uma mão (ataque -2, pod 5), duas mãos (ataque -1, pod 7); também permite ataque à distância (DES, alcance 8 m, pod 12, dano de eletricidade); a cada ataque, o usuário sofre dano de eletricidade pod 12. Fabricação: custo de materiais 210 CO, 3 semanas para o cárter + 4 semanas para inscrição, NA 16.",
  },
  {
    nome: "Mira Arcântrika",
    categoria: "dispositivo-mekanico",
    custo: 590,
    descricao:
      "Mira mekânica que atravessa interferências arcanas e ajuda a revelar alvos ocultos.",
    regrasEspeciais:
      "Tags: mekanica, mira. 2 pontos rúnicos. Funciona como mira normal; ao desistir do movimento para mirar, ignora furtividade do alvo. Fabricação: custo de materiais 60 CO, 1 semana para o cárter + 2 semanas para inscrição, NA 14.",
  },
  {
    nome: "Óculos da Visão Distante",
    categoria: "dispositivo-mekanico",
    custo: 790,
    descricao:
      "Óculos mekânicos de observação capazes de fornecer visão noturna e ampliação.",
    regrasEspeciais:
      "Tags: mekanica, optica. 3 pontos rúnicos. Visão noturna equivalente à do dia; funciona como luneta; incompatível com elmo. Fabricação: custo de materiais 75 CO, 2 semanas para o cárter + 3 semanas para inscrição, NA 15.",
  },
  {
    nome: "Prótese Mekânica — Braço",
    categoria: "dispositivo-mekanico",
    custo: 1040,
    descricao:
      "Braço protético mekânico com força própria e resposta ligeiramente mais lenta que um membro natural.",
    regrasEspeciais:
      "Tags: mekanica, protese. 3 pontos rúnicos. Penalidade de -1 em AGI/DES para ações com o braço, incluindo ataques (também afeta armas de duas mãos); FOR do braço 7 (dano com o braço usa FOR 7; com duas mãos usa a maior FOR); sem energia fica inutilizável e aplica -1 em DEF. Cirurgia: 2 horas, teste INT+Medicina NA 15, falha causa 1d6 de dano, nova tentativa após 10 minutos. Fabricação: custo de materiais 150 CO, 3 semanas para o cárter + 3 semanas para inscrição, NA 15.",
  },
  {
    nome: "Prótese Mekânica — Mão",
    categoria: "dispositivo-mekanico",
    custo: 590,
    descricao:
      "Mão protética mekânica com destreza reduzida em relação a uma mão natural.",
    regrasEspeciais:
      "Tags: mekanica, protese. 2 pontos rúnicos. Penalidade de -1 em AGI/DES para ações com a mão, incluindo ataques; penalidade em ações de duas mãos só se ambas forem próteses; sem energia fica inutilizável. Cirurgia: 2 horas, teste INT+Medicina NA 15, falha causa 1d6 de dano, nova tentativa após 10 minutos. Fabricação: custo de materiais 60 CO, 3 semanas para o cárter + 2 semanas para inscrição, NA 14.",
  },
  {
    nome: "Prótese Mekânica — Olho",
    categoria: "dispositivo-mekanico",
    custo: 790,
    descricao:
      "Olho mekânico capaz de substituir funcionalmente um olho natural enquanto estiver energizado.",
    regrasEspeciais:
      "Tags: mekanica, protese, optica. 3 pontos rúnicos. Ignora os efeitos de perda do olho enquanto energizado. Cirurgia: 2 horas, teste INT+Medicina NA 15, nova tentativa após 30 minutos. Fabricação: custo de materiais 75 CO, 3 semanas para o cárter + 3 semanas para inscrição, NA 14.",
  },
  {
    nome: "Prótese Mekânica — Perna",
    categoria: "dispositivo-mekanico",
    custo: 890,
    descricao:
      "Perna protética mekânica que reduz a perda de mobilidade de um membro amputado.",
    regrasEspeciais:
      "Tags: mekanica, protese. 2 pontos rúnicos. Penalidade de -1 em VEL enquanto funcionando, -2 em VEL sem energia; sem energia fica inutilizável. Fabricação: custo de materiais 150 CO, 3 semanas para o cárter + 2 semanas para inscrição, NA 14.",
  },
  {
    nome: "Armadura de Conjurador de Guerra Leve",
    categoria: "dispositivo-mekanico",
    custo: 2010,
    descricao:
      "Armadura mekânica leve de conjurador de guerra com turbina arcana e campo de força.",
    regrasEspeciais:
      "Tags: mekanica, armadura, conjurador-guerra. 5 pontos rúnicos. Modificadores base: DEF 0, ARM 5. Turbina potência 8, consumo base de 5 pontos rúnicos, campo de força com 6 caixas, regenera 1 por Foco, +1 ARM por Foco não gasto; exige vínculo para o campo de força; sem energia aplica -2 em DEF. Fabricação: custo de materiais 225 CO, 1 mês para a armadura + 5 semanas para inscrição, NA 17.",
  },
  {
    nome: "Armadura de Conjurador de Guerra Média",
    categoria: "dispositivo-mekanico",
    custo: 2360,
    descricao:
      "Armadura mekânica média de conjurador de guerra baseada em armadura de infantaria.",
    regrasEspeciais:
      "Tags: mekanica, armadura, conjurador-guerra. 5 pontos rúnicos. Modificadores base: DEF -1, ARM 7. Turbina potência 8, consumo base de 5 pontos rúnicos, campo de força com 6 caixas, regenera 1 por Foco, +1 ARM por Foco não gasto; exige vínculo para o campo de força; sem energia aplica -4 em DEF e -1 em VEL. Fabricação: custo de materiais 330 CO, 1 mês para a armadura + 5 semanas para inscrição, NA 17.",
  },
  {
    nome: "Armadura de Conjurador de Guerra Pesada",
    categoria: "dispositivo-mekanico",
    custo: 2760,
    descricao:
      "Armadura mekânica pesada de conjurador de guerra com proteção extrema e grande turbina integrada.",
    regrasEspeciais:
      "Tags: mekanica, armadura, conjurador-guerra. 5 pontos rúnicos. Modificadores base: DEF -2, ARM 8. Turbina potência 8, consumo base de 5 pontos rúnicos, campo de força com 6 caixas, regenera 1 por Foco, +1 ARM por Foco não gasto; exige vínculo para o campo de força; sem energia aplica -6 em DEF e -2 em VEL. Fabricação: custo de materiais 450 CO, 1 mês para a armadura + 5 semanas para inscrição, NA 17.",
  },

  // ---------- Munições ----------
  {
    nome: "Flechas ou Virotes",
    categoria: "municao",
    custo: 1,
    descricao: "Pacote padrão de dez flechas ou virotes para arcos e bestas.",
    regrasEspeciais: "Pacote de 10 disparos, por 10 disparos. Compatível com: Arco, Besta.",
  },
  {
    nome: "Flechas de Arco Grande",
    categoria: "municao",
    custo: 1,
    descricao: "Pacote de cinco flechas pesadas próprias para arco grande.",
    regrasEspeciais: "Pacote de 5 disparos, por 5 disparos. Compatível com: Arco Grande.",
  },
  {
    nome: "Cargas para Atirador de Arpão",
    categoria: "municao",
    custo: 1,
    descricao: "Cinco cargas de pólvora destinadas ao atirador de arpão.",
    regrasEspeciais: "Pacote de 5 cargas, por 5 cargas. Compatível com: Atirador de Arpão.",
  },
  {
    nome: "Arpão Adicional",
    categoria: "municao",
    custo: 1,
    descricao: "Arpão adicional para o atirador de arpão.",
    regrasEspeciais: "Pacote de 1, por arpão. Compatível com: Atirador de Arpão.",
  },
  {
    nome: "Gancho Adicional para Atirador de Arpão",
    categoria: "municao",
    custo: 1,
    descricao: "Gancho adicional para uso com o atirador de arpão.",
    regrasEspeciais:
      "Pacote de 1, por gancho. Compatível com: Atirador de Arpão. Ao usar este gancho: ataque -4, pod 8.",
  },
  {
    nome: "Pente para Besta de Repetição",
    categoria: "municao",
    custo: 10,
    descricao: "Pente adicional para uma besta de repetição.",
    regrasEspeciais: "Pacote de 1, por pente. Compatível com: Besta de Repetição.",
  },
  {
    nome: "Projétil para Canhão de Batalha Ogrun",
    categoria: "municao",
    custo: 3,
    descricao: "Projétil individual para canhão de batalha ogrun.",
    regrasEspeciais: "Pacote de 1, por projétil. Compatível com: Canhão de Batalha Ogrun.",
  },
  {
    nome: "Disco de Munição",
    categoria: "municao",
    custo: 15,
    descricao: "Disco substituível usado por determinadas armas de repetição.",
    regrasEspeciais:
      "Pacote de 1, por disco. Compatível com: Pistola de Repetição, Carabina Radcliffe, Espada-Canhão de Repetição.",
  },
  {
    nome: "Flecha ou Virote de Escalada",
    categoria: "municao",
    custo: 1,
    descricao:
      "Projétil preso a uma corda e equipado com gancho, feito para alcançar pontos de escalada.",
    regrasEspeciais:
      "Pacote de 1, por disparo. Compatível com: Arco, Besta. Efeito: -2 no ataque e -2 no POD ao usar esta munição.",
  },
  {
    nome: "Flecha ou Virote Explosivo",
    categoria: "municao",
    custo: 20,
    descricao: "Projétil explosivo para arco ou besta.",
    regrasEspeciais:
      "Pacote de 1, por disparo. Compatível com: Arco, Besta. Efeito: -2 no ataque, POD final 10, ADE 3.",
  },
  {
    nome: "Pedras para Funda",
    categoria: "municao",
    custo: 1,
    descricao: "Conjunto de vinte pedras adequadas para uso com funda.",
    regrasEspeciais: "Pacote de 20, por 20 pedras. Compatível com: Funda.",
  },
  {
    nome: "Munição Leve — Revestimento de Papel",
    categoria: "municao",
    custo: 2,
    descricao:
      "Cinco cartuchos leves com revestimento de papel. Podem ser produzidos no campo por alguém treinado com Pistola ou Fuzil.",
    regrasEspeciais:
      "Pacote de 5, por 5 tiros. Compatível com: armas de munição leve. Efeito: pode ser fabricada em campo (5 tiros por hora, custo de materiais equivalente a metade do preço, exige perícia Pistola ou Fuzil).",
  },
  {
    nome: "Munição Leve — Revestimento de Metal",
    categoria: "municao",
    custo: 3,
    descricao: "Cinco cartuchos leves com revestimento metálico.",
    regrasEspeciais: "Pacote de 5, por 5 tiros. Compatível com: armas de munição leve.",
  },
  {
    nome: "Munição Pesada — Revestimento de Papel",
    categoria: "municao",
    custo: 3,
    descricao: "Cinco cartuchos pesados com revestimento de papel.",
    regrasEspeciais: "Pacote de 5, por 5 tiros. Compatível com: armas de munição pesada.",
  },
  {
    nome: "Munição Pesada — Revestimento de Metal",
    categoria: "municao",
    custo: 4,
    descricao: "Cinco cartuchos pesados com revestimento metálico.",
    regrasEspeciais: "Pacote de 5, por 5 tiros. Compatível com: armas de munição pesada.",
  },
  {
    nome: "Munição de Carga — Revestimento de Papel",
    categoria: "municao",
    custo: 1,
    descricao: "Cartucho de carga com revestimento de papel.",
    regrasEspeciais: "Pacote de 1, por tiro. Compatível com: armas de munição de carga.",
  },
  {
    nome: "Munição de Carga — Revestimento de Metal",
    categoria: "municao",
    custo: 2,
    descricao: "Cartucho de carga com revestimento metálico.",
    regrasEspeciais: "Pacote de 1, por tiro. Compatível com: armas de munição de carga.",
  },
  {
    nome: "Munição de Escopeta — Revestimento de Papel",
    categoria: "municao",
    custo: 1,
    descricao: "Carga de escopeta com revestimento de papel.",
    regrasEspeciais: "Pacote de 1, por tiro. Compatível com: Escopeta.",
  },
  {
    nome: "Munição de Escopeta — Revestimento de Metal",
    categoria: "municao",
    custo: 2,
    descricao: "Carga de escopeta com revestimento metálico.",
    regrasEspeciais: "Pacote de 1, por tiro. Compatível com: Escopeta.",
  },
  {
    nome: "Bala Rúnica",
    categoria: "municao",
    custo: 5,
    descricao:
      "Munição especial inscrita com runas para pistolas e fuzis arcanos.",
    regrasEspeciais:
      "Pacote de 1, por tiro. Compatível com: Pistola Arcana, Fuzil Arcano. Efeito: a arma é considerada mágica ao usar esta munição.",
  },
  {
    nome: "Rebites para Pistola de Rebitar",
    categoria: "municao",
    custo: 1,
    descricao: "Pacote de dez rebites para pistola de rebitar.",
    regrasEspeciais: "Pacote de 10, por 10 rebites. Compatível com: Pistola de Rebitar.",
  },

  // ---------- Acessórios ----------
  {
    nome: "Aljava",
    categoria: "acessorio",
    custo: 5,
    descricao:
      "Recipiente para flechas ou virotes, carregado nas costas ou na cintura.",
    regrasEspeciais:
      "Compatível com: Arco, Besta. Efeito: sacar e recarregar na mesma ação rápida.",
  },
  {
    nome: "Bandoleira de Granadeiro",
    categoria: "acessorio",
    custo: 5,
    descricao: "Bandoleira de couro capaz de carregar até seis granadas.",
    regrasEspeciais:
      "Compatível com: granadas. Capacidade de 6 granadas; sacar não exige ação rápida.",
  },
  {
    nome: "Bandoleira de Munição",
    categoria: "acessorio",
    custo: 5,
    descricao: "Correia de fácil acesso para cartuchos de armas de fogo.",
    regrasEspeciais:
      "Compatível com: armas de fogo. Efeito: sacar e recarregar na mesma ação rápida.",
  },
  {
    nome: "Bipé",
    categoria: "acessorio",
    custo: 10,
    descricao:
      "Suporte leve para fuzis, usado para estabilizar a arma durante a mira.",
    regrasEspeciais:
      "Compatível com: Fuzil. Efeito: exige desistir do movimento para mirar; concede +2 no primeiro ataque à distância; preparar ou desmontar é ação rápida.",
  },
  {
    nome: "Cinto para Arma",
    categoria: "acessorio",
    custo: 15,
    descricao:
      "Bandoleira para carregar várias pistolas prontas para saque rápido.",
    regrasEspeciais:
      "Compatível com: Pistola. Capacidade de 3 a 4 pistolas; sacar duas pistolas é uma única ação rápida; trocar de pistola não exige ação rápida.",
  },
  {
    nome: "Coldre",
    categoria: "acessorio",
    custo: 5,
    descricao: "Coldre comum para transportar uma pistola.",
    regrasEspeciais: "Compatível com: Pistola.",
  },
  {
    nome: "Coldre de Pulso",
    categoria: "acessorio",
    custo: 15,
    descricao:
      "Suporte ocultável com mola que projeta uma arma pequena diretamente para a mão.",
    regrasEspeciais:
      "Compatível com: Adaga, Pistola de Negociação, Faca de Arremesso. Efeito: sacar não exige ação rápida; ocultável.",
  },
  {
    nome: "Kit de Armeiro",
    categoria: "acessorio",
    custo: 20,
    descricao:
      "Conjunto de ferramentas para desmontar, limpar, manter e produzir munições de armas de fogo.",
    regrasEspeciais:
      "Compatível com: armas de fogo. Permite fabricar munição metálica (5 tiros por hora, custo de materiais equivalente a metade do preço) e converter cartuchos.",
  },
  {
    nome: "Mira para Pistola ou Fuzil",
    categoria: "acessorio",
    custo: 20,
    descricao: "Mira óptica simples para pistolas e fuzis.",
    regrasEspeciais:
      "Compatível com: Pistola, Fuzil. Exige mirar; concede +6 m de alcance efetivo e +30 m de alcance extremo.",
  },

  // ---------- Vestuário ----------
  {
    nome: "Bolsa de Cinto",
    categoria: "vestuario",
    custo: 5,
    descricao:
      "Pequena bolsa de vestuário presa ao cinto para carregar objetos pessoais.",
    regrasEspeciais: "Tags: bolsa.",
  },
  {
    nome: "Botas de Mekânico",
    categoria: "vestuario",
    custo: 20,
    descricao:
      "Botas resistentes de couro, com ajuste firme e biqueiras de aço, populares entre mekânicos e trabalhadores.",
    regrasEspeciais: "Tags: botas, trabalho, mekanico.",
  },
  {
    nome: "Botas de Trabalho",
    categoria: "vestuario",
    custo: 10,
    descricao: "Botas comuns destinadas a uso diário e trabalho pesado.",
    regrasEspeciais: "Tags: botas, trabalho.",
  },
  {
    nome: "Botas Sociais",
    categoria: "vestuario",
    custo: 25,
    descricao: "Botas de melhor acabamento voltadas a ocasiões sociais.",
    regrasEspeciais: "Tags: botas, social.",
  },
  {
    nome: "Calça de Trabalho",
    categoria: "vestuario",
    custo: 10,
    descricao: "Calça resistente para atividades profissionais e trabalho manual.",
    regrasEspeciais: "Tags: calca, trabalho.",
  },
  {
    nome: "Calça Social",
    categoria: "vestuario",
    custo: 15,
    descricao: "Calça de qualidade apropriada para ambientes sociais.",
    regrasEspeciais: "Tags: calca, social.",
  },
  {
    nome: "Camisa de Trabalho",
    categoria: "vestuario",
    custo: 5,
    descricao: "Camisa simples e resistente para uso profissional.",
    regrasEspeciais: "Tags: camisa, trabalho.",
  },
  {
    nome: "Camisa Social",
    categoria: "vestuario",
    custo: 10,
    descricao: "Camisa de melhor acabamento para ocasiões sociais.",
    regrasEspeciais: "Tags: camisa, social.",
  },
  {
    nome: "Capa",
    categoria: "vestuario",
    custo: 5,
    descricao: "Capa comum de vestuário.",
    regrasEspeciais: "Tags: capa.",
  },
  {
    nome: "Capa de Inverno",
    categoria: "vestuario",
    custo: 20,
    descricao: "Capa pesada destinada a clima frio.",
    regrasEspeciais: "Tags: capa, frio.",
  },
  {
    nome: "Capa Grande",
    categoria: "vestuario",
    custo: 25,
    descricao:
      "Capa longa e pesada de couro ou lã, com diversos bolsos e boa proteção contra frio e chuva.",
    regrasEspeciais: "Tags: capa, frio, chuva. Efeito: +1 ARM contra frio.",
  },
  {
    nome: "Capa Impermeável",
    categoria: "vestuario",
    custo: 10,
    descricao: "Capa destinada a proteger o usuário contra chuva e umidade.",
    regrasEspeciais: "Tags: capa, chuva, impermeavel.",
  },
  {
    nome: "Capa Militar",
    categoria: "vestuario",
    custo: 40,
    descricao: "Capa de padrão militar.",
    regrasEspeciais: "Tags: capa, militar.",
  },
  {
    nome: "Chapéu de Couro de Viagem",
    categoria: "vestuario",
    custo: 10,
    descricao: "Chapéu de couro destinado a viagens.",
    regrasEspeciais: "Tags: chapeu, viagem, couro.",
  },
  {
    nome: "Chapéu de Pele para Inverno",
    categoria: "vestuario",
    custo: 20,
    descricao: "Chapéu de pele preparado para baixas temperaturas.",
    regrasEspeciais: "Tags: chapeu, frio.",
  },
  {
    nome: "Chapéu Simples",
    categoria: "vestuario",
    custo: 2,
    descricao: "Chapéu comum de baixo custo.",
    regrasEspeciais: "Tags: chapeu.",
  },
  {
    nome: "Chapéu Social",
    categoria: "vestuario",
    custo: 10,
    descricao: "Chapéu apropriado para situações sociais.",
    regrasEspeciais: "Tags: chapeu, social.",
  },
  {
    nome: "Cinto de Couro",
    categoria: "vestuario",
    custo: 2,
    descricao: "Cinto comum feito de couro.",
    regrasEspeciais: "Tags: cinto, couro.",
  },
  {
    nome: "Luvas de Trabalho de Couro",
    categoria: "vestuario",
    custo: 10,
    descricao: "Luvas de couro resistentes para trabalho manual.",
    regrasEspeciais: "Tags: luvas, trabalho, couro.",
  },
  {
    nome: "Luvas Sociais",
    categoria: "vestuario",
    custo: 10,
    descricao: "Luvas de acabamento apropriado para ocasiões sociais.",
    regrasEspeciais: "Tags: luvas, social.",
  },
  {
    nome: "Manto",
    categoria: "vestuario",
    custo: 8,
    descricao: "Manto comum de vestuário.",
    regrasEspeciais: "Tags: manto.",
  },
  {
    nome: "Óculos de Leitura",
    categoria: "vestuario",
    custo: 10,
    descricao: "Óculos destinados à leitura.",
    regrasEspeciais: "Tags: oculos.",
  },
  {
    nome: "Óculos Escuros",
    categoria: "vestuario",
    custo: 10,
    descricao: "Óculos com lentes escuras.",
    regrasEspeciais: "Tags: oculos.",
  },
  {
    nome: "Roupas de Trabalho",
    categoria: "vestuario",
    custo: 15,
    descricao: "Conjunto completo de roupas adequadas ao trabalho.",
    regrasEspeciais: "Tags: roupas, trabalho.",
  },
  {
    nome: "Roupas de Viagem de Couro",
    categoria: "vestuario",
    custo: 20,
    descricao: "Conjunto de viagem confeccionado principalmente em couro.",
    regrasEspeciais: "Tags: roupas, viagem, couro.",
  },
  {
    nome: "Roupas de Viagem de Pano",
    categoria: "vestuario",
    custo: 12,
    descricao: "Conjunto de roupas de pano para viagem.",
    regrasEspeciais: "Tags: roupas, viagem.",
  },
  {
    nome: "Suspensórios",
    categoria: "vestuario",
    custo: 4,
    descricao: "Suspensórios comuns de vestuário.",
    regrasEspeciais: "Tags: suspensorios.",
  },
  {
    nome: "Tapa-Olho de Couro e Latão",
    categoria: "vestuario",
    custo: 2,
    descricao: "Tapa-olho confeccionado em couro e latão.",
    regrasEspeciais: "Tags: tapa-olho, couro, latao.",
  },
  {
    nome: "Túnica",
    categoria: "vestuario",
    custo: 30,
    descricao: "Túnica de vestuário.",
    regrasEspeciais: "Tags: tunica.",
  },
  {
    nome: "Uniforme de Oficial",
    categoria: "vestuario",
    custo: 80,
    descricao: "Uniforme formal destinado a oficiais.",
    regrasEspeciais: "Tags: uniforme, militar, social.",
  },
  {
    nome: "Vestido",
    categoria: "vestuario",
    custo: 8,
    descricao: "Vestido comum de qualidade padrão.",
    regrasEspeciais: "Tags: vestido.",
  },

  // ---------- Equipamento geral ----------
  {
    nome: "Algemas",
    categoria: "equipamento-geral",
    custo: 10,
    descricao:
      "Algemas de ferro ou aço usadas para restringir os pulsos de um prisioneiro.",
    regrasEspeciais:
      "Tags: restricao. Escapar: teste FOR ou Arte da Fuga NA 15, 10 minutos, falha causa 1 de dano. Arrombar: NA 15, 5 minutos, -2 se o prisioneiro estiver contido.",
  },
  {
    nome: "Algemas Ogrun",
    categoria: "equipamento-geral",
    custo: 15,
    descricao:
      "Algemas reforçadas próprias para criaturas de porte ogrun ou trolloide.",
    regrasEspeciais:
      "Tags: restricao, ogrun. Escapar: teste FOR NA 20. Tamanho mínimo do usuário: trolloide.",
  },
  {
    nome: "Avental de Alquimista",
    categoria: "equipamento-geral",
    custo: 15,
    descricao:
      "Avental pesado tratado para resistir a calor, frio, explosões e agentes corrosivos.",
    regrasEspeciais:
      "Tags: alquimia, protecao. Efeito: +3 ARM contra explosão, frio, corrosão e fogo, somente no arco frontal; incompatível com armadura.",
  },
  {
    nome: "Baralho de Cartas",
    categoria: "equipamento-geral",
    custo: 2,
    descricao: "Baralho comum para jogos e apostas.",
  },
  {
    nome: "Bigorna",
    categoria: "equipamento-geral",
    custo: 40,
    descricao: "Bigorna pesada usada em trabalhos de metalurgia.",
  },
  {
    nome: "Bússola",
    categoria: "equipamento-geral",
    custo: 2,
    descricao: "Instrumento para orientação por direção.",
  },
  {
    nome: "Cantil",
    categoria: "equipamento-geral",
    custo: 3,
    descricao: "Recipiente portátil para líquidos.",
  },
  {
    nome: "Caneta Tinteiro e Tinta",
    categoria: "equipamento-geral",
    custo: 5,
    descricao: "Conjunto para escrita com pena metálica e tinta.",
  },
  {
    nome: "Carvão — 10 kg",
    categoria: "equipamento-geral",
    custo: 3,
    descricao: "Dez quilos de carvão combustível.",
    regrasEspeciais: "Por 10 kg. Tags: combustivel.",
  },
  {
    nome: "Carvão — 25 kg",
    categoria: "equipamento-geral",
    custo: 5,
    descricao: "Vinte e cinco quilos de carvão combustível.",
    regrasEspeciais: "Por 25 kg. Tags: combustivel.",
  },
  {
    nome: "Carvão — 1.000 kg",
    categoria: "equipamento-geral",
    custo: 100,
    descricao: "Uma tonelada de carvão combustível.",
    regrasEspeciais: "Por 1.000 kg. Tags: combustivel.",
  },
  {
    nome: "Chave de Mekânico",
    categoria: "equipamento-geral",
    custo: 10,
    descricao:
      "Grande chave de aço usada por mekânicos de campo; também pode servir como arma improvisada.",
    regrasEspeciais:
      "Tags: mekanico, ferramenta, arma-improvisada. Como arma: perícia Arma de Mão, ataque -2, pod 3; crítico pode causar nocaute (teste Força de Vontade, NA = FOR do atacante +9, exige causar dano).",
  },
  {
    nome: "Corda de Cânhamo — 6 m",
    categoria: "equipamento-geral",
    custo: 2,
    descricao: "Seis metros de corda de cânhamo.",
    regrasEspeciais: "Por 6 m.",
  },
  {
    nome: "Corda e Gancho de Escalada — 6 m",
    categoria: "equipamento-geral",
    custo: 5,
    descricao: "Corda com gancho própria para escalada.",
    regrasEspeciais: "Por 6 m. Tags: escalada.",
  },
  {
    nome: "Espigão e Martelo — 10 Espigões",
    categoria: "equipamento-geral",
    custo: 5,
    descricao: "Conjunto de martelo e dez espigões.",
    regrasEspeciais: "Por conjunto.",
  },
  {
    nome: "Estojo para Mapa",
    categoria: "equipamento-geral",
    custo: 5,
    descricao: "Estojo rígido para guardar mapas e documentos enrolados.",
  },
  {
    nome: "Ferramentas de Ladrão",
    categoria: "equipamento-geral",
    custo: 10,
    descricao:
      "Conjunto de gazuas, lâminas e ferramentas especializadas para arrombamento e pequenos furtos.",
    regrasEspeciais:
      "Tags: ladrao, ferramenta. Efeitos: +1 em testes de Arrombar; +1 em testes de Punga.",
  },
  {
    nome: "Filtro de Reposição de Máscara de Gás",
    categoria: "equipamento-geral",
    custo: 5,
    descricao: "Filtro substituível para máscara de gás.",
    regrasEspeciais: "Tags: mascara-gas, consumivel. Dura 1 hora de proteção.",
  },
  {
    nome: "Giz ou Carvão — 5 Bastões",
    categoria: "equipamento-geral",
    custo: 1,
    descricao: "Cinco bastões para marcação e escrita.",
    regrasEspeciais: "Por 5 bastões.",
  },
  {
    nome: "Kit Cirúrgico",
    categoria: "equipamento-geral",
    custo: 30,
    descricao:
      "Kit portátil com instrumentos, bandagens, suturas e outros materiais médicos.",
    regrasEspeciais: "Tags: medicina. Efeito: +1 em testes de Medicina.",
  },
  {
    nome: "Kit de Fabricação de Bala Rúnica",
    categoria: "equipamento-geral",
    custo: 50,
    descricao: "Kit portátil para fabricar munição comum e balas rúnicas.",
    regrasEspeciais:
      "Tags: mago-pistoleiro, fabricacao. Permite fabricar munição mundana e balas rúnicas.",
  },
  {
    nome: "Kit de Costura",
    categoria: "equipamento-geral",
    custo: 2,
    descricao: "Kit simples com agulhas, linhas e acessórios de costura.",
  },
  {
    nome: "Kit de Entalhe de Runas",
    categoria: "equipamento-geral",
    custo: 150,
    descricao:
      "Conjunto de precisão usado por mekânicos arcanos para trabalhar placas, conduítes e inscrições rúnicas.",
    regrasEspeciais: "Tags: mekanica, runas.",
  },
  {
    nome: "Kit de Ferramentas de Mekânico",
    categoria: "equipamento-geral",
    custo: 100,
    descricao: "Caixa completa com ferramentas comuns e especializadas de mekânico.",
    regrasEspeciais: "Tags: mekanica, ferramenta.",
  },
  {
    nome: "Kit de Alquimista de Viagem",
    categoria: "equipamento-geral",
    custo: 50,
    descricao:
      "Estojo portátil com instrumentos resistentes para preparar soluções alquímicas fora de um laboratório.",
    regrasEspeciais: "Tags: alquimia. Permite criar soluções alquímicas fora de laboratório.",
  },
  {
    nome: "Laboratório Alquímico",
    categoria: "equipamento-geral",
    custo: 500,
    descricao:
      "Instalação completa com ferramentas e instrumentos para pesquisa e fabricação alquímica.",
    regrasEspeciais:
      "Tags: alquimia, laboratorio. Efeito: +2 em testes de Alquimia; o bônus exige trabalhar sem perturbações.",
  },
  {
    nome: "Lanterna",
    categoria: "equipamento-geral",
    custo: 10,
    descricao: "Lanterna comum para iluminação.",
  },
  {
    nome: "Lente de Aumento",
    categoria: "equipamento-geral",
    custo: 5,
    descricao: "Lente simples para ampliar pequenos detalhes.",
  },
  {
    nome: "Livro",
    categoria: "equipamento-geral",
    custo: 5,
    descricao: "Livro comum; obras raras ou especializadas podem custar mais.",
    regrasEspeciais: "Preço mínimo (obras especiais podem custar mais).",
  },
  {
    nome: "Lona Impermeável — 2 m x 2 m",
    categoria: "equipamento-geral",
    custo: 4,
    descricao: "Lona impermeável quadrada para abrigo e proteção.",
  },
  {
    nome: "Luneta",
    categoria: "equipamento-geral",
    custo: 15,
    descricao: "Instrumento óptico portátil que amplia objetos distantes.",
    regrasEspeciais:
      "Tags: optica. Efeito: +2 em testes de PER para observar a distância.",
  },
  {
    nome: "Mapa Náutico",
    categoria: "equipamento-geral",
    custo: 10,
    descricao: "Mapa destinado à navegação marítima.",
  },
  {
    nome: "Mapa de Terreno Local",
    categoria: "equipamento-geral",
    custo: 3,
    descricao: "Mapa de uma região local.",
  },
  {
    nome: "Máscara de Gás",
    categoria: "equipamento-geral",
    custo: 20,
    descricao:
      "Máscara vedada com filtro tratado para bloquear agentes nocivos e partículas alquímicas.",
    regrasEspeciais:
      "Tags: gas, protecao. Efeitos: +1 ARM contra corrosão; imunidade a gás; -1 em testes de PER. Colocar ou retirar é ação rápida; o filtro dura 1 hora.",
  },
  {
    nome: "Mochila",
    categoria: "equipamento-geral",
    custo: 15,
    descricao: "Mochila comum para transporte de equipamento.",
  },
  {
    nome: "Motor a Vapor Portátil",
    categoria: "equipamento-geral",
    custo: 500,
    descricao:
      "Motor de campo alimentado a carvão e água para acionar ferramentas e dispositivos pneumáticos.",
    regrasEspeciais:
      "Tags: vapor, mekanica, combustivel. Autonomia de 1 hora acionando ferramenta ou 6 horas ocioso; custo de carvão 1 CO a cada 4 horas de operação.",
  },
  {
    nome: "Óculos de Proteção",
    categoria: "equipamento-geral",
    custo: 5,
    descricao: "Óculos grossos para proteger os olhos de faíscas e fragmentos.",
  },
  {
    nome: "Odre",
    categoria: "equipamento-geral",
    custo: 2,
    descricao: "Recipiente flexível tradicional para água ou outros líquidos.",
  },
  {
    nome: "Oficina Mekânica",
    categoria: "equipamento-geral",
    custo: 500,
    descricao:
      "Oficina completa equipada com ferramentas pesadas para fabricação e reparos mekânicos.",
    regrasEspeciais:
      "Preço mínimo. Tags: mekanica, oficina. Efeito: +2 em testes de Engenharia Mekânica para fabricar ou consertar.",
  },
  {
    nome: "Pá de Trincheira",
    categoria: "equipamento-geral",
    custo: 10,
    descricao: "Pá curta usada para cavar trincheiras e abrigos improvisados.",
    regrasEspeciais: "Tags: trincheira.",
  },
  {
    nome: "Papel — 10 Folhas",
    categoria: "equipamento-geral",
    custo: 1,
    descricao: "Dez folhas de papel.",
    regrasEspeciais: "Por 10 folhas.",
  },
  {
    nome: "Pederneira",
    categoria: "equipamento-geral",
    custo: 3,
    descricao: "Ferramenta simples para produzir faíscas e acender fogo.",
  },
  {
    nome: "Pistola de Rebitar",
    categoria: "equipamento-geral",
    custo: 30,
    descricao:
      "Ferramenta de mekânico que dispara rebites e também pode ser utilizada como arma de curtíssimo alcance.",
    regrasEspeciais:
      "Tags: mekanico, arma. Como arma: alcance efetivo 8 m sem alcance extremo, ataque -2, pod 10, capacidade 10 rebites; recarregar cada rebite é ação rápida; 10 disparos custam 1 CO.",
  },
  {
    nome: "Relógio de Bolso",
    categoria: "equipamento-geral",
    custo: 25,
    descricao: "Relógio mecânico portátil acionado por corda.",
  },
  {
    nome: "Saco de Dormir",
    categoria: "equipamento-geral",
    custo: 5,
    descricao: "Saco portátil para descanso em viagem.",
  },
  {
    nome: "Saco Impermeável — 60 L",
    categoria: "equipamento-geral",
    custo: 2,
    descricao: "Saco impermeável com capacidade aproximada de sessenta litros.",
  },
  {
    nome: "Símbolo da Fé",
    categoria: "equipamento-geral",
    custo: 10,
    descricao: "Símbolo religioso de boa qualidade associado a uma fé ou culto.",
    regrasEspeciais: "Tags: religiao.",
  },

  // ---------- Montarias e acessórios ----------
  {
    nome: "Cavalo de Guerra",
    categoria: "montaria",
    custo: 120,
    descricao: "Cavalo treinado para batalha e investidas de cavalaria.",
    regrasEspeciais:
      "Tags: montaria. Estatísticas: FIS 12, VEL 8, FOR 10, ARM 12, DEF desmontado 12, Vitalidade 12, ataque de coice pod = FOR; permite investida de cavalaria.",
  },
  {
    nome: "Cavalo de Montaria",
    categoria: "montaria",
    custo: 80,
    descricao: "Cavalo leve criado para equitação e corridas.",
    regrasEspeciais:
      "Tags: montaria. Estatísticas: FIS 12, VEL 9, FOR 8, ARM 12, DEF desmontado 14, Vitalidade 12, ataque de coice pod = FOR; não pode atacar enquanto montado.",
  },
  {
    nome: "Cavalo de Tração",
    categoria: "montaria",
    custo: 60,
    descricao: "Cavalo forte criado para puxar cargas e realizar trabalho pesado.",
    regrasEspeciais:
      "Tags: montaria. Estatísticas: FIS 12, VEL 7, FOR 12, ARM 12, DEF desmontado 11, Vitalidade 12, ataque de coice pod = FOR; não pode atacar enquanto montado; o cavaleiro montado sofre -2 em DEF.",
  },
  {
    nome: "Armadura Leve de Montaria",
    categoria: "montaria",
    custo: 90,
    descricao: "Proteção leve para cabeça, pescoço e tronco do cavalo.",
    regrasEspeciais: "Tags: montaria, armadura-montaria, classe leve. Efeito: +4 ARM.",
  },
  {
    nome: "Armadura Média de Montaria",
    categoria: "montaria",
    custo: 150,
    descricao: "Proteção equestre de placas leves ou malha acolchoada.",
    regrasEspeciais: "Tags: montaria, armadura-montaria, classe média. Efeito: +6 ARM.",
  },
  {
    nome: "Armadura Pesada de Montaria",
    categoria: "montaria",
    custo: 300,
    descricao: "Armadura equestre pesada de placas sobre malha e acolchoamento.",
    regrasEspeciais:
      "Tags: montaria, armadura-montaria, classe pesada. Efeito: +8 ARM. Incompatível com Cavalo de Montaria.",
  },
  {
    nome: "Arreios",
    categoria: "montaria",
    custo: 50,
    descricao: "Conjunto de sela, rédeas, bocado e freio para controle da montaria.",
    regrasEspeciais:
      "Tags: montaria, acessorio-montaria. Sem arreios, penalidade de -3 para cavalgar.",
  },
  {
    nome: "Máscara de Gás Equestre",
    categoria: "montaria",
    custo: 45,
    descricao: "Máscara de gás adaptada para cavalos.",
    regrasEspeciais:
      "Tags: montaria, acessorio-montaria. Efeitos: +1 ARM contra corrosão; imunidade a gás; -1 em testes de PER. Colocar ou retirar é ação rápida, filtro dura 1 hora, reposição do filtro custa 5 CO.",
  },

  // ---------- Alimentação ----------
  {
    nome: "Rações Secas",
    categoria: "alimentacao",
    custo: 1,
    descricao: "Suprimentos de viagem suficientes para um dia.",
    regrasEspeciais: "Por dia.",
  },
  {
    nome: "Rações Militares",
    categoria: "alimentacao",
    custo: 1,
    descricao:
      "Alimentos conservados para uso militar, protegidos contra os elementos.",
    regrasEspeciais: "Por dia.",
  },
  {
    nome: "Refeição Básica",
    categoria: "alimentacao",
    custo: 1,
    descricao: "Refeição simples e quente disponível em estabelecimentos comuns.",
  },
  {
    nome: "Refeição de Qualidade",
    categoria: "alimentacao",
    custo: 5,
    descricao: "Refeição superior com vários pratos.",
    regrasEspeciais: "Por refeição.",
  },
  {
    nome: "Refeição Luxuosa",
    categoria: "alimentacao",
    custo: 25,
    descricao: "Refeição sofisticada com ingredientes caros e raros.",
  },
  {
    nome: "Caneca de Cerveja",
    categoria: "alimentacao",
    custo: 1,
    descricao: "Caneca de cerveja comum.",
  },
  {
    nome: "Garrafa de Cerveja",
    categoria: "alimentacao",
    custo: 1,
    descricao: "Garrafa de cerveja comum.",
  },
  {
    nome: "Taça de Vinho",
    categoria: "alimentacao",
    custo: 1,
    descricao: "Taça de vinho; variedades melhores custam mais.",
    regrasEspeciais: "Preço mínimo (variedades melhores custam mais).",
  },
  {
    nome: "Garrafa de Vinho",
    categoria: "alimentacao",
    custo: 5,
    descricao: "Garrafa de vinho; safras melhores custam mais.",
    regrasEspeciais: "Preço mínimo (safras melhores custam mais).",
  },
  {
    nome: "Dose de Bebida Destilada",
    categoria: "alimentacao",
    custo: 1,
    descricao: "Dose de bebida destilada; marcas melhores custam mais.",
    regrasEspeciais: "Preço mínimo (marcas melhores custam mais).",
  },
  {
    nome: "Garrafa de Bebida Destilada",
    categoria: "alimentacao",
    custo: 5,
    descricao: "Garrafa de bebida destilada; marcas melhores custam mais.",
    regrasEspeciais: "Preço mínimo (marcas melhores custam mais).",
  },
  {
    nome: "Ração para Cavalo",
    categoria: "alimentacao",
    custo: 1,
    descricao: "Ração suficiente para alimentar um cavalo por um dia.",
    regrasEspeciais: "Por dia.",
  },

  // ---------- Acomodação ----------
  {
    nome: "Acomodação Básica",
    categoria: "acomodacao",
    custo: 1,
    descricao: "Abrigo simples por uma noite.",
    regrasEspeciais: "Por noite.",
  },
  {
    nome: "Acomodação de Qualidade",
    categoria: "acomodacao",
    custo: 5,
    descricao: "Quarto particular de qualidade razoável.",
    regrasEspeciais: "Por noite.",
  },
  {
    nome: "Acomodação de Qualidade — 1 Mês",
    categoria: "acomodacao",
    custo: 50,
    descricao: "Aluguel mensal de acomodação de qualidade.",
    regrasEspeciais: "Por mês.",
  },
  {
    nome: "Acomodação Luxuosa",
    categoria: "acomodacao",
    custo: 25,
    descricao: "Quarto luxuoso com serviço e comodidades superiores.",
    regrasEspeciais: "Por noite. Preço mínimo (pode custar mais).",
  },
];
