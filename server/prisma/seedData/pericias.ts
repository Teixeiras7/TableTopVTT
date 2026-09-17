export interface PericiaSeed {
  nome: string;
  atributo: string;
  categoria: "militar" | "profissional" | "geral";
  semTreinamento: boolean;
  repetivel: boolean;
  observacao?: string;
}

export const pericias: PericiaSeed[] = [
  // ---- Militares ----
  {
    nome: "Arco",
    atributo: "des",
    categoria: "militar",
    semTreinamento: true,
    repetivel: false,
    observacao: "Treinamento para realizar ataques com arcos.",
  },
  {
    nome: "Arma de Arremesso",
    atributo: "mae",
    categoria: "militar",
    semTreinamento: true,
    repetivel: false,
    observacao: "Treinamento para realizar ataques com armas de arremesso e fundas.",
  },
  {
    nome: "Arma de Mão",
    atributo: "mae",
    categoria: "militar",
    semTreinamento: true,
    repetivel: false,
    observacao: "Treinamento para realizar ataques com armas corpo a corpo de mão.",
  },
  {
    nome: "Arma Grande",
    atributo: "mae",
    categoria: "militar",
    semTreinamento: true,
    repetivel: false,
    observacao:
      "Treinamento para realizar ataques com armas corpo a corpo grandes. Só é possível empunhar uma arma grande por vez.",
  },
  {
    nome: "Artilharia Leve",
    atributo: "des",
    categoria: "militar",
    semTreinamento: true,
    repetivel: false,
    observacao:
      "Treinamento para operar, carregar, transportar e atacar com armas de artilharia leve.",
  },
  {
    nome: "Besta",
    atributo: "des",
    categoria: "militar",
    semTreinamento: true,
    repetivel: false,
    observacao: "Treinamento para realizar ataques com bestas.",
  },
  {
    nome: "Combate Desarmado",
    atributo: "mae",
    categoria: "militar",
    semTreinamento: true,
    repetivel: false,
    observacao: "Treinamento para realizar ataques desarmados.",
  },
  {
    nome: "Escudo",
    atributo: "mae",
    categoria: "militar",
    semTreinamento: true,
    repetivel: false,
    observacao:
      "Treinamento para atacar e se defender com escudos; concede +1 ARM por nível quando o personagem usa escudo e o ataque vem do seu arco frontal (bônus não cumulativo com escudos adicionais).",
  },
  {
    nome: "Fuzil",
    atributo: "des",
    categoria: "militar",
    semTreinamento: true,
    repetivel: false,
    observacao: "Treinamento para realizar ataques com fuzis.",
  },
  {
    nome: "Lança",
    atributo: "mae",
    categoria: "militar",
    semTreinamento: true,
    repetivel: false,
    observacao:
      "Treinamento para realizar ataques com lanças; impede empunhar outra lança ou uma arma grande ao mesmo tempo.",
  },
  {
    nome: "Pistola",
    atributo: "des",
    categoria: "militar",
    semTreinamento: true,
    repetivel: false,
    observacao: "Treinamento para realizar ataques com pistolas.",
  },

  // ---- Profissionais ----
  {
    nome: "Alquimia",
    atributo: "int",
    categoria: "profissional",
    semTreinamento: false,
    repetivel: false,
    observacao:
      "Conhecimento para identificar substâncias, extrair ingredientes e criar compostos e itens alquímicos.",
  },
  {
    nome: "Arrombar",
    atributo: "agi",
    categoria: "profissional",
    semTreinamento: false,
    repetivel: false,
    observacao: "Permite abrir fechaduras e cofres sem possuir suas chaves ou combinações.",
  },
  {
    nome: "Arte da Fuga",
    atributo: "agi",
    categoria: "profissional",
    semTreinamento: true,
    repetivel: false,
    observacao:
      "Permite escapar de cordas, correntes, algemas e outras formas de contenção; sem treinamento o teste é mais lento e sofre penalidade contra amarras feitas com cordas.",
  },
  {
    nome: "Brado de Matança",
    atributo: "des",
    categoria: "profissional",
    semTreinamento: false,
    repetivel: false,
    observacao:
      "Treinamento para utilizar brados de matança como inspiração ou como ataques à distância; limitado a um uso por turno.",
  },
  {
    nome: "Ciência Forense",
    atributo: "int",
    categoria: "profissional",
    semTreinamento: false,
    repetivel: false,
    observacao: "Permite reconstruir acontecimentos através da análise de evidências físicas.",
  },
  {
    nome: "Comandar",
    atributo: "social",
    categoria: "profissional",
    semTreinamento: false,
    repetivel: false,
    observacao:
      "Treinamento para liderar subordinados, emitir ordens e manter a disciplina; define o alcance de comando (mesmo sem a perícia treinada) e permite a ação Nervos de Aço para fortalecer a resistência ao medo dos aliados no alcance.",
  },
  {
    nome: "Criptografia",
    atributo: "int",
    categoria: "profissional",
    semTreinamento: true,
    repetivel: false,
    observacao:
      "Permite criar, utilizar e quebrar códigos; sem treinamento só cria ou entende códigos simples no idioma nativo.",
  },
  {
    nome: "Direito",
    atributo: "int",
    categoria: "profissional",
    semTreinamento: false,
    repetivel: false,
    observacao: "Conhecimento das leis e procedimentos jurídicos dos Reinos de Ferro.",
  },
  {
    nome: "Disfarce",
    atributo: "int",
    categoria: "profissional",
    semTreinamento: true,
    repetivel: false,
    observacao:
      "Permite criar e usar disfarces para ocultar ou substituir identidade; testado em oposição a Detectar. Sem treinamento falha automaticamente contra quem já conhece o personagem.",
  },
  {
    nome: "Enganar",
    atributo: "social",
    categoria: "profissional",
    semTreinamento: true,
    repetivel: false,
    observacao: "Permite convencer outras pessoas através de mentiras e falsidades.",
  },
  {
    nome: "Engenharia Mekânica",
    atributo: "int",
    categoria: "profissional",
    semTreinamento: false,
    repetivel: false,
    observacao:
      "Conhecimento de máquinas, dispositivos mekânicos, gigantes-a-vapor e princípios de engenharia.",
  },
  {
    nome: "Esgueirar-se",
    atributo: "agi",
    categoria: "profissional",
    semTreinamento: true,
    repetivel: false,
    observacao:
      "Permite esconder-se, mover-se silenciosamente e seguir alvos sem ser detectado; testada passivamente e em oposição contra Detectar.",
  },
  {
    nome: "Etiqueta",
    atributo: "social",
    categoria: "profissional",
    semTreinamento: true,
    repetivel: false,
    observacao:
      "Conhecimento de protocolo, comportamento social e interação com pessoas de posição elevada; sem treinamento reduz o nível de sucesso em 1.",
  },
  {
    nome: "Falsificar",
    atributo: "menor-entre:agi,int",
    categoria: "profissional",
    semTreinamento: false,
    repetivel: false,
    observacao:
      "Permite criar documentos, moedas e outros itens falsificados; testado em oposição a Detectar.",
  },
  {
    nome: "Interrogatório",
    atributo: "int",
    categoria: "profissional",
    semTreinamento: true,
    repetivel: false,
    observacao:
      "Permite extrair informações de um alvo através de pressão, ameaça ou persuasão; testado em oposição a FIS+INT do alvo. Sem treinamento sofre penalidade contra alvos treinados na perícia.",
  },
  {
    nome: "Manha",
    atributo: "per",
    categoria: "profissional",
    semTreinamento: false,
    repetivel: false,
    observacao: "Conhecimento das ruas e do submundo, incluindo contatos e mercados ilícitos.",
  },
  {
    nome: "Marinhagem",
    atributo: "especial",
    categoria: "profissional",
    semTreinamento: false,
    repetivel: false,
    observacao:
      "Treinamento para operar e manobrar embarcações. A fonte antiga aponta uma inconsistência do próprio manual: o cabeçalho lista INT ou FOR, mas a descrição do teste usa o menor entre FOR e AGI; mantido como observação até confirmação, sem inventar regra.",
  },
  {
    nome: "Medicina",
    atributo: "int",
    categoria: "profissional",
    semTreinamento: true,
    repetivel: false,
    observacao:
      "Conhecimento médico para diagnosticar, tratar e estabilizar personagens; permite estabilizar feridos graves, tratar veneno ou doença (concede +2 para resistir após tratamento bem-sucedido) e acelera a recuperação semanal de acordo com o nível na perícia.",
  },
  {
    nome: "Navegação",
    atributo: "per",
    categoria: "profissional",
    semTreinamento: false,
    repetivel: false,
    observacao:
      "Permite determinar localização, planejar rotas e viajar por caminhos menos diretos.",
  },
  {
    nome: "Negociação",
    atributo: "social",
    categoria: "profissional",
    semTreinamento: true,
    repetivel: false,
    observacao:
      "Permite resolver disputas, barganhar preços, negociar contratos e chegar a acordos financeiros (compras, revendas e contratos).",
  },
  {
    nome: "Ofício",
    atributo: "int",
    categoria: "profissional",
    semTreinamento: false,
    repetivel: true,
    observacao:
      "Permite fabricar e consertar itens dentro de uma área de especialização escolhida; repetível por especialidade (ex.: Ofício (Metalurgia), Ofício (Fabricação de Armas de Fogo)).",
  },
  {
    nome: "Oratória",
    atributo: "social",
    categoria: "profissional",
    semTreinamento: false,
    repetivel: false,
    observacao: "Permite influenciar grandes grupos através de discursos.",
  },
  {
    nome: "Pesquisar",
    atributo: "int",
    categoria: "profissional",
    semTreinamento: true,
    repetivel: false,
    observacao: "Permite localizar informações em bibliotecas, arquivos e registros.",
  },
  {
    nome: "Punga",
    atributo: "agi",
    categoria: "profissional",
    semTreinamento: false,
    repetivel: false,
    observacao: "Permite furtar pertences de outra pessoa sem ser percebido.",
  },
  {
    nome: "Rastrear",
    atributo: "per",
    categoria: "profissional",
    semTreinamento: true,
    repetivel: false,
    observacao:
      "Permite seguir rastros e identificar sinais deixados pela passagem de uma criatura; sem treinamento só identifica trilhas óbvias e não funciona em terreno firme nem com trilhas complexas.",
  },
  {
    nome: "Seduzir",
    atributo: "social",
    categoria: "profissional",
    semTreinamento: false,
    repetivel: false,
    observacao:
      "Permite tentar criar atração romântica e usar essa relação como vantagem social.",
  },
  {
    nome: "Sobrevivência",
    atributo: "per",
    categoria: "profissional",
    semTreinamento: true,
    repetivel: false,
    observacao:
      "Permite sobreviver em ambientes selvagens, encontrar abrigo, alimento e sustentar outras pessoas; sem treinamento sempre usa a coluna mais fácil da tabela de ambiente.",
  },
  {
    nome: "Subornar",
    atributo: "social",
    categoria: "profissional",
    semTreinamento: true,
    repetivel: false,
    observacao:
      "Permite negociar favores ilícitos através de dinheiro ou outras vantagens; sem treinamento reduz o nível de sucesso em 1.",
  },
  {
    nome: "Usar Cordas",
    atributo: "agi",
    categoria: "profissional",
    semTreinamento: true,
    repetivel: false,
    observacao:
      "Permite utilizar nós e amarras para prender objetos ou imobilizar personagens; o resultado do teste define o número-alvo para a perícia Arte da Fuga do alvo amarrado.",
  },
  {
    nome: "Senso de Direção",
    atributo: "especial",
    categoria: "profissional",
    semTreinamento: false,
    repetivel: false,
    observacao:
      "Citada como perícia inicial da carreira Explorador, mas a fonte (manual básico) não fornece uma descrição mecânica própria para ela na seção de perícias.",
  },

  // ---- Gerais ----
  {
    nome: "Cavalgar",
    atributo: "agi",
    categoria: "geral",
    semTreinamento: true,
    repetivel: false,
    observacao:
      "Permite controlar montarias e executar manobras perigosas enquanto cavalga.",
  },
  {
    nome: "Conduzir",
    atributo: "agi",
    categoria: "geral",
    semTreinamento: true,
    repetivel: false,
    observacao:
      "Permite conduzir carroças, carruagens e veículos similares em situações de risco.",
  },
  {
    nome: "Conhecimento",
    atributo: "int",
    categoria: "geral",
    semTreinamento: true,
    repetivel: true,
    observacao:
      "Representa estudo especializado sobre um assunto específico; repetível por assunto (ex.: Conhecimento (Trolloide), Conhecimento (Ordem de Cavalaria)).",
  },
  {
    nome: "Detectar",
    atributo: "per",
    categoria: "geral",
    semTreinamento: true,
    repetivel: false,
    observacao:
      "Representa a capacidade de perceber ameaças, objetos, pistas e personagens ocultos; testado em oposição a Esgueirar-se.",
  },
  {
    nome: "Escalar",
    atributo: "agi",
    categoria: "geral",
    semTreinamento: true,
    repetivel: false,
    observacao: "Permite subir e descer superfícies difíceis.",
  },
  {
    nome: "Intimidar",
    atributo: "social",
    categoria: "geral",
    semTreinamento: true,
    repetivel: false,
    observacao: "Permite ameaçar e amedrontar outras pessoas.",
  },
  {
    nome: "Jogatina",
    atributo: "per",
    categoria: "geral",
    semTreinamento: true,
    repetivel: false,
    observacao: "Representa conhecimento e habilidade em jogos de azar.",
  },
  {
    nome: "Lidar com Animais",
    atributo: "social",
    categoria: "geral",
    semTreinamento: true,
    repetivel: false,
    observacao:
      "Permite controlar, acalmar ou influenciar animais; sem treinamento só funciona com animais bem treinados em comportamentos já ensinados a eles.",
  },
  {
    nome: "Nadar",
    atributo: "for",
    categoria: "geral",
    semTreinamento: true,
    repetivel: false,
    observacao: "Permite nadar e determina o deslocamento do personagem na água.",
  },
  {
    nome: "Saltar",
    atributo: "fis",
    categoria: "geral",
    semTreinamento: true,
    repetivel: false,
    observacao:
      "Permite saltar horizontalmente, verticalmente e reduzir os efeitos de quedas (sem dano em quedas de até 6 metros).",
  },
];
