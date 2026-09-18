import { useRef, useState, type ReactNode, type PointerEvent as ReactPointerEvent } from "react";
import { X } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PainelFlutuanteProps {
  titulo: string;
  posicaoInicial?: { x: number; y: number };
  largura?: number;
  zIndex: number;
  onFechar: () => void;
  onFocar: () => void;
  children: ReactNode;
  className?: string;
}

/** Painel arrastável por cima do tabuleiro — a peça que faltava pra parecer
 * um VTT de verdade (Foundry/Roll20) em vez de páginas separadas. */
export function PainelFlutuante({ titulo, posicaoInicial, largura = 340, zIndex, onFechar, onFocar, children, className }: PainelFlutuanteProps) {
  const [pos, setPos] = useState(posicaoInicial ?? { x: 60, y: 60 });
  const arrastoRef = useRef<{ offsetX: number; offsetY: number } | null>(null);

  function aoPointerDownCabecalho(e: ReactPointerEvent<HTMLDivElement>) {
    onFocar();
    e.currentTarget.setPointerCapture(e.pointerId);
    arrastoRef.current = { offsetX: e.clientX - pos.x, offsetY: e.clientY - pos.y };
  }
  function aoPointerMove(e: ReactPointerEvent<HTMLDivElement>) {
    if (!arrastoRef.current) return;
    setPos({ x: e.clientX - arrastoRef.current.offsetX, y: e.clientY - arrastoRef.current.offsetY });
  }
  function aoPointerUp() {
    arrastoRef.current = null;
  }

  return (
    <Card
      className={cn("absolute gap-0 overflow-hidden border-primary/40 py-0 shadow-xl", className)}
      style={{ left: pos.x, top: pos.y, width: largura, zIndex }}
      onPointerDownCapture={onFocar}
    >
      <CardHeader
        className="flex-row items-center justify-between gap-2 space-y-0 border-b bg-secondary py-2 px-3 cursor-move select-none"
        onPointerDown={aoPointerDownCabecalho}
        onPointerMove={aoPointerMove}
        onPointerUp={aoPointerUp}
        onPointerLeave={aoPointerUp}
      >
        <CardTitle className="text-sm">{titulo}</CardTitle>
        <Button variant="ghost" size="icon-xs" onClick={onFechar}>
          <X />
        </Button>
      </CardHeader>
      <CardContent className="max-h-[75vh] overflow-y-auto p-3">{children}</CardContent>
    </Card>
  );
}
