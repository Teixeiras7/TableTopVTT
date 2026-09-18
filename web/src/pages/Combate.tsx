import { useState, type FormEvent } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Link, useParams } from "react-router";
import { api } from "../api";
import type { CombateEncontroDetalhe, Condicao, Personagem, ResultadoAtaque } from "../types";

export function Combate() {
  const { mesaId, combateId } = useParams();
  const qc = useQueryClient();
  const chaveEncontro = ["combate", combateId];

  const { data: encontro, isLoading } = useQuery({
    queryKey: chaveEncontro,
    queryFn: () => api<CombateEncontroDetalhe>(`/combates/${combateId}`),
  });
  const { data: personagensMesa } = useQuery({
    queryKey: ["personagens", mesaId],
    queryFn: () => api<Personagem[]>(`/personagens?mesaId=${mesaId}`),
  });
  const { data: condicoes } = useQuery({ queryKey: ["condicoes"], queryFn: () => api<Condicao[]>("/catalogo/condicoes") });

  const [tipoNovoParticipante, setTipoNovoParticipante] = useState<"personagem" | "adhoc">("personagem");
  const [personagemSelecionado, setPersonagemSelecionado] = useState("");
  const [adHoc, setAdHoc] = useState({ nomeAdHoc: "", defAdHoc: "10", armAdHoc: "0", bonusAtaqueAdHoc: "0", podAdHoc: "0", vidaMaxAdHoc: "5", bonusIniciativa: "0" });
  const [atacanteId, setAtacanteId] = useState("");
  const [alvoId, setAlvoId] = useState("");
  const [nomeAtaque, setNomeAtaque] = useState("");
  const [amplificar, setAmplificar] = useState(false);
  const [resultado, setResultado] = useState<ResultadoAtaque | null>(null);
  const [erro, setErro] = useState<string | null>(null);

  function invalidar() {
    qc.invalidateQueries({ queryKey: chaveEncontro });
  }

  async function adicionarParticipante(e: FormEvent) {
    e.preventDefault();
    setErro(null);
    try {
      const body = tipoNovoParticipante === "personagem"
        ? { personagemId: Number(personagemSelecionado) }
        : {
            nomeAdHoc: adHoc.nomeAdHoc,
            defAdHoc: Number(adHoc.defAdHoc),
            armAdHoc: Number(adHoc.armAdHoc),
            bonusAtaqueAdHoc: Number(adHoc.bonusAtaqueAdHoc),
            podAdHoc: Number(adHoc.podAdHoc),
            vidaMaxAdHoc: Number(adHoc.vidaMaxAdHoc),
            bonusIniciativa: Number(adHoc.bonusIniciativa),
          };
      await api(`/combates/${combateId}/participantes`, { method: "POST", body: JSON.stringify(body) });
      setAdHoc({ nomeAdHoc: "", defAdHoc: "10", armAdHoc: "0", bonusAtaqueAdHoc: "0", podAdHoc: "0", vidaMaxAdHoc: "5", bonusIniciativa: "0" });
      invalidar();
    } catch (err) {
      setErro(err instanceof Error ? err.message : "Erro");
    }
  }

  async function removerParticipante(participanteId: number) {
    await api(`/combates/${combateId}/participantes/${participanteId}`, { method: "DELETE" });
    invalidar();
  }

  async function rolarIniciativa() {
    await api(`/combates/${combateId}/rolar-iniciativa`, { method: "POST" });
    invalidar();
  }

  async function avancarTurno() {
    await api(`/combates/${combateId}/avancar-turno`, { method: "POST" });
    invalidar();
  }

  async function atacar(e: FormEvent) {
    e.preventDefault();
    setErro(null);
    try {
      const r = await api<ResultadoAtaque>(`/combates/${combateId}/atacar`, {
        method: "POST",
        body: JSON.stringify({ atacanteId: Number(atacanteId), alvoId: Number(alvoId), nomeAtaque: nomeAtaque || undefined, amplificar }),
      });
      setResultado(r);
      invalidar();
    } catch (err) {
      setErro(err instanceof Error ? err.message : "Erro");
    }
  }

  async function adicionarCondicao(participanteId: number, condicaoId: number) {
    await api(`/combates/${combateId}/participantes/${participanteId}/condicoes`, { method: "POST", body: JSON.stringify({ condicaoId }) });
    invalidar();
  }

  async function removerCondicao(condicaoAtivaId: number) {
    await api(`/combates/${combateId}/condicoes/${condicaoAtivaId}`, { method: "DELETE" });
    invalidar();
  }

  if (isLoading || !encontro) return <main className="pagina">Carregando...</main>;

  const atacanteEscolhido = encontro.participantes.find((p) => p.id === Number(atacanteId));

  return (
    <main className="pagina">
      <header className="cabecalho">
        <h1>Encontro #{encontro.id}</h1>
        <div>
          <button onClick={rolarIniciativa}>Rolar Iniciativa</button>
          <button onClick={avancarTurno}>Avançar Turno</button>
        </div>
      </header>
      <Link to={`/mesas/${mesaId}/combate`} className="link-voltar">
        ← Combates
      </Link>
      <p>
        Rodada <strong>{encontro.rodada}</strong>
      </p>

      {erro && <p className="erro">{erro}</p>}

      <section className="cartao">
        <h2>Participantes</h2>
        <ul className="lista lista-participantes">
          {encontro.participantes.map((p, indice) => (
            <li key={p.id} className={indice === encontro.turnoAtual ? "cartao participante-ativo" : "cartao"}>
              <div className="linha-participante">
                <strong>{p.ficha.nome}</strong>
                <span>
                  DEF {p.ficha.def} · ARM {p.ficha.arm} · Iniciativa {p.rolagemIniciativa ?? "—"}
                </span>
                <span>
                  {p.espiralVital
                    ? `FIS ${p.espiralVital.fis.dano}/${p.espiralVital.fis.max} · AGI ${p.espiralVital.agi.dano}/${p.espiralVital.agi.max} · INT ${p.espiralVital.int.dano}/${p.espiralVital.int.max}`
                    : `Vida ${p.vidaAtualAdHoc ?? 0}/${p.vidaMaxAdHoc ?? 0}`}
                </span>
                <button onClick={() => removerParticipante(p.id)}>Remover</button>
              </div>
              <div className="linha-condicoes">
                {p.condicoes.map((c) => (
                  <span key={c.id} className="etiqueta-condicao">
                    {c.nome} <button onClick={() => removerCondicao(c.id)}>x</button>
                  </span>
                ))}
                <select onChange={(e) => e.target.value && adicionarCondicao(p.id, Number(e.target.value))} value="">
                  <option value="">+ condição</option>
                  {condicoes?.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.nome}
                    </option>
                  ))}
                </select>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="cartao">
        <h2>Adicionar participante</h2>
        <div className="abas">
          <button type="button" className={tipoNovoParticipante === "personagem" ? "ativo" : ""} onClick={() => setTipoNovoParticipante("personagem")}>
            Personagem
          </button>
          <button type="button" className={tipoNovoParticipante === "adhoc" ? "ativo" : ""} onClick={() => setTipoNovoParticipante("adhoc")}>
            Inimigo avulso
          </button>
        </div>
        <form onSubmit={adicionarParticipante} className="formulario-participante">
          {tipoNovoParticipante === "personagem" ? (
            <select value={personagemSelecionado} onChange={(e) => setPersonagemSelecionado(e.target.value)} required>
              <option value="">Selecione...</option>
              {personagensMesa?.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.nome}
                </option>
              ))}
            </select>
          ) : (
            <div className="grade-adhoc">
              <label>
                Nome
                <input value={adHoc.nomeAdHoc} onChange={(e) => setAdHoc({ ...adHoc, nomeAdHoc: e.target.value })} required />
              </label>
              <label>
                DEF
                <input type="number" value={adHoc.defAdHoc} onChange={(e) => setAdHoc({ ...adHoc, defAdHoc: e.target.value })} />
              </label>
              <label>
                ARM
                <input type="number" value={adHoc.armAdHoc} onChange={(e) => setAdHoc({ ...adHoc, armAdHoc: e.target.value })} />
              </label>
              <label>
                Bônus de Ataque
                <input type="number" value={adHoc.bonusAtaqueAdHoc} onChange={(e) => setAdHoc({ ...adHoc, bonusAtaqueAdHoc: e.target.value })} />
              </label>
              <label>
                POD
                <input type="number" value={adHoc.podAdHoc} onChange={(e) => setAdHoc({ ...adHoc, podAdHoc: e.target.value })} />
              </label>
              <label>
                Vida
                <input type="number" value={adHoc.vidaMaxAdHoc} onChange={(e) => setAdHoc({ ...adHoc, vidaMaxAdHoc: e.target.value })} />
              </label>
              <label>
                Iniciativa
                <input type="number" value={adHoc.bonusIniciativa} onChange={(e) => setAdHoc({ ...adHoc, bonusIniciativa: e.target.value })} />
              </label>
            </div>
          )}
          <button type="submit">Adicionar</button>
        </form>
      </section>

      <section className="cartao">
        <h2>Atacar</h2>
        <form onSubmit={atacar} className="formulario-ataque">
          <label>
            Atacante
            <select value={atacanteId} onChange={(e) => { setAtacanteId(e.target.value); setNomeAtaque(""); }} required>
              <option value="">Selecione...</option>
              {encontro.participantes.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.ficha.nome}
                </option>
              ))}
            </select>
          </label>
          <label>
            Alvo
            <select value={alvoId} onChange={(e) => setAlvoId(e.target.value)} required>
              <option value="">Selecione...</option>
              {encontro.participantes.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.ficha.nome}
                </option>
              ))}
            </select>
          </label>
          {atacanteEscolhido && atacanteEscolhido.ficha.ataques.length > 1 && (
            <label>
              Ataque
              <select value={nomeAtaque} onChange={(e) => setNomeAtaque(e.target.value)}>
                {atacanteEscolhido.ficha.ataques.map((a) => (
                  <option key={a.nome} value={a.nome}>
                    {a.nome} (+{a.bonusAtaque})
                  </option>
                ))}
              </select>
            </label>
          )}
          <label className="opcao-checkbox">
            <input type="checkbox" checked={amplificar} onChange={(e) => setAmplificar(e.target.checked)} />
            Ampliar
          </label>
          <button type="submit">Atacar</button>
        </form>
      </section>

      {resultado && (
        <aside className="cartao resultado-rolagem">
          <h2>
            {resultado.nomeAtacante} ataca {resultado.nomeAlvo}
          </h2>
          <p>
            Ataque: {resultado.ataque.dados.dados.join("+")} + {resultado.ataque.bonus} = <strong>{resultado.ataque.total}</strong>{" "}
            {resultado.ataque.critico && "(crítico!)"} — {resultado.ataque.sucesso ? "acertou" : "errou"}
          </p>
          {resultado.dano && (
            <p>
              Dano: {resultado.dano.dados.dados.join("+")} + {resultado.dano.bonus} = <strong>{resultado.dano.total}</strong>
            </p>
          )}
        </aside>
      )}
    </main>
  );
}
