import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import type { NextFunction, Request, Response } from "express";

const SEGREDO_JWT = process.env.JWT_SECRET ?? "dev-secret-troque-em-producao";

export function gerarHashSenha(senha: string): Promise<string> {
  return bcrypt.hash(senha, 10);
}

export function verificarSenha(senha: string, hash: string): Promise<boolean> {
  return bcrypt.compare(senha, hash);
}

export interface TokenPayload {
  usuarioId: number;
}

export function gerarToken(payload: TokenPayload): string {
  return jwt.sign(payload, SEGREDO_JWT, { expiresIn: "7d" });
}

export interface RequisicaoAutenticada extends Request {
  usuarioId?: number;
}

export function autenticar(req: RequisicaoAutenticada, res: Response, next: NextFunction): void {
  const header = req.headers.authorization;
  const token = header?.startsWith("Bearer ") ? header.slice(7) : undefined;
  if (!token) {
    res.status(401).json({ erro: "Não autenticado" });
    return;
  }
  try {
    const payload = jwt.verify(token, SEGREDO_JWT) as TokenPayload;
    req.usuarioId = payload.usuarioId;
    next();
  } catch {
    res.status(401).json({ erro: "Token inválido" });
  }
}
