// Resolvedores de domínio para ataque, dano, iniciativa e fadiga — todos
// compostos sobre `resolverTeste`, a mesma primitiva usada para perícias.
// Puros e sem I/O: a Etapa 7 (combate) só vai chamar essas funções e
// persistir o resultado, nunca duplicar a fórmula em outro lugar.

import { resolverTeste, type ResultadoTeste } from "./teste.js";

export function resolverAtaque(params: {
  bonusAtaque: number;
  defAlvo: number;
  amplificar?: boolean;
  aleatorio?: () => number;
}): ResultadoTeste {
  return resolverTeste({ bonus: params.bonusAtaque, alvo: params.defAlvo, amplificar: params.amplificar, aleatorio: params.aleatorio });
}

/** Dano = 2d6 + POD (+ FOR do atacante, se corpo-a-corpo). Sem alvo: o total já é o dano causado. */
export function resolverDano(params: {
  pod: number;
  forca?: number;
  corpoACorpo: boolean;
  aleatorio?: () => number;
}): ResultadoTeste {
  const bonus = params.pod + (params.corpoACorpo ? (params.forca ?? 0) : 0);
  return resolverTeste({ bonus, aleatorio: params.aleatorio });
}

export function resolverIniciativa(params: { iniciativa: number; aleatorio?: () => number }): ResultadoTeste {
  return resolverTeste({ bonus: params.iniciativa, aleatorio: params.aleatorio });
}

/** Teste de Fadiga (Tecelão da Vontade): sucesso se 2d6 >= fadiga acumulada. */
export function resolverTesteFadiga(params: { fadigaAtual: number; aleatorio?: () => number }): ResultadoTeste {
  return resolverTeste({ bonus: 0, alvo: params.fadigaAtual, aleatorio: params.aleatorio });
}
