import { useEffect, useRef, useState, type FormEvent, type PointerEvent as ReactPointerEvent } from "react";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/api";
import { obterSocket } from "@/socket";
import type { Mesa, Personagem, TokenTabuleiro } from "@/types";
import { Button } from "@/components/ui/button";

/** O tabuleiro é a camada de base do workspace — sempre visível, os painéis
 * flutuam por cima dele (estilo Foundry/Roll20), em vez de ser uma página à parte. */
export function TabuleiroCanvas({ mesaId, mesa }: { mesaId: number; mesa: Mesa }) {
  const gradeRef = useRef<HTMLDivElement>(null);
  const { data: personagens } = useQuery({ queryKey: ["personagens", mesaId], queryFn: () => api<Personagem[]>(`/personagens?mesaId=${mesaId}`) });
  const { data: tokensIniciais } = useQuery({ queryKey: ["tokens", mesaId], queryFn: () => api<TokenTabuleiro[]>(`/tabuleiro/tokens?mesaId=${mesaId}`) });

  const [tokens, setTokens] = useState<TokenTabuleiro[]>([]);
  const [arrastandoId, setArrastandoId] = useState<number | null>(null);
  const [mostrarAdicionar, setMostrarAdicionar] = useState(false);
  const [personagemNovoToken, setPersonagemNovoToken] = useState("");
  const [nomeNovoToken, setNomeNovoToken] = useState("");

  useEffect(() => {
    if (tokensIniciais) setTokens(tokensIniciais);
  }, [tokensIniciais]);

  useEffect(() => {
    const socket = obterSocket();
    socket.emit("mesa:entrar", mesaId);
    function aoTokenMovido({ tokenId, x, y }: { tokenId: number; x: number; y: number }) {
      setTokens((atual) => atual.map((t) => (t.id === tokenId ? { ...t, x, y } : t)));
    }
    socket.on("token:movido", aoTokenMovido);
    return () => {
      socket.off("token:movido", aoTokenMovido);
    };
  }, [mesaId]);

  function moverToken(tokenId: number, x: number, y: number) {
    obterSocket().emit("token:mover", { tokenId, x, y });
  }

  function aoPointerMove(e: ReactPointerEvent) {
    if (arrastandoId == null || !gradeRef.current) return;
    const rect = gradeRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(mesa.colunas - 1, Math.floor((e.clientX - rect.left) / mesa.tamanhoCelula)));
    const y = Math.max(0, Math.min(mesa.linhas - 1, Math.floor((e.clientY - rect.top) / mesa.tamanhoCelula)));
    setTokens((atual) => atual.map((t) => (t.id === arrastandoId ? { ...t, x, y } : t)));
  }
  function aoPointerUp() {
    if (arrastandoId == null) return;
    const token = tokens.find((t) => t.id === arrastandoId);
    if (token) moverToken(token.id, token.x, token.y);
    setArrastandoId(null);
  }

  async function adicionarToken(e: FormEvent) {
    e.preventDefault();
    const body = personagemNovoToken
      ? { mesaId, personagemId: Number(personagemNovoToken), x: 0, y: 0 }
      : { mesaId, nome: nomeNovoToken, cor: "#b08d4f", x: 0, y: 0 };
    const token = await api<TokenTabuleiro>("/tabuleiro/tokens", { method: "POST", body: JSON.stringify(body) });
    setTokens((atual) => [...atual, token]);
    setPersonagemNovoToken("");
    setNomeNovoToken("");
    setMostrarAdicionar(false);
  }

  async function removerToken(tokenId: number) {
    await api(`/tabuleiro/tokens/${tokenId}`, { method: "DELETE" });
    setTokens((atual) => atual.filter((t) => t.id !== tokenId));
  }

  return (
    <div className="absolute inset-0 overflow-auto bg-background">
      <div className="absolute left-4 top-4 z-10">
        {mostrarAdicionar ? (
          <form onSubmit={adicionarToken} className="flex items-center gap-2 rounded-md border border-border bg-card p-2 shadow-md">
            <select
              className="h-8 rounded-md border border-input bg-transparent px-2 text-sm"
              value={personagemNovoToken}
              onChange={(e) => {
                setPersonagemNovoToken(e.target.value);
                setNomeNovoToken("");
              }}
            >
              <option value="">Token avulso...</option>
              {personagens?.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.nome}
                </option>
              ))}
            </select>
            {!personagemNovoToken && (
              <input
                className="h-8 rounded-md border border-input bg-transparent px-2 text-sm"
                placeholder="Nome avulso"
                value={nomeNovoToken}
                onChange={(e) => setNomeNovoToken(e.target.value)}
              />
            )}
            <Button type="submit" size="sm" disabled={!personagemNovoToken && !nomeNovoToken}>
              Adicionar
            </Button>
            <Button type="button" size="sm" variant="ghost" onClick={() => setMostrarAdicionar(false)}>
              Cancelar
            </Button>
          </form>
        ) : (
          <Button size="sm" variant="secondary" onClick={() => setMostrarAdicionar(true)}>
            + Token
          </Button>
        )}
      </div>

      <div
        ref={gradeRef}
        className="relative bg-background"
        style={{
          width: mesa.colunas * mesa.tamanhoCelula,
          height: mesa.linhas * mesa.tamanhoCelula,
          backgroundImage: "linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
          backgroundSize: `${mesa.tamanhoCelula}px ${mesa.tamanhoCelula}px`,
          touchAction: "none",
        }}
        onPointerMove={aoPointerMove}
        onPointerUp={aoPointerUp}
        onPointerLeave={aoPointerUp}
      >
        {tokens.map((t) => (
          <div
            key={t.id}
            className="absolute flex select-none items-center justify-center rounded-full border-2 border-card text-xs font-bold text-background"
            style={{
              left: t.x * mesa.tamanhoCelula,
              top: t.y * mesa.tamanhoCelula,
              width: mesa.tamanhoCelula,
              height: mesa.tamanhoCelula,
              background: t.cor ?? "var(--primary)",
              cursor: "grab",
            }}
            onPointerDown={(e) => {
              e.currentTarget.setPointerCapture(e.pointerId);
              setArrastandoId(t.id);
            }}
            onDoubleClick={() => removerToken(t.id)}
            title={`${t.personagem?.nome ?? t.nome} (clique duplo pra remover)`}
          >
            {(t.personagem?.nome ?? t.nome ?? "?").slice(0, 2).toUpperCase()}
          </div>
        ))}
      </div>
    </div>
  );
}
