import { useState, type FormEvent } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router";
import { api } from "../api";
import { useAuth } from "../auth/AuthContext";
import type { Mesa } from "../types";

export function Mesas() {
  const { usuario, sair } = useAuth();
  const qc = useQueryClient();
  const { data: mesas, isLoading } = useQuery({ queryKey: ["mesas"], queryFn: () => api<Mesa[]>("/mesas") });
  const [nomeNovaMesa, setNomeNovaMesa] = useState("");
  const [codigoEntrar, setCodigoEntrar] = useState("");
  const [erro, setErro] = useState<string | null>(null);

  async function criarMesa(e: FormEvent) {
    e.preventDefault();
    setErro(null);
    try {
      await api("/mesas", { method: "POST", body: JSON.stringify({ nome: nomeNovaMesa }) });
      setNomeNovaMesa("");
      qc.invalidateQueries({ queryKey: ["mesas"] });
    } catch (err) {
      setErro(err instanceof Error ? err.message : "Erro");
    }
  }

  async function entrarNaMesa(e: FormEvent) {
    e.preventDefault();
    setErro(null);
    try {
      await api("/mesas/entrar", { method: "POST", body: JSON.stringify({ codigo: codigoEntrar }) });
      setCodigoEntrar("");
      qc.invalidateQueries({ queryKey: ["mesas"] });
    } catch (err) {
      setErro(err instanceof Error ? err.message : "Erro");
    }
  }

  return (
    <main className="pagina">
      <header className="cabecalho">
        <h1>Minhas Mesas</h1>
        <div className="usuario-logado">
          <span>{usuario?.nome}</span>
          <button onClick={sair}>Sair</button>
        </div>
      </header>

      {erro && <p className="erro">{erro}</p>}

      <section className="cartao grade-formularios">
        <form onSubmit={criarMesa}>
          <label>
            Nova mesa
            <input value={nomeNovaMesa} onChange={(e) => setNomeNovaMesa(e.target.value)} required placeholder="Ex.: Mesa de sábado" />
          </label>
          <button type="submit">Criar</button>
        </form>
        <form onSubmit={entrarNaMesa}>
          <label>
            Entrar com código
            <input value={codigoEntrar} onChange={(e) => setCodigoEntrar(e.target.value.toUpperCase())} required placeholder="Ex.: AB12CD" />
          </label>
          <button type="submit">Entrar</button>
        </form>
      </section>

      {isLoading && <p>Carregando...</p>}
      <ul className="lista lista-mesas">
        {mesas?.map((mesa) => (
          <li key={mesa.id} className="cartao">
            <Link to={`/mesas/${mesa.id}`}>{mesa.nome}</Link>
            <span className="codigo">código: {mesa.codigo}</span>
          </li>
        ))}
        {mesas?.length === 0 && <p>Você ainda não está em nenhuma mesa.</p>}
      </ul>
    </main>
  );
}
