export interface MagiaSeed {
  nome: string;
  custo: number;
  alcance: string;
  ade?: string;
  pod?: string;
  sustentavel: boolean;
  atributo?: string;
  efeito: string;
  carreiras: string[];
}

export const magias: MagiaSeed[] = [
  {
    nome: "A Todo Vapor",
    custo: 3,
    alcance: "CJR",
    sustentavel: false,
    efeito: "Gigantes-a-vapor sob controle do conjurador que comecem seu turno em sua área de controle podem correr, fazer investida ou ataques poderosos de atropelar ou lançar sem gastar foco ou serem manobrados. O conjurador e os gigantes-a-vapor sob controle dele e em sua área de controle ganham jogadas ampliadas de ataque corpo-a-corpo. A Todo Vapor dura uma rodada.",
    carreiras: ["Mekânico Arcano"],
  },

  {
    nome: "À Prova de Falhas",
    custo: 3,
    alcance: "6",
    sustentavel: true,
    efeito: "O gigante-a-vapor alvo ganha +2 de ARM e não sofre os efeitos dos sistemas enfraquecidos.",
    carreiras: ["Conjurador de Guerra", "Mekânico Arcano"],
  },

  {
    nome: "Acender Fogo",
    custo: 1,
    alcance: "8",
    sustentavel: false,
    atributo: "ARC",
    efeito: "O conjurador inicia uma pequena fogueira dentro do alcance da magia e na linha de visão. Esta magia pode ser usada para atingir um inimigo; neste caso, requer uma jogada de ataque. Se o inimigo for atingido, sofre o efeito contínuo de Fogo.",
    carreiras: ["Arcanista", "Feiticeiro"],
  },

  {
    nome: "Agressão de Ferro",
    custo: 3,
    alcance: "6",
    sustentavel: true,
    efeito: "O gigante-a-vapor alvo pode correr, fazer investida ou ataques poderosos de atropelar ou lançar sem gastar foco ou ser manobrado e ganha jogadas ampliadas de ataque corpo-a-corpo.",
    carreiras: ["Conjurador de Guerra", "Mekânico Arcano"],
  },

  {
    nome: "Além do Limite",
    custo: 2,
    alcance: "6",
    sustentavel: true,
    efeito: "O gigante-a-vapor alvo aliado ganha +2 de FOR e VEL e pode correr, fazer investida ou ataques poderosos de atropelar ou lançar sem gastar foco ou ser manobrado. Quando o gigante-a-vapor termina seu turno, sofre 1d3 pontos de dano.",
    carreiras: ["Conjurador de Guerra", "Mekânico Arcano"],
  },

  {
    nome: "Amplificador de Energia",
    custo: 1,
    alcance: "5",
    sustentavel: false,
    efeito: "Se o gigante-a-vapor alvo que o conjurador controlar não tiver pontos de foco, ele ganha 1 ponto de foco. Se o gigante-a-vapor estiver Interrompido, ele não está mais Interrompido.",
    carreiras: ["Mekânico Arcano"],
  },

  {
    nome: "Apresamento Gélido",
    custo: 4,
    alcance: "8",
    sustentavel: false,
    atributo: "ARC",
    efeito: "O alvo fica imóvel por uma rodada. Apresamento Gélido não afeta alvos que possuam Imunidade: Frio.",
    carreiras: ["Feiticeiro"],
  },

  {
    nome: "Aríete",
    custo: 2,
    alcance: "6",
    pod: "12",
    sustentavel: false,
    atributo: "ARC",
    efeito: "Um alvo atingido por Aríete pode ser empurrado 3″ diretamente para longe do ponto de origem da magia.",
    carreiras: ["Conjurador de Guerra", "Feiticeiro"],
  },

  {
    nome: "Asas de Ar",
    custo: 2,
    alcance: "CJR",
    sustentavel: false,
    efeito: "Coloque o conjurador em qualquer lugar dentro de 5″ de sua localização. Asas de Ar só pode ser conjurada uma vez por turno.",
    carreiras: ["Feiticeiro"],
  },

  {
    nome: "Ataque de Retribuição",
    custo: 1,
    alcance: "6",
    sustentavel: false,
    efeito: "Quando o alvo for atingido por um ataque à distância inimigo, após esse ataque ser resolvido, o personagem afetado pode fazer um ataque normal corpo-a-corpo ou à distância, depois Ataque de Retribuição termina. Ataque de Retribuição dura uma rodada.",
    carreiras: ["Conjurador de Guerra", "Mago-Pistoleiro", "Mekânico Arcano"],
  },

  {
    nome: "Atiçar as Chamas",
    custo: 3,
    alcance: "CJR",
    sustentavel: true,
    efeito: "Efeitos contínuos de fogo na área de controle do conjurador nunca terminam.",
    carreiras: ["Feiticeiro"],
  },

  {
    nome: "Aura de Proteção",
    custo: 2,
    alcance: "CJR",
    sustentavel: true,
    efeito: "Aliados ganham +2 de ARM enquanto estiverem na área de controle do conjurador.",
    carreiras: ["Arcanista", "Conjurador de Guerra", "Sacerdote"],
  },

  {
    nome: "Bando de Artilharia",
    custo: 3,
    alcance: "CJR",
    sustentavel: false,
    efeito: "O conjurador e os gigantes-a-vapor atualmente sob controle do conjurador em sua área de controle podem fazer imediatamente um ataque à distância normal. Bando de Artilharia só pode ser conjurada uma vez por turno.",
    carreiras: ["Mekânico Arcano"],
  },

  {
    nome: "Barreira de Chamas",
    custo: 3,
    alcance: "CJR",
    sustentavel: false,
    efeito: "Aliados na área de controle do conjurador ganham +1 de DEF. Quando um aliado é atingido por um ataque corpo-a-corpo enquanto estiver na área de controle do conjurador, o atacante sofre o efeito contínuo de Fogo. Barreira de Chamas dura uma rodada.",
    carreiras: ["Feiticeiro"],
  },

  {
    nome: "Bênção da Saúde",
    custo: 1,
    alcance: "6",
    sustentavel: true,
    efeito: "O alvo ganha +3 em jogadas de FIS para resistir a veneno, doenças e infecções. Além disso, se o personagem afetado estiver sofrendo os efeitos de um veneno, ele faz imediatamente um teste de FIS contra o nível de toxina do veneno. Se tiver sucesso, os efeitos do veneno terminam imediatamente.",
    carreiras: ["Sacerdote"],
  },

  {
    nome: "Benção de Morrow",
    custo: 3,
    alcance: "CJR",
    sustentavel: true,
    efeito: "Aliados vivos não sofrem os efeitos de aspectos perdidos enquanto estiverem na área de controle do conjurador.",
    carreiras: ["Sacerdote"],
  },

  {
    nome: "Bênção Sanguínea",
    custo: 3,
    alcance: "CJR",
    sustentavel: true,
    efeito: "Quando um aliado na área de controle do conjurador fosse sofrer uma jogada de dano, o conjurador pode sofrer a jogada de dano em seu lugar. Decida se o conjurador sofrerá o dano ou não antes da jogada ser feita.",
    carreiras: ["Sacerdote"],
  },

  {
    nome: "Bênçãos da Guerra",
    custo: 2,
    alcance: "6",
    sustentavel: true,
    efeito: "As armas do alvo ficam Abençoadas. Ao fazer um ataque com uma arma Abençoada, ignore efeitos mágicos que aumentem a ARM ou DEF do personagem atacado.",
    carreiras: ["Sacerdote"],
  },

  {
    nome: "Berço da Terra",
    custo: 1,
    alcance: "CJR",
    sustentavel: true,
    efeito: "O conjurador ganha cobertura, não sofre dano de explosão e não bloqueia a LDV. Berço da Terra termina quando personagem se mover, for colocado ou ficar engajado.",
    carreiras: ["Feiticeiro"],
  },

  {
    nome: "Blecaute",
    custo: 4,
    alcance: "CJR",
    sustentavel: false,
    efeito: "Os dispositivos mekânicos dos inimigos que estão na área de controle do conjurador ou que entrem nela são desativados, e não podem ser ativados enquanto estiverem na área de controle do conjurador. Blecaute não tem efeito sobre gigantes-a-vapor ou armaduras mekânicas. Blecaute dura uma rodada.",
    carreiras: ["Mekânico Arcano"],
  },

  {
    nome: "Bons Ventos",
    custo: 1,
    alcance: "CJR",
    sustentavel: false,
    efeito: "O conjurador ganha +1 de VEL neste turno.",
    carreiras: ["Feiticeiro"],
  },

  {
    nome: "Bruma de Guerra",
    custo: 3,
    alcance: "CJR",
    sustentavel: true,
    efeito: "Aliados ganham ocultação enquanto estiverem na área de controle do conjurador.",
    carreiras: ["Arcanista", "Feiticeiro"],
  },

  {
    nome: "Calafrio",
    custo: 2,
    alcance: "6",
    sustentavel: true,
    efeito: "Enquanto estiverem a 2″ do aliado alvo, inimigos sofrem –2 de DEF a menos que tenham a imunidade: Frio.",
    carreiras: ["Feiticeiro"],
  },

  {
    nome: "Caminho Verdadeiro",
    custo: 3,
    alcance: "CJR",
    sustentavel: false,
    efeito: "Aliados que comecem seus turnos na área de controle do conjurador ganham +2″ de movimento e Desbravador durante seus turnos. Caminho Verdadeiro dura uma rodada.",
    carreiras: ["Sacerdote"],
  },

  {
    nome: "Campo de Força",
    custo: 3,
    alcance: "CJR",
    sustentavel: true,
    efeito: "O conjurador não sofre dano de explosão ou colateral e não pode ser derrubado. Quando um ataque à distância com ADE inimigo se desvia de um ponto na área de controle do conjurador, após a distância de desvio ser jogada, jogador do conjurador escolhe a direção de desvio.",
    carreiras: ["Arcanista", "Mekânico Arcano"],
  },

  {
    nome: "Carga Positiva",
    custo: 2,
    alcance: "6",
    sustentavel: false,
    efeito: "O gigante-a-vapor alvo e todos os seus aliados a até 3″ do gigante-a-vapor ganham +2 nos testes de ataque e dano corpo-a-corpo. Carga Positiva dura uma rodada.",
    carreiras: ["Mekânico Arcano"],
  },

  {
    nome: "Celeridade",
    custo: 2,
    alcance: "6",
    sustentavel: true,
    efeito: "O alvo ganha uma ação rápida adicional durante cada um de seus turnos.",
    carreiras: ["Arcanista", "Feiticeiro"],
  },

  {
    nome: "Chamado do Cruzado",
    custo: 3,
    alcance: "CJR",
    sustentavel: false,
    efeito: "Aliados começando uma investida enquanto estiverem na área de controle do conjurador ganham +2″ de movimento. Chamado do Cruzado dura uma rodada.",
    carreiras: ["Sacerdote"],
  },

  {
    nome: "Chamas da Fúria",
    custo: 1,
    alcance: "6",
    sustentavel: false,
    efeito: "Quando o alvo incapacita um inimigo com um ataque corpo-a-corpo, inimigos a até 1″ do personagem incapacitado sofrem o efeito contínuo de Fogo. Chamas da Fúria dura uma rodada.",
    carreiras: ["Sacerdote", "Feiticeiro"],
  },

  {
    nome: "Chamas Imensas",
    custo: 2,
    alcance: "8",
    pod: "10",
    sustentavel: false,
    atributo: "ARC",
    efeito: "Chamas Imensas causa dano de fogo. Em um acerto crítico, o personagem sofre o efeito contínuo de Fogo. (Rajada (spray))",
    carreiras: ["Arcanista", "Feiticeiro"],
  },

  {
    nome: "Chamas Justas",
    custo: 2,
    alcance: "6",
    sustentavel: false,
    efeito: "O alvo ganha Imunidade: Fogo. Quando um personagem sem Imunidade: Fogo termina seu turno a até 2″ do alvo, sofre o efeito contínuo de Fogo. Chamas Justas dura uma rodada.",
    carreiras: ["Sacerdote"],
  },

  {
    nome: "Cinzas às Cinzas",
    custo: 4,
    alcance: "8",
    pod: "10",
    sustentavel: false,
    atributo: "ARC",
    efeito: "Se o alvo for atingido, ele e 1d6 dos inimigos mais próximos a até 5″ do alvo sofrem uma jogada de dano de fogo com POD 10.",
    carreiras: ["Sacerdote", "Feiticeiro"],
  },

  {
    nome: "Congelamento Profundo",
    custo: 3,
    alcance: "CJR",
    sustentavel: false,
    efeito: "Personagens a até 2″ do conjurador sofrem uma jogada de dano de frio com POD 12. Personagens que sofrem o dano desta magia não podem correr, fazer uma investida ou ataques poderosos por uma rodada.",
    carreiras: ["Feiticeiro"],
  },

  {
    nome: "Consciência",
    custo: 3,
    alcance: "CJR",
    sustentavel: false,
    efeito: "Os arcos frontais dos personagens do grupo de batalha do conjurador e dentro de sua área de controle são estendidos para 360˚. Ao determinar a LDV, eles ignoram efeitos de névoa, florestas e personagens interpostos. Consciência dura uma rodada.",
    carreiras: ["Conjurador de Guerra"],
  },

  {
    nome: "Constrição",
    custo: 1,
    alcance: "8",
    sustentavel: false,
    atributo: "ARC",
    efeito: "O alvo sofre –1 de VEL e não pode correr ou fazer uma investida por uma rodada.",
    carreiras: ["Feiticeiro"],
  },

  {
    nome: "Contenção Gélida",
    custo: 2,
    alcance: "8",
    sustentavel: true,
    atributo: "ARC",
    efeito: "O alvo sem Imunidade: Frio sofre –2 de DEF e não pode correr ou fazer ataques poderosos.",
    carreiras: ["Arcanista", "Feiticeiro"],
  },

  {
    nome: "Convecção",
    custo: 2,
    alcance: "10",
    pod: "12",
    sustentavel: false,
    atributo: "ARC",
    efeito: "Quando Convecção destrói um personagem vivo, você pode alocar um ponto de foco para um gigante-a-vapor no grupo de batalha do conjurador e que esteja na sua área de controle.",
    carreiras: ["Conjurador de Guerra"],
  },

  {
    nome: "Corrente de Relâmpagos",
    custo: 3,
    alcance: "10",
    pod: "10",
    sustentavel: false,
    atributo: "ARC",
    efeito: "O alvo sofre uma jogada de dano elétrico com POD 10. Arcos elétricos vindos dele atingem 1d6 alvos adicionais.A eletricidade atinge o personagem mais próximo que não tenha sido atingido a até 4″ da última miniatura atingida, ignorando o conjurador, e causa uma jogada de dano elétrico com POD 10.",
    carreiras: ["Feiticeiro"],
  },

  {
    nome: "Cura",
    custo: 4,
    alcance: "Especial",
    sustentavel: false,
    efeito: "O aliado alvo incapacitado BAB com o conjurador não fica mais incapacitado e recupera 1 ponto de vitalidade em cada aspecto. Ele não sofre mais os efeitos da sua jogada mais recente na Tabela de Lesões (p. 213). Sempre que o personagem for alvo desta magia, jogue 1d6 na tabela Preço da Cura, somando +1 ao teste para cada vez que ele foi alvo desta magia após a primeira.",
    carreiras: ["Sacerdote"],
  },

  {
    nome: "Curto Circuito",
    custo: 1,
    alcance: "8",
    sustentavel: false,
    atributo: "ARC",
    efeito: "Os dispositivos mekânicos em posse do alvo são desativados. Curto Circuito não tem efeito sobre gigantes-a-vapor ou armaduras mekânicas.",
    carreiras: ["Mekânico Arcano"],
  },

  {
    nome: "Dádiva de Solovin",
    custo: 1,
    alcance: "CJR",
    sustentavel: true,
    efeito: "O conjurador pode jogar novamente um teste fracassado de Medicina. Cada falha pode ser jogada novamente apenas uma vez como resultado de Dádiva de Solovin.",
    carreiras: ["Sacerdote"],
  },

  {
    nome: "Desaceleração",
    custo: 3,
    alcance: "CJR",
    sustentavel: false,
    efeito: "Aliados ganham +2 de DEF e ARM contra ataques à distância enquanto estiverem na área de controle do conjurador. Desaceleração dura uma rodada.",
    carreiras: ["Feiticeiro"],
  },

  {
    nome: "Disparo Guiado",
    custo: 3,
    alcance: "CJR",
    sustentavel: false,
    efeito: "O conjurador e os gigantes-a-vapor sob controle do conjurador em sua área de controle ganham jogadas ampliadas de ataque à distância. Disparo Guiado dura uma rodada.",
    carreiras: ["Conjurador de Guerra", "Mago-Pistoleiro", "Mekânico Arcano"],
  },

  {
    nome: "Efígie Flamejante",
    custo: 4,
    alcance: "CJR",
    pod: "14",
    sustentavel: false,
    efeito: "Inimigos a ate 2″ do aliado alvo sofrem uma jogada de dano de fogo com POD 14.",
    carreiras: ["Sacerdote", "Feiticeiro"],
  },

  {
    nome: "Eletrificar",
    custo: 2,
    alcance: "6",
    sustentavel: true,
    efeito: "Se o alvo for atingido por um ataque corpo-a-corpo, após o ataque ser resolvido, o atacante é empurrado em 1d3″ para longe do personagem afetado e sofre uma jogada de dano elétrico não ampliável com POD 14. Por fim, Eletrificar termina.",
    carreiras: ["Mekânico Arcano"],
  },

  {
    nome: "Eliminador",
    custo: 3,
    alcance: "8",
    ade: "3",
    pod: "13",
    sustentavel: false,
    atributo: "ARC",
    efeito: "Imediatamente após resolver este ataque, o conjurador pode avançar até 2″ para cada inimigo incapacitado pelo ataque.",
    carreiras: ["Conjurador de Guerra"],
  },

  {
    nome: "Escudo da Fé",
    custo: 2,
    alcance: "6",
    sustentavel: true,
    efeito: "O alvo ganha +2 na ARM contra ataques mágicos e ataques feitos por infernais ou mortos-vivos.",
    carreiras: ["Sacerdote"],
  },

  {
    nome: "Escudo de Gelo",
    custo: 1,
    alcance: "6",
    sustentavel: true,
    efeito: "O alvo ganha +2 de ARM. Escudo de Gelo termina imediatamente se o personagem afetado se mover ou sofrer dano.",
    carreiras: ["Feiticeiro"],
  },

  {
    nome: "Escudo de Polaridade",
    custo: 2,
    alcance: "6",
    sustentavel: true,
    efeito: "O alvo não pode ser alvo de uma investida feita por um personagem em seu arco frontal.",
    carreiras: ["Mekânico Arcano"],
  },

  {
    nome: "Estilhaçar Terra",
    custo: 4,
    alcance: "10",
    ade: "3",
    pod: "14",
    sustentavel: false,
    atributo: "ARC",
    efeito: "Personagens atingidos sofrem uma jogada de dano de fogo com POD 14. A ADE é um efeito de névoa que permanece em jogo por uma rodada. Personagens que entrem ou terminem seu turno na ADE sofrem uma jogada de dano de fogo com POD 14 que não pode ser ampliada.",
    carreiras: ["Feiticeiro"],
  },

  {
    nome: "Explosão Solar",
    custo: 3,
    alcance: "10",
    ade: "3",
    pod: "13",
    sustentavel: false,
    atributo: "ARC",
    efeito: "O dano de explosão desta magia afeta apenas os inimigos.",
    carreiras: ["Sacerdote"],
  },

  {
    nome: "Extintor",
    custo: 2,
    alcance: "CJR",
    sustentavel: false,
    efeito: "Efeitos contínuos de fogo na área de controle do conjurador terminam imediatamente.",
    carreiras: ["Feiticeiro"],
  },

  {
    nome: "Fechar as Escotilhas",
    custo: 3,
    alcance: "CJR",
    sustentavel: false,
    efeito: "Os personagens no grupo de batalha do conjurador e em sua sua área de controle não podem ser derrubados e ganham +3 de ARM, mas sofrem –2 de DEF. Fechar as Escotilhas dura uma rodada.",
    carreiras: ["Conjurador de Guerra"],
  },

  {
    nome: "Fenda",
    custo: 3,
    alcance: "8",
    ade: "4",
    pod: "13",
    sustentavel: false,
    atributo: "ARC",
    efeito: "A ADE é um terreno difícil e permanece no jogo por uma rodada.",
    carreiras: ["Arcanista", "Conjurador de Guerra", "Feiticeiro"],
  },

  {
    nome: "Filamentos Elétricos",
    custo: 3,
    alcance: "6",
    sustentavel: true,
    efeito: "O alvo ganha Imunidade: Eletricidade, e as armas corpo-a-corpo dele recebem Alcance e Arco Elétrico. Quando você atinge um personagem com uma arma com Arco Elétrico, pode lançar um arco de energia até o personagem mais próximo a até 4″ do personagem atingido. O arco causa uma jogada de dano elétrico não ampliável com POD 10.",
    carreiras: ["Arcanista", "Feiticeiro"],
  },

  {
    nome: "Fissura",
    custo: 3,
    alcance: "8",
    pod: "12",
    sustentavel: false,
    atributo: "ARC",
    efeito: "Se Fissura incapacitar seu alvo original, você pode fazer um ataque de RJ 6 usando o personagem incapacitado como ponto de origem do ataque. Personagens atingidos sofrem uma jogada de dano com POD 12.",
    carreiras: ["Sacerdote", "Feiticeiro"],
  },

  {
    nome: "Fogo Estelar",
    custo: 4,
    alcance: "CJR",
    sustentavel: false,
    efeito: "Inimigos que se movam e terminam seu movimento mais perto do conjurador do que quando começaram sofrem uma jogada de dano não ampliável com POD 12. Fogo Estelar dura uma rodada.",
    carreiras: ["Sacerdote"],
  },

  {
    nome: "Fogo Purificador",
    custo: 3,
    alcance: "8",
    ade: "3",
    pod: "14",
    sustentavel: false,
    atributo: "ARC",
    efeito: "Fogo Purificador causa dano de fogo. Em um acerto crítico, os personagens sofrem o efeito contínuo de Fogo.",
    carreiras: ["Sacerdote", "Feiticeiro"],
  },

  {
    nome: "Força da Fé",
    custo: 4,
    alcance: "CJR",
    sustentavel: false,
    efeito: "Inimigos atualmente na área de controle do conjurador são imediatamente empurrados 1d6″ diretamente para longe do conjurador, na ordem que ele escolher.",
    carreiras: ["Sacerdote"],
  },

  {
    nome: "Força da Pedra",
    custo: 2,
    alcance: "6",
    sustentavel: true,
    efeito: "O alvo ganha +1 de FOR e ARM.",
    carreiras: ["Feiticeiro"],
  },

  {
    nome: "Fortificar",
    custo: 2,
    alcance: "6",
    sustentavel: true,
    efeito: "O gigante-a-vapor alvo sob controle do conjurador ganha +2 de ARM. O gigante-a-vapor afetado e qualquer personagem BAB com ele não pode ser derrubado, empurrado ou lançado.",
    carreiras: ["Conjurador de Guerra", "Mekânico Arcano", "Feiticeiro"],
  },

  {
    nome: "Frio Intenso",
    custo: 2,
    alcance: "6",
    sustentavel: false,
    efeito: "O alvo ganha Imunidade: Frio. Quando um personagem sem Imunidade: Frio termina seu turno a até 2″ do alvo, fica imóvel até o final do seu próximo turno. Frio Intenso dura uma rodada.",
    carreiras: [],
  },

  {
    nome: "Geada",
    custo: 3,
    alcance: "8",
    ade: "3",
    pod: "14",
    sustentavel: false,
    atributo: "ARC",
    efeito: "Geada causa dano de frio. Em um acerto crítico, os personagens atingidos ficam imóveis por uma rodada, a menos que eles tenham Imunidade: Frio.",
    carreiras: ["Feiticeiro"],
  },

  {
    nome: "Gelo Frágil",
    custo: 3,
    alcance: "8",
    sustentavel: true,
    atributo: "ARC",
    efeito: "Da próxima vez que o alvo sofrer dano, reduza pela metade sua ARM. Após aplicar o dano, Gelo Frágil termina.",
    carreiras: ["Feiticeiro"],
  },

  {
    nome: "Golpe Arcano",
    custo: 1,
    alcance: "8",
    pod: "8",
    sustentavel: false,
    atributo: "ARC",
    efeito: "Uma força arcana explode em direção ao alvo.",
    carreiras: ["Arcanista", "Conjurador de Guerra"],
  },

  {
    nome: "Grupo de Disparo",
    custo: 2,
    alcance: "CJR",
    sustentavel: false,
    efeito: "As armas do conjurador e as armas de ataque à distância de gigantes-a-vapor sob seu controle ganham +2 de ALC enquanto estiverem na sua área de controle. Grupo de Disparo dura uma rodada.",
    carreiras: ["Mago-Pistoleiro"],
  },

  {
    nome: "Hino da Batalha",
    custo: 2,
    alcance: "6",
    sustentavel: false,
    efeito: "O gigante-a-vapor alvo recebe +2 em suas jogadas de ataque e dano. Hino da Batalha dura uma rodada.",
    carreiras: ["Sacerdote"],
  },

  {
    nome: "Hino da Passagem",
    custo: 2,
    alcance: "6",
    sustentavel: false,
    efeito: "O gigante-a-vapor alvo não pode ser alvo de ataques à distância não mágicos. Hino da Passagem dura uma rodada.",
    carreiras: ["Sacerdote"],
  },

  {
    nome: "Hino da Proteção",
    custo: 4,
    alcance: "CJR",
    sustentavel: false,
    efeito: "Aliados na área de controle do conjurador não podem ser alvo de magias inimigas. Hino da Proteção dura uma rodada.",
    carreiras: ["Sacerdote"],
  },

  {
    nome: "Ignição",
    custo: 2,
    alcance: "6",
    sustentavel: true,
    efeito: "O alvo ganha +2 nas jogadas de ataque corpo-a-corpo. O personagem afetado ganha Fogo Crítico em seus ataques corpo-a-corpo normais.",
    carreiras: ["Sacerdote", "Feiticeiro"],
  },

  {
    nome: "Imolação",
    custo: 2,
    alcance: "8",
    pod: "12",
    sustentavel: false,
    atributo: "ARC",
    efeito: "Imolação causa dano de fogo. Em um acerto crítico, o personagem sofre o efeito contínuo de Fogo.",
    carreiras: ["Sacerdote", "Feiticeiro"],
  },

  {
    nome: "Impulsionar",
    custo: 1,
    alcance: "CJR",
    sustentavel: false,
    efeito: "O conjurador e os gigantes-a-vapor sob controle do conjurador em sua área de controle podem virar imediatamente para qualquer direção. Gigantes-a-vapor afetados que estejam imóveis ou derrubados não estão mais imóveis e se levantam.",
    carreiras: ["Conjurador de Guerra", "Mekânico Arcano"],
  },

  {
    nome: "Inferno",
    custo: 3,
    alcance: "10",
    ade: "3",
    pod: "12",
    sustentavel: false,
    atributo: "ARC",
    efeito: "Todos os atingidos sofrem uma jogada de dano de fogo com POD 12. A ADE permanece em jogo por uma rodada. Personagens que entrem ou terminem seus turnos na ADE sofrem uma jogada de dano de fogo com POD 12 que não pode ser ampliada.",
    carreiras: ["Feiticeiro"],
  },

  {
    nome: "Influência",
    custo: 1,
    alcance: "10",
    sustentavel: false,
    atributo: "ARC",
    efeito: "O conjurador faz um teste oposto de Força de Vontade contra um alvo vivo. Se o conjurador perder, nada acontece. Se ganhar, assume o controle do alvo. Este faz imediatamente um ataque corpo-a-corpo normal. Depois, a Influência termina.",
    carreiras: ["Arcanista", "Sacerdote"],
  },

  {
    nome: "Investida Irrestrita",
    custo: 2,
    alcance: "6",
    sustentavel: false,
    efeito: "Durante seu turno, o alvo pode fazer uma investida sem gastar foco ou ser forçado e ganha +2″ de movimento e Desbravador durante a investida. Investida Irrestrita dura uma rodada.",
    carreiras: ["Conjurador de Guerra", "Feiticeiro"],
  },

  {
    nome: "Jogado pela Tempestade",
    custo: 1,
    alcance: "8",
    sustentavel: false,
    atributo: "ARC",
    efeito: "Quando um inimigo é atingido por Jogado pela Tempestade, ele é empurrado 3″ para longe do ponto de origem da magia.",
    carreiras: ["Arcanista", "Feiticeiro"],
  },

  {
    nome: "Labareda",
    custo: 3,
    alcance: "CJR",
    sustentavel: false,
    efeito: "Inimigos na área de controle do conjurador sofrendo o efeito contínuo de Fogo sofrem uma jogada de dano de fogo não ampliável com POD 12. Labareda só pode ser conjurada uma vez por turno.",
    carreiras: ["Feiticeiro"],
  },

  {
    nome: "Lamentação",
    custo: 3,
    alcance: "CJR",
    sustentavel: true,
    efeito: "Inimigos na área de controle do conjurador pagam o dobro dos pontos de fadiga, foco ou fúria para conjurar ou manter magias.",
    carreiras: ["Sacerdote"],
  },

  {
    nome: "Lâmina da Radiância",
    custo: 2,
    alcance: "10",
    pod: "10",
    sustentavel: false,
    atributo: "ARC",
    efeito: "Infernais e mortos-vivos atingidos por esta magia sofrem um dado adicional de dano.",
    carreiras: ["Sacerdote"],
  },

  {
    nome: "Lâmina Guiada",
    custo: 1,
    alcance: "6",
    sustentavel: false,
    efeito: "O alvo ganha +1 em ataques corpo-a-corpo e suas armas corpo-a-corpo ganham Arma Mágica. Lâmina Guiada dura uma rodada.",
    carreiras: ["Arcanista", "Sacerdote"],
  },

  {
    nome: "Locomoção",
    custo: 1,
    alcance: "6",
    sustentavel: false,
    efeito: "Gaste até 3 pontos de foco para lançar Locomoção. O gigante-a-vapor alvo avança até 1″ por ponto gasto. Um gigante-a-vapor só pode ser alvo de Locomoção uma vez por rodada. (Custo variável: 1 a 3)",
    carreiras: ["Mekânico Arcano"],
  },

  {
    nome: "Luz do Dia",
    custo: 3,
    alcance: "CJR",
    sustentavel: false,
    efeito: "Infernais e mortos-vivos sofrem –3 em DEF e ARM enquanto estiverem na área de controle do conjurador. Além disso, a área de controle do conjurador brilha com luz suficiente para qualquer um dentro dela ver na escuridão. Luz do Dia dura uma rodada.",
    carreiras: ["Sacerdote"],
  },

  {
    nome: "Luz nas Trevas",
    custo: 1,
    alcance: "CJR",
    sustentavel: true,
    efeito: "A área de controle do conjurador brilha com luz suficiente para qualquer um dentro dela ver na escuridão.",
    carreiras: ["Arcanista", "Sacerdote"],
  },

  {
    nome: "Mão do Destino",
    custo: 2,
    alcance: "6",
    sustentavel: true,
    efeito: "O alvo recebe um dado adicional em suas jogadas de ataque e dano. Descarte o menor dado em cada jogada.",
    carreiras: ["Arcanista", "Sacerdote"],
  },

  {
    nome: "Mão Perene do Inverno",
    custo: 2,
    alcance: "CJR",
    sustentavel: true,
    efeito: "Aliados na área de controle do conjurador ganham +2 de ARM contra frio. Além disso, enquanto forem afetados por esta magia, não sofrerão os efeitos da exposição ao frio e são mantidos quentes.",
    carreiras: ["Feiticeiro"],
  },

  {
    nome: "Mar de Fogo",
    custo: 4,
    alcance: "CJR",
    sustentavel: false,
    efeito: "Inimigos sem Imunidade: Fogo a até 5″ do conjurador sofrem o efeito contínuo de Fogo.",
    carreiras: ["Feiticeiro"],
  },

  {
    nome: "Maré de Aço",
    custo: 4,
    alcance: "CJR",
    sustentavel: false,
    efeito: "O conjurador e os gigantes-a-vapor atualmente sob controle do conjurador em sua área de controle podem imediatamente avançar em até 3″.",
    carreiras: ["Conjurador de Guerra", "Mekânico Arcano"],
  },

  {
    nome: "Martelo de Força",
    custo: 4,
    alcance: "10",
    pod: "12",
    sustentavel: false,
    atributo: "ARC",
    efeito: "Se Martelo de Força atingir um alvo não incorpóreo, ao invés de sofrer uma jogada de dano normal, o alvo é lançado 1d6″ diretamente para longe do ponto de origem da magia, independentemente do tamanho de sua base, e sofre uma jogada de dano com POD 12. O dano colateral do lançamento tem POD 12.",
    carreiras: ["Arcanista", "Conjurador de Guerra"],
  },

  {
    nome: "Martelo de Pedra",
    custo: 3,
    alcance: "10",
    ade: "3",
    pod: "14",
    sustentavel: false,
    atributo: "ARC",
    efeito: "Em um acerto crítico, os personagens atingidos são derrubados.",
    carreiras: ["Arcanista", "Feiticeiro"],
  },

  {
    nome: "Martelo Gigante",
    custo: 1,
    alcance: "6",
    sustentavel: false,
    efeito: "O gigante-a-vapor aliado alvo pode fazer imediatamente um ataque corpo-a-corpo.",
    carreiras: ["Mekânico Arcano"],
  },

  {
    nome: "Mente Superior",
    custo: 4,
    alcance: "CJR",
    sustentavel: false,
    efeito: "O conjurador faz um teste oposto de Força de Vontade contra todos os inimigos vivos em sua área de controle. Jogue uma vez para o conjurador. Se o conjurador vencer, pode obrigar o inimigo a avançar até 3″ e realizar uma ação rápida (exceto magia ou façanha). Se o inimigo vencer ou empatar, não é afetado. Esta magia só pode ser conjurada uma vez por rodada.",
    carreiras: ["Arcanista"],
  },

  {
    nome: "Metal Temperado",
    custo: 2,
    alcance: "6",
    sustentavel: true,
    efeito: "O gigante-a-vapor aliado alvo ganha +2 de ARM e é imune a efeitos contínuos.",
    carreiras: ["Conjurador de Guerra", "Mekânico Arcano"],
  },

  {
    nome: "Miragem",
    custo: 3,
    alcance: "6",
    sustentavel: true,
    efeito: "Durante a Fase de Controle do conjurador, após a manutenção ser paga, o controlador de um aliado alvo pode colocá-lo em qualquer lugar a até 2″ da sua localização atual.",
    carreiras: ["Arcanista"],
  },

  {
    nome: "Muralha de Fogo",
    custo: 2,
    alcance: "CTR",
    sustentavel: true,
    efeito: "Coloque o modelo de muro na área de controle do conjurador onde não toque na base de um personagem ou em uma obstrução ou obstáculo. Se um personagem entra ou termina seu turno no muro, sofre dano de fogo não ampliável com POD 12 e o efeito contínuo de Fogo. Personagens dentro do muro ganham ocultação.",
    carreiras: ["Sacerdote", "Feiticeiro"],
  },

  {
    nome: "Muralha de Pedra",
    custo: 2,
    alcance: "CTR",
    sustentavel: true,
    efeito: "Coloque o modelo de muro na área de controle do conjurador onde não toque na base de um personagem ou em uma obstrução ou obstáculo. O muro é um obstáculo que dá cobertura.",
    carreiras: ["Arcanista", "Feiticeiro"],
  },

  {
    nome: "Nevasca",
    custo: 1,
    alcance: "6",
    sustentavel: false,
    efeito: "Centralize um efeito de névoa com ADE de 3″ no alvo. A ADE permanece centralizada no alvo. Se ele for destruído, remova a ADE do jogo. Nevasca dura uma rodada.",
    carreiras: ["Arcanista", "Feiticeiro"],
  },

  {
    nome: "Névoa Cerrada",
    custo: 4,
    alcance: "CJR",
    sustentavel: true,
    efeito: "Inimigos na área de controle do conjurador tem sua LDV reduzida a 5″.",
    carreiras: ["Feiticeiro"],
  },

  {
    nome: "Névoa Gélida",
    custo: 4,
    alcance: "CJR",
    sustentavel: false,
    efeito: "Inimigos na área de controle do conjurador e sem Imunidade: Frio sofrem –2 de VEL e DEF. Névoa Gélida dura uma rodada.",
    carreiras: ["Feiticeiro"],
  },

  {
    nome: "Nuvem de Cinzas",
    custo: 2,
    alcance: "CTR",
    ade: "3",
    sustentavel: true,
    efeito: "Coloque uma nuvem com ADE de 3″ em qualquer lugar dentro da área de controle do conjurador. Personagens sem Imunidade: Fogo sofrem –2 nas jogadas de ataque dentro da ADE.",
    carreiras: ["Arcanista", "Sacerdote", "Feiticeiro"],
  },

  {
    nome: "Obliteração",
    custo: 4,
    alcance: "10",
    ade: "4",
    pod: "15",
    sustentavel: false,
    atributo: "ARC",
    efeito: "A força deste ataque explode a própria terra.",
    carreiras: ["Conjurador de Guerra", "Feiticeiro"],
  },

  {
    nome: "Ocultamento",
    custo: 2,
    alcance: "6",
    sustentavel: true,
    efeito: "O alvo fica furtivo e ganha +3 em seus testes de Esgueirar-se.",
    carreiras: ["Arcanista"],
  },

  {
    nome: "Olhos da Verdade",
    custo: 2,
    alcance: "CJR",
    sustentavel: true,
    efeito: "As jogadas de PER do personagem são ampliadas. Além disso, o número-alvo para jogadas de Enganar contra este personagem aumenta em 3.",
    carreiras: ["Sacerdote"],
  },

  {
    nome: "Onda de Choque",
    custo: 4,
    alcance: "CJR",
    pod: "13",
    sustentavel: false,
    efeito: "Personagens a até 5″ do conjurador sofrem uma jogada de dano com POD 13. Cada inimigo que sofrer dano é empurrado 1d6″ para longe do conjurador.",
    carreiras: ["Feiticeiro"],
  },

  {
    nome: "Pancada de Vento",
    custo: 1,
    alcance: "6",
    sustentavel: false,
    atributo: "ARC",
    efeito: "Um inimigo atingido por esta magia é empurrado 1″ para longe do conjurador. Após o inimigo ser empurrado, o conjurador pode avançar até 1″ em direção ao inimigo empurrado.",
    carreiras: ["Feiticeiro"],
  },

  {
    nome: "Postura de Pedra",
    custo: 1,
    alcance: "6",
    sustentavel: false,
    efeito: "O alvo não pode ser derrubado, empurrado ou lançado durante uma rodada.",
    carreiras: ["Feiticeiro"],
  },

  {
    nome: "Prece da Orientação",
    custo: 3,
    alcance: "6",
    sustentavel: false,
    efeito: "O alvo recebe dois dados adicionais em sua próxima jogada de perícia. Descarte os dois menores dados na jogada. Prece da Orientação só pode ser conjurada uma vez por dia.",
    carreiras: ["Sacerdote"],
  },

  {
    nome: "Proteção contra Corrosão",
    custo: 1,
    alcance: "6",
    sustentavel: true,
    efeito: "O alvo ganha Imunidade: Corrosão.",
    carreiras: ["Arcanista"],
  },

  {
    nome: "Proteção contra Eletricidade",
    custo: 1,
    alcance: "6",
    sustentavel: true,
    efeito: "O alvo ganha Imunidade: Eletricidade e não pode ser interrompido.",
    carreiras: ["Arcanista", "Mekânico Arcano"],
  },

  {
    nome: "Proteção contra Fogo",
    custo: 1,
    alcance: "6",
    sustentavel: true,
    efeito: "O alvo ganha Imunidade: Fogo.",
    carreiras: ["Arcanista", "Sacerdote", "Feiticeiro"],
  },

  {
    nome: "Proteção contra Frio",
    custo: 1,
    alcance: "6",
    sustentavel: true,
    efeito: "O alvo ganha Imunidade: Frio.",
    carreiras: ["Arcanista", "Feiticeiro"],
  },

  {
    nome: "Proteção de Banimento",
    custo: 2,
    alcance: "6",
    sustentavel: true,
    efeito: "Magias inimigas em manutenção no aliado alvo terminam. O personagem afetado não pode ser alvo de magias inimigas.",
    carreiras: ["Arcanista", "Sacerdote"],
  },

  {
    nome: "Purificação",
    custo: 3,
    alcance: "CJR",
    sustentavel: false,
    efeito: "Efeitos contínuos e magias com manutenção na área de controle do conjurador terminam imediatamente.",
    carreiras: ["Sacerdote"],
  },

  {
    nome: "Queimadura de Frio",
    custo: 2,
    alcance: "8",
    pod: "12",
    sustentavel: false,
    atributo: "ARC",
    efeito: "Queimadura de Frio causa dano de frio. (Rajada (spray))",
    carreiras: ["Feiticeiro"],
  },

  {
    nome: "Raio Arcano",
    custo: 2,
    alcance: "12",
    pod: "11",
    sustentavel: false,
    atributo: "ARC",
    efeito: "Raios de energia mágica saltam em direção ao alvo.",
    carreiras: ["Arcanista", "Conjurador de Guerra"],
  },

  {
    nome: "Raio Arcântriko",
    custo: 2,
    alcance: "10",
    pod: "12",
    sustentavel: false,
    atributo: "ARC",
    efeito: "Um gigante-a-vapor atingido fica imóvel por uma rodada.",
    carreiras: ["Mekânico Arcano"],
  },

  {
    nome: "Raio de Gelo",
    custo: 2,
    alcance: "10",
    pod: "12",
    sustentavel: false,
    atributo: "ARC",
    efeito: "Em um acerto crítico, o alvo fica imóvel por uma rodada, a menos que tenha Imunidade: Frio.",
    carreiras: ["Feiticeiro"],
  },

  {
    nome: "Rajada de Vento",
    custo: 2,
    alcance: "CTR",
    ade: "5",
    sustentavel: false,
    efeito: "Coloque uma ADE de 5″ dentro da área de controle do conjurador. Efeitos de névoa dentro da ADE terminam e personagens dentro da ADE sofrem –3 no ADI. A ADE dura uma rodada.",
    carreiras: ["Arcanista", "Feiticeiro"],
  },

  {
    nome: "Rajada Elétrica",
    custo: 3,
    alcance: "8",
    ade: "3",
    pod: "13",
    sustentavel: false,
    atributo: "ARC",
    efeito: "Rajada Elétrica causa dano elétrico. Um gigante-a-vapor que sofra dano da Rajada Elétrica sofre Interrupção (perde seus pontos de foco e não pode receber foco ou canalizar magias por uma rodada).",
    carreiras: ["Mekânico Arcano"],
  },

  {
    nome: "Rajada Mística",
    custo: 3,
    alcance: "10",
    ade: "3",
    pod: "13",
    sustentavel: false,
    atributo: "ARC",
    efeito: "Magias com manutenção no personagem atingido diretamente pela Rajada Mística terminam imediatamente.",
    carreiras: ["Arcanista", "Sacerdote"],
  },

  {
    nome: "Rangido",
    custo: 3,
    alcance: "10",
    pod: "14",
    sustentavel: false,
    atributo: "ARC",
    efeito: "Quando um gigante-a-vapor é atingido por Rangido, sofre 1 ponto de dano na sua primeira caixa disponível do sistema Movimento.",
    carreiras: ["Conjurador de Guerra", "Mekânico Arcano"],
  },

  {
    nome: "Reflexos Ampliados",
    custo: 2,
    alcance: "6",
    sustentavel: true,
    efeito: "O alvo não pode ficar derrubado ou imóvel.",
    carreiras: ["Mago-Pistoleiro"],
  },

  {
    nome: "Refúgio",
    custo: 2,
    alcance: "6",
    sustentavel: true,
    efeito: "Quando o alvo é diretamente atingido por outro personagem com um ataque durante seu turno, imediatamente após o turno dele terminar, o alvo pode fazer um avanço completo. Ele não pode ser alvo de ataques livres durante este movimento.",
    carreiras: ["Conjurador de Guerra", "Mago-Pistoleiro", "Mekânico Arcano"],
  },

  {
    nome: "Superioridade",
    custo: 3,
    alcance: "6",
    sustentavel: true,
    efeito: "O gigante-a-vapor aliado alvo ganha +2 de VEL, ACO e DEF e não pode ser derrubado.",
    carreiras: ["Conjurador de Guerra", "Mekânico Arcano"],
  },

  {
    nome: "Telecinesia",
    custo: 2,
    alcance: "8",
    sustentavel: false,
    atributo: "ARC",
    efeito: "Coloque o alvo completamente dentro de 2″ de sua localização atual. Quando Telecinesia atinge um inimigo, ela é uma magia ofensiva e exige uma jogada de ataque mágico. Só é possível ser afetado por Telecinesia uma vez por rodada.",
    carreiras: ["Arcanista", "Feiticeiro"],
  },

  {
    nome: "Tempestade Destruidora",
    custo: 2,
    alcance: "6",
    sustentavel: true,
    efeito: "Quando o personagem atingir diretamente e destruir um inimigo com um ataque corpo-a-corpo ou à distância, centralize uma ADE de 3″ sobre o alvo destruído, depois remova tal personagem da mesa. Personagens na ADE são atingidos e sofrem uma jogada de dano de explosão não ampliável de POD 8.",
    carreiras: ["Feiticeiro"],
  },

  {
    nome: "Tempestade Invernal",
    custo: 3,
    alcance: "CJR",
    sustentavel: false,
    efeito: "Inimigos que comecem seus turnos na área de controle do conjurador perdem Visão às Cegas, Voo e Desbravador durante seus turnos. Tempestade Invernal dura uma rodada.",
    carreiras: ["Feiticeiro"],
  },

  {
    nome: "Terremoto",
    custo: 3,
    alcance: "10",
    ade: "5",
    sustentavel: false,
    atributo: "ARC",
    efeito: "Os personagens na ADE são derrubados.",
    carreiras: ["Feiticeiro"],
  },

  {
    nome: "Terreno Congelado",
    custo: 3,
    alcance: "CJR",
    sustentavel: false,
    efeito: "Inimigos que se movam mais de 2″ e terminem seu movimento na área de controle do conjurador são derrubados no final do seu movimento. Terreno Congelado dura uma rodada.",
    carreiras: ["Feiticeiro"],
  },

  {
    nome: "Terreno Inóspito",
    custo: 3,
    alcance: "CJR",
    sustentavel: false,
    efeito: "Outros personagens na área de controle do conjurador tratam terreno aberto como terreno difícil. Esta magia dura uma rodada.",
    carreiras: ["Arcanista", "Feiticeiro"],
  },

  {
    nome: "Terreno Sólido",
    custo: 2,
    alcance: "CJR",
    sustentavel: true,
    efeito: "Aliados ganham na área de controle do conjurador não podem ser derrubados, nem sofrem dano de explosão.",
    carreiras: ["Feiticeiro"],
  },

  {
    nome: "Tiro Arcano: Brutal",
    custo: 1,
    alcance: "CJR",
    sustentavel: false,
    efeito: "Seu próximo ataque à distância de tiro arcano ganha uma jogada ampliada de dano contra o alvo atingido diretamente.",
    carreiras: ["Mago-Pistoleiro"],
  },

  {
    nome: "Tiro Arcano: Caçador Fantasma",
    custo: 3,
    alcance: "CJR",
    sustentavel: false,
    efeito: "A próxima jogada de ataque à distância de tiro arcano do conjurador neste turno ignora LDV ao fazer ataques à distância. O ataque também ignora ocultação e cobertura.",
    carreiras: ["Mago-Pistoleiro"],
  },

  {
    nome: "Tiro Arcano: Combustão Espontânea",
    custo: 1,
    alcance: "CJR",
    sustentavel: false,
    efeito: "Se o conjurador destruir um personagem vivo com seu próximo ataque à distância de tiro arcano, centralize um efeito de névoa com ADE de 3″ sobre o alvo destruído, depois remova o personagem destruído da mesa. A ADE permanece em jogo por uma rodada.",
    carreiras: ["Mago-Pistoleiro"],
  },

  {
    nome: "Tiro Arcano: Degradar Ferro",
    custo: 1,
    alcance: "CJR",
    sustentavel: false,
    efeito: "Se o próximo ataque à distância de tiro arcano do conjurador neste turno atingir diretamente um gigante-a-vapor, além dos danos e efeitos do ataque, o gigante-a-vapor também sofre 1d3 pontos de dano.",
    carreiras: ["Mago-Pistoleiro"],
  },

  {
    nome: "Tiro Arcano: Disparo Sombrio",
    custo: 2,
    alcance: "CJR",
    sustentavel: false,
    efeito: "Se o conjurador atingir um alvo com seu próximo ataque à distância com tiro arcano neste turno, aliados podem ignorar o alvo ao determinar a LDV e fazer ataques à distância ou mágicos por uma rodada.",
    carreiras: ["Mago-Pistoleiro"],
  },

  {
    nome: "Tiro Arcano: Disruptor Mágico",
    custo: 3,
    alcance: "CJR",
    sustentavel: false,
    efeito: "Se o conjurador atingir diretamente um alvo com seu próximo ataque à distância com tiro arcano neste turno, magias e animi mantidas sobre o alvo atingido terminam imediatamente.",
    carreiras: ["Mago-Pistoleiro"],
  },

  {
    nome: "Tiro Arcano: Explosão",
    custo: 3,
    alcance: "CJR",
    sustentavel: false,
    efeito: "Se o conjurador atingir diretamente um alvo com seu próximo ataque à distância com tiro arcano neste turno, centralize uma ADE de 4″ no alvo. Personagens que não sejam o alvo original dentro da ADE sofre uma jogada de dano não ampliável com POD igual ao POD da arma de ataque à distância.",
    carreiras: ["Mago-Pistoleiro"],
  },

  {
    nome: "Tiro Arcano: Farol de Fogo",
    custo: 2,
    alcance: "CJR",
    sustentavel: false,
    efeito: "A próxima jogada de ataque à distância de tiro arcano do conjurador neste turno tem ADE 5 e POD —. Enquanto um personagem estiver na ADE, ele perde a Camuflagem e não está mais furtivo, e outros personagens podem ignorar efeitos de névoa ao determinar a LDV até ele. A ADE dura uma rodada.",
    carreiras: ["Mago-Pistoleiro"],
  },

  {
    nome: "Tiro Arcano: Impacto Vital",
    custo: 4,
    alcance: "CJR",
    sustentavel: false,
    efeito: "O dano que supere a ARM do personagem atingido pela próxima jogada de ataque à distância de tiro arcano do conjurador neste turno é dobrado. Um personagem debilitado por este ataque não pode fazer um teste de Durão.",
    carreiras: ["Mago-Pistoleiro"],
  },

  {
    nome: "Tiro Arcano: Impulso",
    custo: 4,
    alcance: "CJR",
    sustentavel: false,
    efeito: "Se você atingir seu próximo ataque à distância de tiro arcano neste turno, o personagem atingido diretamente é lançado em 1d6″ para longe de conjurador, independente do tamanho de sua base, e sofre uma jogada de dano colateral do lançamento com POD igual ao da arma de ataque à distância.",
    carreiras: ["Mago-Pistoleiro"],
  },

  {
    nome: "Tiro Arcano: na Mosca",
    custo: 1,
    alcance: "CJR",
    sustentavel: false,
    efeito: "Seu próximo ataque à distância de tiro arcano neste turno ignora a penalidade de atirar em combate corpo-a-corpo.",
    carreiras: ["Mago-Pistoleiro"],
  },

  {
    nome: "Tiro Arcano: Preciso",
    custo: 1,
    alcance: "CJR",
    sustentavel: false,
    efeito: "Seu próximo ataque à distância de tiro arcano neste turno é ampliado.",
    carreiras: ["Mago-Pistoleiro"],
  },

  {
    nome: "Tiro Arcano: Silenciador",
    custo: 1,
    alcance: "CJR",
    sustentavel: false,
    efeito: "Seu próximo ataque à distância de tiro arcano neste turno é completamente silencioso. Nem o disparo da arma, nem o impacto da munição produzem som. Qualquer som imediato de um alvo atingido, como um grito ou a queda de um corpo, é silenciado.",
    carreiras: ["Mago-Pistoleiro"],
  },

  {
    nome: "Tiro Arcano: Tiro Congelante",
    custo: 4,
    alcance: "CJR",
    sustentavel: false,
    efeito: "Se você atingir diretamente um alvo com seu próximo ataque à distância com tiro arcano neste turno, o alvo fica imóvel por uma rodada.",
    carreiras: ["Mago-Pistoleiro"],
  },

  {
    nome: "Tiro Arcano: Tiro de Efeito",
    custo: 2,
    alcance: "CJR",
    sustentavel: false,
    efeito: "Se você atingir diretamente um alvo com seu próximo ataque à distância com tiro arcano neste turno, escolha um personagem a até 4″ do alvo atingido. Após o ataque ser resolvido, faça um ataque à distância contra o personagem escolhido. Se o personagem escolhido for atingido, sofre uma jogada de dano mágico com POD igual ao da arma de ataque à distância, mas não outros efeitos de outros Tiros Arcanos conjurados no ataque original. O ponto de origem deste dano é o alvo atingido originalmente.",
    carreiras: ["Mago-Pistoleiro"],
  },

  {
    nome: "Tiro Arcano: Tiro Fundido",
    custo: 1,
    alcance: "CJR",
    sustentavel: false,
    efeito: "Se próximo ataque à distância com tiro arcano do conjurador atingir neste turno, o alvo atingido diretamente sofre o efeito contínuo de Fogo.",
    carreiras: ["Mago-Pistoleiro"],
  },

  {
    nome: "Tiro Arcano: Tremor de Terra",
    custo: 3,
    alcance: "CJR",
    sustentavel: false,
    efeito: "Se você atingir diretamente um alvo com seu próximo ataque à distância com tiro arcano neste turno, o ataque fica com ADE 5 e não causa dano, mas derruba personagens na ADE.",
    carreiras: ["Mago-Pistoleiro"],
  },

  {
    nome: "Tiro Arcano: Trovão",
    custo: 1,
    alcance: "CJR",
    sustentavel: false,
    efeito: "Se o conjurador atingir diretamente um alvo com seu próximo ataque à distância com tiro arcano neste turno, o alvo é empurrado 1d3″ diretamente pra longe do personagem. Com um acerto crítico, o alvo é derrubado após ser empurrado.",
    carreiras: ["Mago-Pistoleiro"],
  },

  {
    nome: "Tocaia",
    custo: 2,
    alcance: "6",
    sustentavel: true,
    efeito: "As armas de ataque à distância do alvo ganham +4 de ALC.",
    carreiras: ["Conjurador de Guerra", "Mago-Pistoleiro"],
  },

  {
    nome: "Tormenta",
    custo: 4,
    alcance: "8",
    ade: "4",
    pod: "12",
    sustentavel: false,
    atributo: "ARC",
    efeito: "Personagens atingidos por Tormenta são derrubados e sofrem uma jogada de dano com POD 12.",
    carreiras: ["Arcanista", "Feiticeiro"],
  },

  {
    nome: "Tornado",
    custo: 4,
    alcance: "10",
    pod: "13",
    sustentavel: false,
    atributo: "ARC",
    efeito: "Ao invés de sofrer uma jogada de dano normal, um alvo não incorpóreo atingido pelo Tornado é arremessado 1d6″ diretamente para longe do ponto de origem da magia, independentemente do tamanho de sua base, e sofre uma jogada de dano com POD 13. O dano colateral desse arremesso tem POD 13.",
    carreiras: ["Feiticeiro"],
  },

  {
    nome: "Tranca Voltaica",
    custo: 4,
    alcance: "10",
    sustentavel: false,
    atributo: "ARC",
    efeito: "O gigante-a-vapor alvo não pode avançar e sofre –4 de DEF. Um gigante-a-vapor começando um avanço a até 3″ do gigante- -a-vapor atingido não pode correr, fazer investida, e só pode avançar diretamente em direção a ele. Tranca Voltaica dura uma rodada.",
    carreiras: ["Mekânico Arcano"],
  },

  {
    nome: "Transferência",
    custo: 2,
    alcance: "CJR",
    sustentavel: true,
    efeito: "O conjurador pode permitir que outros aliados vivos em sua área de controle gastem os pontos de foco nele para ampliar jogadas de ataque ou dano corpo-a-corpo durante seus turnos, a uma taxa de 1 ponto de foco por ampliação.",
    carreiras: ["Conjurador de Guerra"],
  },

  {
    nome: "Triagem",
    custo: 2,
    alcance: "0",
    sustentavel: false,
    efeito: "O conjurador deve estar BAB com um personagem incapacitado que precisa ser estabilizado para lançar esta magia. Quando a magia é lançada, o personagem incapacitado é estabilizado imediatamente. (Base a base)",
    carreiras: ["Sacerdote"],
  },

  {
    nome: "Trincheira Individual",
    custo: 2,
    alcance: "CTR",
    ade: "5",
    sustentavel: true,
    efeito: "Coloque uma ADE de 5″ dentro da área de controle do conjurador. Personagens totalmente dentro da ADE tem cobertura e não sofrem dano de explosão. Ao traçar a LDV até um personagem que não está completamente dentro da ADE, ignore personagens interpostos completamente dentro da ADE.",
    carreiras: ["Arcanista", "Conjurador de Guerra", "Feiticeiro"],
  },

  {
    nome: "Vento Cortante",
    custo: 2,
    alcance: "10",
    pod: "12",
    sustentavel: false,
    atributo: "ARC",
    efeito: "Uma lâmina de vento corta o alvo.",
    carreiras: ["Feiticeiro"],
  },

  {
    nome: "Ventos Furiosos",
    custo: 4,
    alcance: "CJR",
    sustentavel: false,
    efeito: "Inimigos na área de controle do conjurador sofrem –2 de DEF. Inimigos que comecem seu turno na área de controle do conjurador não podem correr ou fazer investida. Ventos Furiosos dura uma rodada.",
    carreiras: ["Feiticeiro"],
  },

  {
    nome: "Visão",
    custo: 2,
    alcance: "6",
    sustentavel: true,
    efeito: "Da próxima vez que o alvo for diretamente atingido por um ataque, ele não sofre a jogada de dano do ataque e a Visão termina.",
    carreiras: ["Arcanista", "Sacerdote"],
  },

  {
    nome: "Visão Verdadeira",
    custo: 2,
    alcance: "CJR",
    sustentavel: true,
    efeito: "Este personagem ignora ocultação, camuflagem e furtividade. Ele também pode ver na escuridão completa.",
    carreiras: ["Arcanista", "Mago-Pistoleiro", "Sacerdote"],
  },

  {
    nome: "Zéfiro",
    custo: 3,
    alcance: "6",
    sustentavel: false,
    efeito: "O alvo pode avançar imediatamente até 5″. Ele só pode ser afetado por Zéfiro uma vez por rodada.",
    carreiras: ["Arcanista", "Feiticeiro"],
  },

  {
    nome: "Esfriar",
    custo: 0,
    alcance: "--",
    sustentavel: false,
    efeito: "Referência preservada exatamente para manter a carreira compatível com o livro-base. A conjuração automática deve permanecer indisponível enquanto os dados mecânicos não estiverem definidos. [DADOS INCOMPLETOS NO MANUAL: A carreira Feiticeiro (Gelo) cita Esfriar como magia inicial, mas o capítulo de magias do livro-base não fornece um bloco completo de estatísticas para esta magia.]",
    carreiras: [],
  },
];
