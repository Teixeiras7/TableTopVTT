import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { api, getToken, setToken } from "../api";
import { desconectarSocket } from "../socket";

interface Usuario {
  id: number;
  nome: string;
  email: string;
}

interface EstadoAuth {
  usuario: Usuario | null;
  carregando: boolean;
  entrar: (email: string, senha: string) => Promise<void>;
  registrar: (nome: string, email: string, senha: string) => Promise<void>;
  sair: () => void;
}

const AuthContext = createContext<EstadoAuth | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    if (!getToken()) {
      setCarregando(false);
      return;
    }
    api<Usuario>("/auth/eu")
      .then(setUsuario)
      .catch(() => setToken(null))
      .finally(() => setCarregando(false));
  }, []);

  async function entrar(email: string, senha: string) {
    const resposta = await api<{ token: string; usuario: Usuario }>("/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, senha }),
    });
    setToken(resposta.token);
    setUsuario(resposta.usuario);
  }

  async function registrar(nome: string, email: string, senha: string) {
    const resposta = await api<{ token: string; usuario: Usuario }>("/auth/registrar", {
      method: "POST",
      body: JSON.stringify({ nome, email, senha }),
    });
    setToken(resposta.token);
    setUsuario(resposta.usuario);
  }

  function sair() {
    setToken(null);
    setUsuario(null);
    desconectarSocket();
  }

  return <AuthContext.Provider value={{ usuario, carregando, entrar, registrar, sair }}>{children}</AuthContext.Provider>;
}

export function useAuth(): EstadoAuth {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth deve ser usado dentro de <AuthProvider>");
  return ctx;
}
