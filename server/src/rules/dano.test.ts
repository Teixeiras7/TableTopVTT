import { test } from "node:test";
import assert from "node:assert/strict";
import { aplicarDano, aspectosEnfraquecidos, estaDebilitado, type EspiralVital } from "./dano.js";

function espiral(): EspiralVital {
  return { fis: { max: 7, dano: 0 }, agi: { max: 4, dano: 0 }, int: { max: 3, dano: 0 } };
}

test("dano dentro da capacidade do aspecto só marca aquele aspecto", () => {
  const nova = aplicarDano(espiral(), 3, "fis");
  assert.equal(nova.fis.dano, 3);
  assert.equal(nova.agi.dano, 0);
  assert.equal(nova.int.dano, 0);
});

test("dano que estoura a capacidade do aspecto transborda pro próximo no ciclo", () => {
  const nova = aplicarDano(espiral(), 5, "agi"); // agi max 4, sobra 1 -> vai pro int
  assert.equal(nova.agi.dano, 4);
  assert.equal(nova.int.dano, 1);
});

test("dano que estoura dois aspectos segue o ciclo até acabar", () => {
  const nova = aplicarDano(espiral(), 10, "int"); // int max 3, fis max 7, agi max 4
  assert.equal(nova.int.dano, 3);
  assert.equal(nova.fis.dano, 7);
  assert.equal(nova.agi.dano, 0); // 10 - 3 - 7 = 0 sobrando
});

test("dano nunca ultrapassa o total da espiral (fica debilitado, não negativo)", () => {
  const nova = aplicarDano(espiral(), 999, "fis");
  assert.equal(estaDebilitado(nova), true);
  assert.equal(nova.fis.dano, 7);
  assert.equal(nova.agi.dano, 4);
  assert.equal(nova.int.dano, 3);
});

test("aspectosEnfraquecidos lista só os aspectos com a capacidade esgotada", () => {
  const nova = aplicarDano(espiral(), 4, "agi");
  assert.deepEqual(aspectosEnfraquecidos(nova), ["agi"]);
  assert.equal(estaDebilitado(nova), false);
});
