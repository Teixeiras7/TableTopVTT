import { Router } from "express";
import { prisma } from "../db.js";
import { autenticar } from "../auth.js";

export const catalogoRouter = Router();
catalogoRouter.use(autenticar);

catalogoRouter.get("/racas", async (_req, res) => {
  const racas = await prisma.raca.findMany({ include: { arquetipos: true } });
  res.json(racas);
});

catalogoRouter.get("/carreiras", async (_req, res) => {
  const carreiras = await prisma.carreira.findMany({
    select: {
      id: true,
      nome: true,
      apenasInicial: true,
      ouroInicial: true,
      racaExigida: { select: { nome: true } },
      arquetipoExigido: { select: { nome: true } },
    },
    orderBy: { nome: "asc" },
  });
  res.json(carreiras);
});

// Detalhe completo — tudo que a Etapa 5 (criação de personagem) precisa numa
// única ida ao banco, em vez de o frontend montar isso com várias chamadas.
catalogoRouter.get("/carreiras/:id", async (req, res) => {
  const id = Number(req.params.id);
  const carreira = await prisma.carreira.findUnique({
    where: { id },
    include: {
      racaExigida: true,
      arquetipoExigido: true,
      pericias: { include: { pericia: true } },
      habilidades: { include: { habilidade: true } },
      conexoes: { include: { conexao: true } },
      itens: { include: { item: true } },
      escolhas: { include: { opcoes: { include: { pericia: true, habilidade: true, item: true } } } },
      magias: { include: { magia: true } },
    },
  });
  if (!carreira) {
    res.status(404).json({ erro: "Carreira não encontrada" });
    return;
  }
  res.json(carreira);
});

catalogoRouter.get("/itens", async (_req, res) => {
  const itens = await prisma.item.findMany({ include: { arma: true, armadura: true }, orderBy: { nome: "asc" } });
  res.json(itens);
});

catalogoRouter.get("/condicoes", async (_req, res) => {
  const condicoes = await prisma.condicao.findMany({ orderBy: { nome: "asc" } });
  res.json(condicoes);
});
