import { useEffect, useRef, useState, type FormEvent, type PointerEvent as ReactPointerEvent } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router";
import { api } from "../api";
import { obterSocket } from "../socket";
import { useAuth } from "../auth/AuthContext";
import type { Mesa, MensagemChat, Personagem, TokenTabuleiro } from "../types";

export function Tabuleiro() {
  const { mesaId } = useParams();
  const { usuario } = useAuth();
  const gradeRef = useRef<HTMLDivElement>(null);

  const { data: mesa } = useQuery({ queryKey: ["mesa", mesaId], queryFn: () => api<Mesa>(`/mesas/${mesaId}`) });
  const { data: personagens } = useQuery({ queryKey: ["personagens", mesaId], queryFn: () => api<Personagem[]>(`/personagens?mesaId=${mesaId}`) });
  const { data: tokensIniciais } = useQuery({ queryKey: ["tokens", mesaId], queryFn: () => api<TokenTabuleiro[]>(`/tabuleiro/tokens?mesaId=${mesaId}`) });
  const { data: mensagensIniciais } = useQuery({ queryKey: ["chat", mesaId], queryFn: () => api<MensagemChat[]>(`/tabuleiro/chat?mesaId=${mesaId}`) });

  const [tokens, setTokens] = useState<TokenTabuleiro[]>([]);
  const [mensagens, setMensagens] = useState<MensagemChat[]>([]);
  const [arrastandoId, setArrastandoId] = useState<number | null>(null);
  const [personagemNovoToken, setPersonagemNovoToken] = useState("");
  const [nomeNovoToken, setNomeNovoToken] = useState("");
  const [textoChat, setTextoChat] = useState("");

  useEffect(() => {
    if (tokensIniciais) setTokens(tokensIniciais);
  }, [tokensIniciais]);

  useEffect(() => {
    if (mensagensIniciais) setMensagens(mensagensIniciais);
  }, [mensagensIniciais]);

  useEffect(() => {
    if (!mesaId) return;
    const socket = obterSocket();
    socket.emit("mesa:entrar", Number(mesaId));

    function aoTokenMovido({ tokenId, x, y }: { tokenId: number; x: number; y: number }) {
      setTokens((atual) => atual.map((t) => (t.id === tokenId ? { ...t, x, y } : t)));
    }
    function aoChatNova(msg: MensagemChat) {
      setMensagens((atual) => [...atual, msg]);
    }
    socket.on("token:movido", aoTokenMovido);
    socket.on("chat:nova", aoChatNova);
    return () => {
      socket.off("token:movido", aoTokenMovido);
      socket.off("chat:nova", aoChatNova);
    };
  }, [mesaId]);

  function moverToken(tokenId: number, x: number, y: number) {
    obterSocket().emit("token:mover", { tokenId, x, y });
  }

  function aoPointerMove(e: ReactPointerEvent) {
    if (arrastandoId == null || !gradeRef.current || !mesa) return;
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
      ? { mesaId: Number(mesaId), personagemId: Number(personagemNovoToken), x: 0, y: 0 }
      : { mesaId: Number(mesaId), nome: nomeNovoToken, cor: "#b08d4f", x: 0, y: 0 };
    const token = await api<TokenTabuleiro>("/tabuleiro/tokens", { method: "POST", body: JSON.stringify(body) });
    setTokens((atual) => [...atual, token]);
    setPersonagemNovoToken("");
    setNomeNovoToken("");
  }

  async function removerToken(tokenId: number) {
    await api(`/tabuleiro/tokens/${tokenId}`, { method: "DELETE" });
    setTokens((atual) => atual.filter((t) => t.id !== tokenId));
  }

  function enviarMensagem(e: FormEvent) {
    e.preventDefault();
    if (!textoChat.trim()) return;
    obterSocket().emit("chat:enviar", { mesaId: Number(mesaId), texto: textoChat });
    setTextoChat("");
  }

  if (!mesa) return <main className="pagina">Carregando...</main>;

  return (
    <main className="pagina pagina-tabuleiro">
      <header className="cabecalho">
        <h1>{mesa.nome}</h1>
      </header>
      <Link to={`/mesas/${mesaId}/personagens`} className="link-voltar">
        ← Personagens
      </Link>

      <div className="layout-tabuleiro">
        <section className="cartao area-tabuleiro">
          <form onSubmit={adicionarToken} className="formulario-token">
            <select value={personagemNovoToken} onChange={(e) => { setPersonagemNovoToken(e.target.value); setNomeNovoToken(""); }}>
              <option value="">Token avulso...</option>
              {personagens?.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.nome}
                </option>
              ))}
            </select>
            {!personagemNovoToken && (
              <input placeholder="Nome do token avulso" value={nomeNovoToken} onChange={(e) => setNomeNovoToken(e.target.value)} />
            )}
            <button type="submit" disabled={!personagemNovoToken && !nomeNovoToken}>
              + Token
            </button>
          </form>

          <div className="moldura-grade">
            <div
              ref={gradeRef}
              className="grade-tabuleiro"
              style={{
                width: mesa.colunas * mesa.tamanhoCelula,
                height: mesa.linhas * mesa.tamanhoCelula,
                backgroundSize: `${mesa.tamanhoCelula}px ${mesa.tamanhoCelula}px`,
              }}
              onPointerMove={aoPointerMove}
              onPointerUp={aoPointerUp}
              onPointerLeave={aoPointerUp}
            >
              {tokens.map((t) => (
                <div
                  key={t.id}
                  className="token"
                  style={{
                    left: t.x * mesa.tamanhoCelula,
                    top: t.y * mesa.tamanhoCelula,
                    width: mesa.tamanhoCelula,
                    height: mesa.tamanhoCelula,
                    background: t.cor ?? "var(--cor-destaque)",
                  }}
                  onPointerDown={(e) => {
                    e.currentTarget.setPointerCapture(e.pointerId);
                    setArrastandoId(t.id);
                  }}
                  onDoubleClick={() => removerToken(t.id)}
                  title={`${t.personagem?.nome ?? t.nome} (clique duplo pra remover)`}
                >
                  <span>{(t.personagem?.nome ?? t.nome ?? "?").slice(0, 2).toUpperCase()}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cartao area-chat">
          <h2>Chat</h2>
          <div className="lista-chat">
            {mensagens.map((m) => (
              <p key={m.id} className={m.usuario.id === usuario?.id ? "mensagem-propria" : "mensagem"}>
                <strong>{m.usuario.nome}:</strong> {m.texto}
              </p>
            ))}
          </div>
          <form onSubmit={enviarMensagem} className="formulario-chat">
            <input value={textoChat} onChange={(e) => setTextoChat(e.target.value)} placeholder="Mensagem..." />
            <button type="submit">Enviar</button>
          </form>
        </section>
      </div>
    </main>
  );
}
