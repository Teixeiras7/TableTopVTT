export interface CarreiraSeed {
  nome: string;
  racaExigida?: string;
  arquetipoExigido?: string;
  apenasInicial: boolean;
  ouroInicial: number;
  regrasExtra?: string;
  periciasIniciais: { nome: string; nivel: number }[];
  habilidadesIniciais: string[];
  conexoesIniciais: string[];
  itensIniciais: { nome: string; quantidade: number }[];
  escolhas: {
    tipo: "pericia-militar" | "pericia-profissional" | "habilidade" | "item";
    quantidade: number;
    descricao?: string;
    opcoes: { nome: string; nivel?: number; quantidade?: number }[];
  }[];
  progressaoHabilidades: string[];
  progressaoPericiasMilitares: { nome: string; nivelMaximo: number }[];
  progressaoPericiasProfissionais: { nome: string; nivelMaximo: number }[];
}

export const carreiras: CarreiraSeed[] = [
  {
    nome: "Alquimista",
    apenasInicial: false,
    ouroInicial: 50,
    periciasIniciais: [{ nome: "Arma de Arremesso", nivel: 1 }, { nome: "Arma de Mão", nivel: 1 }, { nome: "Alquimia", nivel: 1 }, { nome: "Medicina", nivel: 1 }],
    habilidadesIniciais: ["Granadeiro", "Resistência a Veneno"],
    conexoesIniciais: [],
    itensIniciais: [{ nome: "Avental de Alquimista", quantidade: 1 }, { nome: "Máscara de Gás", quantidade: 1 }, { nome: "Kit de Alquimista de Viagem", quantidade: 1 }, { nome: "Granada Alquímica Vazia", quantidade: 5 }, { nome: "Bandoleira de Granadeiro", quantidade: 1 }],
    escolhas: [],
    progressaoHabilidades: ["Alquimista de Campo", "Bombardeiro", "Estilo Livre", "Fogo no Buraco!", "Granadeiro", "Mestre das Infusões", "Preparação Rápida", "Resistência a Veneno"],
    progressaoPericiasMilitares: [{ nome: "Arma de Arremesso", nivelMaximo: 4 }, { nome: "Arma de Mão", nivelMaximo: 2 }, { nome: "Combate Desarmado", nivelMaximo: 2 }],
    progressaoPericiasProfissionais: [{ nome: "Alquimia", nivelMaximo: 4 }, { nome: "Falsificar", nivelMaximo: 2 }, { nome: "Medicina", nivelMaximo: 4 }, { nome: "Negociação", nivelMaximo: 4 }, { nome: "Ofício", nivelMaximo: 4 }, { nome: "Pesquisar", nivelMaximo: 4 }],
  },

  {
    nome: "Arauto da Matança",
    racaExigida: "Trolloide",
    apenasInicial: false,
    ouroInicial: 75,
    periciasIniciais: [{ nome: "Brado de Matança", nivel: 2 }, { nome: "Comandar", nivel: 1 }, { nome: "Conhecimento (Trolloide)", nivel: 1 }, { nome: "Oratória", nivel: 1 }],
    habilidadesIniciais: ["Brado: Chamado", "Brado: Rajada Sônica"],
    conexoesIniciais: [],
    itensIniciais: [],
    escolhas: [
      {
        tipo: "pericia-militar",
        quantidade: 1,
        opcoes: [{ nome: "Arma de Mão", nivel: 1 }, { nome: "Arma Grande", nivel: 1 }],
      },
    ],
    progressaoHabilidades: ["Brado: Balada Heroica", "Brado: Cacofonia", "Brado: Chamado", "Brado: Chamado do Desafio", "Brado: Rajada Sônica", "Brado: Reverberação", "Brado: Tremor", "Legado de Bragg", "Líder Natural", "Plano de Batalha: Chamado para Ação"],
    progressaoPericiasMilitares: [{ nome: "Arma de Arremesso", nivelMaximo: 3 }, { nome: "Arma de Mão", nivelMaximo: 3 }, { nome: "Arma Grande", nivelMaximo: 3 }, { nome: "Combate Desarmado", nivelMaximo: 3 }],
    progressaoPericiasProfissionais: [{ nome: "Brado de Matança", nivelMaximo: 4 }, { nome: "Comandar", nivelMaximo: 4 }, { nome: "Oratória", nivelMaximo: 4 }, { nome: "Seduzir", nivelMaximo: 2 }],
  },

  {
    nome: "Arcanista",
    arquetipoExigido: "Dotado",
    apenasInicial: false,
    ouroInicial: 75,
    regrasExtra: "Leitura de Runas: Ao escolher Arcanista como uma das carreiras iniciais, o personagem recebe o benefício Leitura de Runas do arquétipo Dotado.",
    periciasIniciais: [{ nome: "Conhecimento (Arcano)", nivel: 1 }, { nome: "Pesquisar", nivel: 1 }],
    habilidadesIniciais: ["Poder Maior"],
    conexoesIniciais: [],
    itensIniciais: [],
    escolhas: [],
    progressaoHabilidades: ["Acadêmico Arcano", "Defesas Arcanas", "Educação Universitária", "Poder Maior"],
    progressaoPericiasMilitares: [],
    progressaoPericiasProfissionais: [{ nome: "Etiqueta", nivelMaximo: 2 }, { nome: "Negociação", nivelMaximo: 2 }, { nome: "Ofício", nivelMaximo: 2 }, { nome: "Oratória", nivelMaximo: 2 }, { nome: "Pesquisar", nivelMaximo: 4 }],
  },

  {
    nome: "Aristocrata",
    racaExigida: "Humano",
    apenasInicial: true,
    ouroInicial: 200,
    regrasExtra: "Renda Familiar: O personagem recebe 50 CO por mês provenientes das posses de sua família.",
    periciasIniciais: [{ nome: "Arma de Mão", nivel: 1 }, { nome: "Comandar", nivel: 1 }, { nome: "Etiqueta", nivel: 1 }],
    habilidadesIniciais: ["Boa Criação", "Idioma", "Privilégio"],
    conexoesIniciais: ["Nobreza"],
    itensIniciais: [],
    escolhas: [
      {
        tipo: "pericia-militar",
        quantidade: 1,
        opcoes: [{ nome: "Arco", nivel: 1 }, { nome: "Fuzil", nivel: 1 }, { nome: "Pistola", nivel: 1 }],
      },
    ],
    progressaoHabilidades: ["Avaliação", "Boa Criação", "Conselheiro", "Ginete Especialista", "Ginete Veloz", "Grito de Guerra", "Idioma", "Líder Natural", "Plano de Batalha: Chamado para Ação", "Privilégio", "Resistência a Veneno"],
    progressaoPericiasMilitares: [{ nome: "Arco", nivelMaximo: 2 }, { nome: "Arma de Mão", nivelMaximo: 3 }, { nome: "Fuzil", nivelMaximo: 3 }, { nome: "Lança", nivelMaximo: 3 }, { nome: "Pistola", nivelMaximo: 2 }],
    progressaoPericiasProfissionais: [{ nome: "Comandar", nivelMaximo: 4 }, { nome: "Criptografia", nivelMaximo: 2 }, { nome: "Direito", nivelMaximo: 4 }, { nome: "Enganar", nivelMaximo: 4 }, { nome: "Etiqueta", nivelMaximo: 4 }, { nome: "Negociação", nivelMaximo: 4 }, { nome: "Oratória", nivelMaximo: 4 }, { nome: "Seduzir", nivelMaximo: 4 }, { nome: "Subornar", nivelMaximo: 4 }],
  },

  {
    nome: "Assassino",
    apenasInicial: false,
    ouroInicial: 75,
    periciasIniciais: [{ nome: "Arma de Mão", nivel: 1 }, { nome: "Esgueirar-se", nivel: 1 }, { nome: "Intimidar", nivel: 1 }, { nome: "Manha", nivel: 1 }],
    habilidadesIniciais: ["Espreitar", "Precisão Anatômica", "Punhalada pelas Costas"],
    conexoesIniciais: [],
    itensIniciais: [],
    escolhas: [
      {
        tipo: "pericia-militar",
        quantidade: 1,
        opcoes: [{ nome: "Arma de Arremesso", nivel: 1 }, { nome: "Besta", nivel: 1 }, { nome: "Combate Desarmado", nivel: 1 }],
      },
    ],
    progressaoHabilidades: ["Ataque em Sequência: Sangrar", "Ataque Surpresa", "Camuflagem", "Combater com Duas Armas", "Especialização (Lâmina do Assassino)", "Espreitar", "Idioma (mais cinco línguas)", "Precisão Anatômica", "Punhalada pelas Costas", "Sanguinário", "Saque Rápido"],
    progressaoPericiasMilitares: [{ nome: "Arma de Arremesso", nivelMaximo: 3 }, { nome: "Arma de Mão", nivelMaximo: 4 }, { nome: "Besta", nivelMaximo: 2 }, { nome: "Combate Desarmado", nivelMaximo: 3 }],
    progressaoPericiasProfissionais: [{ nome: "Esgueirar-se", nivelMaximo: 4 }, { nome: "Interrogatório", nivelMaximo: 2 }, { nome: "Manha", nivelMaximo: 4 }],
  },

  {
    nome: "Caçador de Magos",
    racaExigida: "Iosano",
    apenasInicial: false,
    ouroInicial: 75,
    periciasIniciais: [{ nome: "Arma de Mão", nivel: 1 }, { nome: "Escalar", nivel: 1 }, { nome: "Esgueirar-se", nivel: 1 }, { nome: "Rastrear", nivel: 1 }, { nome: "Saltar", nivel: 1 }],
    habilidadesIniciais: ["Assassino Arcano", "Vontade de Ferro"],
    conexoesIniciais: ["Retribuição de Scyrah"],
    itensIniciais: [],
    escolhas: [
      {
        tipo: "pericia-militar",
        quantidade: 1,
        opcoes: [{ nome: "Arco", nivel: 1 }, { nome: "Besta", nivel: 1 }],
      },
    ],
    progressaoHabilidades: ["Aparar", "Assassino Arcano", "Assassino de Magos", "Besteiro", "Camuflagem", "Exímio Atirador", "Magia das Sombras", "Rastro sem Pegadas", "Recarga Rápida", "Saque Rápido", "Trabalho Rápido", "Vontade de Ferro"],
    progressaoPericiasMilitares: [{ nome: "Arco", nivelMaximo: 4 }, { nome: "Arma de Arremesso", nivelMaximo: 2 }, { nome: "Arma de Mão", nivelMaximo: 4 }, { nome: "Besta", nivelMaximo: 4 }],
    progressaoPericiasProfissionais: [{ nome: "Disfarce", nivelMaximo: 2 }, { nome: "Enganar", nivelMaximo: 2 }, { nome: "Esgueirar-se", nivelMaximo: 4 }, { nome: "Rastrear", nivelMaximo: 4 }, { nome: "Sobrevivência", nivelMaximo: 2 }, { nome: "Usar Cordas", nivelMaximo: 3 }],
  },

  {
    nome: "Caçador de Recompensas",
    apenasInicial: false,
    ouroInicial: 75,
    periciasIniciais: [{ nome: "Detectar", nivel: 1 }, { nome: "Intimidar", nivel: 1 }, { nome: "Rastrear", nivel: 1 }, { nome: "Usar Cordas", nivel: 1 }],
    habilidadesIniciais: ["Imobilizar", "Retentor"],
    conexoesIniciais: [],
    itensIniciais: [],
    escolhas: [
      {
        tipo: "pericia-militar",
        quantidade: 2,
        opcoes: [{ nome: "Arma de Mão", nivel: 1 }, { nome: "Besta", nivel: 1 }, { nome: "Combate Desarmado", nivel: 1 }, { nome: "Fuzil", nivel: 1 }, { nome: "Pistola", nivel: 1 }],
      },
    ],
    progressaoHabilidades: ["Absorver Impacto", "Ataque Surpresa", "Besteiro", "Cabeçada", "Imobilizar", "Idioma (mais cinco línguas)", "Perseguir", "Retentor"],
    progressaoPericiasMilitares: [{ nome: "Arma de Mão", nivelMaximo: 3 }, { nome: "Besta", nivelMaximo: 2 }, { nome: "Combate Desarmado", nivelMaximo: 4 }, { nome: "Fuzil", nivelMaximo: 3 }, { nome: "Pistola", nivelMaximo: 2 }],
    progressaoPericiasProfissionais: [{ nome: "Direito", nivelMaximo: 2 }, { nome: "Disfarce", nivelMaximo: 2 }, { nome: "Enganar", nivelMaximo: 2 }, { nome: "Esgueirar-se", nivelMaximo: 3 }, { nome: "Interrogatório", nivelMaximo: 2 }, { nome: "Manha", nivelMaximo: 4 }, { nome: "Negociação", nivelMaximo: 4 }, { nome: "Rastrear", nivelMaximo: 4 }, { nome: "Subornar", nivelMaximo: 2 }, { nome: "Usar Cordas", nivelMaximo: 4 }],
  },

  {
    nome: "Cavaleiro",
    apenasInicial: false,
    ouroInicial: 100,
    regrasExtra: "Requer (raça Humano OU raça Iosano).",
    periciasIniciais: [{ nome: "Arma de Mão", nivel: 1 }, { nome: "Arma Grande", nivel: 1 }, { nome: "Escudo", nivel: 1 }, { nome: "Comandar", nivel: 1 }, { nome: "Conhecimento (Ordem de Cavalaria)", nivel: 1 }, { nome: "Etiqueta", nivel: 1 }],
    habilidadesIniciais: ["Defensor", "Trespassar"],
    conexoesIniciais: ["Ordem de Cavalaria"],
    itensIniciais: [],
    escolhas: [],
    progressaoHabilidades: ["Ataque Montado", "Ataque Preciso", "Defensor", "Forçar o Ataque", "Ginete de Combate", "Ginete Especialista", "Golpe com Escudo", "Investida de Cavalaria", "Investida Implacável", "Líder Natural", "Linha Defensiva", "Suportar Carga", "Trespassar", "Vontade de Ferro"],
    progressaoPericiasMilitares: [{ nome: "Arma de Mão", nivelMaximo: 4 }, { nome: "Arma Grande", nivelMaximo: 4 }, { nome: "Combate Desarmado", nivelMaximo: 3 }, { nome: "Escudo", nivelMaximo: 4 }, { nome: "Lança", nivelMaximo: 4 }],
    progressaoPericiasProfissionais: [{ nome: "Comandar", nivelMaximo: 4 }, { nome: "Direito", nivelMaximo: 2 }, { nome: "Etiqueta", nivelMaximo: 2 }],
  },

  {
    nome: "Conjurador de Guerra",
    arquetipoExigido: "Dotado",
    apenasInicial: true,
    ouroInicial: 0,
    regrasExtra: "Tradição Focalizador: O Conjurador de Guerra utiliza a tradição arcana Focalizador. Ampliação por Vínculo: O Conjurador de Guerra só pode ampliar armas mekânicas com as quais possui vínculo.",
    periciasIniciais: [{ nome: "Arma de Mão", nivel: 1 }, { nome: "Pistola", nivel: 1 }, { nome: "Comandar", nivel: 1 }, { nome: "Detectar", nivel: 1 }],
    habilidadesIniciais: ["Vínculo"],
    conexoesIniciais: [],
    itensIniciais: [],
    escolhas: [
      {
        tipo: "item",
        quantidade: 1,
        descricao: "Armadura de Conjurador de Guerra Leve OU Armadura de Conjurador de Guerra Média OU Arma de Mão Mekânica OU Canhão de Mão Mekânico",
        opcoes: [{ nome: "Armadura de Conjurador de Guerra Leve", quantidade: 1 }, { nome: "Armadura de Conjurador de Guerra Média", quantidade: 1 }, { nome: "Arma de Mão Mekânica", quantidade: 1 }, { nome: "Canhão de Mão Mekânico", quantidade: 1 }],
      },
    ],
    progressaoHabilidades: ["Comandante de Campo: Ataque Mágico", "Comandante de Campo: Investida Implacável", "Comandante de Campo: Proteção de Escudo", "Líder Natural", "Vínculo"],
    progressaoPericiasMilitares: [{ nome: "Arma de Mão", nivelMaximo: 4 }, { nome: "Arma Grande", nivelMaximo: 4 }, { nome: "Combate Desarmado", nivelMaximo: 2 }, { nome: "Pistola", nivelMaximo: 4 }],
    progressaoPericiasProfissionais: [{ nome: "Comandar", nivelMaximo: 4 }],
  },

  {
    nome: "Duelista",
    apenasInicial: false,
    ouroInicial: 75,
    periciasIniciais: [{ nome: "Arma de Mão", nivel: 1 }, { nome: "Pistola", nivel: 1 }, { nome: "Intimidar", nivel: 1 }, { nome: "Jogatina", nivel: 1 }, { nome: "Saltar", nivel: 1 }],
    habilidadesIniciais: ["Aparar", "Contragolpe"],
    conexoesIniciais: [],
    itensIniciais: [],
    escolhas: [],
    progressaoHabilidades: ["Absorver Impacto", "Acrobático", "Aparar", "Ataque Preciso", "Atirador", "Combater com Duas Armas", "Contragolpe", "Saque Rápido", "Trabalho Rápido"],
    progressaoPericiasMilitares: [{ nome: "Arma de Arremesso", nivelMaximo: 3 }, { nome: "Arma de Mão", nivelMaximo: 4 }, { nome: "Combate Desarmado", nivelMaximo: 2 }, { nome: "Pistola", nivelMaximo: 4 }],
    progressaoPericiasProfissionais: [{ nome: "Direito", nivelMaximo: 2 }, { nome: "Etiqueta", nivelMaximo: 2 }, { nome: "Manha", nivelMaximo: 2 }, { nome: "Oratória", nivelMaximo: 2 }, { nome: "Seduzir", nivelMaximo: 3 }],
  },

  {
    nome: "Espião",
    apenasInicial: false,
    ouroInicial: 100,
    regrasExtra: "Idioma Adicional: O personagem escolhe um idioma ao adquirir a carreira Espião.",
    periciasIniciais: [{ nome: "Comandar", nivel: 1 }, { nome: "Detectar", nivel: 1 }, { nome: "Disfarce", nivel: 1 }, { nome: "Enganar", nivel: 1 }, { nome: "Esgueirar-se", nivel: 1 }],
    habilidadesIniciais: ["Identidade Falsa", "Idioma", "Plano de Batalha: Sombra"],
    conexoesIniciais: ["Rede de Inteligência"],
    itensIniciais: [{ nome: "Documentos de Identidade Falsos", quantidade: 1 }],
    escolhas: [
      {
        tipo: "pericia-militar",
        quantidade: 1,
        opcoes: [{ nome: "Arma de Arremesso", nivel: 1 }, { nome: "Arma de Mão", nivel: 1 }, { nome: "Pistola", nivel: 1 }],
      },
    ],
    progressaoHabilidades: ["Ataque Surpresa", "Detectar Mentiras", "Espreitar", "Identidade Falsa", "Idioma", "Linguagem de Sinais", "Plano de Batalha: Sombra", "Resistência a Veneno", "Vontade de Ferro"],
    progressaoPericiasMilitares: [{ nome: "Arma de Arremesso", nivelMaximo: 3 }, { nome: "Arma de Mão", nivelMaximo: 3 }, { nome: "Combate Desarmado", nivelMaximo: 3 }, { nome: "Pistola", nivelMaximo: 3 }],
    progressaoPericiasProfissionais: [{ nome: "Arrombar", nivelMaximo: 2 }, { nome: "Arte da Fuga", nivelMaximo: 4 }, { nome: "Comandar", nivelMaximo: 3 }, { nome: "Criptografia", nivelMaximo: 4 }, { nome: "Direito", nivelMaximo: 4 }, { nome: "Disfarce", nivelMaximo: 4 }, { nome: "Enganar", nivelMaximo: 4 }, { nome: "Etiqueta", nivelMaximo: 4 }, { nome: "Falsificar", nivelMaximo: 4 }, { nome: "Esgueirar-se", nivelMaximo: 4 }, { nome: "Interrogatório", nivelMaximo: 4 }, { nome: "Manha", nivelMaximo: 4 }, { nome: "Negociação", nivelMaximo: 4 }, { nome: "Seduzir", nivelMaximo: 4 }, { nome: "Subornar", nivelMaximo: 4 }],
  },

  {
    nome: "Explorador",
    apenasInicial: false,
    ouroInicial: 150,
    regrasExtra: "Idioma Adicional: O personagem escolhe um idioma ao adquirir a carreira Explorador. Patrocínio de Exploração: Quando Explorador é uma carreira inicial, o personagem pode receber 25 CO por mês enquanto continuar realizando as obrigações estabelecidas pelo patrono.",
    periciasIniciais: [{ nome: "Detectar", nivel: 1 }, { nome: "Medicina", nivel: 1 }, { nome: "Senso de Direção", nivel: 1 }, { nome: "Sobrevivência", nivel: 1 }],
    habilidadesIniciais: ["Caçador de Feras", "Idioma", "Porto de Escala"],
    conexoesIniciais: ["Patronos Ricos"],
    itensIniciais: [{ nome: "Porta-Mapas", quantidade: 1 }, { nome: "Lupa", quantidade: 1 }],
    escolhas: [
      {
        tipo: "pericia-militar",
        quantidade: 1,
        opcoes: [{ nome: "Arco", nivel: 1 }, { nome: "Arma de Mão", nivel: 1 }, { nome: "Fuzil", nivel: 1 }, { nome: "Pistola", nivel: 1 }],
      },
    ],
    progressaoHabilidades: ["Caçador de Feras", "Ginete Especialista", "Ginete Veloz", "Idioma", "Líder Natural", "Linguagem de Sinais", "Plano de Batalha: Reconhecimento", "Porto de Escala", "Resistência a Doenças", "Resistência a Veneno"],
    progressaoPericiasMilitares: [{ nome: "Arco", nivelMaximo: 2 }, { nome: "Arma de Mão", nivelMaximo: 2 }, { nome: "Besta", nivelMaximo: 2 }, { nome: "Combate Desarmado", nivelMaximo: 2 }, { nome: "Fuzil", nivelMaximo: 3 }, { nome: "Pistola", nivelMaximo: 2 }],
    progressaoPericiasProfissionais: [{ nome: "Comandar", nivelMaximo: 4 }, { nome: "Criptografia", nivelMaximo: 2 }, { nome: "Etiqueta", nivelMaximo: 2 }, { nome: "Ofício", nivelMaximo: 2 }, { nome: "Medicina", nivelMaximo: 2 }, { nome: "Navegação", nivelMaximo: 2 }, { nome: "Negociação", nivelMaximo: 4 }, { nome: "Sobrevivência", nivelMaximo: 4 }, { nome: "Usar Cordas", nivelMaximo: 4 }],
  },

  {
    nome: "Feiticeiro",
    arquetipoExigido: "Dotado",
    apenasInicial: true,
    ouroInicial: 75,
    regrasExtra: "Possui variantes de carreira ainda não modeladas: Fogo, Gelo, Pedra, Tempestade — ver dado original.",
    periciasIniciais: [{ nome: "Detectar", nivel: 1 }, { nome: "Sobrevivência", nivel: 1 }],
    habilidadesIniciais: [],
    conexoesIniciais: [],
    itensIniciais: [],
    escolhas: [
      {
        tipo: "pericia-militar",
        quantidade: 1,
        opcoes: [{ nome: "Arco", nivel: 1 }, { nome: "Arma de Mão", nivel: 1 }, { nome: "Besta", nivel: 1 }],
      },
    ],
    progressaoHabilidades: ["Camuflagem", "Esquivo", "Imunidade: Fogo", "Imunidade: Frio", "Maestria Elemental", "Rastro sem Pegadas"],
    progressaoPericiasMilitares: [{ nome: "Arco", nivelMaximo: 3 }, { nome: "Arma de Arremesso", nivelMaximo: 2 }, { nome: "Arma de Mão", nivelMaximo: 3 }, { nome: "Besta", nivelMaximo: 3 }, { nome: "Combate Desarmado", nivelMaximo: 2 }],
    progressaoPericiasProfissionais: [{ nome: "Esgueirar-se", nivelMaximo: 3 }, { nome: "Sobrevivência", nivelMaximo: 3 }],
  },

  {
    nome: "Fuzileiro",
    apenasInicial: false,
    ouroInicial: 50,
    periciasIniciais: [{ nome: "Fuzil", nivel: 1 }, { nome: "Detectar", nivel: 1 }, { nome: "Escalar", nivel: 1 }, { nome: "Sobrevivência", nivel: 1 }],
    habilidadesIniciais: ["Atirador de Elite", "Exímio Atirador", "Tiro Duplo"],
    conexoesIniciais: [],
    itensIniciais: [{ nome: "Bandoleira de Munição", quantidade: 1 }],
    escolhas: [
      {
        tipo: "item",
        quantidade: 1,
        descricao: "Fuzil Pesado OU Fuzil Longo de Repetição",
        opcoes: [{ nome: "Fuzil Pesado", quantidade: 1 }, { nome: "Fuzil Longo de Repetição", quantidade: 1 }],
      },
    ],
    progressaoHabilidades: ["Atirador de Elite", "Caçador Veloz", "Disparo Montado", "Exímio Atirador", "Franco Atirador", "Lutador Noturno", "Mira Aprimorada", "Recarga Rápida", "Retornar Fogo", "Tiro Duplo"],
    progressaoPericiasMilitares: [{ nome: "Fuzil", nivelMaximo: 4 }],
    progressaoPericiasProfissionais: [{ nome: "Ofício (Fabricação de Armas de Fogo)", nivelMaximo: 4 }, { nome: "Sobrevivência", nivelMaximo: 3 }],
  },

  {
    nome: "Homem de Armas",
    apenasInicial: false,
    ouroInicial: 100,
    periciasIniciais: [{ nome: "Arma Grande", nivel: 1 }, { nome: "Escudo", nivel: 1 }, { nome: "Comandar", nivel: 1 }, { nome: "Detectar", nivel: 1 }],
    habilidadesIniciais: ["Linha Defensiva", "Proteção de Escudo"],
    conexoesIniciais: [],
    itensIniciais: [],
    escolhas: [
      {
        tipo: "pericia-militar",
        quantidade: 1,
        opcoes: [{ nome: "Arma de Mão", nivel: 1 }, { nome: "Pistola", nivel: 1 }],
      },
    ],
    progressaoHabilidades: ["Especialização (Alabarda)", "Especialização (Lança)", "Guarda-Costas", "Golpe com Escudo", "Golpe de Retaliação", "Linha Defensiva", "Preparar Defesa", "Proteção de Escudo", "Protegido", "Suportar Carga", "Trespassar", "Vontade de Ferro"],
    progressaoPericiasMilitares: [{ nome: "Arma de Mão", nivelMaximo: 3 }, { nome: "Arma Grande", nivelMaximo: 4 }, { nome: "Combate Desarmado", nivelMaximo: 3 }, { nome: "Escudo", nivelMaximo: 4 }, { nome: "Pistola", nivelMaximo: 3 }],
    progressaoPericiasProfissionais: [{ nome: "Comandar", nivelMaximo: 3 }, { nome: "Ofício (Metalurgia)", nivelMaximo: 4 }],
  },

  {
    nome: "Investigador",
    apenasInicial: false,
    ouroInicial: 100,
    regrasExtra: "Idioma Adicional: O personagem escolhe um idioma ao adquirir a carreira Investigador. Superpercepção: Quando Investigador é escolhido como uma das carreiras iniciais, o personagem recebe o benefício Superpercepção.",
    periciasIniciais: [{ nome: "Ciência Forense", nivel: 1 }, { nome: "Detectar", nivel: 1 }, { nome: "Esgueirar-se", nivel: 1 }, { nome: "Interrogatório", nivel: 1 }, { nome: "Medicina", nivel: 1 }],
    habilidadesIniciais: ["Astuto", "Idioma"],
    conexoesIniciais: [],
    itensIniciais: [],
    escolhas: [
      {
        tipo: "pericia-militar",
        quantidade: 1,
        opcoes: [{ nome: "Arma de Mão", nivel: 1 }, { nome: "Pistola", nivel: 1 }],
      },
    ],
    progressaoHabilidades: ["Astuto", "Detectar Mentiras", "Espreitar", "Idioma", "Linguagem de Sinais", "Precisão Anatômica", "Vontade de Ferro"],
    progressaoPericiasMilitares: [{ nome: "Arma de Mão", nivelMaximo: 2 }, { nome: "Combate Desarmado", nivelMaximo: 2 }, { nome: "Pistola", nivelMaximo: 2 }],
    progressaoPericiasProfissionais: [{ nome: "Ciência Forense", nivelMaximo: 4 }, { nome: "Criptografia", nivelMaximo: 4 }, { nome: "Direito", nivelMaximo: 4 }, { nome: "Esgueirar-se", nivelMaximo: 4 }, { nome: "Enganar", nivelMaximo: 4 }, { nome: "Etiqueta", nivelMaximo: 2 }, { nome: "Interrogatório", nivelMaximo: 4 }, { nome: "Manha", nivelMaximo: 4 }, { nome: "Medicina", nivelMaximo: 2 }, { nome: "Negociação", nivelMaximo: 3 }, { nome: "Pesquisar", nivelMaximo: 4 }],
  },

  {
    nome: "Ladrão",
    apenasInicial: false,
    ouroInicial: 75,
    periciasIniciais: [{ nome: "Arma de Arremesso", nivel: 1 }, { nome: "Arma de Mão", nivel: 1 }, { nome: "Arrombar", nivel: 2 }, { nome: "Arte da Fuga", nivel: 1 }, { nome: "Enganar", nivel: 1 }, { nome: "Esgueirar-se", nivel: 1 }, { nome: "Manha", nivel: 1 }, { nome: "Punga", nivel: 2 }, { nome: "Subornar", nivel: 1 }],
    habilidadesIniciais: ["Enganador", "Esquivo"],
    conexoesIniciais: [],
    itensIniciais: [{ nome: "Ferramentas de Ladrão", quantidade: 1 }],
    escolhas: [],
    progressaoHabilidades: ["Aparar", "Avaliação", "Camuflagem", "Carteador", "Enganador", "Escapar", "Espreitar", "Esquivo", "Idioma (mais cinco línguas)", "Pés Ligeiros", "Rastro sem Pegadas"],
    progressaoPericiasMilitares: [{ nome: "Arma de Arremesso", nivelMaximo: 3 }, { nome: "Arma de Mão", nivelMaximo: 3 }, { nome: "Combate Desarmado", nivelMaximo: 2 }, { nome: "Pistola", nivelMaximo: 2 }],
    progressaoPericiasProfissionais: [{ nome: "Arrombar", nivelMaximo: 4 }, { nome: "Arte da Fuga", nivelMaximo: 4 }, { nome: "Direito", nivelMaximo: 2 }, { nome: "Disfarce", nivelMaximo: 4 }, { nome: "Enganar", nivelMaximo: 4 }, { nome: "Etiqueta", nivelMaximo: 1 }, { nome: "Falsificar", nivelMaximo: 4 }, { nome: "Esgueirar-se", nivelMaximo: 4 }, { nome: "Manha", nivelMaximo: 4 }, { nome: "Negociação", nivelMaximo: 4 }, { nome: "Ofício", nivelMaximo: 2 }, { nome: "Punga", nivelMaximo: 4 }, { nome: "Subornar", nivelMaximo: 4 }],
  },

  {
    nome: "Lâmina Tempestuosa",
    racaExigida: "Humano",
    apenasInicial: true,
    ouroInicial: 0,
    regrasExtra: "Requer nacionalidade Cygnarano(a). Só pode ser escolhida como segunda carreira junto com: Aristocrata, Cavaleiro, Conjurador de Guerra, Homem de Armas, Oficial Militar, Soldado. Motivo: Lâmina Tempestuosa só pode ser combinada inicialmente com Aristocrata, Cavaleiro, Conjurador de Guerra, Homem de Armas, Oficial Militar ou Soldado.",
    periciasIniciais: [{ nome: "Arma Grande", nivel: 1 }, { nome: "Comandar", nivel: 1 }, { nome: "Detectar", nivel: 1 }, { nome: "Etiqueta", nivel: 1 }],
    habilidadesIniciais: ["Detonador", "Especialização (Gládio Tempestuoso)"],
    conexoesIniciais: ["Exército Cygnarano"],
    itensIniciais: [{ nome: "Gládio Tempestuoso", quantidade: 1 }, { nome: "Armadura de Lâmina Tempestuosa", quantidade: 1 }],
    escolhas: [],
    progressaoHabilidades: ["Controlador de Gigantes", "Detonador", "Especialização (Gládio Tempestuoso)", "Investida Implacável", "Suportar Carga", "Tiro Próximo", "Trabalho Rápido"],
    progressaoPericiasMilitares: [{ nome: "Arma Grande", nivelMaximo: 4 }],
    progressaoPericiasProfissionais: [{ nome: "Comandar", nivelMaximo: 4 }, { nome: "Etiqueta", nivelMaximo: 2 }, { nome: "Medicina", nivelMaximo: 2 }],
  },

  {
    nome: "Mago-Pistoleiro",
    arquetipoExigido: "Dotado",
    apenasInicial: false,
    ouroInicial: 25,
    periciasIniciais: [{ nome: "Detectar", nivel: 1 }, { nome: "Intimidar", nivel: 1 }],
    habilidadesIniciais: ["Fabricar Bala Rúnica", "Recarga Rápida"],
    conexoesIniciais: [],
    itensIniciais: [{ nome: "Bandoleira de Munição", quantidade: 1 }, { nome: "Kit de Fabricação de Bala Rúnica", quantidade: 1 }],
    escolhas: [
      {
        tipo: "pericia-militar",
        quantidade: 1,
        opcoes: [{ nome: "Fuzil", nivel: 1 }, { nome: "Pistola", nivel: 1 }],
      },
      {
        tipo: "item",
        quantidade: 1,
        descricao: "Pistola Arcana OU Fuzil Arcano",
        opcoes: [{ nome: "Pistola Arcana", quantidade: 1 }, { nome: "Fuzil Arcano", quantidade: 1 }],
      },
    ],
    progressaoHabilidades: ["Atirador", "Fabricar Bala Rúnica", "Mira Aguçada", "Precisão Arcana", "Recarga Rápida", "Saque Rápido"],
    progressaoPericiasMilitares: [{ nome: "Fuzil", nivelMaximo: 4 }, { nome: "Pistola", nivelMaximo: 4 }],
    progressaoPericiasProfissionais: [{ nome: "Seduzir", nivelMaximo: 2 }],
  },

  {
    nome: "Mekânico Arcano",
    arquetipoExigido: "Dotado",
    apenasInicial: false,
    ouroInicial: 50,
    regrasExtra: "Item Mekânico Inicial: O personagem começa com uma arma ou armadura mekânica de até 750 CO, incluindo seus componentes mekânicos.",
    periciasIniciais: [{ nome: "Engenharia Mekânica", nivel: 1 }, { nome: "Ofício (Armas de Fogo)", nivel: 1 }, { nome: "Ofício (Metalurgia)", nivel: 1 }],
    habilidadesIniciais: ["Inscrever Fórmulas"],
    conexoesIniciais: [],
    itensIniciais: [{ nome: "Kit de Entalhe de Runas", quantidade: 1 }],
    escolhas: [
      {
        tipo: "pericia-militar",
        quantidade: 1,
        opcoes: [{ nome: "Arma de Mão", nivel: 1 }, { nome: "Fuzil", nivel: 1 }],
      },
    ],
    progressaoHabilidades: ["Ás Comandante", "Controlador de Gigantes", "Engenheiro Arcano", "Engenhoso", "Manobra: Ataque", "Manobra: De Imediato", "Inscrever Fórmulas", "Vaporeiro"],
    progressaoPericiasMilitares: [{ nome: "Arma de Mão", nivelMaximo: 2 }, { nome: "Artilharia Leve", nivelMaximo: 2 }, { nome: "Fuzil", nivelMaximo: 2 }],
    progressaoPericiasProfissionais: [{ nome: "Comandar", nivelMaximo: 1 }, { nome: "Criptografia", nivelMaximo: 3 }, { nome: "Engenharia Mekânica", nivelMaximo: 4 }, { nome: "Negociação", nivelMaximo: 2 }, { nome: "Ofício", nivelMaximo: 4 }, { nome: "Pesquisar", nivelMaximo: 3 }],
  },

  {
    nome: "Mekânico de Campo",
    apenasInicial: false,
    ouroInicial: 25,
    regrasExtra: "Armamento Inicial do Gigante (Gigante de Trabalho Leve): O gigante-de-trabalho leve recebe até 200 CO em armas durante a criação.",
    periciasIniciais: [{ nome: "Comandar", nivel: 1 }, { nome: "Engenharia Mekânica", nivel: 1 }, { nome: "Ofício (Metalurgia)", nivel: 1 }],
    habilidadesIniciais: ["Controlador de Gigantes", "Pro Chão!", "Remendão"],
    conexoesIniciais: ["Organização de Mekânicos"],
    itensIniciais: [{ nome: "Kit de Ferramentas de Mekânico", quantidade: 1 }, { nome: "Gigante de Trabalho Leve", quantidade: 1 }],
    escolhas: [
      {
        tipo: "pericia-militar",
        quantidade: 1,
        opcoes: [{ nome: "Arma de Mão", nivel: 1 }, { nome: "Pistola", nivel: 1 }],
      },
    ],
    progressaoHabilidades: ["Ás Comandante", "Controlador de Gigantes", "Esquivo", "Manobra: Ataque", "Manobra: Ataque Auxiliar", "Manobra: De Imediato", "Manobra: Qualquer Terreno", "Obter Peças", "Pro Chão!", "Remendão", "Sentinela de Ferro", "Sintonizar", "Vaporeiro"],
    progressaoPericiasMilitares: [{ nome: "Arma de Mão", nivelMaximo: 2 }, { nome: "Pistola", nivelMaximo: 2 }],
    progressaoPericiasProfissionais: [{ nome: "Comandar", nivelMaximo: 3 }, { nome: "Engenharia Mekânica", nivelMaximo: 4 }, { nome: "Negociação", nivelMaximo: 3 }, { nome: "Ofício", nivelMaximo: 4 }],
  },

  {
    nome: "Oficial Militar",
    apenasInicial: false,
    ouroInicial: 100,
    periciasIniciais: [{ nome: "Arma de Mão", nivel: 1 }, { nome: "Comandar", nivel: 1 }, { nome: "Medicina", nivel: 1 }, { nome: "Navegação", nivel: 1 }],
    habilidadesIniciais: ["Líder de Equipe", "Líder Natural", "Plano de Batalha: Chamado para Ação"],
    conexoesIniciais: [],
    itensIniciais: [{ nome: "Uniforme de Oficial", quantidade: 1 }],
    escolhas: [
      {
        tipo: "pericia-militar",
        quantidade: 1,
        opcoes: [{ nome: "Arma Grande", nivel: 1 }, { nome: "Pistola", nivel: 1 }],
      },
    ],
    progressaoHabilidades: ["Ás Comandante", "Ataque Montado", "Boa Criação", "Comandante de Batalha", "Controlador de Gigantes", "Defensor", "Disparo Montado", "Ginete Especialista", "Manobra: Ataque", "Manobra: De Imediato", "Investida de Cavalaria", "Líder de Equipe", "Líder Natural", "Linguagem de Sinais", "Plano de Batalha: Abaixar-se", "Plano de Batalha: Chamado para Ação", "Plano de Batalha: Golpe Coordenado", "Plano de Batalha: Ritmo Desesperado", "Porto de Escala"],
    progressaoPericiasMilitares: [{ nome: "Arma de Mão", nivelMaximo: 4 }, { nome: "Arma Grande", nivelMaximo: 4 }, { nome: "Pistola", nivelMaximo: 4 }],
    progressaoPericiasProfissionais: [{ nome: "Comandar", nivelMaximo: 4 }, { nome: "Criptografia", nivelMaximo: 4 }, { nome: "Direito", nivelMaximo: 4 }, { nome: "Etiqueta", nivelMaximo: 4 }, { nome: "Interrogatório", nivelMaximo: 4 }, { nome: "Medicina", nivelMaximo: 4 }, { nome: "Navegação", nivelMaximo: 4 }, { nome: "Oratória", nivelMaximo: 4 }],
  },

  {
    nome: "Patrulheiro",
    apenasInicial: false,
    ouroInicial: 75,
    periciasIniciais: [{ nome: "Arma de Mão", nivel: 1 }, { nome: "Detectar", nivel: 1 }, { nome: "Esgueirar-se", nivel: 1 }, { nome: "Rastrear", nivel: 1 }, { nome: "Sobrevivência", nivel: 1 }],
    habilidadesIniciais: ["Camuflagem", "Desbravador"],
    conexoesIniciais: [],
    itensIniciais: [],
    escolhas: [
      {
        tipo: "pericia-militar",
        quantidade: 1,
        opcoes: [{ nome: "Arco", nivel: 1 }, { nome: "Besta", nivel: 1 }, { nome: "Fuzil", nivel: 1 }, { nome: "Pistola", nivel: 1 }],
      },
    ],
    progressaoHabilidades: ["Caçador Veloz", "Camuflagem", "Cavalaria Ligeira", "Desbravador", "Disparo Montado", "Espreitar", "Ginete Veloz", "Linguagem de Sinais", "Lutador Noturno", "Plano de Batalha: Abaixar-se", "Plano de Batalha: Reconhecimento", "Plano de Batalha: Sombra", "Recarga Rápida", "Rastro sem Pegadas", "Resistência a Doenças"],
    progressaoPericiasMilitares: [{ nome: "Arco", nivelMaximo: 4 }, { nome: "Arma de Arremesso", nivelMaximo: 4 }, { nome: "Arma de Mão", nivelMaximo: 2 }, { nome: "Besta", nivelMaximo: 3 }, { nome: "Combate Desarmado", nivelMaximo: 3 }, { nome: "Fuzil", nivelMaximo: 4 }, { nome: "Pistola", nivelMaximo: 2 }],
    progressaoPericiasProfissionais: [{ nome: "Comandar", nivelMaximo: 3 }, { nome: "Criptografia", nivelMaximo: 1 }, { nome: "Esgueirar-se", nivelMaximo: 4 }, { nome: "Medicina", nivelMaximo: 3 }, { nome: "Navegação", nivelMaximo: 4 }, { nome: "Ofício", nivelMaximo: 2 }, { nome: "Rastrear", nivelMaximo: 4 }, { nome: "Sobrevivência", nivelMaximo: 4 }, { nome: "Usar Cordas", nivelMaximo: 4 }],
  },

  {
    nome: "Pirata",
    apenasInicial: false,
    ouroInicial: 75,
    periciasIniciais: [{ nome: "Arma de Mão", nivel: 1 }, { nome: "Escalar", nivel: 1 }, { nome: "Intimidar", nivel: 1 }, { nome: "Nadar", nivel: 1 }, { nome: "Marinhagem", nivel: 1 }],
    habilidadesIniciais: ["Especialização (Alfanje)", "Estável", "Gangue"],
    conexoesIniciais: [],
    itensIniciais: [],
    escolhas: [
      {
        tipo: "pericia-militar",
        quantidade: 1,
        opcoes: [{ nome: "Arma de Arremesso", nivel: 1 }, { nome: "Pistola", nivel: 1 }],
      },
    ],
    progressaoHabilidades: ["Ataque Surpresa", "Atirador", "Cabeçada", "Especialização (Alfanje)", "Estável", "Gangue", "Idioma", "Otário!", "Porto de Escala", "Resistência a Doenças", "Retentor", "Trabalho Rápido"],
    progressaoPericiasMilitares: [{ nome: "Arma de Arremesso", nivelMaximo: 3 }, { nome: "Arma de Mão", nivelMaximo: 3 }, { nome: "Artilharia Leve", nivelMaximo: 2 }, { nome: "Combate Desarmado", nivelMaximo: 3 }, { nome: "Fuzil", nivelMaximo: 2 }, { nome: "Pistola", nivelMaximo: 3 }],
    progressaoPericiasProfissionais: [{ nome: "Comandar", nivelMaximo: 2 }, { nome: "Enganar", nivelMaximo: 3 }, { nome: "Navegação", nivelMaximo: 4 }, { nome: "Marinhagem", nivelMaximo: 4 }, { nome: "Negociação", nivelMaximo: 2 }, { nome: "Usar Cordas", nivelMaximo: 4 }],
  },

  {
    nome: "Pistoleiro",
    apenasInicial: false,
    ouroInicial: 50,
    periciasIniciais: [{ nome: "Pistola", nivel: 1 }, { nome: "Detectar", nivel: 1 }, { nome: "Esgueirar-se", nivel: 1 }, { nome: "Intimidar", nivel: 1 }],
    habilidadesIniciais: ["Atirador", "Retornar Fogo", "Saque Rápido"],
    conexoesIniciais: [],
    itensIniciais: [{ nome: "Bandoleira de Munição", quantidade: 1 }],
    escolhas: [
      {
        tipo: "item",
        quantidade: 1,
        descricao: "Canhão de Mão OU Par de Pistolas de Repetição",
        opcoes: [{ nome: "Canhão de Mão", quantidade: 1 }, { nome: "Par de Pistolas de Repetição", quantidade: 1 }],
      },
    ],
    progressaoHabilidades: ["Ataque em Sequência: Prender", "Atirador", "Caçador Veloz", "Combater com Duas Armas", "Esquivo", "Mira Aprimorada", "Recarga Rápida", "Retornar Fogo", "Saque Rápido"],
    progressaoPericiasMilitares: [{ nome: "Pistola", nivelMaximo: 4 }],
    progressaoPericiasProfissionais: [{ nome: "Esgueirar-se", nivelMaximo: 3 }, { nome: "Ofício (Fabricação de Armas de Fogo)", nivelMaximo: 4 }],
  },

  {
    nome: "Presa de Ferro",
    racaExigida: "Humano",
    apenasInicial: true,
    ouroInicial: 25,
    regrasExtra: "Requer nacionalidade Khadorano(a). Só pode ser escolhida como segunda carreira junto com: Aristocrata, Conjurador de Guerra, Oficial Militar, Soldado. Motivo: Presa de Ferro só pode ser combinado inicialmente com Aristocrata, Conjurador de Guerra, Oficial Militar ou Soldado.",
    periciasIniciais: [{ nome: "Arma Grande", nivel: 1 }, { nome: "Escudo", nivel: 1 }, { nome: "Comandar", nivel: 1 }, { nome: "Sobrevivência", nivel: 1 }],
    habilidadesIniciais: ["Especialização (Lança Explosiva)", "Rearme Rápido (Lança Explosiva)"],
    conexoesIniciais: ["Exército Khadorano"],
    itensIniciais: [{ nome: "Armadura Completa", quantidade: 1 }, { nome: "Escudo", quantidade: 1 }, { nome: "Lança Explosiva", quantidade: 1 }, { nome: "Ponta de Lança", quantidade: 1 }, { nome: "Ponta Explosiva", quantidade: 10 }],
    escolhas: [],
    progressaoHabilidades: ["Ataque Preciso", "Especialização (Lança Explosiva)", "Ginete Veloz", "Investida Implacável", "Linha Defensiva", "Rearme Rápido (Lança Explosiva)", "Sólido como Rocha", "Superconsciência", "Suportar Carga"],
    progressaoPericiasMilitares: [{ nome: "Arma Grande", nivelMaximo: 4 }, { nome: "Combate Desarmado", nivelMaximo: 3 }, { nome: "Escudo", nivelMaximo: 4 }, { nome: "Lança", nivelMaximo: 4 }],
    progressaoPericiasProfissionais: [{ nome: "Comandar", nivelMaximo: 4 }, { nome: "Sobrevivência", nivelMaximo: 2 }],
  },

  {
    nome: "Sacerdote",
    racaExigida: "Humano",
    arquetipoExigido: "Dotado",
    apenasInicial: false,
    ouroInicial: 75,
    regrasExtra: "Requer (religião Morrow OU religião Menoth). Possui variantes de carreira ainda não modeladas: Sacerdote de Morrow, Sacerdote de Menoth — ver dado original.",
    periciasIniciais: [],
    habilidadesIniciais: [],
    conexoesIniciais: [],
    itensIniciais: [],
    escolhas: [],
    progressaoHabilidades: ["Coro", "Educação Universitária", "Grito de Guerra", "Idioma", "Líder Natural"],
    progressaoPericiasMilitares: [{ nome: "Arma de Mão", nivelMaximo: 3 }, { nome: "Arma Grande", nivelMaximo: 3 }, { nome: "Escudo", nivelMaximo: 2 }],
    progressaoPericiasProfissionais: [{ nome: "Comandar", nivelMaximo: 2 }, { nome: "Criptografia", nivelMaximo: 2 }, { nome: "Direito", nivelMaximo: 4 }, { nome: "Etiqueta", nivelMaximo: 4 }, { nome: "Medicina", nivelMaximo: 4 }, { nome: "Negociação", nivelMaximo: 4 }, { nome: "Oratória", nivelMaximo: 4 }, { nome: "Pesquisar", nivelMaximo: 4 }],
  },

  {
    nome: "Salteador",
    apenasInicial: false,
    ouroInicial: 75,
    periciasIniciais: [{ nome: "Arma de Mão", nivel: 1 }, { nome: "Cavalgar", nivel: 1 }, { nome: "Detectar", nivel: 1 }, { nome: "Intimidar", nivel: 1 }, { nome: "Lidar com Animais", nivel: 1 }],
    habilidadesIniciais: ["Disparo Montado", "Emboscada"],
    conexoesIniciais: [],
    itensIniciais: [{ nome: "Cavalo de Montaria", quantidade: 1 }, { nome: "Máscara", quantidade: 1 }, { nome: "Arreios", quantidade: 1 }],
    escolhas: [
      {
        tipo: "pericia-militar",
        quantidade: 1,
        opcoes: [{ nome: "Arco", nivel: 1 }, { nome: "Besta", nivel: 1 }, { nome: "Pistola", nivel: 1 }],
      },
    ],
    progressaoHabilidades: ["Ataque Montado", "Ataque Surpresa", "Avaliação", "Caçador Veloz", "Cavalaria Ligeira", "Combater com Duas Armas", "Disparo Montado", "Emboscada", "Espreitar", "Ginete Especialista", "Ginete Veloz", "Rastro sem Pegadas", "Recarga Rápida", "Retentor", "Saque Rápido"],
    progressaoPericiasMilitares: [{ nome: "Arco", nivelMaximo: 3 }, { nome: "Arma de Mão", nivelMaximo: 3 }, { nome: "Besta", nivelMaximo: 3 }, { nome: "Combate Desarmado", nivelMaximo: 3 }, { nome: "Pistola", nivelMaximo: 3 }],
    progressaoPericiasProfissionais: [{ nome: "Disfarce", nivelMaximo: 2 }, { nome: "Enganar", nivelMaximo: 3 }, { nome: "Esgueirar-se", nivelMaximo: 4 }, { nome: "Interrogatório", nivelMaximo: 2 }, { nome: "Negociação", nivelMaximo: 4 }, { nome: "Seduzir", nivelMaximo: 4 }, { nome: "Sobrevivência", nivelMaximo: 2 }, { nome: "Subornar", nivelMaximo: 2 }, { nome: "Usar Cordas", nivelMaximo: 4 }],
  },

  {
    nome: "Soldado",
    apenasInicial: false,
    ouroInicial: 100,
    periciasIniciais: [{ nome: "Conduzir", nivel: 1 }, { nome: "Detectar", nivel: 1 }, { nome: "Medicina", nivel: 1 }, { nome: "Sobrevivência", nivel: 1 }],
    habilidadesIniciais: ["Encontrar Cobertura", "Sentinela"],
    conexoesIniciais: [],
    itensIniciais: [],
    escolhas: [
      {
        tipo: "pericia-militar",
        quantidade: 2,
        opcoes: [{ nome: "Arma de Arremesso", nivel: 1 }, { nome: "Arma de Mão", nivel: 1 }, { nome: "Arma Grande", nivel: 1 }, { nome: "Besta", nivel: 1 }, { nome: "Fuzil", nivel: 1 }, { nome: "Pistola", nivel: 1 }],
      },
    ],
    progressaoHabilidades: ["Absorver Impacto", "Avanço Cuidadoso", "Ataque Montado", "Controlador de Gigantes", "Disparo Montado", "Encontrar Cobertura", "Granadeiro", "Idioma", "Investida de Cavalaria", "Pro Chão!", "Resistência a Doenças", "Recarga Rápida", "Sentinela"],
    progressaoPericiasMilitares: [{ nome: "Arma de Arremesso", nivelMaximo: 3 }, { nome: "Arma de Mão", nivelMaximo: 3 }, { nome: "Arma Grande", nivelMaximo: 4 }, { nome: "Artilharia Leve", nivelMaximo: 3 }, { nome: "Besta", nivelMaximo: 3 }, { nome: "Combate Desarmado", nivelMaximo: 3 }, { nome: "Escudo", nivelMaximo: 2 }, { nome: "Fuzil", nivelMaximo: 4 }, { nome: "Pistola", nivelMaximo: 3 }],
    progressaoPericiasProfissionais: [{ nome: "Comandar", nivelMaximo: 3 }, { nome: "Esgueirar-se", nivelMaximo: 2 }, { nome: "Medicina", nivelMaximo: 3 }, { nome: "Navegação", nivelMaximo: 2 }, { nome: "Sobrevivência", nivelMaximo: 3 }],
  },

  {
    nome: "Soldado de Trincheira",
    apenasInicial: true,
    ouroInicial: 25,
    regrasExtra: "Requer (raça Humano OU raça Ogrun OU raça Trolloide). Requer nacionalidade Cygnarano(a). Só pode ser escolhida como segunda carreira junto com: Conjurador de Guerra, Fuzileiro, Oficial Militar, Patrulheiro, Soldado. Motivo: Soldado de Trincheira só pode ser combinado inicialmente com Conjurador de Guerra, Fuzileiro, Oficial Militar, Patrulheiro ou Soldado.",
    periciasIniciais: [{ nome: "Arma de Arremesso", nivel: 1 }, { nome: "Arma Grande", nivel: 1 }, { nome: "Fuzil", nivel: 1 }, { nome: "Comandar", nivel: 1 }, { nome: "Detectar", nivel: 1 }],
    habilidadesIniciais: ["Entrincheirar-se", "Investida de Baioneta"],
    conexoesIniciais: ["Exército Cygnarano"],
    itensIniciais: [{ nome: "Armadura de Infantaria", quantidade: 1 }, { nome: "Bandoleira de Munição", quantidade: 1 }, { nome: "Baioneta", quantidade: 1 }, { nome: "Fuzil Militar", quantidade: 1 }, { nome: "Granada de Fumaça", quantidade: 3 }, { nome: "Pá de Trincheira", quantidade: 1 }],
    escolhas: [],
    progressaoHabilidades: ["Bombardeiro", "Controlador de Gigantes", "Entrincheirar-se", "Especialização (Baioneta)", "Fogo no Buraco!", "Granadeiro", "Investida de Baioneta", "Investida Implacável", "Precisão Anatômica", "Pro Chão!"],
    progressaoPericiasMilitares: [{ nome: "Arma de Arremesso", nivelMaximo: 4 }, { nome: "Arma de Mão", nivelMaximo: 3 }, { nome: "Arma Grande", nivelMaximo: 4 }, { nome: "Artilharia Leve", nivelMaximo: 4 }, { nome: "Combate Desarmado", nivelMaximo: 3 }, { nome: "Fuzil", nivelMaximo: 4 }, { nome: "Pistola", nivelMaximo: 3 }],
    progressaoPericiasProfissionais: [{ nome: "Comandar", nivelMaximo: 3 }, { nome: "Esgueirar-se", nivelMaximo: 3 }, { nome: "Interrogatório", nivelMaximo: 3 }, { nome: "Medicina", nivelMaximo: 3 }, { nome: "Sobrevivência", nivelMaximo: 3 }],
  },
];
