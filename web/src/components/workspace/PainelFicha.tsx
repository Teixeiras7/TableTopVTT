import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "@/api";
import type { PersonagemDetalhe, ResultadoTeste } from "@/types";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const NOMES_ATRIBUTO: Record<string, string> = {
  fis: "Físico",
  agi: "Agilidade",
  int: "Intelecto",
  vel: "Velocidade",
  for: "Força",
  des: "Destreza",
  mae: "Maestria",
  per: "Percepção",
  arc: "Arcano",
};

export function PainelFicha({ personagemId }: { personagemId: number }) {
  const qc = useQueryClient();
  const [ultimoResultado, setUltimoResultado] = useState<ResultadoTeste | null>(null);

  const { data: p, isLoading } = useQuery({
    queryKey: ["personagem", personagemId],
    queryFn: () => api<PersonagemDetalhe>(`/personagens/${personagemId}`),
  });

  async function alternarEquipar(itemId: number, equipadoAtual: boolean) {
    await api(`/personagens/${personagemId}/inventario/${itemId}`, { method: "PATCH", body: JSON.stringify({ equipado: !equipadoAtual }) });
    qc.invalidateQueries({ queryKey: ["personagem", personagemId] });
  }

  async function testarPericia(periciaId?: number) {
    const resultado = await api<ResultadoTeste>(`/personagens/${personagemId}/testar-pericia`, {
      method: "POST",
      body: JSON.stringify(periciaId ? { periciaId } : {}),
    });
    setUltimoResultado(resultado);
  }

  if (isLoading || !p) return <p className="text-sm text-muted-foreground">Carregando...</p>;

  return (
    <div className="flex flex-col gap-3 text-sm">
      <div>
        <p className="text-xs text-muted-foreground">
          {p.raca.nome} · {p.arquetipo.nome} · Nível {p.nivel}
        </p>
        <p className="text-xs text-muted-foreground">{p.carreiras.map((c) => c.carreira.nome).join(" + ")}</p>
      </div>

      <div className="grid grid-cols-3 gap-2 text-center">
        {[
          ["DEF", p.ficha.def],
          ["ARM", p.ficha.arm],
          ["VON", p.ficha.von],
          ["Iniciativa", p.ficha.iniciativa],
          ["Façanha", p.pontosFacanha],
          ["Fadiga/Foco", `${p.fadigaAtual}/${p.focoAtual}`],
        ].map(([rotulo, valor]) => (
          <div key={rotulo} className="rounded-md border border-border bg-secondary/40 py-1">
            <div className="text-base font-semibold text-primary">{valor}</div>
            <div className="text-[10px] text-muted-foreground">{rotulo}</div>
          </div>
        ))}
      </div>

      <Tabs defaultValue="geral">
        <TabsList className="w-full">
          <TabsTrigger value="geral">Geral</TabsTrigger>
          <TabsTrigger value="pericias">Perícias</TabsTrigger>
          <TabsTrigger value="outros">Outros</TabsTrigger>
          <TabsTrigger value="itens">Itens</TabsTrigger>
        </TabsList>

        <TabsContent value="geral" className="flex flex-col gap-3">
          <div className="grid grid-cols-3 gap-1.5">
            {(["fis", "agi", "int", "vel", "for", "des", "mae", "per", "arc"] as const)
              .filter((chave) => chave !== "arc" || p.arc > 0)
              .map((chave) => (
                <div key={chave} className="flex items-center justify-between rounded border border-border px-2 py-1">
                  <span className="text-xs">{NOMES_ATRIBUTO[chave]}</span>
                  <strong>{p[chave]}</strong>
                </div>
              ))}
          </div>
          <Button size="sm" variant="outline" onClick={() => testarPericia()}>
            Rolar 2d6 (sem bônus)
          </Button>

          <Separator />
          <div>
            <p className="mb-1 font-medium">Espiral Vital</p>
            <div className="flex gap-3">
              {(["fis", "agi", "int"] as const).map((chave) => (
                <div key={chave} className="text-center">
                  <div className="text-xs text-muted-foreground">{NOMES_ATRIBUTO[chave]}</div>
                  <strong>
                    {p.espiralVital[chave].dano}/{p.espiralVital[chave].max}
                  </strong>
                </div>
              ))}
            </div>
          </div>

          <Separator />
          <div>
            <p className="mb-1 font-medium">Ataques</p>
            {p.ficha.ataques.length === 0 && <p className="text-xs text-muted-foreground">Nenhuma arma equipada.</p>}
            <ul className="flex flex-col gap-1">
              {p.ficha.ataques.map((a) => (
                <li key={a.nome} className="text-xs">
                  {a.nome}: +{a.bonusAtaque} ataque, POD {a.pod ?? "--"}
                </li>
              ))}
            </ul>
          </div>
        </TabsContent>

        <TabsContent value="pericias">
          <ul className="flex flex-col gap-1">
            {p.pericias.map((pp) => (
              <li key={pp.id} className="flex items-center justify-between border-b border-border/50 py-1">
                <span className="text-xs">
                  {pp.pericia.nome}
                  {pp.subtipo && ` (${pp.subtipo})`} — nível {pp.nivel}
                </span>
                <Button size="xs" variant="secondary" onClick={() => testarPericia(pp.periciaId)}>
                  Rolar
                </Button>
              </li>
            ))}
          </ul>
        </TabsContent>

        <TabsContent value="outros" className="flex flex-col gap-3">
          <div>
            <p className="mb-1 font-medium">Habilidades</p>
            <ul className="flex flex-col gap-2">
              {p.habilidades.map((h) => (
                <li key={h.id} className="text-xs">
                  <strong>
                    {h.habilidade.nome}
                    {h.parametro && ` (${h.parametro})`}
                  </strong>
                  <p className="text-muted-foreground">{h.habilidade.efeito}</p>
                </li>
              ))}
            </ul>
          </div>
          {p.conexoes.length > 0 && (
            <div>
              <p className="mb-1 font-medium">Conexões</p>
              <ul className="flex flex-col gap-2">
                {p.conexoes.map((c) => (
                  <li key={c.id} className="text-xs">
                    <strong>{c.conexao.nome}</strong>
                    <p className="text-muted-foreground">{c.conexao.beneficio}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {p.magias.length > 0 && (
            <div>
              <p className="mb-1 font-medium">Magias</p>
              <ul className="flex flex-col gap-2">
                {p.magias.map((m) => (
                  <li key={m.id} className="text-xs">
                    <strong>
                      {m.magia.nome} (CST {m.magia.custo}, ALC {m.magia.alcance})
                    </strong>
                    <p className="text-muted-foreground">{m.magia.efeito}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </TabsContent>

        <TabsContent value="itens">
          <ul className="flex flex-col gap-1">
            {p.inventario.map((inv) => (
              <li key={inv.id} className="flex items-center gap-2 text-xs">
                <input type="checkbox" checked={inv.equipado} onChange={() => alternarEquipar(inv.itemId, inv.equipado)} />
                <span>
                  {inv.item.nome} {inv.quantidade > 1 && `x${inv.quantidade}`}
                </span>
                {inv.equipado && (
                  <Badge variant="secondary" className="ml-auto">
                    equipado
                  </Badge>
                )}
              </li>
            ))}
            {p.inventario.length === 0 && <p className="text-xs text-muted-foreground">Sem itens.</p>}
          </ul>
        </TabsContent>
      </Tabs>

      {ultimoResultado && (
        <div className="rounded-md border border-primary/50 bg-secondary/40 p-2 text-xs">
          <p className="font-medium">Última rolagem — {ultimoResultado.nomeTeste}</p>
          <p>
            {ultimoResultado.dados.dados.join("+")} + {ultimoResultado.bonus} = <strong>{ultimoResultado.total}</strong>
            {ultimoResultado.critico && " (crítico!)"}
          </p>
          {ultimoResultado.sucesso !== undefined && <p className={ultimoResultado.sucesso ? "text-green-500" : "text-destructive"}>{ultimoResultado.sucesso ? "Sucesso" : "Falha"}</p>}
        </div>
      )}
    </div>
  );
}
