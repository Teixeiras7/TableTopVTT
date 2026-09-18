-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_InventarioItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "personagemId" INTEGER NOT NULL,
    "itemId" INTEGER NOT NULL,
    "quantidade" INTEGER NOT NULL DEFAULT 1,
    "equipado" BOOLEAN NOT NULL DEFAULT false,
    "notasEstado" TEXT,
    CONSTRAINT "InventarioItem_personagemId_fkey" FOREIGN KEY ("personagemId") REFERENCES "Personagem" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "InventarioItem_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_InventarioItem" ("equipado", "id", "itemId", "notasEstado", "personagemId", "quantidade") SELECT "equipado", "id", "itemId", "notasEstado", "personagemId", "quantidade" FROM "InventarioItem";
DROP TABLE "InventarioItem";
ALTER TABLE "new_InventarioItem" RENAME TO "InventarioItem";
CREATE UNIQUE INDEX "InventarioItem_personagemId_itemId_key" ON "InventarioItem"("personagemId", "itemId");
CREATE TABLE "new_Mesa" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "codigo" TEXT NOT NULL,
    "criadorId" INTEGER NOT NULL,
    "colunas" INTEGER NOT NULL DEFAULT 20,
    "linhas" INTEGER NOT NULL DEFAULT 15,
    "tamanhoCelula" INTEGER NOT NULL DEFAULT 48,
    "criadoEm" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Mesa_criadorId_fkey" FOREIGN KEY ("criadorId") REFERENCES "Usuario" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Mesa" ("codigo", "colunas", "criadoEm", "criadorId", "id", "linhas", "nome", "tamanhoCelula") SELECT "codigo", "colunas", "criadoEm", "criadorId", "id", "linhas", "nome", "tamanhoCelula" FROM "Mesa";
DROP TABLE "Mesa";
ALTER TABLE "new_Mesa" RENAME TO "Mesa";
CREATE UNIQUE INDEX "Mesa_codigo_key" ON "Mesa"("codigo");
CREATE TABLE "new_MesaMembro" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "usuarioId" INTEGER NOT NULL,
    "mesaId" INTEGER NOT NULL,
    CONSTRAINT "MesaMembro_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "MesaMembro_mesaId_fkey" FOREIGN KEY ("mesaId") REFERENCES "Mesa" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_MesaMembro" ("id", "mesaId", "usuarioId") SELECT "id", "mesaId", "usuarioId" FROM "MesaMembro";
DROP TABLE "MesaMembro";
ALTER TABLE "new_MesaMembro" RENAME TO "MesaMembro";
CREATE UNIQUE INDEX "MesaMembro_usuarioId_mesaId_key" ON "MesaMembro"("usuarioId", "mesaId");
CREATE TABLE "new_Personagem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "imagem" TEXT,
    "descricao" TEXT,
    "usuarioId" INTEGER NOT NULL,
    "mesaId" INTEGER NOT NULL,
    "racaId" INTEGER NOT NULL,
    "arquetipoId" INTEGER NOT NULL,
    "nivel" TEXT NOT NULL DEFAULT 'heroi',
    "experiencia" INTEGER NOT NULL DEFAULT 0,
    "pontosFacanha" INTEGER NOT NULL DEFAULT 3,
    "fis" INTEGER NOT NULL,
    "agi" INTEGER NOT NULL,
    "int" INTEGER NOT NULL,
    "vel" INTEGER NOT NULL,
    "for" INTEGER NOT NULL,
    "des" INTEGER NOT NULL,
    "mae" INTEGER NOT NULL,
    "per" INTEGER NOT NULL,
    "arc" INTEGER NOT NULL DEFAULT 0,
    "fadigaAtual" INTEGER NOT NULL DEFAULT 0,
    "focoAtual" INTEGER NOT NULL DEFAULT 0,
    "espiralVital" JSONB NOT NULL,
    "criadoEm" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Personagem_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Personagem_mesaId_fkey" FOREIGN KEY ("mesaId") REFERENCES "Mesa" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Personagem_racaId_fkey" FOREIGN KEY ("racaId") REFERENCES "Raca" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Personagem_arquetipoId_fkey" FOREIGN KEY ("arquetipoId") REFERENCES "Arquetipo" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Personagem" ("agi", "arc", "arquetipoId", "criadoEm", "des", "descricao", "espiralVital", "experiencia", "fadigaAtual", "fis", "focoAtual", "for", "id", "imagem", "int", "mae", "mesaId", "nivel", "nome", "per", "pontosFacanha", "racaId", "usuarioId", "vel") SELECT "agi", "arc", "arquetipoId", "criadoEm", "des", "descricao", "espiralVital", "experiencia", "fadigaAtual", "fis", "focoAtual", "for", "id", "imagem", "int", "mae", "mesaId", "nivel", "nome", "per", "pontosFacanha", "racaId", "usuarioId", "vel" FROM "Personagem";
