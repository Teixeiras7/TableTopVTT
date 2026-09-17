import { useEffect, useState } from "react";

export default function App() {
  const [status, setStatus] = useState<"carregando" | "ok" | "erro">("carregando");

  useEffect(() => {
    fetch("/api/health")
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then(() => setStatus("ok"))
      .catch(() => setStatus("erro"));
  }, []);

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Reinos de Ferro — VTT</h1>
      <p>API: {status}</p>
    </main>
  );
}
