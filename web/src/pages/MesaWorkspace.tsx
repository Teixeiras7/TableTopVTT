import { useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router";
import { api } from "@/api";
import { useAuth } from "@/auth/AuthContext";
import type { Mesa } from "@/types";
import { Button } from "@/components/ui/button";
import { PainelFlutuante } from "@/components/workspace/PainelFlutuante";
import { TabuleiroCanvas } from "@/components/workspace/TabuleiroCanvas";
import { PainelPersonagens } from "@/components/workspace/PainelPersonagens";
import { PainelFicha } from "@/components/workspace/PainelFicha";
import { PainelCombate } from "@/components/workspace/PainelCombate";
import { PainelChat } from "@/components/workspace/PainelChat";

interface PainelAberto {
  id: string;
  titulo: string;
  posicaoInicial: { x: number; y: number };
  conteudo: React.ReactNode;
}

export function MesaWorkspace() {
  const { mesaId } = useParams();
  const idMesa = Number(mesaId);
  const { usuario, sair } = useAuth();
  const navigate = useNavigate();

  const { data: mesa } = useQuery({ queryKey: ["mesa", mesaId], queryFn: () => api<Mesa>(`/mesas/${mesaId}`) });
  const souMestre = !!mesa && !!usuario && mesa.criadorId === usuario.id;

  const [painéis, setPaineis] = useState<Record<string, PainelAberto>>({});
  const [zIndices, setZIndices] = useState<Record<string, number>>({});
  const proximoZRef = useRef(10);

  function focar(id: string) {
    proximoZRef.current += 1;
    setZIndices((atual) => ({ ...atual, [id]: proximoZRef.current }));
  }

  function abrir(painel: PainelAberto) {
    setPaineis((atual) => ({ ...atual, [painel.id]: painel }));
    focar(painel.id);
  }

  function fechar(id: string) {
    setPaineis((atual) => {
      const { [id]: _removido, ...resto } = atual;
      return resto;
    });
  }

  function alternar(painel: PainelAberto) {
    setPaineis((atual) => {
      if (atual[painel.id]) {
        const { [painel.id]: _removido, ...resto } = atual;
        return resto;
      }
      return { ...atual, [painel.id]: painel };
    });
    focar(painel.id);
  }

  function abrirFicha(personagemId: number, nome: string) {
    abrir({
      id: `ficha-${personagemId}`,
      titulo: nome,
      posicaoInicial: { x: 420, y: 60 },
      conteudo: <PainelFicha personagemId={personagemId} />,
    });
  }

  if (!mesa || !idMesa) return <p className="p-4 text-sm text-muted-foreground">Carregando...</p>;

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-background text-foreground">
      <TabuleiroCanvas mesaId={idMesa} mesa={mesa} />

      <header className="absolute right-4 top-4 z-20 flex items-center gap-2 rounded-md border border-border bg-card/95 p-2 shadow-md backdrop-blur">
        <span className="mr-1 text-sm font-semibold">{mesa.nome}</span>
        <Button
          size="sm"
          variant="outline"
          onClick={() =>
            alternar({
              id: "personagens",
              titulo: "Personagens",
              posicaoInicial: { x: 60, y: 60 },
              conteudo: <PainelPersonagens mesaId={idMesa} onAbrirFicha={abrirFicha} />,
            })
          }
        >
          Personagens
        </Button>
        <Button
          size="sm"
          variant="outline"
          onClick={() =>
            alternar({
              id: "combate",
              titulo: "Combate",
              posicaoInicial: { x: 60, y: 320 },
              conteudo: <PainelCombate mesaId={idMesa} souMestre={souMestre} />,
            })
          }
        >
          Combate
        </Button>
        <Button
          size="sm"
          variant="outline"
          onClick={() =>
            alternar({
              id: "chat",
              titulo: "Chat",
              posicaoInicial: { x: 800, y: 60 },
              conteudo: <PainelChat mesaId={idMesa} />,
            })
          }
        >
          Chat
        </Button>
        <Button
          size="sm"
          variant="ghost"
          onClick={() => {
            sair();
            navigate("/login");
          }}
        >
          Sair
        </Button>
      </header>

      {Object.values(painéis).map((painel) => (
        <PainelFlutuante
          key={painel.id}
          titulo={painel.titulo}
          posicaoInicial={painel.posicaoInicial}
          zIndex={zIndices[painel.id] ?? 10}
          onFechar={() => fechar(painel.id)}
          onFocar={() => focar(painel.id)}
        >
          {painel.conteudo}
        </PainelFlutuante>
      ))}
    </div>
  );
}