DROP TABLE "Personagem";
ALTER TABLE "new_Personagem" RENAME TO "Personagem";
CREATE TABLE "new_PersonagemCarreira" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "personagemId" INTEGER NOT NULL,
    "carreiraId" INTEGER NOT NULL,
    "ordem" INTEGER NOT NULL,
    CONSTRAINT "PersonagemCarreira_personagemId_fkey" FOREIGN KEY ("personagemId") REFERENCES "Personagem" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "PersonagemCarreira_carreiraId_fkey" FOREIGN KEY ("carreiraId") REFERENCES "Carreira" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_PersonagemCarreira" ("carreiraId", "id", "ordem", "personagemId") SELECT "carreiraId", "id", "ordem", "personagemId" FROM "PersonagemCarreira";
DROP TABLE "PersonagemCarreira";
ALTER TABLE "new_PersonagemCarreira" RENAME TO "PersonagemCarreira";
CREATE UNIQUE INDEX "PersonagemCarreira_personagemId_carreiraId_key" ON "PersonagemCarreira"("personagemId", "carreiraId");
CREATE TABLE "new_PersonagemConexao" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "personagemId" INTEGER NOT NULL,
    "conexaoId" INTEGER NOT NULL,
    CONSTRAINT "PersonagemConexao_personagemId_fkey" FOREIGN KEY ("personagemId") REFERENCES "Personagem" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "PersonagemConexao_conexaoId_fkey" FOREIGN KEY ("conexaoId") REFERENCES "Conexao" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_PersonagemConexao" ("conexaoId", "id", "personagemId") SELECT "conexaoId", "id", "personagemId" FROM "PersonagemConexao";
DROP TABLE "PersonagemConexao";
ALTER TABLE "new_PersonagemConexao" RENAME TO "PersonagemConexao";
CREATE UNIQUE INDEX "PersonagemConexao_personagemId_conexaoId_key" ON "PersonagemConexao"("personagemId", "conexaoId");
CREATE TABLE "new_PersonagemHabilidade" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "personagemId" INTEGER NOT NULL,
    "habilidadeId" INTEGER NOT NULL,
    "parametro" TEXT,
    CONSTRAINT "PersonagemHabilidade_personagemId_fkey" FOREIGN KEY ("personagemId") REFERENCES "Personagem" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "PersonagemHabilidade_habilidadeId_fkey" FOREIGN KEY ("habilidadeId") REFERENCES "Habilidade" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_PersonagemHabilidade" ("habilidadeId", "id", "parametro", "personagemId") SELECT "habilidadeId", "id", "parametro", "personagemId" FROM "PersonagemHabilidade";
DROP TABLE "PersonagemHabilidade";
ALTER TABLE "new_PersonagemHabilidade" RENAME TO "PersonagemHabilidade";
CREATE UNIQUE INDEX "PersonagemHabilidade_personagemId_habilidadeId_parametro_key" ON "PersonagemHabilidade"("personagemId", "habilidadeId", "parametro");
CREATE TABLE "new_PersonagemMagia" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "personagemId" INTEGER NOT NULL,
    "magiaId" INTEGER NOT NULL,
    CONSTRAINT "PersonagemMagia_personagemId_fkey" FOREIGN KEY ("personagemId") REFERENCES "Personagem" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "PersonagemMagia_magiaId_fkey" FOREIGN KEY ("magiaId") REFERENCES "Magia" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_PersonagemMagia" ("id", "magiaId", "personagemId") SELECT "id", "magiaId", "personagemId" FROM "PersonagemMagia";
DROP TABLE "PersonagemMagia";
ALTER TABLE "new_PersonagemMagia" RENAME TO "PersonagemMagia";
CREATE UNIQUE INDEX "PersonagemMagia_personagemId_magiaId_key" ON "PersonagemMagia"("personagemId", "magiaId");
CREATE TABLE "new_PersonagemPericia" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "personagemId" INTEGER NOT NULL,
    "periciaId" INTEGER NOT NULL,
    "nivel" INTEGER NOT NULL DEFAULT 1,
    "subtipo" TEXT,
    CONSTRAINT "PersonagemPericia_personagemId_fkey" FOREIGN KEY ("personagemId") REFERENCES "Personagem" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "PersonagemPericia_periciaId_fkey" FOREIGN KEY ("periciaId") REFERENCES "Pericia" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_PersonagemPericia" ("id", "nivel", "periciaId", "personagemId", "subtipo") SELECT "id", "nivel", "periciaId", "personagemId", "subtipo" FROM "PersonagemPericia";
DROP TABLE "PersonagemPericia";
ALTER TABLE "new_PersonagemPericia" RENAME TO "PersonagemPericia";
CREATE UNIQUE INDEX "PersonagemPericia_personagemId_periciaId_subtipo_key" ON "PersonagemPericia"("personagemId", "periciaId", "subtipo");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
