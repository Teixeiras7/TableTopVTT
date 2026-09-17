export interface RacaSeed {
  nome: string;
  atributos: Record<
    string,
    {
      inicial: number | null;
      maximo: { heroi: number | null; veterano: number | null; epico: number | null };
    }
  >;
  idiomas?: string;
  caracteristicas?: string;
  arquetipos: string[];
}

export const racas: RacaSeed[] = [
  {
    nome: "Humano",
    atributos: {
      fis: { inicial: 5, maximo: { heroi: 7, veterano: 8, epico: 8 } },
      vel: { inicial: 6, maximo: { heroi: 7, veterano: 7, epico: 7 } },
      for: { inicial: 4, maximo: { heroi: 6, veterano: 7, epico: 8 } },
      agi: { inicial: 3, maximo: { heroi: 5, veterano: 6, epico: 7 } },
      des: { inicial: 4, maximo: { heroi: 5, veterano: 6, epico: 7 } },
      mae: { inicial: 4, maximo: { heroi: 5, veterano: 6, epico: 7 } },
      int: { inicial: 3, maximo: { heroi: 5, veterano: 6, epico: 7 } },
      arc: { inicial: null, maximo: { heroi: 4, veterano: 6, epico: 8 } },
      per: { inicial: 3, maximo: { heroi: 5, veterano: 6, epico: 7 } },
    },
    idiomas:
      "Começa com 2 idiomas: um idioma nativo determinado pela origem e mais um idioma adicional.",
    caracteristicas:
      "Potencial Excepcional: começa com +1 FIS, +1 AGI ou +1 INT, à escolha do jogador.",
    arquetipos: ["Dotado", "Habilidoso", "Intelectual", "Poderoso"],
  },
  {
    nome: "Anão",
    atributos: {
      fis: { inicial: 6, maximo: { heroi: 7, veterano: 7, epico: 8 } },
      vel: { inicial: 4, maximo: { heroi: 5, veterano: 6, epico: 6 } },
      for: { inicial: 5, maximo: { heroi: 6, veterano: 7, epico: 8 } },
      agi: { inicial: 3, maximo: { heroi: 5, veterano: 6, epico: 7 } },
      des: { inicial: 3, maximo: { heroi: 4, veterano: 5, epico: 6 } },
      mae: { inicial: 4, maximo: { heroi: 5, veterano: 6, epico: 7 } },
      int: { inicial: 4, maximo: { heroi: 5, veterano: 6, epico: 7 } },
      arc: { inicial: null, maximo: { heroi: 4, veterano: 6, epico: 7 } },
      per: { inicial: 3, maximo: { heroi: 4, veterano: 6, epico: 7 } },
    },
    idiomas: "Começa com 2 idiomas: Rhúlico e mais um idioma adicional.",
    caracteristicas:
      "Suportar Carga: começa com a habilidade Suportar Carga; Conexão: Clã Anão: começa com uma conexão com um clã anão.",
    arquetipos: ["Dotado", "Habilidoso", "Intelectual", "Poderoso"],
  },
  {
    nome: "Gobber",
    atributos: {
      fis: { inicial: 4, maximo: { heroi: 6, veterano: 7, epico: 7 } },
      vel: { inicial: 6, maximo: { heroi: 7, veterano: 7, epico: 7 } },
      for: { inicial: 3, maximo: { heroi: 4, veterano: 5, epico: 6 } },
      agi: { inicial: 4, maximo: { heroi: 5, veterano: 6, epico: 7 } },
      des: { inicial: 3, maximo: { heroi: 5, veterano: 6, epico: 7 } },
      mae: { inicial: 4, maximo: { heroi: 5, veterano: 6, epico: 7 } },
      int: { inicial: 3, maximo: { heroi: 4, veterano: 5, epico: 6 } },
      arc: { inicial: null, maximo: { heroi: null, veterano: null, epico: null } },
      per: { inicial: 3, maximo: { heroi: 4, veterano: 4, epico: 5 } },
    },
    idiomas: "Começa com 2 idiomas: Gobberês e mais um idioma adicional.",
    caracteristicas:
      "Ágil: começa com o benefício de arquétipo Ágil (testes de AGI ampliados); Bônus de DEF: gobbers recebem +1 DEF; Restrição: gobbers não podem usar armas grandes ou fuzis.",
    arquetipos: ["Habilidoso", "Intelectual", "Poderoso"],
  },
  {
    nome: "Iosano",
    atributos: {
      fis: { inicial: 5, maximo: { heroi: 7, veterano: 7, epico: 7 } },
      vel: { inicial: 6, maximo: { heroi: 7, veterano: 7, epico: 7 } },
      for: { inicial: 4, maximo: { heroi: 5, veterano: 6, epico: 7 } },
      agi: { inicial: 3, maximo: { heroi: 5, veterano: 6, epico: 7 } },
      des: { inicial: 4, maximo: { heroi: 5, veterano: 6, epico: 7 } },
      mae: { inicial: 4, maximo: { heroi: 5, veterano: 6, epico: 7 } },
      int: { inicial: 4, maximo: { heroi: 6, veterano: 6, epico: 7 } },
      arc: { inicial: null, maximo: { heroi: 4, veterano: 6, epico: 8 } },
      per: { inicial: 3, maximo: { heroi: 5, veterano: 6, epico: 7 } },
    },
    idiomas: "Começa com 2 idiomas: Shyr e mais um idioma adicional.",
    caracteristicas:
      "Habilidade Adicional: começa com uma habilidade adicional escolhida de uma de suas carreiras.",
    arquetipos: ["Dotado", "Habilidoso", "Intelectual", "Poderoso"],
  },
  {
    nome: "Nyss",
    atributos: {
      fis: { inicial: 5, maximo: { heroi: 7, veterano: 7, epico: 8 } },
      vel: { inicial: 6, maximo: { heroi: 7, veterano: 7, epico: 7 } },
      for: { inicial: 4, maximo: { heroi: 6, veterano: 7, epico: 8 } },
      agi: { inicial: 4, maximo: { heroi: 5, veterano: 6, epico: 7 } },
      des: { inicial: 4, maximo: { heroi: 5, veterano: 6, epico: 7 } },
      mae: { inicial: 4, maximo: { heroi: 5, veterano: 6, epico: 7 } },
      int: { inicial: 3, maximo: { heroi: 5, veterano: 6, epico: 6 } },
      arc: { inicial: null, maximo: { heroi: 4, veterano: 6, epico: 7 } },
      per: { inicial: 3, maximo: { heroi: 5, veterano: 6, epico: 6 } },
    },
    idiomas: "Começa com 2 idiomas: Aérico e mais um idioma adicional.",
    caracteristicas:
      "Equipamentos Nyss: claymores nyss e arcos nyss custam 10 CO a menos durante a criação; Sentidos Aguçados: recebe +1 em testes de Iniciativa e PER; Resistência ao Frio: recebe +3 ARM contra dano causado por frio; Vulnerabilidade ao Fogo: recebe -3 ARM contra dano causado por fogo; Restrição: Nyss Dotados não podem escolher as carreiras Arcanista, Conjurador de Guerra, Mago-Pistoleiro ou Mekânico Arcano.",
    arquetipos: ["Dotado", "Habilidoso", "Poderoso"],
  },
  {
    nome: "Ogrun",
    atributos: {
      fis: { inicial: 6, maximo: { heroi: 7, veterano: 8, epico: 9 } },
      vel: { inicial: 5, maximo: { heroi: 6, veterano: 6, epico: 6 } },
      for: { inicial: 6, maximo: { heroi: 8, veterano: 9, epico: 10 } },
      agi: { inicial: 3, maximo: { heroi: 5, veterano: 5, epico: 6 } },
      des: { inicial: 3, maximo: { heroi: 4, veterano: 5, epico: 6 } },
      mae: { inicial: 4, maximo: { heroi: 5, veterano: 6, epico: 7 } },
      int: { inicial: 3, maximo: { heroi: 5, veterano: 5, epico: 6 } },
      arc: { inicial: null, maximo: { heroi: null, veterano: null, epico: null } },
      per: { inicial: 2, maximo: { heroi: 4, veterano: 5, epico: 6 } },
    },
    idiomas: "Começa com 3 idiomas: Molgur-og, rhúlico e mais um idioma adicional.",
    caracteristicas:
      "Estatura Enorme: pode empunhar com uma mão uma arma que normalmente exige duas, sofrendo -2 nas jogadas de ataque com ela.",
    arquetipos: ["Habilidoso", "Poderoso"],
  },
  {
    nome: "Trolloide",
    atributos: {
      fis: { inicial: 6, maximo: { heroi: 8, veterano: 9, epico: 10 } },
      vel: { inicial: 5, maximo: { heroi: 6, veterano: 6, epico: 6 } },
      for: { inicial: 5, maximo: { heroi: 7, veterano: 8, epico: 9 } },
      agi: { inicial: 3, maximo: { heroi: 5, veterano: 6, epico: 7 } },
      des: { inicial: 2, maximo: { heroi: 4, veterano: 5, epico: 6 } },
      mae: { inicial: 4, maximo: { heroi: 5, veterano: 6, epico: 7 } },
      int: { inicial: 3, maximo: { heroi: 4, veterano: 5, epico: 6 } },
      arc: { inicial: null, maximo: { heroi: 4, veterano: 6, epico: 7 } },
      per: { inicial: 3, maximo: { heroi: 4, veterano: 5, epico: 6 } },
    },
    idiomas: "Começa com 2 idiomas: Morgur-trul e mais um idioma adicional.",
    caracteristicas:
      "Durão: começa com o benefício de arquétipo Durão; Façanha: Revitalizar: começa com o benefício de arquétipo Façanha: Revitalizar; Restrição: Trolloides Dotados não podem escolher as carreiras Arcanista, Conjurador de Guerra ou Mekânico Arcano.",
    arquetipos: ["Dotado", "Habilidoso", "Poderoso"],
  },
];
