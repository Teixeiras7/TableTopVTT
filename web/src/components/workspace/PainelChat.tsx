import { useEffect, useState, type FormEvent } from "react";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/api";
import { obterSocket } from "@/socket";
import { useAuth } from "@/auth/AuthContext";
import type { MensagemChat } from "@/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export function PainelChat({ mesaId }: { mesaId: number }) {
  const { usuario } = useAuth();
  const { data: mensagensIniciais } = useQuery({ queryKey: ["chat", mesaId], queryFn: () => api<MensagemChat[]>(`/tabuleiro/chat?mesaId=${mesaId}`) });
  const [mensagens, setMensagens] = useState<MensagemChat[]>([]);
  const [texto, setTexto] = useState("");

  useEffect(() => {
    if (mensagensIniciais) setMensagens(mensagensIniciais);
  }, [mensagensIniciais]);

  useEffect(() => {
    const socket = obterSocket();
    socket.emit("mesa:entrar", mesaId);
    function aoChatNova(msg: MensagemChat) {
      setMensagens((atual) => [...atual, msg]);
    }
    socket.on("chat:nova", aoChatNova);
    return () => {
      socket.off("chat:nova", aoChatNova);
    };
  }, [mesaId]);

  function enviar(e: FormEvent) {
    e.preventDefault();
    if (!texto.trim()) return;
    obterSocket().emit("chat:enviar", { mesaId, texto });
    setTexto("");
  }

  return (
    <div className="flex h-96 w-full flex-col gap-2">
      <div className="flex-1 overflow-y-auto rounded-md border border-border p-2">
        {mensagens.map((m) => (
          <p key={m.id} className={cn("text-xs", m.usuario.id === usuario?.id && "text-right")}>
            <strong>{m.usuario.nome}:</strong> {m.texto}
          </p>
        ))}
        {mensagens.length === 0 && <p className="text-xs text-muted-foreground">Nenhuma mensagem ainda.</p>}
      </div>
      <form onSubmit={enviar} className="flex gap-1.5">
        <Input value={texto} onChange={(e) => setTexto(e.target.value)} placeholder="Mensagem..." className="h-8" />
        <Button type="submit" size="sm">
          Enviar
        </Button>
      </form>
    </div>
  );
}
