import { test } from "node:test";
import assert from "node:assert/strict";
import { rolar2d6, rolarAmplificada, ehAutoFalha, ehAutoSucesso } from "./dados.js";
import { resolverTeste, resolverTesteOposto } from "./teste.js";
import { calcularDef, calcularIniciativa, calcularArm, calcularVon, calcularAtaque, type AtributosBase } from "./atributos.js";
import { aplicarEfeitos } from "./efeitos.js";
import { verificarGrupo, type GrupoPrerequisitos, type ContextoVerificacao } from "./prerequisitos.js";
import { resolverAtaque, resolverDano, resolverTesteFadiga } from "./combate.js";

// RNG determinístico para testes: consome uma fila de valores 1-6 pré-definidos.
function filaDeDados(valores: number[]): () => number {
  let i = 0;
  return () => {
    const v = valores[i % valores.length];
    i++;
    return (v - 1) / 6 + 0.01; // mapeia para o intervalo que rolarD6 espera
  };
}

test("rolar2d6 sempre retorna dados entre 1 e 6", () => {
  for (let i = 0; i < 200; i++) {
    const r = rolar2d6();
    assert.ok(r.dados.every((d) => d >= 1 && d <= 6));
    assert.equal(r.total, r.dados[0] + r.dados[1]);
  }
});

test("rolarAmplificada descarta o menor dos três dados", () => {
  const r = rolarAmplificada(filaDeDados([2, 6, 4]));
  assert.deepEqual(r.dados, [6, 4]);
});

test("duplo 1 é auto-falha, duplo 6 é auto-sucesso", () => {
  assert.equal(ehAutoFalha(rolar2d6(filaDeDados([1, 1]))), true);
  assert.equal(ehAutoSucesso(rolar2d6(filaDeDados([6, 6]))), true);
  assert.equal(ehAutoFalha(rolar2d6(filaDeDados([1, 2]))), false);
});

test("resolverTeste: sucesso normal e auto-falha vencem o alvo", () => {
  const sucesso = resolverTeste({ bonus: 3, alvo: 10, aleatorio: filaDeDados([5, 4]) }); // 9+3=12 >= 10
  assert.equal(sucesso.sucesso, true);

  const autoFalhaComBonusAlto = resolverTeste({ bonus: 20, alvo: 5, aleatorio: filaDeDados([1, 1]) });
  assert.equal(autoFalhaComBonusAlto.sucesso, false); // duplo-1 falha mesmo com bônus enorme

  const autoSucessoComAlvoAlto = resolverTeste({ bonus: 0, alvo: 50, aleatorio: filaDeDados([6, 6]) });
  assert.equal(autoSucessoComAlvoAlto.sucesso, true); // duplo-6 acerta mesmo contra alvo altíssimo
});

test("resolverTesteOposto: maior total vence, empate é derrota para os dois", () => {
  const a = resolverTeste({ bonus: 5, aleatorio: filaDeDados([3, 3]) }); // 11
  const b = resolverTeste({ bonus: 2, aleatorio: filaDeDados([4, 4]) }); // 10
  assert.equal(resolverTesteOposto(a, b), "a");

  const empateA = resolverTeste({ bonus: 0, aleatorio: filaDeDados([5, 5]) });
  const empateB = resolverTeste({ bonus: 0, aleatorio: filaDeDados([5, 5]) });
  assert.equal(resolverTesteOposto(empateA, empateB), "empate");
});

const atributosHumano: AtributosBase = { fis: 5, vel: 6, for: 4, agi: 3, des: 4, mae: 4, int: 3, per: 3, arc: 0 };

test("atributos derivados batem com as fórmulas do manual", () => {
  assert.equal(calcularDef(atributosHumano), 6 + 3 + 3); // VEL+AGI+PER
  assert.equal(calcularIniciativa(atributosHumano), 6 + 4 + 3); // VEL+MAE+PER
  assert.equal(calcularArm(atributosHumano, 2), 5 + 2); // FIS + mod armadura
  assert.equal(calcularVon(atributosHumano), 5 + 3); // FIS+INT
  assert.equal(calcularAtaque({ atributo: 4, nivelPericia: 2, modArma: 1 }), 7);
});

test("aplicarEfeitos soma modificadores de várias fontes", () => {
  const efetivo = aplicarEfeitos(atributosHumano, [
    { tipo: "bonus-atributo", atributo: "for", valor: 1 },
    { tipo: "bonus-def", valor: 2 },
    { tipo: "bonus-def", valor: 1 },
    { tipo: "dado-adicional-dano", quantidade: 1 },
  ]);
  assert.equal(efetivo.for, 5);
  assert.equal(efetivo.modDef, 3);
  assert.equal(efetivo.dadosDanoExtra, 1);
});

test("verificarGrupo resolve E/OU aninhados", () => {
  const ctx: ContextoVerificacao = {
    atributos: atributosHumano,
    pericias: new Map([["Cavalgar", 2]]),
    habilidades: new Set(["Granadeiro"]),
    arquetipo: "Poderoso",
    raca: "Humano",
  };
  const grupo: GrupoPrerequisitos = {
    modo: "todos",
    itens: [
      { tipo: "pericia", nome: "Cavalgar", nivelMinimo: 2 },
      { modo: "algum", itens: [{ tipo: "arquetipo", nome: "Dotado" }, { tipo: "raca", nome: "Humano" }] },
    ],
  };
  assert.equal(verificarGrupo(grupo, ctx), true);

  const grupoFalho: GrupoPrerequisitos = { modo: "todos", itens: [{ tipo: "habilidade", nome: "Voar" }] };
  assert.equal(verificarGrupo(grupoFalho, ctx), false);
});

test("resolverAtaque acerta quando total >= DEF do alvo", () => {
  const r = resolverAtaque({ bonusAtaque: 6, defAlvo: 14, aleatorio: filaDeDados([4, 4]) }); // 8+6=14
  assert.equal(r.sucesso, true);
});

test("resolverDano corpo-a-corpo soma POD + FOR", () => {
  const r = resolverDano({ pod: 3, forca: 4, corpoACorpo: true, aleatorio: filaDeDados([3, 3]) }); // 6+3+4
  assert.equal(r.total, 13);
});

test("resolverTesteFadiga falha quando a fadiga acumulada supera o teste", () => {
  const r = resolverTesteFadiga({ fadigaAtual: 15, aleatorio: filaDeDados([3, 3]) }); // 6 < 15
  assert.equal(r.sucesso, false);
});
