export interface HabilidadeSeed {
  nome: string;
  preRequisito?: string;
  efeito: string;
  repetivel: boolean;
  parametroTipo?: string;
}

export const habilidades: HabilidadeSeed[] = [
  {
    nome: "Absorver Impacto",
    efeito:
      "Quando seria derrubado, o personagem fica deitado em vez disso. Não funciona enquanto estiver montado.",
    repetivel: false,
  },
  {
    nome: "Acadêmico Arcano",
    efeito: "O limite de magias conhecidas passa a ser INT x3.",
    repetivel: false,
  },
  {
    nome: "Acrobático",
    preRequisito: "AGI 6",
    efeito:
      "Permite atravessar espaços ocupados durante o avanço e concede +3 em Saltar.",
    repetivel: false,
  },
  {
    nome: "Alquimista de Campo",
    preRequisito: "Alquimia nível 1",
    efeito: "Concede uma ação rápida adicional destinada à alquimia de campo.",
    repetivel: false,
  },
  {
    nome: "Aparar",
    efeito:
      "Enquanto estiver armado com uma arma de mão, ataques livres não podem atingir o personagem.",
    repetivel: false,
  },
  {
    nome: "Ás Comandante",
    preRequisito: "Habilidade Controlador de Gigantes; Comandar nível 2",
    efeito: "Concede uma ação rápida adicional exclusivamente para manobrar um gigante.",
    repetivel: false,
  },
  {
    nome: "Assassino Arcano",
    efeito:
      "Ataques ignoram determinadas proteções mágicas de ARM, DEF e Campo de Poder.",
    repetivel: false,
  },
  {
    nome: "Assassino de Magos",
    preRequisito: "PER 6",
    efeito:
      "Ganha um dado adicional de dano contra personagens capazes de conjurar magias.",
    repetivel: false,
  },
  {
    nome: "Astuto",
    preRequisito: "Detectar nível 1",
    efeito: "Permite repetir uma falha em Detectar uma vez.",
    repetivel: false,
  },
  {
    nome: "Ataque em Sequência: Prender",
    preRequisito: "Habilidade Combater com Duas Armas; Pistola nível 3",
    efeito:
      "Após acertar o mesmo alvo com duas pistolas, permite um ataque adicional que pode mover e derrubar o alvo.",
    repetivel: false,
  },
  {
    nome: "Ataque em Sequência: Sangrar",
    preRequisito: "Habilidade Combater com Duas Armas; Arma de Mão nível 3",
    efeito:
      "Após dois acertos com armas de mão, permite um ataque adicional que limita a próxima ativação do alvo.",
    repetivel: false,
  },
  {
    nome: "Ataque Montado",
    preRequisito: "Cavalgar nível 2",
    efeito: "Permite atacar durante um avanço completo enquanto estiver montado.",
    repetivel: false,
  },
  {
    nome: "Ataque Preciso",
    efeito:
      "Ao acertar corpo a corpo, permite escolher a localização do dano quando aplicável.",
    repetivel: false,
  },
  {
    nome: "Ataque Surpresa",
    efeito:
      "Aumenta em 2 a dificuldade para resistir ao nocaute provocado pelos ataques do personagem.",
    repetivel: false,
  },
  {
    nome: "Atirador",
    efeito:
      "Ignora a penalidade por disparar pistolas ou carabinas enquanto estiver engajado.",
    repetivel: false,
  },
  {
    nome: "Atirador de Elite",
    efeito: "Permite usar ações rápidas e mirar na mesma rodada.",
    repetivel: false,
  },
  {
    nome: "Avaliação",
    efeito: "Permite estimar o valor de objetos e identificar falsificações.",
    repetivel: false,
  },
  {
    nome: "Avanço Cuidadoso",
    preRequisito: "Sobrevivência nível 3",
    efeito: "Concede uma ação rápida adicional usada somente para conseguir cobertura.",
    repetivel: false,
  },
  {
    nome: "Besteiro",
    efeito: "Permite recarregar uma besta usando uma ação rápida.",
    repetivel: false,
  },
  {
    nome: "Boa Criação",
    efeito: "Permite repetir uma falha em Etiqueta uma vez.",
    repetivel: false,
  },
  {
    nome: "Bombardeiro",
    preRequisito: "Arma de Arremesso nível 3",
    efeito: "Permite repetir a direção e/ou distância de desvio de uma granada.",
    repetivel: false,
  },
  {
    nome: "Brado: Balada Heroica",
    preRequisito: "Brado de Matança nível 2",
    efeito:
      "Fortalece trolloides aliados dentro do alcance de comando durante uma rodada: ficam destemidos e recebem bônus em ataques corpo a corpo.",
    repetivel: false,
  },
  {
    nome: "Brado: Cacofonia",
    preRequisito: "Brado de Matança nível 2",
    efeito:
      "Por uma rodada, impede inimigos próximos (dentro do alcance de comando) de usar planos de batalha, manobras ou magias.",
    repetivel: false,
  },
  {
    nome: "Brado: Chamado",
    preRequisito: "Brado de Matança nível 1",
    efeito:
      "Produz um chamado audível a grande distância; o alcance em quilômetros depende do nível em Brado de Matança.",
    repetivel: false,
  },
  {
    nome: "Brado: Chamado do Desafio",
    preRequisito: "Brado de Matança nível 2",
    efeito:
      "Melhora a recuperação de trolloides aliados que realizam uma jogada de Durão.",
    repetivel: false,
  },
  {
    nome: "Brado: Rajada Sônica",
    preRequisito: "Brado de Matança nível 2",
    efeito:
      "Permite substituir um ataque por um ataque sônico à distância, baseado em DES + Brado de Matança.",
    repetivel: false,
  },
  {
    nome: "Brado: Reverberação",
    preRequisito: "Brado de Matança nível 2",
    efeito: "Ataque sônico sem dano capaz de empurrar inimigos atingidos.",
    repetivel: false,
  },
  {
    nome: "Brado: Tremor",
    preRequisito: "Brado de Matança nível 3",
    efeito: "Ataque de área sem dano que derruba os alvos atingidos.",
    repetivel: false,
  },
  {
    nome: "Cabeçada",
    preRequisito: "FOR 5; Combate Desarmado nível 2",
    efeito:
      "Permite gastar 1 ponto de façanha para realizar um ataque desarmado especial que derruba o alvo.",
    repetivel: false,
  },
  {
    nome: "Caçador de Feras",
    preRequisito: "Sobrevivência nível 1",
    efeito:
      "Recebe bônus de ataque contra animais e feras naturais igual ao nível de Sobrevivência.",
    repetivel: false,
  },
  {
    nome: "Caçador Veloz",
    preRequisito: "AGI 6",
    efeito:
      "Ao incapacitar um inimigo com ataque à distância normal, pode avançar imediatamente.",
    repetivel: false,
  },
  {
    nome: "Camuflagem",
    efeito:
      "Concede +2 adicional de DEF quando o personagem possui ocultação ou cobertura.",
    repetivel: false,
  },
  {
    nome: "Capacitar",
    efeito:
      "Permite gastar 1 ponto de façanha para recuperar vitalidade (1d3+1) de um aliado próximo (dentro do BAB) que não esteja incapacitado.",
    repetivel: false,
  },
  {
    nome: "Carteador",
    preRequisito: "Jogatina nível 2",
    efeito:
      "Melhora testes de Jogatina ligados a trapaça: adiciona um dado adicional e elimina o menor.",
    repetivel: false,
  },
  {
    nome: "Cavalaria Ligeira",
    preRequisito: "Cavalgar nível 2",
    efeito:
      "Permite movimento adicional de 10 metros ao final do turno quando usa uma montaria que não seja cavalo de guerra.",
    repetivel: false,
  },
  {
    nome: "Comandante de Batalha",
    preRequisito: "Comandar nível 3",
    efeito: "Permite utilizar um plano de batalha por turno sem gastar façanha.",
    repetivel: false,
  },
  {
    nome: "Comandante de Campo: Ataque Mágico",
    preRequisito: "ARC 5",
    efeito:
      "Gasta 1 ponto de foco para tornar mágicas as armas do grupo de batalha dentro da área de controle, por uma rodada.",
    repetivel: false,
  },
  {
    nome: "Comandante de Campo: Investida Implacável",
    preRequisito: "ARC 5",
    efeito:
      "Gasta 1 ponto de foco para conceder a habilidade Investida Implacável temporariamente (uma rodada) ao grupo de batalha dentro da área de controle.",
    repetivel: false,
  },
  {
    nome: "Comandante de Campo: Proteção de Escudo",
    preRequisito: "ARC 7",
    efeito:
      "Gasta 1 ponto de foco para conceder a habilidade Proteção de Escudo temporariamente (uma rodada) ao grupo de batalha dentro da área de controle.",
    repetivel: false,
  },
  {
    nome: "Combater com Duas Armas",
    preRequisito: "AGI 4",
    efeito:
      "Permite realizar um ataque adicional com a arma da segunda mão (uma arma de uma mão ou pistola em cada mão), aplicando -2 nesse ataque adicional.",
    repetivel: false,
  },
  {
    nome: "Conselheiro",
    preRequisito: "Comandar nível 2",
    efeito:
      "Aliados dentro do BAB do personagem aumentam seu alcance de comando em 1.",
    repetivel: false,
  },
  {
    nome: "Contragolpe",
    efeito:
      "Uma vez por rodada, permite atacar imediatamente um inimigo que errou um ataque corpo a corpo contra você.",
    repetivel: false,
  },
  {
    nome: "Controlador de Gigantes",
    efeito:
      "Permite comandar gigantes-a-vapor não vinculados, desde que os requisitos de idioma e códigos do córtex sejam atendidos.",
    repetivel: false,
  },
  {
    nome: "Coro",
    preRequisito: "ARC 4",
    efeito:
      "Recebe bônus cumulativo (+1 por aliado, dentro de 2 metros) em ataques mágicos, para cada aliado próximo da mesma fé que também possua Coro.",
    repetivel: false,
  },
  {
    nome: "Defensor",
    efeito:
      "Permite avançar até 4 metros e atacar corpo a corpo um inimigo que tenha atingido um aliado dentro do alcance de comando (uma vez por rodada).",
    repetivel: false,
  },
  {
    nome: "Defesas Arcanas",
    preRequisito: "ARC 5",
    efeito: "Concede +3 ARM contra ataques mágicos.",
    repetivel: false,
  },
  {
    nome: "Desbravador",
    preRequisito: "Sobrevivência nível 1",
    efeito: "Ignora penalidades de movimento causadas por terreno difícil.",
    repetivel: false,
  },
  {
    nome: "Detectar Mentiras",
    preRequisito: "Detectar nível 3",
    efeito: "O personagem reconhece automaticamente quando alguém está mentindo.",
    repetivel: false,
  },
  {
    nome: "Detonador",
    efeito: "Concede +2 em ataques elétricos à distância.",
    repetivel: false,
  },
  {
    nome: "Disparo Montado",
    preRequisito: "Cavalgar nível 1",
    efeito: "Remove a penalidade normal de ataques à distância enquanto estiver montado.",
    repetivel: false,
  },
  {
    nome: "Dissipar",
    efeito:
      "Ao atingir corpo a corpo, pode gastar 1 ponto de façanha para encerrar magias mantidas pelo alvo.",
    repetivel: false,
  },
  {
    nome: "Educação Universitária",
    efeito: "Permite repetir uma falha em Pesquisar uma vez.",
    repetivel: false,
  },
  {
    nome: "Emboscada",
    efeito:
      "Na primeira rodada de combate, amplia as jogadas de ataque e de dano contra inimigos ainda não ativados.",
    repetivel: false,
  },
  {
    nome: "Encontrar Cobertura",
    efeito:
      "Antes da iniciativa, permite mover-se 4 metros e, em seguida, encontrar cobertura ou deitar-se com uma ação rápida.",
    repetivel: false,
  },
  {
    nome: "Enganador",
    preRequisito: "Enganar nível 1; Subornar nível 1",
    efeito: "Permite repetir falhas em Enganar e Subornar, uma vez cada.",
    repetivel: false,
  },
  {
    nome: "Engenheiro Arcano",
    preRequisito: "Engenharia Mekânica nível 2",
    efeito: "Permite repetir uma falha em Engenharia Mekânica.",
    repetivel: false,
  },
  {
    nome: "Engenhoso",
    preRequisito: "Engenharia Mekânica nível 3",
    efeito:
      "Permite manter magias em gigantes controlados sem gastar foco ou gerar fadiga.",
    repetivel: false,
  },
  {
    nome: "Entrincheirar-se",
    efeito:
      "Permite cavar uma posição defensiva improvisada enquanto possui uma pá: concede cobertura, ignora dano de explosão e termina se o personagem se mover, for deslocado, derrubado ou engajado (não pode ser usada logo após correr).",
    repetivel: false,
  },
  {
    nome: "Escapar",
    preRequisito: "Habilidade Esquivo; Arte da Fuga nível 3",
    efeito:
      "Melhora o movimento concedido por Esquivo, permitindo um avanço completo em vez do movimento normal.",
    repetivel: false,
  },
  {
    nome: "Especialização",
    efeito:
      "Escolha um tipo de arma; as penalidades de ataque específicas desse tipo de arma passam a ser ignoradas.",
    repetivel: true,
    parametroTipo: "arma",
  },
  {
    nome: "Espreitar",
    preRequisito: "Esgueirar-se nível 1",
    efeito:
      "Concede furtividade enquanto o personagem estiver em condições adequadas de ocultação (terreno, magia ou névoa).",
    repetivel: false,
  },
  {
    nome: "Esquivo",
    efeito:
      "Após um ataque inimigo errar, permite avançar 4 metros sem provocar ataques livres (não funciona durante um avanço).",
    repetivel: false,
  },
  {
    nome: "Estável",
    efeito: "O personagem não pode ser derrubado enquanto não estiver montado.",
    repetivel: false,
  },
  {
    nome: "Estilo Livre",
    preRequisito: "Alquimia nível 1",
    efeito:
      "Permite improvisar ingredientes alquímicos (dificuldade 10 + valor do ingrediente) e reduzir o custo de compostos em 1 CO, até um custo mínimo.",
    repetivel: false,
  },
  {
    nome: "Exímio Atirador",
    efeito:
      "Recebe +2 para atingir com ataques à distância ou mágicos alvos beneficiados por cobertura, ocultação ou terreno elevado.",
    repetivel: false,
  },
  {
    nome: "Fabricar Bala Rúnica",
    efeito:
      "Permite fabricar munição rúnica (1 CO cada, até 5 por hora) usando materiais e um kit de fabricação apropriado.",
    repetivel: false,
  },
  {
    nome: "Fogo no Buraco!",
    preRequisito: "Arma de Arremesso nível 1",
    efeito:
      "Permite lançar uma granada antes do movimento e dos ataques normais, no início da Fase de Ação (exige correr ou avanço completo em seguida).",
    repetivel: false,
  },
  {
    nome: "Forçar o Ataque",
    preRequisito: "Habilidade Golpe com Escudo; Escudo nível 3",
    efeito:
      "Após lançar um inimigo, permite segui-lo e realizar um ataque corpo a corpo contra ele.",
    repetivel: false,
  },
  {
    nome: "Franco Atirador",
    preRequisito: "Fuzil nível 3",
    efeito:
      "Ao desistir do movimento para mirar, o primeiro ataque à distância do turno tem a jogada de dano ampliada.",
    repetivel: false,
  },
  {
    nome: "Gangue",
    efeito:
      "Concede bônus ao atacar corpo a corpo inimigos ameaçados por aliados (+1 base, +2 se houver um aliado com Gangue).",
    repetivel: false,
  },
  {
    nome: "Ginete de Combate",
    preRequisito: "Cavalgar nível 1",
    efeito:
      "Permite que um cavalo de guerra realize um ataque de impacto em determinadas condições (não pode ser usado logo após uma investida).",
    repetivel: false,
  },
  {
    nome: "Ginete Especialista",
    preRequisito: "Cavalgar nível 2",
    efeito:
      "Permite repetir falhas em Cavalgar e protege cavaleiro e montaria contra serem derrubados, desde que a montaria não esteja nocauteada.",
    repetivel: false,
  },
  {
    nome: "Ginete Veloz",
    efeito: "Enquanto estiver montado, ignora penalidades de terreno difícil.",
    repetivel: false,
  },
  {
    nome: "Golpe com Escudo",
    preRequisito: "FOR 6",
    efeito:
      "Permite gastar 1 ponto de façanha para transformar uma investida em um ataque de lançamento usando o escudo (poder FOR + poder do escudo).",
    repetivel: false,
  },
  {
    nome: "Golpe de Retaliação",
    preRequisito: "FIS 7",
    efeito:
      "Ao ser atingido corpo a corpo fora do turno, permite gastar 1 ponto de façanha para contra-atacar imediatamente.",
    repetivel: false,
  },
  {
    nome: "Granadeiro",
    preRequisito: "Arma de Arremesso nível 1",
    efeito:
      "Concede uma ação rápida adicional usada somente para puxar o pino de uma granada.",
    repetivel: false,
  },
  {
    nome: "Grito de Guerra",
    preRequisito: "Comandar nível 3",
    efeito:
      "Gasta 1 ponto de façanha para dobrar o alcance de comando e tornar o usuário e os aliados dentro do alcance destemidos por uma rodada.",
    repetivel: false,
  },
  {
    nome: "Guarda-Costas",
    preRequisito: "Habilidade Proteção de Escudo; Escudo nível 3",
    efeito: "Remove o limite de usos por rodada de Proteção de Escudo.",
    repetivel: false,
  },
  {
    nome: "Identidade Falsa",
    preRequisito: "Disfarce nível 1",
    efeito:
      "Cria uma identidade alternativa: amplia os testes de Disfarce ao usá-la e concede uma perícia profissional nível 1 ligada à carreira assumida.",
    repetivel: true,
    parametroTipo: "identidade",
  },
  {
    nome: "Idioma",
    efeito: "Permite aprender um novo idioma, ganhando fluência nele.",
    repetivel: true,
    parametroTipo: "idioma",
  },
  {
    nome: "Imobilizar",
    efeito:
      "Ao incapacitar um alvo em alcance corpo a corpo, permite mantê-lo vivo, recuperando 1 ponto de vitalidade nele e deixando-o como prisioneiro fora de combate.",
    repetivel: false,
  },
  {
    nome: "Imunidade: Corrosão",
    efeito: "O personagem é imune a dano de corrosão.",
    repetivel: false,
  },
  {
    nome: "Imunidade: Eletricidade",
    efeito: "O personagem é imune a dano elétrico.",
    repetivel: false,
  },
  {
    nome: "Imunidade: Fogo",
    efeito: "O personagem é imune a dano de fogo.",
    repetivel: false,
  },
  {
    nome: "Imunidade: Frio",
    efeito: "O personagem é imune a dano de frio.",
    repetivel: false,
  },
  {
    nome: "Inscrever Fórmulas",
    preRequisito: "Engenharia Mekânica nível 1",
    efeito: "Permite inscrever placas rúnicas.",
    repetivel: false,
  },
  {
    nome: "Investida de Baioneta",
    efeito:
      "Permite efetuar um disparo (ignorando a penalidade de alvo engajado) antes do ataque de uma investida feita com uma arma equipada com baioneta.",
    repetivel: false,
  },
  {
    nome: "Investida de Cavalaria",
    preRequisito: "Cavalgar nível 1",
    efeito: "Permite realizar investidas de cavalaria usando um cavalo de guerra.",
    repetivel: false,
  },
  {
    nome: "Investida Implacável",
    efeito: "Ignora penalidades de terreno difícil durante uma investida.",
    repetivel: false,
  },
  {
    nome: "Legado de Bragg",
    preRequisito: "Brado de Matança nível 2",
    efeito:
      "Concede uma ação rápida adicional usada apenas para realizar brados de matança.",
    repetivel: false,
  },
  {
    nome: "Líder de Equipe",
    efeito:
      "Permite transferir um ponto de façanha recém-adquirido para outro personagem dentro do alcance de comando.",
    repetivel: false,
  },
  {
    nome: "Líder Natural",
    preRequisito: "Comandar nível 1",
    efeito: "Aumenta o alcance de comando em 4 metros.",
    repetivel: false,
  },
  {
    nome: "Linguagem de Sinais",
    preRequisito: "Criptografia nível 1",
    efeito:
      "Permite criar e ensinar uma linguagem de sinais codificada baseada em Criptografia (exige INT mínimo 3 para aprendê-la).",
    repetivel: false,
  },
  {
    nome: "Linha Defensiva",
    efeito:
      "Concede ARM adicional quando o personagem está dentro do BAB de aliados (+1, ou +2 se o aliado também tiver esta habilidade).",
    repetivel: false,
  },
  {
    nome: "Lutador Noturno",
    efeito:
      "Aumenta para 16 metros a distância na qual a furtividade (Esgueirar-se/Espreitar) causa erro automático contra os ataques do personagem.",
    repetivel: false,
  },
  {
    nome: "Maestria Elemental",
    preRequisito: "ARC 5",
    efeito:
      "Concede +1 em ataque e dano ao conjurar magias ofensivas pertencentes à lista elemental.",
    repetivel: false,
  },
  {
    nome: "Magia das Sombras",
    preRequisito: "Arquétipo Dotado; Esgueirar-se nível 2",
    efeito:
      "Oculta os sinais visuais e mágicos da conjuração, dificultando que seja detectada por runas ou Sensibilidade Mágica.",
    repetivel: false,
  },
  {
    nome: "Manobra: Ataque",
    preRequisito: "Habilidade Controlador de Gigantes",
    efeito: "Ordena uma investida especial a um gigante controlado.",
    repetivel: false,
  },
  {
    nome: "Manobra: Ataque Auxiliar",
    preRequisito: "Habilidade Controlador de Gigantes",
    efeito: "Ordena imediatamente um ataque normal ao gigante controlado.",
    repetivel: false,
  },
  {
    nome: "Manobra: De Imediato",
    preRequisito: "Habilidade Controlador de Gigantes",
    efeito: "Ordena imediatamente um avanço completo ao gigante controlado.",
    repetivel: false,
  },
  {
    nome: "Manobra: Qualquer Terreno",
    preRequisito: "Habilidade Controlador de Gigantes",
    efeito:
      "Concede temporariamente (uma rodada) a habilidade Desbravador a um gigante controlado, exigindo que ele faça uma investida ou pancada.",
    repetivel: false,
  },
  {
    nome: "Mestre das Infusões",
    preRequisito: "Alquimia nível 2",
    efeito: "Permite repetir uma falha em Alquimia uma vez.",
    repetivel: false,
  },
  {
    nome: "Mira Aguçada",
    efeito:
      "Aumenta os alcances efetivo (+4 metros) e extremo (+20 metros) de arcos e fuzis.",
    repetivel: false,
  },
  {
    nome: "Mira Aprimorada",
    efeito: "Ao acertar um ataque à distância, permite escolher a localização do dano.",
    repetivel: false,
  },
  {
    nome: "Obter Peças",
    efeito:
      "Facilita encontrar e comprar componentes para gigantes-a-vapor: reduz o preço pela metade em comunidades industriais, levando 1 dia de busca.",
    repetivel: false,
  },
  {
    nome: "Otário!",
    preRequisito: "Intimidar nível 3",
    efeito:
      "Permite gastar uma reação para redirecionar até 4 metros para um aliado vivo e corpóreo um ataque à distância que atingiria o personagem.",
    repetivel: false,
  },
  {
    nome: "Perseguir",
    preRequisito: "Rastrear nível 3",
    efeito:
      "Gasta 1 ponto de façanha para marcar um inimigo (uma vez por encontro, renovável se o alvo for destruído) e permite avançar após o movimento dele durante o encontro.",
    repetivel: false,
  },
  {
    nome: "Pés Ligeiros",
    preRequisito: "VEL 7",
    efeito: "Ao correr, o movimento passa a ser VEL x3 em vez do multiplicador normal.",
    repetivel: false,
  },
  {
    nome: "Plano de Batalha: Abaixar-se",
    preRequisito: "Comandar nível 2",
    efeito:
      "Gasta 1 ponto de façanha para conceder proteção contra explosões e cobertura aos aliados que seguirem as ordens.",
    repetivel: false,
  },
  {
    nome: "Plano de Batalha: Chamado para Ação",
    preRequisito: "Comandar nível 1",
    efeito:
      "Gasta 1 ponto de façanha para permitir que aliados derrubados dentro do alcance de comando se levantem ou fiquem deitados imediatamente.",
    repetivel: false,
  },
  {
    nome: "Plano de Batalha: Golpe Coordenado",
    preRequisito: "Comandar nível 1",
    efeito:
      "Gasta 1 ponto de façanha para permitir, durante uma rodada surpresa, ataques imediatos dos aliados dentro do alcance de comando (encerrando a rodada surpresa).",
    repetivel: false,
  },
  {
    nome: "Plano de Batalha: Reconhecimento",
    preRequisito: "Comandar nível 2; Sobrevivência nível 3",
    efeito:
      "Gasta 1 ponto de façanha para conceder Desbravador por uma rodada aos aliados dentro do alcance de comando.",
    repetivel: false,
  },
  {
    nome: "Plano de Batalha: Ritmo Desesperado",
    preRequisito: "Comandar nível 3",
    efeito:
      "Gasta 1 ponto de façanha para aumentar em 4 metros o movimento dos aliados que seguem as ordens, por uma rodada.",
    repetivel: false,
  },
  {
    nome: "Plano de Batalha: Sombra",
    preRequisito: "Comandar nível 1",
    efeito:
      "Gasta 1 ponto de façanha para conceder Espreitar por uma rodada aos aliados que seguem as ordens.",
    repetivel: false,
  },
  {
    nome: "Poder Maior",
    efeito:
      "Permite manter uma magia por turno sem pagar o custo normal de manutenção.",
    repetivel: false,
  },
  {
    nome: "Porto de Escala",
    preRequisito: "Navegação nível 1",
    efeito:
      "Permite registrar um destino conhecido e melhora os resultados de Navegação até esse local, até um limite baseado no nível em Navegação.",
    repetivel: true,
    parametroTipo: "texto",
  },
  {
    nome: "Precisão Anatômica",
    efeito:
      "Um ataque corpo a corpo contra um alvo vivo ainda causa dano mínimo (1d3) mesmo quando não supera a ARM do alvo.",
    repetivel: false,
  },
  {
    nome: "Precisão Arcana",
    preRequisito: "Detectar nível 3",
    efeito: "Ao mirar, permite ignorar a furtividade do alvo durante o turno.",
    repetivel: false,
  },
  {
    nome: "Preparação Rápida",
    preRequisito: "Alquimia nível 2",
    efeito: "Reduz pela metade o tempo necessário para criar itens alquímicos.",
    repetivel: false,
  },
  {
    nome: "Preparar Defesa",
    preRequisito: "Arma Grande nível 2",
    efeito:
      "Com uma arma de alcance, aplica -2 a investidas e a determinados ataques feitos contra o personagem vindos de seu arco frontal.",
    repetivel: false,
  },
  {
    nome: "Privilégio",
    efeito:
      "Representa posição de nobreza: concede +2 em perícias sociais diante de quem reconhece e respeita a posição do personagem, além de imunidade a crimes menores, direito a tribunal de pares e possibilidade de solicitar hospitalidade.",
    repetivel: false,
  },
  {
    nome: "Pro Chão!",
    efeito:
      "Reduz os efeitos de explosões quando o personagem está deitado, ignorando dano indireto e podendo deitar-se ao sofrer uma explosão.",
    repetivel: false,
  },
  {
    nome: "Proteção de Escudo",
    preRequisito: "Escudo nível 1",
    efeito:
      "Como reação, permite receber (uma vez por turno, a até 4 metros) um ataque que atingiria um aliado próximo; não funciona se o personagem estiver incorpóreo, derrubado, deitado ou imóvel.",
    repetivel: false,
  },
  {
    nome: "Protegido",
    preRequisito: "Escudo nível 2",
    efeito:
      "Enquanto usa escudo, protege o personagem e aliados dentro do BAB contra dano de explosão.",
    repetivel: false,
  },
  {
    nome: "Punhalada pelas Costas",
    efeito: "Ataques realizados pelas costas recebem um dado adicional de dano.",
    repetivel: false,
  },
  {
    nome: "Rastro sem Pegadas",
    preRequisito: "Esgueirar-se nível 2",
    efeito:
      "Permite ocultar o próprio rastro (mesmo montado) ao custo de reduzir a velocidade de movimento pela metade, aumentando em 3 a dificuldade para ser rastreado.",
    repetivel: false,
  },
  {
    nome: "Rearme Rápido",
    efeito:
      "Escolha uma arma. Concede uma ação rápida adicional usada somente para rearmar esse tipo de arma.",
    repetivel: true,
    parametroTipo: "arma",
  },
  {
    nome: "Recarga Rápida",
    efeito:
      "Concede uma ação rápida adicional usada somente para recarregar uma arma de ataque à distância.",
    repetivel: false,
  },
  {
    nome: "Remendão",
    preRequisito: "Engenharia Mekânica nível 1",
    efeito: "Permite realizar consertos temporários em gigantes-a-vapor durante combate.",
    repetivel: false,
  },
  {
    nome: "Resistência a Doenças",
    efeito: "Amplia os testes para resistir a doenças e infecções.",
    repetivel: false,
  },
  {
    nome: "Resistência a Veneno",
    efeito: "Amplia os testes para resistir a venenos e toxinas.",
    repetivel: false,
  },
  {
    nome: "Retornar Fogo",
    efeito:
      "Uma vez por rodada, permite atacar imediatamente quem errou um ataque à distância contra você (exige arma carregada para ataque à distância).",
    repetivel: false,
  },
  {
    nome: "Retentor",
    preRequisito: "Usar Cordas nível 1",
    efeito: "Aumenta em 3 a dificuldade para escapar de contenções feitas pelo personagem.",
    repetivel: false,
  },
  {
    nome: "Sanguinário",
    preRequisito: "Arma de Mão nível 3",
    efeito: "Concede +2 em dano contra personagens vivos.",
    repetivel: false,
  },
  {
    nome: "Saque Rápido",
    efeito:
      "Concede +2 de Iniciativa e uma ação rápida adicional no primeiro turno de combate para sacar uma arma.",
    repetivel: false,
  },
  {
    nome: "Sentinela",
    efeito:
      "Uma vez por rodada, permite atacar imediatamente um inimigo que entre na linha de visão do personagem.",
    repetivel: false,
  },
  {
    nome: "Sentinela de Ferro",
    preRequisito: "Habilidade Controlador de Gigantes; Comandar nível 3",
    efeito:
      "Recebe +2 ARM e não pode ser derrubado enquanto estiver dentro do BAB de um gigante-a-vapor que controla.",
    repetivel: false,
  },
  {
    nome: "Sintonizar",
    preRequisito: "Engenharia Mekânica nível 3",
    efeito:
      "Permite, estando dentro do BAB de um gigante controlado, ampliar temporariamente (no turno do gigante) o ataque ou o dano dele.",
    repetivel: false,
  },
  {
    nome: "Sólido como Rocha",
    preRequisito: "FIS 8",
    efeito:
      "Impede que o personagem e aliados dentro do seu BAB sejam derrubados, exceto enquanto ele estiver montado.",
    repetivel: false,
  },
  {
    nome: "Superconsciência",
    preRequisito: "Comandar nível 3",
    efeito:
      "Concede Visão Circular (360 graus) aos aliados dentro do alcance de comando.",
    repetivel: false,
  },
  {
    nome: "Suportar Carga",
    preRequisito: "FOR 5",
    efeito: "Reduz em 1 as penalidades de VEL e DEF causadas pela armadura usada.",
    repetivel: false,
  },
  {
    nome: "Tiro Duplo",
    efeito:
      "Ao desistir do movimento, permite realizar um ataque à distância adicional usando pistola ou fuzil.",
    repetivel: false,
  },
  {
    nome: "Tiro Próximo",
    efeito:
      "Ignora a penalidade de disparar um gládio tempestuoso enquanto estiver engajado.",
    repetivel: false,
  },
  {
    nome: "Trabalho Rápido",
    preRequisito: "AGI 5",
    efeito:
      "Após matar um ou mais inimigos em combate corpo a corpo durante a ação, pode realizar um ataque à distância adicional se possuir arma à distância carregada.",
    repetivel: false,
  },
  {
    nome: "Trespassar",
    preRequisito: "Arma Grande nível 1",
    efeito:
      "Após incapacitar um inimigo com arma grande, permite um ataque corpo a corpo adicional contra outro alvo no alcance (uma vez por turno).",
    repetivel: false,
  },
  {
    nome: "Vaporeiro",
    preRequisito: "Engenharia Mekânica nível 2",
    efeito:
      "Permite repetir falhas em Engenharia Mekânica ao consertar ou desmontar gigantes-a-vapor.",
    repetivel: false,
  },
  {
    nome: "Vínculo",
    efeito:
      "Concede um espaço de vínculo para arma mekânica, armadura de conjurador de guerra apropriada ou gigante-a-vapor; permite desvincular, mas o item não pode estar vinculado a outro personagem.",
    repetivel: true,
    parametroTipo: "vinculo",
  },
  {
    nome: "Vontade de Ferro",
    efeito: "Permite repetir uma falha em teste de Força de Vontade uma vez.",
    repetivel: false,
  },
];
