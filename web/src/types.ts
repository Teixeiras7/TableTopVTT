export interface AtributoPerfil {
  inicial: number | null;
  maximo: { heroi: number | null; veterano: number | null; epico: number | null };
}

export interface Arquetipo {
  id: number;
  nome: string;
  passivaFixa: string;
  opcoesTexto: string;
}

export interface Raca {
  id: number;
  nome: string;
  atributos: Record<string, AtributoPerfil>;
  idiomas?: string | null;
  caracteristicas?: string | null;
  arquetipos: Arquetipo[];
}

export interface CarreiraResumo {
  id: number;
  nome: string;
  apenasInicial: boolean;
  ouroInicial: number;
  racaExigida: { nome: string } | null;
  arquetipoExigido: { nome: string } | null;
}

export interface EscolhaOpcao {
  id: number;
  nivel: number | null;
  quantidade: number | null;
  parametro: string | null;
  pericia: { id: number; nome: string } | null;
  habilidade: { id: number; nome: string } | null;
  item: { id: number; nome: string } | null;
}

export interface Escolha {
  id: number;
  tipo: "pericia-militar" | "pericia-profissional" | "habilidade" | "item";
  quantidade: number;
  descricao: string | null;
  opcoes: EscolhaOpcao[];
}

export interface CarreiraDetalhe extends CarreiraResumo {
  pericias: { pericia: { nome: string }; nivelConcedido: number | null; nivelMaximo: number | null; subtipo: string | null }[];
  habilidades: { habilidade: { nome: string }; concedidaInicial: boolean; parametro: string | null }[];
  conexoes: { conexao: { nome: string } }[];
  itens: { item: { nome: string }; quantidade: number }[];
  escolhas: Escolha[];
}

export interface Item {
  id: number;
  nome: string;
  categoria: string;
  custo: number;
  descricao: string | null;
}

export interface Mesa {
  id: number;
  nome: string;
  codigo: string;
}

export interface Personagem {
  id: number;
  nome: string;
  nivel: string;
  fis: number;
  vel: number;
  for: number;
  agi: number;
  des: number;
  mae: number;
  int: number;
  per: number;
  arc: number;
  raca: { nome: string };
  arquetipo: { nome: string };
  carreiras: { carreira: { nome: string } }[];
}

export interface AtaqueDisponivel {
  nome: string;
  bonusAtaque: number;
  pod: number | null;
  corpoACorpo: boolean;
}

export interface FichaEfetiva {
  def: number;
  arm: number;
  von: number;
  iniciativa: number;
  ataques: AtaqueDisponivel[];
}

export interface EspiralEixo {
  max: number;
  dano: number;
}

export interface PersonagemDetalhe extends Personagem {
  experiencia: number;
  pontosFacanha: number;
  fadigaAtual: number;
  focoAtual: number;
  espiralVital: { fis: EspiralEixo; agi: EspiralEixo; int: EspiralEixo };
  pericias: { id: number; periciaId: number; nivel: number; subtipo: string | null; pericia: { nome: string; atributo: string } }[];
  habilidades: { id: number; habilidadeId: number; parametro: string | null; habilidade: { nome: string; efeito: string } }[];
  conexoes: { id: number; conexao: { nome: string; beneficio: string } }[];
  magias: { id: number; magia: { nome: string; custo: number; alcance: string; efeito: string } }[];
  inventario: {
    id: number;
    itemId: number;
    quantidade: number;
    equipado: boolean;
    item: { nome: string; categoria: string; custo: number };
  }[];
  ficha: FichaEfetiva;
}

export interface ResultadoTeste {
  nomeTeste: string;
  dados: { dados: number[]; total: number };
  bonus: number;
  total: number;
  critico: boolean;
  autoFalha: boolean;
  autoSucesso: boolean;
  sucesso?: boolean;
}

export interface Condicao {
  id: number;
  nome: string;
  efeito: string;
}

export interface CombateEncontro {
  id: number;
  mesaId: number;
  rodada: number;
  fase: string;
  turnoAtual: number;
  encerrado: boolean;
  criadoEm: string;
}

export interface CombateParticipanteDetalhe {
  id: number;
  personagemId: number | null;
  bonusIniciativa: number;
  rolagemIniciativa: number | null;
  ordem: number | null;
  adiado: boolean;
  vidaMaxAdHoc: number | null;
  vidaAtualAdHoc: number | null;
  espiralVital?: { fis: EspiralEixo; agi: EspiralEixo; int: EspiralEixo };
  condicoes: { id: number; nome: string; rodadasRestantes: number | null }[];
  ficha: { nome: string; def: number; arm: number; ataques: AtaqueDisponivel[]; tipo: "personagem" | "adhoc" };
}

export interface CombateEncontroDetalhe extends CombateEncontro {
  participantes: CombateParticipanteDetalhe[];
}

export interface ResultadoAtaque {
  ataque: ResultadoTeste;
  dano?: ResultadoTeste;
  nomeAtacante: string;
  nomeAlvo: string;
}
