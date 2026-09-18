import express from "express";
import http from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { prisma } from "./db.js";
import { authRouter } from "./routes/auth.js";
import { mesasRouter } from "./routes/mesas.js";
import { catalogoRouter } from "./routes/catalogo.js";
import { personagensRouter } from "./routes/personagens.js";
import { combatesRouter } from "./routes/combates.js";
import { tabuleiroRouter } from "./routes/tabuleiro.js";
import { criarSocketIO } from "./socket.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

app.use(express.json());

app.get("/api/health", async (_req, res) => {
  const racas = await prisma.raca.count();
  res.json({ status: "ok", db: "ok", racas });
});

app.use("/api/auth", authRouter);
app.use("/api/mesas", mesasRouter);
app.use("/api/catalogo", catalogoRouter);
app.use("/api/personagens", personagensRouter);
app.use("/api/combates", combatesRouter);
app.use("/api/tabuleiro", tabuleiroRouter);

// Em produção, um único processo serve a API e o build do frontend.
if (process.env.NODE_ENV === "production") {
  const webDist = path.join(__dirname, "../../web/dist");
  app.use(express.static(webDist));
  app.get("*", (_req, res) => {
    res.sendFile(path.join(webDist, "index.html"));
  });
}

const servidorHttp = http.createServer(app);
criarSocketIO(servidorHttp);

const port = process.env.PORT ?? 3000;
servidorHttp.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
