// Tempo real: sala por mesa. REST cuida de criar/listar (persistência e
// carga inicial); o socket só sincroniza mudanças ao vivo entre quem já
// está com a tela aberta — token movido e mensagem de chat.

import type { Server as HttpServer } from "node:http";
import { Server as SocketIOServer } from "socket.io";
import jwt from "jsonwebtoken";
import { prisma } from "./db.js";

const SEGREDO_JWT = process.env.JWT_SECRET ?? "dev-secret-troque-em-producao";

interface DadosSocket {
  usuarioId: number;
}

async function ehMembroDaMesa(usuarioId: number, mesaId: number): Promise<boolean> {
  const membro = await prisma.mesaMembro.findUnique({ where: { usuarioId_mesaId: { usuarioId, mesaId } } });
  return !!membro;
}

export function criarSocketIO(httpServer: HttpServer): SocketIOServer {
  const io = new SocketIOServer(httpServer);

  io.use((socket, next) => {
    const token = socket.handshake.auth?.token as string | undefined;
    if (!token) {
      next(new Error("Não autenticado"));
      return;
    }
    try {
      const payload = jwt.verify(token, SEGREDO_JWT) as { usuarioId: number };
      (socket.data as DadosSocket).usuarioId = payload.usuarioId;
      next();
    } catch {
      next(new Error("Token inválido"));
    }
  });

  io.on("connection", (socket) => {
    const usuarioId = (socket.data as DadosSocket).usuarioId;

    socket.on("mesa:entrar", async (mesaId: number, callback?: (r: { ok?: true; erro?: string }) => void) => {
      if (!(await ehMembroDaMesa(usuarioId, mesaId))) {
        callback?.({ erro: "Você não é membro dessa mesa" });
        return;
      }
      await socket.join(`mesa:${mesaId}`);
      callback?.({ ok: true });
    });

    socket.on("token:mover", async ({ tokenId, x, y }: { tokenId: number; x: number; y: number }) => {
      const token = await prisma.token.findUnique({ where: { id: tokenId } });
      if (!token || !(await ehMembroDaMesa(usuarioId, token.mesaId))) return;
      await prisma.token.update({ where: { id: tokenId }, data: { x, y } });
      io.to(`mesa:${token.mesaId}`).emit("token:movido", { tokenId, x, y });
    });

    socket.on("chat:enviar", async ({ mesaId, texto }: { mesaId: number; texto: string }) => {
      if (!texto?.trim() || !(await ehMembroDaMesa(usuarioId, mesaId))) return;
      const usuario = await prisma.usuario.findUnique({ where: { id: usuarioId } });
      if (!usuario) return;
      const mensagem = await prisma.mensagemChat.create({ data: { mesaId, usuarioId, texto: texto.trim() } });
      io.to(`mesa:${mesaId}`).emit("chat:nova", {
        id: mensagem.id,
        texto: mensagem.texto,
        criadoEm: mensagem.criadoEm,
        usuario: { id: usuario.id, nome: usuario.nome },
      });
    });
  });

  return io;
}
