import { Router } from "express";
import { prisma } from "../db.js";
import { autenticar, type RequisicaoAutenticada } from "../auth.js";

export const mesasRouter = Router();
mesasRouter.use(autenticar);

function gerarCodigo(): string {
  return Math.random().toString(36).slice(2, 8).toUpperCase();
}

mesasRouter.get("/", async (req: RequisicaoAutenticada, res) => {
  const mesas = await prisma.mesa.findMany({ where: { membros: { some: { usuarioId: req.usuarioId! } } } });
  res.json(mesas);
});

mesasRouter.post("/", async (req: RequisicaoAutenticada, res) => {
  const { nome } = req.body ?? {};
  if (!nome) {
    res.status(400).json({ erro: "nome é obrigatório" });
    return;
  }

  const mesa = await prisma.mesa.create({
    data: {
      nome,
      codigo: gerarCodigo(),
      criadorId: req.usuarioId!,
      membros: { create: { usuarioId: req.usuarioId! } },
    },
  });
  res.status(201).json(mesa);
});

mesasRouter.post("/entrar", async (req: RequisicaoAutenticada, res) => {
  const { codigo } = req.body ?? {};
  if (!codigo) {
    res.status(400).json({ erro: "codigo é obrigatório" });
    return;
  }

  const mesa = await prisma.mesa.findUnique({ where: { codigo } });
  if (!mesa) {
    res.status(404).json({ erro: "Mesa não encontrada" });
    return;
  }

  await prisma.mesaMembro.upsert({
    where: { usuarioId_mesaId: { usuarioId: req.usuarioId!, mesaId: mesa.id } },
    create: { usuarioId: req.usuarioId!, mesaId: mesa.id },
    update: {},
  });
  res.json(mesa);
});
