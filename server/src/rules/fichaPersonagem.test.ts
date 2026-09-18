import { test } from "node:test";
import assert from "node:assert/strict";
import { calcularFichaEfetiva } from "./fichaPersonagem.js";
import type { AtributosBase } from "./atributos.js";

const atributos: AtributosBase = { fis: 7, vel: 6, for: 4, agi: 4, des: 4, mae: 4, int: 3, per: 3, arc: 0 };

test("sem nada equipado, ARM/DEF usam só os atributos base", () => {
  const ficha = calcularFichaEfetiva({ atributos, armas: [] });
  assert.equal(ficha.arm, 7); // FIS
  assert.equal(ficha.def, 6 + 4 + 3); // VEL+AGI+PER
  assert.equal(ficha.ataques.length, 0);
});

test("armadura equipada soma ARM e DEF, mas não muda armas", () => {
  const ficha = calcularFichaEfetiva({
    atributos,
    armadura: { modVelocidade: -1, modDefesa: -2, modArmadura: 5 },
    armas: [],
  });
  assert.equal(ficha.arm, 7 + 5);
  assert.equal(ficha.def, 6 + 4 + 3 - 2);
});

test("arma corpo-a-corpo usa MAE; arma à distância usa DES", () => {
  const ficha = calcularFichaEfetiva({
    atributos,
    armas: [
      { nome: "Espada Longa", periciaNome: "Arma de Mão", nivelPericia: 2, modificadorAtaque: 1, pod: 3, distancia: false },
      { nome: "Arco", periciaNome: "Arco", nivelPericia: 1, modificadorAtaque: 0, pod: 2, distancia: true },
    ],
  });
  assert.equal(ficha.ataques[0].bonusAtaque, 4 + 2 + 1); // MAE + nível + mod
  assert.equal(ficha.ataques[0].corpoACorpo, true);
  assert.equal(ficha.ataques[1].bonusAtaque, 4 + 1 + 0); // DES + nível + mod
  assert.equal(ficha.ataques[1].corpoACorpo, false);
});

test("arma sem a perícia treinada usa nível 0 (uso sem treinamento)", () => {
  const ficha = calcularFichaEfetiva({
    atributos,
    armas: [{ nome: "Fuzil", periciaNome: "Fuzil", nivelPericia: 0, modificadorAtaque: 0, pod: 4, distancia: true }],
  });
  assert.equal(ficha.ataques[0].bonusAtaque, 4); // só DES
});
