// Condições de combate (manual, Cap. 4 "O Jogo", texto conferido linha a
// linha no dump extraído do PDF — não são um resumo de memória).

export interface CondicaoSeed {
  nome: string;
  efeito: string;
}

export const condicoes: CondicaoSeed[] = [
  {
    nome: "Derrubado",
    efeito:
      "Não pode se mover, executar ações, atacar ou lançar magias, e não tem alcance corpo-a-corpo. Não se engaja com outros personagens nem é engajado por eles. Um ataque corpo-a-corpo contra ele acerta automaticamente. DEF base 5. Não bloqueia linha de visão e pode ser ignorado ao mirar. Pode se levantar ou deitar no início do próprio turno, abrindo mão do movimento ou das ações daquele turno.",
  },
  {
    nome: "Nocauteado",
    efeito:
      "Ao ser nocauteado, fica derrubado (mesmo com habilidade que impeça isso) e magias sustentadas terminam. Não pode alocar foco, agir, atacar ou se mover, e abre mão da Fase de Ativação. No início de cada turno, faz um teste de VON contra número-alvo 14 para recuperar a consciência; se tiver sucesso, deixa de estar nocauteado (mas continua derrubado). Só personagens vivos podem ser nocauteados.",
  },
  {
    nome: "Imóvel",
    efeito:
      "Não pode ativar, não tem alcance corpo-a-corpo e não se engaja com outros personagens. Não pode avançar, agir, atacar ou conjurar magias. Uma jogada de ataque corpo-a-corpo contra ele acerta automaticamente. DEF base 5.",
  },
  {
    nome: "Furtivo",
    efeito:
      "Extremamente difícil de perceber e alvejar. Ataques à distância e mágicos que não sejam de rajada erram automaticamente se o ponto de origem estiver a mais de 10 metros de distância. Não conta como miniatura interposta para linha de visão a partir de mais de 10 metros.",
  },
  {
    nome: "Abalado",
    efeito:
      "Gravemente atordoado, perde os sentidos. Recupera-se ao receber uma dose de estimulante simples ou se outro personagem BAB com ele gastar uma ação completa. Ao sair do estado, recupera 1 ponto de vitalidade e deixa de estar incapacitado. Sem ajuda, sai do estado ao final do encontro.",
  },
  {
    nome: "Ferido Gravemente",
    efeito:
      "Morre a menos que seja estabilizado em uma quantidade de rodadas igual ao próprio FIS. Para estabilizar, outro personagem deve ficar BAB, gastar uma ação completa e ter sucesso em um teste de INT + Medicina contra número-alvo 14.",
  },
  {
    nome: "Recuperação Lenta",
    efeito:
      "Não recupera vitalidade na taxa normal e não pode gastar pontos de façanha para recuperar vitalidade. Recupera apenas 1 ponto ao final do encontro em que foi ferido, mais 1 ponto adicional por semana (mais se tratado diariamente por alguém com Medicina). Termina ao recuperar toda a vitalidade perdida.",
  },
  {
    nome: "Construto",
    efeito: "Não está vivo; passa automaticamente em testes de Força de Vontade que não mencionem especificamente construtos.",
  },
  {
    nome: "Morto-Vivo",
    efeito: "Não é considerado vivo; passa automaticamente em testes de Força de Vontade que não mencionem especificamente mortos-vivos.",
  },
  {
    nome: "Incorpóreo",
    efeito:
      "Move-se através de terreno difícil e obstáculos sem penalidade, e pode avançar através de obstruções e outros personagens com movimento suficiente. Só armas mágicas causam dano a ele. Imune a efeitos contínuos e não pode ser lançado.",
  },
];
