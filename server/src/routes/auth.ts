import { Router } from "express";
import { prisma } from "../db.js";
import { autenticar, gerarHashSenha, gerarToken, verificarSenha, type RequisicaoAutenticada } from "../auth.js";

export const authRouter = Router();

// Restaura a sessão a partir do token guardado no navegador (ex.: após recarregar a página).
authRouter.get("/eu", autenticar, async (req: RequisicaoAutenticada, res) => {
  const usuario = await prisma.usuario.findUnique({ where: { id: req.usuarioId! } });
  if (!usuario) {
    res.status(404).json({ erro: "Usuário não encontrado" });
    return;
  }
  res.json({ id: usuario.id, nome: usuario.nome, email: usuario.email });
});

authRouter.post("/registrar", async (req, res) => {
  const { nome, email, senha } = req.body ?? {};
  if (!nome || !email || !senha) {
    res.status(400).json({ erro: "nome, email e senha são obrigatórios" });
    return;
  }

  const existente = await prisma.usuario.findUnique({ where: { email } });
  if (existente) {
    res.status(409).json({ erro: "E-mail já cadastrado" });
    return;
  }

  const senhaHash = await gerarHashSenha(senha);
  const usuario = await prisma.usuario.create({ data: { nome, email, senhaHash } });
  const token = gerarToken({ usuarioId: usuario.id });
  res.status(201).json({ token, usuario: { id: usuario.id, nome: usuario.nome, email: usuario.email } });
});

authRouter.post("/login", async (req, res) => {
  const { email, senha } = req.body ?? {};
  if (!email || !senha) {
    res.status(400).json({ erro: "email e senha são obrigatórios" });
    return;
  }

  const usuario = await prisma.usuario.findUnique({ where: { email } });
  if (!usuario || !(await verificarSenha(senha, usuario.senhaHash))) {
    res.status(401).json({ erro: "Credenciais inválidas" });
    return;
  }

  const token = gerarToken({ usuarioId: usuario.id });
  res.json({ token, usuario: { id: usuario.id, nome: usuario.nome, email: usuario.email } });
});
