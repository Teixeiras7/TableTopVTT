import { Router } from "express";
import { prisma } from "../db.js";
import { autenticar, type RequisicaoAutenticada } from "../auth.js";

export const tabuleiroRouter = Router();
tabuleiroRouter.use(autenticar);

async function verificarMembroMesa(usuarioId: number, mesaId: number) {
  return prisma.mesaMembro.findUnique({ where: { usuarioId_mesaId: { usuarioId, mesaId } } });
}

tabuleiroRouter.get("/tokens", async (req: RequisicaoAutenticada, res) => {
  const mesaId = Number(req.query.mesaId);
  if (!mesaId) {
    res.status(400).json({ erro: "mesaId é obrigatório" });
    return;
  }
  if (!(await verificarMembroMesa(req.usuarioId!, mesaId))) {
    res.status(403).json({ erro: "Você não é membro dessa mesa" });
    return;
  }
  const tokens = await prisma.token.findMany({ where: { mesaId }, include: { personagem: { select: { nome: true } } } });
  res.json(tokens);
});

tabuleiroRouter.post("/tokens", async (req: RequisicaoAutenticada, res) => {
  const { mesaId, personagemId, nome, cor, x, y } = req.body ?? {};
  if (!mesaId) {
    res.status(400).json({ erro: "mesaId é obrigatório" });
    return;
  }
  if (!(await verificarMembroMesa(req.usuarioId!, mesaId))) {
    res.status(403).json({ erro: "Você não é membro dessa mesa" });
    return;
  }
  const token = await prisma.token.create({
    data: { mesaId, personagemId: personagemId ?? undefined, nome, cor, x: x ?? 0, y: y ?? 0 },
  });
  res.status(201).json(token);
});

tabuleiroRouter.delete("/tokens/:id", async (req: RequisicaoAutenticada, res) => {
  const token = await prisma.token.findUnique({ where: { id: Number(req.params.id) } });
  if (!token || !(await verificarMembroMesa(req.usuarioId!, token.mesaId))) {
    res.status(404).json({ erro: "Token não encontrado" });
    return;
  }
  await prisma.token.delete({ where: { id: token.id } });
  res.status(204).end();
});

tabuleiroRouter.get("/chat", async (req: RequisicaoAutenticada, res) => {
  const mesaId = Number(req.query.mesaId);
  if (!mesaId) {
    res.status(400).json({ erro: "mesaId é obrigatório" });
    return;
  }
  if (!(await verificarMembroMesa(req.usuarioId!, mesaId))) {
    res.status(403).json({ erro: "Você não é membro dessa mesa" });
    return;
  }
  const mensagens = await prisma.mensagemChat.findMany({
    where: { mesaId },
    orderBy: { criadoEm: "asc" },
    include: { usuario: { select: { id: true, nome: true } } },
  });
  res.json(mensagens);
});
