import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import type { ReactNode } from "react";
import { AuthProvider, useAuth } from "./auth/AuthContext";
import { Login } from "./pages/Login";
import { Mesas } from "./pages/Mesas";
import { Personagens } from "./pages/Personagens";
import { CriarPersonagem } from "./pages/CriarPersonagem";
import { Ficha } from "./pages/Ficha";

const queryClient = new QueryClient();

function RotaPrivada({ children }: { children: ReactNode }) {
  const { usuario, carregando } = useAuth();
  if (carregando) return <p className="tela-centralizada">Carregando...</p>;
  if (!usuario) return <Navigate to="/login" replace />;
  return <>{children}</>;
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/"
              element={
                <RotaPrivada>
                  <Mesas />
                </RotaPrivada>
              }
            />
            <Route
              path="/mesas/:mesaId/personagens"
              element={
                <RotaPrivada>
                  <Personagens />
                </RotaPrivada>
              }
            />
            <Route
              path="/mesas/:mesaId/personagens/novo"
              element={
                <RotaPrivada>
                  <CriarPersonagem />
                </RotaPrivada>
              }
            />
            <Route
              path="/mesas/:mesaId/personagens/:personagemId"
              element={
                <RotaPrivada>
                  <Ficha />
                </RotaPrivada>
              }
            />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </QueryClientProvider>
  );
}
