import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Link, useParams } from "react-router";
import { api } from "../api";
import type { PersonagemDetalhe, ResultadoTeste } from "../types";

const NOMES_ATRIBUTO: Record<string, string> = {
  fis: "Físico",
  agi: "Agilidade",
  int: "Intelecto",
  vel: "Velocidade",
  for: "Força",
  des: "Destreza",
  mae: "Maestria",
  per: "Percepção",
  arc: "Arcano",
};

export function Ficha() {
  const { mesaId, personagemId } = useParams();
  const qc = useQueryClient();
  const [ultimoResultado, setUltimoResultado] = useState<ResultadoTeste | null>(null);

  const { data: p, isLoading } = useQuery({
    queryKey: ["personagem", personagemId],
    queryFn: () => api<PersonagemDetalhe>(`/personagens/${personagemId}`),
  });

  async function alternarEquipar(itemId: number, equipadoAtual: boolean) {
    await api(`/personagens/${personagemId}/inventario/${itemId}`, {
      method: "PATCH",
      body: JSON.stringify({ equipado: !equipadoAtual }),
    });
    qc.invalidateQueries({ queryKey: ["personagem", personagemId] });
  }

  async function testarPericia(periciaId: number) {
    const resultado = await api<ResultadoTeste>(`/personagens/${personagemId}/testar-pericia`, {
      method: "POST",
      body: JSON.stringify({ periciaId }),
    });
    setUltimoResultado(resultado);
  }

  async function testarAtributo() {
    const resultado = await api<ResultadoTeste>(`/personagens/${personagemId}/testar-pericia`, {
      method: "POST",
      body: JSON.stringify({}),
    });
    setUltimoResultado(resultado);
  }

  if (isLoading || !p) return <main className="pagina">Carregando...</main>;

  return (
    <main className="pagina">
      <header className="cabecalho">
        <div>
          <h1>{p.nome}</h1>
          <p className="texto-apoio">
            {p.raca.nome} · {p.arquetipo.nome} · {p.carreiras.map((c) => c.carreira.nome).join(" + ")} · Nível {p.nivel}
          </p>
        </div>
      </header>
      <Link to={`/mesas/${mesaId}/personagens`} className="link-voltar">
        ← Personagens
      </Link>

      <section className="cartao grade-derivados">
        <div>
          <strong>{p.ficha.def}</strong>
          <span>DEF</span>
        </div>
        <div>
          <strong>{p.ficha.arm}</strong>
          <span>ARM</span>
        </div>
        <div>
          <strong>{p.ficha.von}</strong>
          <span>VON</span>
        </div>
        <div>
          <strong>{p.ficha.iniciativa}</strong>
          <span>Iniciativa</span>
        </div>
        <div>
          <strong>{p.pontosFacanha}</strong>
          <span>Façanha</span>
        </div>
        <div>
          <strong>
            {p.fadigaAtual}/{p.focoAtual}
          </strong>
          <span>Fadiga/Foco</span>
        </div>
      </section>

      <section className="cartao">
        <h2>Atributos</h2>
        <div className="grade-atributos-ficha">
          {(["fis", "agi", "int", "vel", "for", "des", "mae", "per", "arc"] as const)
            .filter((chave) => chave !== "arc" || p.arc > 0)
            .map((chave) => (
              <div key={chave} className="atributo-ficha">
                <span>{NOMES_ATRIBUTO[chave]}</span>
                <strong>{p[chave]}</strong>
              </div>
            ))}
        </div>
        <button onClick={testarAtributo}>Rolar 2d6 (sem bônus)</button>
      </section>

      <section className="cartao">
        <h2>Espiral Vital</h2>
        <div className="grade-espiral">
          {(["fis", "agi", "int"] as const).map((chave) => (
            <div key={chave}>
              <span>{NOMES_ATRIBUTO[chave]}</span>
              <strong>
                {p.espiralVital[chave].dano}/{p.espiralVital[chave].max}
              </strong>
            </div>
          ))}
        </div>
      </section>

      <section className="cartao">
        <h2>Ataques</h2>
        {p.ficha.ataques.length === 0 && <p className="texto-apoio">Nenhuma arma equipada.</p>}
        <ul className="lista">
          {p.ficha.ataques.map((a) => (
            <li key={a.nome}>
              {a.nome}: +{a.bonusAtaque} ataque, POD {a.pod ?? "--"}
            </li>
          ))}
        </ul>
      </section>

      <section className="cartao">
        <h2>Perícias</h2>
        <ul className="lista lista-pericias">
          {p.pericias.map((pp) => (
            <li key={pp.id}>
              <span>
                {pp.pericia.nome}
                {pp.subtipo && ` (${pp.subtipo})`} — nível {pp.nivel}
              </span>
              <button onClick={() => testarPericia(pp.periciaId)}>Rolar</button>
            </li>
          ))}
        </ul>
      </section>

      <section className="cartao">
        <h2>Habilidades</h2>
        <ul className="lista">
          {p.habilidades.map((h) => (
            <li key={h.id}>
              <strong>
                {h.habilidade.nome}
                {h.parametro && ` (${h.parametro})`}
              </strong>
              <p className="texto-apoio">{h.habilidade.efeito}</p>
            </li>
          ))}
        </ul>
      </section>

      {p.conexoes.length > 0 && (
        <section className="cartao">
          <h2>Conexões</h2>
          <ul className="lista">
            {p.conexoes.map((c) => (
              <li key={c.id}>
                <strong>{c.conexao.nome}</strong>
                <p className="texto-apoio">{c.conexao.beneficio}</p>
              </li>
            ))}
          </ul>
        </section>
      )}

      {p.magias.length > 0 && (
        <section className="cartao">
          <h2>Magias</h2>
          <ul className="lista">
            {p.magias.map((m) => (
              <li key={m.id}>
                <strong>
                  {m.magia.nome} (CST {m.magia.custo}, ALC {m.magia.alcance})
                </strong>
                <p className="texto-apoio">{m.magia.efeito}</p>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="cartao">
        <h2>Equipamento</h2>
        <ul className="lista lista-inventario">
          {p.inventario.map((inv) => (
            <li key={inv.id}>
              <label className="opcao-checkbox">
                <input type="checkbox" checked={inv.equipado} onChange={() => alternarEquipar(inv.itemId, inv.equipado)} />
                {inv.item.nome} {inv.quantidade > 1 && `x${inv.quantidade}`}
              </label>
            </li>
          ))}
          {p.inventario.length === 0 && <p className="texto-apoio">Sem itens.</p>}
        </ul>
      </section>

      {ultimoResultado && (
        <aside className="cartao resultado-rolagem">
          <h2>Última rolagem — {ultimoResultado.nomeTeste}</h2>
          <p>
            Dados: {ultimoResultado.dados.dados.join(" + ")} = {ultimoResultado.dados.total} + bônus {ultimoResultado.bonus} ={" "}
            <strong>{ultimoResultado.total}</strong>
          </p>
          {ultimoResultado.critico && <p>Crítico (dados iguais)!</p>}
          {ultimoResultado.autoFalha && <p className="erro">Falha automática (duplo 1)</p>}
          {ultimoResultado.autoSucesso && <p className="sucesso">Sucesso automático (duplo 6)</p>}
          {ultimoResultado.sucesso !== undefined && (
            <p className={ultimoResultado.sucesso ? "sucesso" : "erro"}>{ultimoResultado.sucesso ? "Sucesso" : "Falha"}</p>
          )}
        </aside>
      )}
    </main>
  );
}
