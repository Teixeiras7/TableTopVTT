import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";
import { api } from "@/api";
import type { Personagem } from "@/types";
import { Button } from "@/components/ui/button";

export function PainelPersonagens({ mesaId, onAbrirFicha }: { mesaId: number; onAbrirFicha: (id: number, nome: string) => void }) {
  const { data: personagens, isLoading } = useQuery({ queryKey: ["personagens", mesaId], queryFn: () => api<Personagem[]>(`/personagens?mesaId=${mesaId}`) });

  if (isLoading) return <p className="text-sm text-muted-foreground">Carregando...</p>;

  return (
    <div className="flex flex-col gap-2 text-sm">
      <ul className="flex flex-col gap-1.5">
        {personagens?.map((p) => (
          <li key={p.id}>
            <button
              className="w-full rounded-md border border-border p-2 text-left hover:bg-secondary/50"
              onClick={() => onAbrirFicha(p.id, p.nome)}
            >
              <strong>{p.nome}</strong>
              <p className="text-xs text-muted-foreground">
                {p.raca.nome} · {p.arquetipo.nome}
              </p>
            </button>
          </li>
        ))}
        {personagens?.length === 0 && <p className="text-xs text-muted-foreground">Nenhum personagem ainda.</p>}
      </ul>
      <Button asChild size="sm" variant="outline">
        <Link to={`/mesas/${mesaId}/personagens/novo`}>+ Novo personagem</Link>
      </Button>
    </div>
  );
}
