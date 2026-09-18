import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Link, useNavigate, useParams } from "react-router";
import { api } from "../api";
import type { CombateEncontro } from "../types";

export function Combates() {
  const { mesaId } = useParams();
  const qc = useQueryClient();
  const navigate = useNavigate();

  const { data: combates, isLoading } = useQuery({
    queryKey: ["combates", mesaId],
    queryFn: () => api<CombateEncontro[]>(`/combates?mesaId=${mesaId}`),
  });

  async function criarEncontro() {
    const encontro = await api<CombateEncontro>("/combates", { method: "POST", body: JSON.stringify({ mesaId: Number(mesaId) }) });
    qc.invalidateQueries({ queryKey: ["combates", mesaId] });
    navigate(`/mesas/${mesaId}/combate/${encontro.id}`);
  }

  return (
    <main className="pagina">
      <header className="cabecalho">
        <h1>Combates</h1>
        <button onClick={criarEncontro}>+ Novo encontro</button>
      </header>
      <Link to={`/mesas/${mesaId}/personagens`} className="link-voltar">
        ← Personagens
      </Link>

      {isLoading && <p>Carregando...</p>}
      <ul className="lista">
        {combates?.map((c) => (
          <li key={c.id} className="cartao">
            <Link to={`/mesas/${mesaId}/combate/${c.id}`}>
              Encontro #{c.id} — rodada {c.rodada} {c.encerrado && "(encerrado)"}
            </Link>
          </li>
        ))}
        {combates?.length === 0 && <p className="texto-apoio">Nenhum combate ainda.</p>}
      </ul>
    </main>
  );
}
