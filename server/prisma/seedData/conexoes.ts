export interface ConexaoSeed {
  nome: string;
  beneficio: string;
}

export const conexoes: ConexaoSeed[] = [
  {
    nome: "Clã Anão",
    beneficio:
      "O personagem possui relações com um clã anão. Essa conexão pode representar laços familiares, comerciais ou de confiança com membros do clã.",
  },
  {
    nome: "Exército",
    beneficio:
      "O personagem possui contatos em um exército de um dos reinos dos Reinos de Ferro.",
  },
  {
    nome: "Companhia Mercenária",
    beneficio:
      "O personagem possui contatos em uma companhia mercenária, possivelmente por serviço atual ou anterior.",
  },
  {
    nome: "Exército ou Companhia Mercenária",
    beneficio:
      "Entrada usada quando a carreira permite escolher uma conexão com um exército ou com uma companhia mercenária (o jogador escolhe uma das duas).",
  },
  {
    nome: "Exército Cygnarano",
    beneficio:
      "O personagem possui uma conexão específica com o exército de Cygnar (variante da conexão Exército).",
  },
  {
    nome: "Exército Khadorano",
    beneficio:
      "O personagem possui uma conexão específica com o exército de Khador (variante da conexão Exército).",
  },
  {
    nome: "Igreja",
    beneficio:
      "O personagem possui contatos dentro de uma das principais religiões de Immoren ocidental.",
  },
  {
    nome: "Igreja do Personagem",
    beneficio:
      "Entrada técnica que representa a igreja correspondente à fé escolhida pelo personagem.",
  },
  {
    nome: "Igreja de Morrow",
    beneficio:
      "O personagem possui uma conexão específica com a Igreja de Morrow (variante da conexão Igreja).",
  },
  {
    nome: "Templo Menita",
    beneficio:
      "O personagem possui uma conexão específica com o Templo de Menoth (variante da conexão Igreja).",
  },
  {
    nome: "Kriel",
    beneficio:
      "O personagem possui contatos com um kriel trolloide, podendo ser membro, amigo ou aliado do grupo.",
  },
  {
    nome: "Tribos Isoladas",
    beneficio:
      "Conexão citada na progressão da carreira Explorador, representando contatos com povos ou comunidades isoladas.",
  },
  {
    nome: "Nobreza",
    beneficio:
      "O personagem possui contatos entre membros da nobreza, famílias influentes ou pessoas ligadas aos salões do poder.",
  },
  {
    nome: "Ordem Alquímica",
    beneficio:
      "O personagem possui contatos com uma ordem alquímica ou organização semelhante.",
  },
  {
    nome: "Ordem de Cavalaria",
    beneficio:
      "O personagem possui uma conexão com uma ordem de cavalaria, como membro ou apoiador.",
  },
  {
    nome: "Ordem Mágica",
    beneficio: "O personagem possui uma conexão com uma ordem arcana.",
  },
  {
    nome: "Organização de Mekânicos",
    beneficio:
      "O personagem possui contatos com uma organização, empresa ou sindicato mekânico importante.",
  },
  {
    nome: "Patronos Ricos",
    beneficio:
      "O personagem possui uma rede de patronos ricos interessados em apoiar suas atividades e acompanhar seus resultados.",
  },
  {
    nome: "Rede de Inteligência",
    beneficio:
      "O personagem possui acesso a uma organização de espionagem e sua rede de agentes.",
  },
  {
    nome: "Retribuição de Scyrah",
    beneficio:
      "Conexão específica com a Retribuição de Scyrah (variante da conexão Rede de Inteligência).",
  },
  {
    nome: "Submundo",
    beneficio:
      "O personagem possui contatos com o crime organizado e o submundo, normalmente ligados a uma cidade ou organização específica.",
  },
  {
    nome: "Tripulação Pirata",
    beneficio:
      "O personagem possui uma ligação com uma tripulação pirata, normalmente como membro ou contato próximo.",
  },
  {
    nome: "Empregador",
    beneficio:
      "Conexão profissional com um empregador, cliente ou organização que contrata os serviços do personagem.",
  },
  {
    nome: "Qualquer Conexão",
    beneficio:
      "Entrada técnica que indica que a carreira permite escolher qualquer conexão válida.",
  },
];
