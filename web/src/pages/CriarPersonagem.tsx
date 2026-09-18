import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router";
import { api } from "../api";
import type { AtributoPerfil, CarreiraDetalhe, CarreiraResumo, Item, Raca } from "../types";

const ATRIBUTOS = [
  { chave: "fis", nome: "Físico" },
  { chave: "agi", nome: "Agilidade" },
  { chave: "int", nome: "Intelecto" },
  { chave: "vel", nome: "Velocidade" },
  { chave: "for", nome: "Força" },
  { chave: "des", nome: "Destreza" },
  { chave: "mae", nome: "Maestria" },
  { chave: "per", nome: "Percepção" },
  { chave: "arc", nome: "Arcano" },
] as const;

const PONTOS_DISPONIVEIS = 3;

export function CriarPersonagem() {
  const { mesaId } = useParams();
  const navigate = useNavigate();

  const { data: racas } = useQuery({ queryKey: ["racas"], queryFn: () => api<Raca[]>("/catalogo/racas") });
  const { data: carreirasResumo } = useQuery({ queryKey: ["carreiras"], queryFn: () => api<CarreiraResumo[]>("/catalogo/carreiras") });

  const [passo, setPasso] = useState(1);
  const [nome, setNome] = useState("");
  const [racaId, setRacaId] = useState<number | null>(null);
  const [arquetipoId, setArquetipoId] = useState<number | null>(null);
  const [carreiraIds, setCarreiraIds] = useState<number[]>([]);
  const [distribuicao, setDistribuicao] = useState<Record<string, number>>({});
  const [escolhas, setEscolhas] = useState<Record<number, number[]>>({});
  const [itensComprados, setItensComprados] = useState<Record<number, number>>({});
  const [erro, setErro] = useState<string[] | null>(null);
  const [criando, setCriando] = useState(false);
  const [criado, setCriado] = useState(false);

  const racaEscolhida = racas?.find((r) => r.id === racaId) ?? null;
  const arquetipoEscolhido = racaEscolhida?.arquetipos.find((a) => a.id === arquetipoId) ?? null;

  const { data: carreira1 } = useQuery({
    queryKey: ["carreira", carreiraIds[0]],
    queryFn: () => api<CarreiraDetalhe>(`/catalogo/carreiras/${carreiraIds[0]}`),
    enabled: carreiraIds[0] != null,
  });
  const { data: carreira2 } = useQuery({
    queryKey: ["carreira", carreiraIds[1]],
    queryFn: () => api<CarreiraDetalhe>(`/catalogo/carreiras/${carreiraIds[1]}`),
    enabled: carreiraIds[1] != null,
  });
  const carreirasDetalhe = useMemo(() => [carreira1, carreira2].filter((c): c is CarreiraDetalhe => !!c), [carreira1, carreira2]);
  const ouroTotal = carreirasDetalhe.reduce((soma, c) => soma + c.ouroInicial, 0);

  const { data: itens } = useQuery({ queryKey: ["itens"], queryFn: () => api<Item[]>("/catalogo/itens"), enabled: passo >= 6 });

  const pontosAlocados = Object.values(distribuicao).reduce((s, v) => s + v, 0);
  const pontosRestantes = PONTOS_DISPONIVEIS - pontosAlocados;

  const custoCompras = Object.entries(itensComprados).reduce((soma, [itemId, qtd]) => {
    const item = itens?.find((i) => i.id === Number(itemId));
    return soma + (item?.custo ?? 0) * qtd;
  }, 0);

  function alterarAtributo(chave: string, delta: number) {
    setDistribuicao((atual) => {
      const valorAtual = atual[chave] ?? 0;
      const novoValor = Math.max(0, valorAtual + delta);
      if (delta > 0 && pontosRestantes <= 0) return atual;
      return { ...atual, [chave]: novoValor };
    });
  }

  function alternarOpcaoEscolha(escolhaId: number, opcaoId: number, quantidade: number) {
    setEscolhas((atual) => {
      const selecionadas = atual[escolhaId] ?? [];
      const jaSelecionada = selecionadas.includes(opcaoId);
      let novasSelecionadas: number[];
      if (jaSelecionada) {
        novasSelecionadas = selecionadas.filter((id) => id !== opcaoId);
      } else if (selecionadas.length < quantidade) {
        novasSelecionadas = [...selecionadas, opcaoId];
      } else if (quantidade === 1) {
        novasSelecionadas = [opcaoId];
      } else {
        return atual;
      }
      return { ...atual, [escolhaId]: novasSelecionadas };
    });
  }

  function alterarCompra(itemId: number, quantidade: number) {
    setItensComprados((atual) => {
      if (quantidade <= 0) {
        const { [itemId]: _remover, ...resto } = atual;
        return resto;
      }
      return { ...atual, [itemId]: quantidade };
    });
  }

  const escolhasCompletas = carreirasDetalhe.every((c) => c.escolhas.every((e) => (escolhas[e.id]?.length ?? 0) === e.quantidade));

  async function criarPersonagem() {
    setErro(null);
    setCriando(true);
    try {
      await api("/personagens", {
        method: "POST",
        body: JSON.stringify({
          mesaId: Number(mesaId),
          nome,
          racaId,
          arquetipoId,
          carreiraIds,
          distribuicaoAtributos: distribuicao,
          escolhas: Object.entries(escolhas).map(([escolhaId, opcaoIds]) => ({ escolhaId: Number(escolhaId), opcaoIds })),
          itensComprados: Object.entries(itensComprados).map(([itemId, quantidade]) => ({ itemId: Number(itemId), quantidade })),
        }),
      });
      setCriado(true);
      setTimeout(() => navigate(`/mesas/${mesaId}/personagens`), 1200);
    } catch (err) {
      const mensagens = err instanceof Error ? err.message.split("; ") : ["Erro desconhecido"];
      setErro(mensagens);
    } finally {
      setCriando(false);
    }
  }

  return (
    <main className="pagina">
      <header className="cabecalho">
        <h1>Criar Personagem</h1>
      </header>
      <div className="passos">Passo {passo} de 6</div>

      {passo === 1 && (
        <section className="cartao">
          <h2>1. Raça</h2>
          <div className="grade-opcoes">
            {racas?.map((r) => (
              <button
                key={r.id}
                className={racaId === r.id ? "opcao ativo" : "opcao"}
                onClick={() => {
                  setRacaId(r.id);
                  setArquetipoId(null);
                }}
              >
                {r.nome}
              </button>
            ))}
          </div>
          {racaEscolhida?.caracteristicas && <p className="texto-apoio">{racaEscolhida.caracteristicas}</p>}
          <button disabled={!racaId} onClick={() => setPasso(2)}>
            Próximo
          </button>
        </section>
      )}

      {passo === 2 && racaEscolhida && (
        <section className="cartao">
          <h2>2. Arquétipo</h2>
          <div className="grade-opcoes">
            {racaEscolhida.arquetipos.map((a) => (
              <button key={a.id} className={arquetipoId === a.id ? "opcao ativo" : "opcao"} onClick={() => setArquetipoId(a.id)}>
                {a.nome}
              </button>
            ))}
          </div>
          {arquetipoEscolhido && <p className="texto-apoio">{arquetipoEscolhido.passivaFixa}</p>}
          <div className="acoes-passo">
            <button onClick={() => setPasso(1)}>Voltar</button>
            <button disabled={!arquetipoId} onClick={() => setPasso(3)}>
              Próximo
            </button>
          </div>
        </section>
      )}

      {passo === 3 && (
        <section className="cartao">
          <h2>3. Carreiras (escolha exatamente 2)</h2>
          <div className="grade-opcoes">
            {carreirasResumo?.map((c) => {
              const selecionada = carreiraIds.includes(c.id);
              const bloqueadaPorRaca = c.racaExigida && c.racaExigida.nome !== racaEscolhida?.nome;
              const bloqueadaPorArquetipo = c.arquetipoExigido && c.arquetipoExigido.nome !== arquetipoEscolhido?.nome;
              const bloqueada = !!(bloqueadaPorRaca || bloqueadaPorArquetipo);
              return (
                <button
                  key={c.id}
                  disabled={bloqueada || (!selecionada && carreiraIds.length >= 2)}
                  className={selecionada ? "opcao ativo" : "opcao"}
                  title={bloqueadaPorRaca ? `Exige raça ${c.racaExigida?.nome}` : bloqueadaPorArquetipo ? `Exige arquétipo ${c.arquetipoExigido?.nome}` : undefined}
                  onClick={() => setCarreiraIds((atual) => (selecionada ? atual.filter((id) => id !== c.id) : [...atual, c.id]))}
                >
                  {c.nome}
                </button>
              );
            })}
          </div>
          <div className="acoes-passo">
            <button onClick={() => setPasso(2)}>Voltar</button>
            <button disabled={carreiraIds.length !== 2} onClick={() => setPasso(4)}>
              Próximo
            </button>
          </div>
        </section>
      )}

      {passo === 4 && racaEscolhida && (
        <section className="cartao">
          <h2>4. Atributos — {pontosRestantes} ponto(s) restante(s) de {PONTOS_DISPONIVEIS}</h2>
          <table className="tabela-atributos">
            <tbody>
              {ATRIBUTOS.filter((a) => a.chave !== "arc" || arquetipoEscolhido?.nome === "Dotado").map(({ chave, nome: nomeAtributo }) => {
                const perfil: AtributoPerfil | undefined = racaEscolhida.atributos[chave];
                const base = perfil?.inicial ?? 0;
                const alocado = distribuicao[chave] ?? 0;
                const tetoHeroi = perfil?.maximo.heroi;
                const valorFinal = base + alocado;
                const noTeto = tetoHeroi != null && valorFinal >= tetoHeroi;
                return (
                  <tr key={chave}>
                    <td>{nomeAtributo}</td>
                    <td>{base}</td>
                    <td>
                      <button type="button" onClick={() => alterarAtributo(chave, -1)} disabled={alocado <= 0}>
                        −
                      </button>
                      <span className="valor-atributo">+{alocado}</span>
                      <button type="button" onClick={() => alterarAtributo(chave, 1)} disabled={pontosRestantes <= 0 || noTeto}>
                        +
                      </button>
                    </td>
                    <td>
                      = {valorFinal} {tetoHeroi != null && `(teto ${tetoHeroi})`}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="acoes-passo">
            <button onClick={() => setPasso(3)}>Voltar</button>
            <button disabled={pontosRestantes !== 0} onClick={() => setPasso(5)}>
              Próximo
            </button>
          </div>
        </section>
      )}

      {passo === 5 && (
        <section className="cartao">
          <h2>5. Escolhas das carreiras</h2>
          {carreirasDetalhe.map((c) => (
            <div key={c.id} className="bloco-carreira">
              <h3>{c.nome}</h3>
              {c.escolhas.length === 0 && <p className="texto-apoio">Sem escolhas — concessões fixas.</p>}
              {c.escolhas.map((grupo) => {
                const selecionadas = escolhas[grupo.id] ?? [];
                return (
                  <fieldset key={grupo.id}>
                    <legend>
                      {grupo.descricao ?? grupo.tipo} — escolha {grupo.quantidade} ({selecionadas.length}/{grupo.quantidade})
                    </legend>
                    {grupo.opcoes.map((opcao) => {
                      const nomeOpcao = opcao.pericia?.nome ?? opcao.habilidade?.nome ?? opcao.item?.nome ?? "?";
                      const marcada = selecionadas.includes(opcao.id);
                      return (
                        <label key={opcao.id} className="opcao-checkbox">
                          <input type="checkbox" checked={marcada} onChange={() => alternarOpcaoEscolha(grupo.id, opcao.id, grupo.quantidade)} />
                          {nomeOpcao}
                        </label>
                      );
                    })}
                  </fieldset>
                );
              })}
            </div>
          ))}
          <div className="acoes-passo">
            <button onClick={() => setPasso(4)}>Voltar</button>
            <button disabled={!escolhasCompletas} onClick={() => setPasso(6)}>
              Próximo
            </button>
          </div>
        </section>
      )}

      {passo === 6 && (
        <section className="cartao">
          <h2>6. Equipamento e revisão</h2>
          <label>
            Nome do personagem
            <input value={nome} onChange={(e) => setNome(e.target.value)} required />
          </label>

          <p>
            Ouro inicial: <strong>{ouroTotal} CO</strong> — gasto: {custoCompras} CO — restante: {ouroTotal - custoCompras} CO
          </p>
          <details>
            <summary>Comprar equipamento (opcional)</summary>
            <ul className="lista-compras">
              {itens?.map((item) => (
                <li key={item.id}>
                  <span>
                    {item.nome} — {item.custo} CO
                  </span>
                  <input
                    type="number"
                    min={0}
                    value={itensComprados[item.id] ?? 0}
                    onChange={(e) => alterarCompra(item.id, Number(e.target.value))}
                  />
                </li>
              ))}
            </ul>
          </details>

          {erro && (
            <ul className="erro">
              {erro.map((e) => (
                <li key={e}>{e}</li>
              ))}
            </ul>
          )}
          {criado && <p className="sucesso">Personagem criado!</p>}

          <div className="acoes-passo">
            <button onClick={() => setPasso(5)}>Voltar</button>
            <button disabled={!nome || criando || custoCompras > ouroTotal} onClick={criarPersonagem}>
              {criando ? "Criando..." : "Criar personagem"}
            </button>
          </div>
        </section>
      )}
    </main>
  );
}
