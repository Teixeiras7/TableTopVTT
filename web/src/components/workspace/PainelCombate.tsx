import { useState, type FormEvent } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "@/api";
import type { CombateEncontro, CombateEncontroDetalhe, Condicao, Personagem, ResultadoAtaque } from "@/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

export function PainelCombate({ mesaId, souMestre }: { mesaId: number; souMestre: boolean }) {
  const qc = useQueryClient();

  const { data: combates } = useQuery({ queryKey: ["combates", mesaId], queryFn: () => api<CombateEncontro[]>(`/combates?mesaId=${mesaId}`) });
  const encontroAtivo = combates?.find((c) => !c.encerrado);

  async function criarEncontro() {
    await api("/combates", { method: "POST", body: JSON.stringify({ mesaId }) });
    qc.invalidateQueries({ queryKey: ["combates", mesaId] });
  }

  if (!combates) return <p className="text-sm text-muted-foreground">Carregando...</p>;

  if (!encontroAtivo) {
    return (
      <div className="text-sm">
        {souMestre ? (
          <Button size="sm" onClick={criarEncontro}>
            Iniciar combate
          </Button>
        ) : (
          <p className="text-muted-foreground">Nenhum combate ativo. Aguarde o mestre iniciar.</p>
        )}
      </div>
    );
  }

  return <RastreadorCombate mesaId={mesaId} combateId={encontroAtivo.id} souMestre={souMestre} />;
}

