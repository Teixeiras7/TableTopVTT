import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router";
import { api } from "../api";
import type { Personagem } from "../types";

export function Personagens() {
  const { mesaId } = useParams();
  const { data: personagens, isLoading } = useQuery({
    queryKey: ["personagens", mesaId],
    queryFn: () => api<Personagem[]>(`/personagens?mesaId=${mesaId}`),
  });

  return (
    <main className="pagina">
      <header className="cabecalho">
        <h1>Personagens</h1>
        <div>
          <Link to={`/mesas/${mesaId}/tabuleiro`}>
            <button>Tabuleiro</button>
          </Link>
          <Link to={`/mesas/${mesaId}/combate`}>
            <button>Combate</button>
          </Link>
          <Link to={`/mesas/${mesaId}/personagens/novo`}>
            <button>+ Novo personagem</button>
          </Link>
        </div>
      </header>
      <Link to="/" className="link-voltar">
        ← Mesas
      </Link>

      {isLoading && <p>Carregando...</p>}
      <ul className="lista lista-personagens">
        {personagens?.map((p) => (
          <li key={p.id} className="cartao">
            <Link to={`/mesas/${mesaId}/personagens/${p.id}`}>
              <strong>{p.nome}</strong>
            </Link>
            <span>
              {p.raca.nome} · {p.arquetipo.nome}
            </span>
            <span>{p.carreiras.map((c) => c.carreira.nome).join(" + ")}</span>
          </li>
        ))}
        {personagens?.length === 0 && <p>Nenhum personagem ainda.</p>}
      </ul>
    </main>
  );
}
