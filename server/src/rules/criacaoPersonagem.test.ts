import { test } from "node:test";
import assert from "node:assert/strict";
import {
  validarECalcularCriacao,
  mesclarPericias,
  mesclarItens,
  dedupIds,
  calcularEspiralVitalInicial,
  type EntradaCriacaoPersonagem,
} from "./criacaoPersonagem.js";

const perfilHumano: EntradaCriacaoPersonagem["perfilAtributos"] = {
  fis: { inicial: 5, maximo: { heroi: 7, veterano: 8, epico: 8 } },
  vel: { inicial: 6, maximo: { heroi: 7, veterano: 7, epico: 7 } },
  for: { inicial: 4, maximo: { heroi: 6, veterano: 7, epico: 8 } },
  agi: { inicial: 3, maximo: { heroi: 5, veterano: 6, epico: 7 } },
  des: { inicial: 4, maximo: { heroi: 5, veterano: 6, epico: 7 } },
  mae: { inicial: 4, maximo: { heroi: 5, veterano: 6, epico: 7 } },
  int: { inicial: 3, maximo: { heroi: 5, veterano: 6, epico: 7 } },
  arc: { inicial: null, maximo: { heroi: 4, veterano: 6, epico: 8 } },
  per: { inicial: 3, maximo: { heroi: 5, veterano: 6, epico: 7 } },
};

function entradaBase(overrides: Partial<EntradaCriacaoPersonagem> = {}): EntradaCriacaoPersonagem {
  return {
    racaNome: "Humano",
    perfilAtributos: perfilHumano,
    arquetipoNome: "Habilidoso",
    arquetiposDaRaca: ["Dotado", "Habilidoso", "Intelectual", "Poderoso"],
    carreiras: [
      { id: 1, nome: "Soldado", ouroInicial: 75 },
      { id: 2, nome: "Explorador", ouroInicial: 60 },
    ],
    distribuicaoAtributos: { fis: 2, agi: 1 },
    ...overrides,
  };
}

test("criação válida calcula atributos finais e ouro somado", () => {
  const resultado = validarECalcularCriacao(entradaBase());
  assert.equal(resultado.ok, true);
  if (!resultado.ok) return;
  assert.equal(resultado.atributos.fis, 7); // 5 + 2
  assert.equal(resultado.atributos.agi, 4); // 3 + 1
  assert.equal(resultado.atributos.vel, 6); // sem alocação, fica no inicial
  assert.equal(resultado.ouroTotal, 135);
});

test("rejeita arquétipo fora das opções da raça", () => {
  const resultado = validarECalcularCriacao(entradaBase({ arquetipoNome: "Dotado", arquetiposDaRaca: ["Habilidoso"] }));
  assert.equal(resultado.ok, false);
});

test("rejeita alocar pontos em ARC fora do arquétipo Dotado", () => {
  const resultado = validarECalcularCriacao(entradaBase({ distribuicaoAtributos: { fis: 2, arc: 1 } }));
  assert.equal(resultado.ok, false);
});

test("permite ARC quando o arquétipo é Dotado", () => {
  const resultado = validarECalcularCriacao(
    entradaBase({ arquetipoNome: "Dotado", distribuicaoAtributos: { arc: 3 } }),
  );
  assert.equal(resultado.ok, true);
  if (resultado.ok) assert.equal(resultado.atributos.arc, 3); // inicial null -> base 0 + 3
});

test("rejeita quando não são exatamente 2 carreiras", () => {
  const resultado = validarECalcularCriacao(entradaBase({ carreiras: [{ id: 1, nome: "Soldado", ouroInicial: 75 }] }));
  assert.equal(resultado.ok, false);
});

test("rejeita carreira com raça exigida diferente da escolhida", () => {
  const resultado = validarECalcularCriacao(
    entradaBase({ carreiras: [{ id: 1, nome: "Arauto da Matança", racaExigida: "Trolloide", ouroInicial: 75 }, { id: 2, nome: "Explorador", ouroInicial: 60 }] }),
  );
  assert.equal(resultado.ok, false);
});

test("rejeita quando os pontos de progressão não somam 3", () => {
  const resultado = validarECalcularCriacao(entradaBase({ distribuicaoAtributos: { fis: 1 } }));
  assert.equal(resultado.ok, false);
});

test("rejeita atributo final acima do teto de nível Herói", () => {
  const resultado = validarECalcularCriacao(entradaBase({ distribuicaoAtributos: { vel: 2, fis: 1 } })); // 6+2=8 > teto 7
  assert.equal(resultado.ok, false);
});

test("mesclarPericias empilha nível quando as duas carreiras concedem a mesma perícia", () => {
  const mescladas = mesclarPericias([
    { periciaId: 1, subtipo: null, nivel: 1 },
    { periciaId: 1, subtipo: null, nivel: 1 },
    { periciaId: 2, subtipo: "Metalurgia", nivel: 1 },
  ]);
  assert.equal(mescladas.find((p) => p.periciaId === 1)?.nivel, 2);
  assert.equal(mescladas.length, 2);
});

test("mesclarItens soma quantidades do mesmo item", () => {
  const mesclados = mesclarItens([
    { itemId: 5, quantidade: 1 },
    { itemId: 5, quantidade: 2 },
  ]);
  assert.equal(mesclados.length, 1);
  assert.equal(mesclados[0].quantidade, 3);
});

test("dedupIds remove duplicatas mantendo os únicos", () => {
  assert.deepEqual(dedupIds([1, 2, 2, 3, 1]), [1, 2, 3]);
});

test("espiral vital inicial usa os atributos primários como teto, sem dano", () => {
  const espiral = calcularEspiralVitalInicial({ fis: 7, vel: 6, for: 4, agi: 4, des: 4, mae: 4, int: 3, per: 3, arc: 0 });
  assert.deepEqual(espiral, { fis: { max: 7, dano: 0 }, agi: { max: 4, dano: 0 }, int: { max: 3, dano: 0 } });
});
