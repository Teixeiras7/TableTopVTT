import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../auth/AuthContext";

export function Login() {
  const { entrar, registrar } = useAuth();
  const navigate = useNavigate();
  const [modo, setModo] = useState<"entrar" | "registrar">("entrar");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState<string | null>(null);
  const [enviando, setEnviando] = useState(false);

  async function aoEnviar(e: FormEvent) {
    e.preventDefault();
    setErro(null);
    setEnviando(true);
    try {
      if (modo === "entrar") await entrar(email, senha);
      else await registrar(nome, email, senha);
      navigate("/");
    } catch (err) {
      setErro(err instanceof Error ? err.message : "Erro desconhecido");
    } finally {
      setEnviando(false);
    }
  }

  return (
    <main className="tela-centralizada">
      <form onSubmit={aoEnviar} className="cartao formulario">
        <h1>Reinos de Ferro</h1>
        <div className="abas">
          <button type="button" className={modo === "entrar" ? "ativo" : ""} onClick={() => setModo("entrar")}>
            Entrar
          </button>
          <button type="button" className={modo === "registrar" ? "ativo" : ""} onClick={() => setModo("registrar")}>
            Criar conta
          </button>
        </div>

        {modo === "registrar" && (
          <label>
            Nome
            <input value={nome} onChange={(e) => setNome(e.target.value)} required />
          </label>
        )}
        <label>
          E-mail
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>
          Senha
          <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} required minLength={6} />
        </label>

        {erro && <p className="erro">{erro}</p>}

        <button type="submit" disabled={enviando}>
          {modo === "entrar" ? "Entrar" : "Criar conta"}
        </button>
      </form>
    </main>
  );
}
