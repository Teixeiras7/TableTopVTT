import { io, type Socket } from "socket.io-client";
import { getToken } from "./api";

let socket: Socket | null = null;

export function obterSocket(): Socket {
  if (!socket) {
    socket = io({ auth: { token: getToken() } });
  }
  return socket;
}

export function desconectarSocket(): void {
  socket?.disconnect();
  socket = null;
}
