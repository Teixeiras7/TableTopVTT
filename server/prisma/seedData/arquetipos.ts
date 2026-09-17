export interface ArquetipoSeed {
  nome: string;
  passivaFixa: string;
  opcoesTexto: string;
}

export const arquetipos: ArquetipoSeed[] = [
  {
    nome: "Dotado",
    passivaFixa:
      "Concede a capacidade de usar magia: permite escolher carreiras mágicas e possuir o atributo ARC. Começa com uma tradição arcana; Focalizadores começam com ARC 2 e Tecelões da Vontade com ARC 3.",
    opcoesTexto:
      "Círculo de Proteção: cria um círculo de runas protetoras ao redor de uma pequena área; Conjurador de Combate: jogadas de ataque mágico ganham um dado adicional, eliminando o menor; Conjurador Rápido: recebe uma ação rápida adicional utilizável somente para lançar magia; Estudo Adicional (repetível): aprende uma magia adicional de uma das listas de magia de suas carreiras; Façanha: Conjurador Poderoso: gasta 1 ponto de façanha ao lançar uma magia para aumentar seu alcance; Façanha: Conjurador Veloz: gasta 1 ponto de façanha para lançar imediatamente uma magia mantida no início do combate; Façanha: Convicção (requer tradição Tecelão da Vontade): após falhar um teste de fadiga, gasta 1 ponto de façanha para obter sucesso automático; Façanha: Dominador: gasta 1 ponto de façanha durante o turno para dobrar sua área de controle por uma rodada; Leitura de Runas: permite identificar uma magia visível através das runas usadas em sua conjuração; Sensibilidade Mágica: detecta automaticamente conjurações próximas de acordo com o valor de ARC.",
  },
  {
    nome: "Habilidoso",
    passivaFixa:
      "É extremamente rápido, ágil e habilidoso, confiando em astúcia, sagacidade e sorte. Ao escolher atacar durante sua Fase de Ativação, recebe um ataque adicional naquele turno.",
    opcoesTexto:
      "Ágil: testes de AGI são ampliados; Ambidestro: não sofre a penalidade normal na jogada de ataque com a segunda arma ao usar Combater com Duas Armas; Atenção Sobrenatural: testes de Iniciativa ampliados e inimigos não recebem bônus por atacar pelas costas; Cauteloso: recebe benefícios especiais quando derrubado e pode se levantar sem gastar movimento ou ação; Façanha: Audaz: gasta 1 ponto de façanha para realizar ataques corpo-a-corpo contra inimigos ao redor; Façanha: Desarme: após atingir um inimigo com ataque válido, gasta 1 ponto de façanha para desarmá-lo em vez de causar dano; Façanha: Golpe Defensivo: quando um inimigo avança e termina no alcance corpo-a-corpo, pode atacá-lo imediatamente gastando 1 ponto de façanha; Façanha: Intocável: gasta 1 ponto de façanha para receber +3 DEF durante uma rodada; Passo Lateral: após atingir um inimigo com arma corpo-a-corpo, pode avançar sem sofrer ataques livres; Virtuoso (repetível): escolhe uma perícia militar; ataques apropriados com essa perícia recebem um dado adicional nas jogadas de ataque e dano, eliminando o menor.",
  },
  {
    nome: "Intelectual",
    passivaFixa:
      "É extremamente inteligente, pensa rapidamente e consegue elaborar e executar planos complexos. Recebe +1 nas jogadas de ataque e dano; aliados dentro do alcance de comando que puderem ouvir suas ordens também recebem o bônus.",
    opcoesTexto:
      "Coordenação em Campo de Batalha: aliados dentro do alcance de comando ignoram certas penalidades por atacar alvos engajados; Façanha: Guerra Não Convencional: gasta 1 ponto de façanha para usar o ambiente de maneira criativa contra inimigos; Façanha: Pensamento Rápido: uma vez por rodada, gasta 1 ponto de façanha para realizar um ataque ou ação rápida no início do turno de outro personagem; Façanha: Plano de Ação: no início do combate, gasta 1 ponto de façanha para conceder bônus de iniciativa e ataque na primeira rodada aos aliados que seguirem o plano; Façanha: Plano Perfeito: gasta 1 ponto de façanha para elaborar um plano detalhado que concede benefícios em testes fora de combate; Façanha: Presciente: gasta 1 ponto de façanha para ganhar automaticamente a iniciativa; Façanha: Reflexo Impecável: gasta 1 ponto de façanha para escolher um inimigo e fazer com que o próximo ataque direto bem-sucedido dele contra você seja considerado uma falha; Gênio: testes de INT são ampliados; Memória Fotográfica: permite recordar com precisão acontecimentos vistos ou vividos pelo personagem; Superpercepção: testes de PER são ampliados.",
  },
  {
    nome: "Poderoso",
    passivaFixa:
      "É incrivelmente forte e resistente, estando no ápice da condição física. Recebe um dado adicional nos testes de dano corpo-a-corpo.",
    opcoesTexto:
      "Durão: quando incapacitado, tem uma chance de recuperar 1 ponto de vitalidade e continuar consciente; Façanha: Contra-Investida: quando um inimigo avança e termina próximo de você, gasta 1 ponto de façanha para investir contra ele; Façanha: Golpe de Retorno: uma vez por turno, gasta 1 ponto de façanha para receber um ataque corpo-a-corpo adicional; Façanha: Invulnerável: gasta 1 ponto de façanha para receber +3 ARM durante uma rodada; Façanha: Quebra-Escudo: após atingir com ataque corpo-a-corpo um alvo com escudo, gasta 1 ponto de façanha para destruir o escudo; Façanha: Revitalizar: gasta 1 ponto de façanha para recuperar vitalidade igual ao seu FIS; Façanha: Salto Superior: gasta 1 ponto de façanha para realizar um grande avanço durante o turno; Façanha: Vingança: escolhe um inimigo; pelo restante do encontro seus testes de ataque contra ele são ampliados (gasta 1 ponto de façanha); Fúria Justa: quando um aliado próximo sofre dano de ataque inimigo, você recebe +2 FOR e +2 ARM durante uma rodada; Repelir: quando atinge um alvo corpo-a-corpo, pode empurrá-lo e avançar em seguida.",
  },
];