function RastreadorCombate({ mesaId, combateId, souMestre }: { mesaId: number; combateId: number; souMestre: boolean }) {
  const qc = useQueryClient();
  const chave = ["combate", combateId];

  const { data: encontro } = useQuery({ queryKey: chave, queryFn: () => api<CombateEncontroDetalhe>(`/combates/${combateId}`) });
  const { data: personagensMesa } = useQuery({ queryKey: ["personagens", mesaId], queryFn: () => api<Personagem[]>(`/personagens?mesaId=${mesaId}`) });
  const { data: condicoes } = useQuery({ queryKey: ["condicoes"], queryFn: () => api<Condicao[]>("/catalogo/condicoes") });

  const [mostrarAdicionar, setMostrarAdicionar] = useState(false);
  const [tipoNovo, setTipoNovo] = useState<"personagem" | "adhoc">("personagem");
  const [personagemSelecionado, setPersonagemSelecionado] = useState("");
  const [adHoc, setAdHoc] = useState({ nomeAdHoc: "", defAdHoc: "10", armAdHoc: "0", bonusAtaqueAdHoc: "0", podAdHoc: "0", vidaMaxAdHoc: "5", bonusIniciativa: "0" });
  const [atacanteId, setAtacanteId] = useState("");
  const [alvoId, setAlvoId] = useState("");
  const [nomeAtaque, setNomeAtaque] = useState("");
  const [amplificar, setAmplificar] = useState(false);
  const [resultado, setResultado] = useState<ResultadoAtaque | null>(null);
  const [erro, setErro] = useState<string | null>(null);

  function invalidar() {
    qc.invalidateQueries({ queryKey: chave });
  }

  async function adicionarParticipante(e: FormEvent) {
    e.preventDefault();
    setErro(null);
    try {
      const body =
        tipoNovo === "personagem"
          ? { personagemId: Number(personagemSelecionado) }
          : {
              nomeAdHoc: adHoc.nomeAdHoc,
              defAdHoc: Number(adHoc.defAdHoc),
              armAdHoc: Number(adHoc.armAdHoc),
              bonusAtaqueAdHoc: Number(adHoc.bonusAtaqueAdHoc),
              podAdHoc: Number(adHoc.podAdHoc),
              vidaMaxAdHoc: Number(adHoc.vidaMaxAdHoc),
              bonusIniciativa: Number(adHoc.bonusIniciativa),
            };
      await api(`/combates/${combateId}/participantes`, { method: "POST", body: JSON.stringify(body) });
      setAdHoc({ nomeAdHoc: "", defAdHoc: "10", armAdHoc: "0", bonusAtaqueAdHoc: "0", podAdHoc: "0", vidaMaxAdHoc: "5", bonusIniciativa: "0" });
      invalidar();
    } catch (err) {
      setErro(err instanceof Error ? err.message : "Erro");
    }
  }

  async function removerParticipante(participanteId: number) {
    await api(`/combates/${combateId}/participantes/${participanteId}`, { method: "DELETE" });
    invalidar();
  }
  async function rolarIniciativa() {
    await api(`/combates/${combateId}/rolar-iniciativa`, { method: "POST" });
    invalidar();
  }
  async function avancarTurno() {
    await api(`/combates/${combateId}/avancar-turno`, { method: "POST" });
    invalidar();
  }
  async function atacar(e: FormEvent) {
    e.preventDefault();
    setErro(null);
    try {
      const r = await api<ResultadoAtaque>(`/combates/${combateId}/atacar`, {
        method: "POST",
        body: JSON.stringify({ atacanteId: Number(atacanteId), alvoId: Number(alvoId), nomeAtaque: nomeAtaque || undefined, amplificar }),
      });
      setResultado(r);
      invalidar();
    } catch (err) {
      setErro(err instanceof Error ? err.message : "Erro");
    }
  }
  async function adicionarCondicao(participanteId: number, condicaoId: number) {
    await api(`/combates/${combateId}/participantes/${participanteId}/condicoes`, { method: "POST", body: JSON.stringify({ condicaoId }) });
    invalidar();
  }
  async function removerCondicao(condicaoAtivaId: number) {
    await api(`/combates/${combateId}/condicoes/${condicaoAtivaId}`, { method: "DELETE" });
    invalidar();
  }

  if (!encontro) return <p className="text-sm text-muted-foreground">Carregando...</p>;
  const atacanteEscolhido = encontro.participantes.find((p) => p.id === Number(atacanteId));

  return (
    <div className="flex flex-col gap-3 text-sm">
      <div className="flex items-center justify-between">
        <span>
          Rodada <strong>{encontro.rodada}</strong>
        </span>
        <div className="flex gap-1.5">
          <Button size="xs" variant="outline" onClick={rolarIniciativa}>
            Rolar Iniciativa
          </Button>
          <Button size="xs" variant="outline" onClick={avancarTurno}>
            Avançar
          </Button>
        </div>
      </div>

      {erro && <p className="text-xs text-destructive">{erro}</p>}

      <ul className="flex flex-col gap-1.5">
        {encontro.participantes.map((p, indice) => (
          <li key={p.id} className={cn("rounded-md border border-border p-2", indice === encontro.turnoAtual && "border-primary bg-secondary/40")}>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
              <strong className="text-xs">{p.ficha.nome}</strong>
              <span className="text-[11px] text-muted-foreground">
                DEF {p.ficha.def} · ARM {p.ficha.arm} · Ini {p.rolagemIniciativa ?? "—"}
              </span>
              {souMestre && (
                <Button size="xs" variant="ghost" className="ml-auto h-5 px-1" onClick={() => removerParticipante(p.id)}>
                  remover
                </Button>
              )}
            </div>
            <p className="text-[11px] text-muted-foreground">
              {p.espiralVital
                ? `FIS ${p.espiralVital.fis.dano}/${p.espiralVital.fis.max} · AGI ${p.espiralVital.agi.dano}/${p.espiralVital.agi.max} · INT ${p.espiralVital.int.dano}/${p.espiralVital.int.max}`
                : `Vida ${p.vidaAtualAdHoc ?? 0}/${p.vidaMaxAdHoc ?? 0}`}
            </p>
            <div className="mt-1 flex flex-wrap items-center gap-1">
              {p.condicoes.map((c) => (
                <Badge key={c.id} variant="secondary" className="cursor-pointer" onClick={() => removerCondicao(c.id)} title="Clique pra remover">
                  {c.nome} ×
                </Badge>
              ))}
              <select className="h-5 rounded border border-border bg-transparent text-[10px]" onChange={(e) => e.target.value && adicionarCondicao(p.id, Number(e.target.value))} value="">
                <option value="">+ condição</option>
                {condicoes?.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.nome}
                  </option>
                ))}
              </select>
            </div>
          </li>
        ))}
      </ul>

      {souMestre && (
        <>
          <Separator />
          <Button size="sm" variant="outline" onClick={() => setMostrarAdicionar((v) => !v)}>
            {mostrarAdicionar ? "Cancelar" : "+ Participante"}
          </Button>
          {mostrarAdicionar && (
            <form onSubmit={adicionarParticipante} className="flex flex-col gap-2 rounded-md border border-border p-2">
              <div className="flex gap-1">
                <Button type="button" size="xs" variant={tipoNovo === "personagem" ? "default" : "outline"} onClick={() => setTipoNovo("personagem")}>
                  Personagem
                </Button>
                <Button type="button" size="xs" variant={tipoNovo === "adhoc" ? "default" : "outline"} onClick={() => setTipoNovo("adhoc")}>
                  Avulso
                </Button>
              </div>
              {tipoNovo === "personagem" ? (
                <select className="h-8 rounded-md border border-input bg-transparent px-2 text-sm" value={personagemSelecionado} onChange={(e) => setPersonagemSelecionado(e.target.value)} required>
                  <option value="">Selecione...</option>
                  {personagensMesa?.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.nome}
                    </option>
                  ))}
                </select>
              ) : (
                <div className="grid grid-cols-2 gap-1.5">
                  <Input placeholder="Nome" value={adHoc.nomeAdHoc} onChange={(e) => setAdHoc({ ...adHoc, nomeAdHoc: e.target.value })} required className="col-span-2" />
                  <Input type="number" placeholder="DEF" value={adHoc.defAdHoc} onChange={(e) => setAdHoc({ ...adHoc, defAdHoc: e.target.value })} />
                  <Input type="number" placeholder="ARM" value={adHoc.armAdHoc} onChange={(e) => setAdHoc({ ...adHoc, armAdHoc: e.target.value })} />
                  <Input type="number" placeholder="Bônus ataque" value={adHoc.bonusAtaqueAdHoc} onChange={(e) => setAdHoc({ ...adHoc, bonusAtaqueAdHoc: e.target.value })} />
                  <Input type="number" placeholder="POD" value={adHoc.podAdHoc} onChange={(e) => setAdHoc({ ...adHoc, podAdHoc: e.target.value })} />
                  <Input type="number" placeholder="Vida" value={adHoc.vidaMaxAdHoc} onChange={(e) => setAdHoc({ ...adHoc, vidaMaxAdHoc: e.target.value })} />
                  <Input type="number" placeholder="Iniciativa" value={adHoc.bonusIniciativa} onChange={(e) => setAdHoc({ ...adHoc, bonusIniciativa: e.target.value })} />
                </div>
              )}
              <Button type="submit" size="sm">
                Adicionar
              </Button>
            </form>
          )}
        </>
      )}

      <Separator />
      <form onSubmit={atacar} className="flex flex-col gap-2">
        <p className="font-medium">Atacar</p>
        <select className="h-8 rounded-md border border-input bg-transparent px-2 text-sm" value={atacanteId} onChange={(e) => { setAtacanteId(e.target.value); setNomeAtaque(""); }} required>
          <option value="">Atacante...</option>
          {encontro.participantes.map((p) => (
            <option key={p.id} value={p.id}>
              {p.ficha.nome}
            </option>
          ))}
        </select>
        <select className="h-8 rounded-md border border-input bg-transparent px-2 text-sm" value={alvoId} onChange={(e) => setAlvoId(e.target.value)} required>
          <option value="">Alvo...</option>
          {encontro.participantes.map((p) => (
            <option key={p.id} value={p.id}>
              {p.ficha.nome}
            </option>
          ))}
        </select>
        {atacanteEscolhido && atacanteEscolhido.ficha.ataques.length > 1 && (
          <select className="h-8 rounded-md border border-input bg-transparent px-2 text-sm" value={nomeAtaque} onChange={(e) => setNomeAtaque(e.target.value)}>
            {atacanteEscolhido.ficha.ataques.map((a) => (
              <option key={a.nome} value={a.nome}>
                {a.nome} (+{a.bonusAtaque})
              </option>
            ))}
          </select>
        )}
        <label className="flex items-center gap-1.5 text-xs">
          <input type="checkbox" checked={amplificar} onChange={(e) => setAmplificar(e.target.checked)} />
          Ampliar
        </label>
        <Button type="submit" size="sm">
          Atacar
        </Button>
      </form>

      {resultado && (
        <div className="rounded-md border border-primary/50 bg-secondary/40 p-2 text-xs">
          <p className="font-medium">
            {resultado.nomeAtacante} ataca {resultado.nomeAlvo}
          </p>
          <p>
            Ataque: {resultado.ataque.dados.dados.join("+")} + {resultado.ataque.bonus} = <strong>{resultado.ataque.total}</strong> {resultado.ataque.critico && "(crítico!)"} —{" "}
            {resultado.ataque.sucesso ? "acertou" : "errou"}
          </p>
          {resultado.dano && (
            <p>
              Dano: {resultado.dano.dados.dados.join("+")} + {resultado.dano.bonus} = <strong>{resultado.dano.total}</strong>
            </p>
          )}
        </div>
      )}
    </div>
  );
}
