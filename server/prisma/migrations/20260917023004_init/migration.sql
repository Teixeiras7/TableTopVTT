-- CreateTable
CREATE TABLE "Usuario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senhaHash" TEXT NOT NULL,
    "criadoEm" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Mesa" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "codigo" TEXT NOT NULL,
    "criadorId" INTEGER NOT NULL,
    "colunas" INTEGER NOT NULL DEFAULT 20,
    "linhas" INTEGER NOT NULL DEFAULT 15,
    "tamanhoCelula" INTEGER NOT NULL DEFAULT 48,
    "criadoEm" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Mesa_criadorId_fkey" FOREIGN KEY ("criadorId") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "MesaMembro" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "usuarioId" INTEGER NOT NULL,
    "mesaId" INTEGER NOT NULL,
    CONSTRAINT "MesaMembro_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "MesaMembro_mesaId_fkey" FOREIGN KEY ("mesaId") REFERENCES "Mesa" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Raca" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "atributos" JSONB NOT NULL,
    "idiomas" TEXT,
    "caracteristicas" TEXT
);

-- CreateTable
CREATE TABLE "Arquetipo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "passivaFixa" TEXT NOT NULL,
    "opcoesTexto" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Pericia" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "atributo" TEXT NOT NULL,
    "categoria" TEXT NOT NULL,
    "semTreinamento" BOOLEAN NOT NULL DEFAULT true,
    "repetivel" BOOLEAN NOT NULL DEFAULT false
);

-- CreateTable
CREATE TABLE "Habilidade" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "preRequisito" TEXT,
    "efeito" TEXT NOT NULL,
    "repetivel" BOOLEAN NOT NULL DEFAULT false,
    "parametroTipo" TEXT
);

-- CreateTable
CREATE TABLE "Conexao" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "beneficio" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Item" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "categoria" TEXT NOT NULL,
    "custo" INTEGER NOT NULL,
    "descricao" TEXT,
    "regrasEspeciais" TEXT
);

-- CreateTable
CREATE TABLE "Arma" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "itemId" INTEGER NOT NULL,
    "periciaId" INTEGER NOT NULL,
    "modificadorAtaque" INTEGER NOT NULL DEFAULT 0,
    "pod" INTEGER,
    "distancia" BOOLEAN NOT NULL DEFAULT false,
    "alcanceEfetivo" INTEGER,
    "alcanceExtremo" INTEGER,
    "ade" TEXT,
    "municaoCapacidade" INTEGER,
    "municaoTipo" TEXT,
    CONSTRAINT "Arma_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Arma_periciaId_fkey" FOREIGN KEY ("periciaId") REFERENCES "Pericia" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Armadura" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "itemId" INTEGER NOT NULL,
    "modVelocidade" INTEGER NOT NULL DEFAULT 0,
    "modDefesa" INTEGER NOT NULL DEFAULT 0,
    "modArmadura" INTEGER NOT NULL DEFAULT 0,
    CONSTRAINT "Armadura_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Magia" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "custo" INTEGER NOT NULL,
    "alcance" TEXT NOT NULL,
    "ade" TEXT,
    "pod" TEXT,
    "sustentavel" BOOLEAN NOT NULL DEFAULT false,
    "atributo" TEXT,
    "efeito" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Carreira" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "racaExigidaId" INTEGER,
    "arquetipoExigidoId" INTEGER,
    "apenasInicial" BOOLEAN NOT NULL DEFAULT false,
    "ouroInicial" INTEGER NOT NULL DEFAULT 0,
    CONSTRAINT "Carreira_racaExigidaId_fkey" FOREIGN KEY ("racaExigidaId") REFERENCES "Raca" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Carreira_arquetipoExigidoId_fkey" FOREIGN KEY ("arquetipoExigidoId") REFERENCES "Arquetipo" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "CarreiraPericia" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "carreiraId" INTEGER NOT NULL,
    "periciaId" INTEGER NOT NULL,
    "nivelConcedido" INTEGER,
    "nivelMaximo" INTEGER,
    CONSTRAINT "CarreiraPericia_carreiraId_fkey" FOREIGN KEY ("carreiraId") REFERENCES "Carreira" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "CarreiraPericia_periciaId_fkey" FOREIGN KEY ("periciaId") REFERENCES "Pericia" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "CarreiraHabilidade" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "carreiraId" INTEGER NOT NULL,
    "habilidadeId" INTEGER NOT NULL,
    "concedidaInicial" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "CarreiraHabilidade_carreiraId_fkey" FOREIGN KEY ("carreiraId") REFERENCES "Carreira" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "CarreiraHabilidade_habilidadeId_fkey" FOREIGN KEY ("habilidadeId") REFERENCES "Habilidade" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "CarreiraConexao" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "carreiraId" INTEGER NOT NULL,
    "conexaoId" INTEGER NOT NULL,
    CONSTRAINT "CarreiraConexao_carreiraId_fkey" FOREIGN KEY ("carreiraId") REFERENCES "Carreira" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "CarreiraConexao_conexaoId_fkey" FOREIGN KEY ("conexaoId") REFERENCES "Conexao" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "CarreiraItemInicial" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "carreiraId" INTEGER NOT NULL,
    "itemId" INTEGER NOT NULL,
    "quantidade" INTEGER NOT NULL DEFAULT 1,
    CONSTRAINT "CarreiraItemInicial_carreiraId_fkey" FOREIGN KEY ("carreiraId") REFERENCES "Carreira" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "CarreiraItemInicial_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "CarreiraMagia" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "carreiraId" INTEGER NOT NULL,
    "magiaId" INTEGER NOT NULL,
    CONSTRAINT "CarreiraMagia_carreiraId_fkey" FOREIGN KEY ("carreiraId") REFERENCES "Carreira" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "CarreiraMagia_magiaId_fkey" FOREIGN KEY ("magiaId") REFERENCES "Magia" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Personagem" (
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
    CONSTRAINT "Personagem_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Personagem_mesaId_fkey" FOREIGN KEY ("mesaId") REFERENCES "Mesa" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Personagem_racaId_fkey" FOREIGN KEY ("racaId") REFERENCES "Raca" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Personagem_arquetipoId_fkey" FOREIGN KEY ("arquetipoId") REFERENCES "Arquetipo" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "PersonagemCarreira" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "personagemId" INTEGER NOT NULL,
    "carreiraId" INTEGER NOT NULL,
    "ordem" INTEGER NOT NULL,
    CONSTRAINT "PersonagemCarreira_personagemId_fkey" FOREIGN KEY ("personagemId") REFERENCES "Personagem" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "PersonagemCarreira_carreiraId_fkey" FOREIGN KEY ("carreiraId") REFERENCES "Carreira" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "PersonagemPericia" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "personagemId" INTEGER NOT NULL,
    "periciaId" INTEGER NOT NULL,
    "nivel" INTEGER NOT NULL DEFAULT 1,
    "subtipo" TEXT,
    CONSTRAINT "PersonagemPericia_personagemId_fkey" FOREIGN KEY ("personagemId") REFERENCES "Personagem" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "PersonagemPericia_periciaId_fkey" FOREIGN KEY ("periciaId") REFERENCES "Pericia" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "PersonagemHabilidade" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "personagemId" INTEGER NOT NULL,
    "habilidadeId" INTEGER NOT NULL,
    "parametro" TEXT,
    CONSTRAINT "PersonagemHabilidade_personagemId_fkey" FOREIGN KEY ("personagemId") REFERENCES "Personagem" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "PersonagemHabilidade_habilidadeId_fkey" FOREIGN KEY ("habilidadeId") REFERENCES "Habilidade" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "PersonagemConexao" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "personagemId" INTEGER NOT NULL,
    "conexaoId" INTEGER NOT NULL,
    CONSTRAINT "PersonagemConexao_personagemId_fkey" FOREIGN KEY ("personagemId") REFERENCES "Personagem" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "PersonagemConexao_conexaoId_fkey" FOREIGN KEY ("conexaoId") REFERENCES "Conexao" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "PersonagemMagia" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "personagemId" INTEGER NOT NULL,
    "magiaId" INTEGER NOT NULL,
    CONSTRAINT "PersonagemMagia_personagemId_fkey" FOREIGN KEY ("personagemId") REFERENCES "Personagem" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "PersonagemMagia_magiaId_fkey" FOREIGN KEY ("magiaId") REFERENCES "Magia" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "InventarioItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "personagemId" INTEGER NOT NULL,
    "itemId" INTEGER NOT NULL,
    "quantidade" INTEGER NOT NULL DEFAULT 1,
    "notasEstado" TEXT,
    CONSTRAINT "InventarioItem_personagemId_fkey" FOREIGN KEY ("personagemId") REFERENCES "Personagem" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "InventarioItem_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_ArquetipoToRaca" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_ArquetipoToRaca_A_fkey" FOREIGN KEY ("A") REFERENCES "Arquetipo" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_ArquetipoToRaca_B_fkey" FOREIGN KEY ("B") REFERENCES "Raca" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Mesa_codigo_key" ON "Mesa"("codigo");

-- CreateIndex
CREATE UNIQUE INDEX "MesaMembro_usuarioId_mesaId_key" ON "MesaMembro"("usuarioId", "mesaId");

-- CreateIndex
CREATE UNIQUE INDEX "Raca_nome_key" ON "Raca"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "Arquetipo_nome_key" ON "Arquetipo"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "Pericia_nome_key" ON "Pericia"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "Habilidade_nome_key" ON "Habilidade"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "Conexao_nome_key" ON "Conexao"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "Item_nome_key" ON "Item"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "Arma_itemId_key" ON "Arma"("itemId");

-- CreateIndex
CREATE UNIQUE INDEX "Armadura_itemId_key" ON "Armadura"("itemId");

-- CreateIndex
CREATE UNIQUE INDEX "Magia_nome_key" ON "Magia"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "Carreira_nome_key" ON "Carreira"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "CarreiraPericia_carreiraId_periciaId_key" ON "CarreiraPericia"("carreiraId", "periciaId");

-- CreateIndex
CREATE UNIQUE INDEX "CarreiraHabilidade_carreiraId_habilidadeId_key" ON "CarreiraHabilidade"("carreiraId", "habilidadeId");

-- CreateIndex
CREATE UNIQUE INDEX "CarreiraConexao_carreiraId_conexaoId_key" ON "CarreiraConexao"("carreiraId", "conexaoId");

-- CreateIndex
CREATE UNIQUE INDEX "CarreiraItemInicial_carreiraId_itemId_key" ON "CarreiraItemInicial"("carreiraId", "itemId");

-- CreateIndex
CREATE UNIQUE INDEX "CarreiraMagia_carreiraId_magiaId_key" ON "CarreiraMagia"("carreiraId", "magiaId");

-- CreateIndex
CREATE UNIQUE INDEX "PersonagemCarreira_personagemId_carreiraId_key" ON "PersonagemCarreira"("personagemId", "carreiraId");

-- CreateIndex
CREATE UNIQUE INDEX "PersonagemPericia_personagemId_periciaId_subtipo_key" ON "PersonagemPericia"("personagemId", "periciaId", "subtipo");

-- CreateIndex
CREATE UNIQUE INDEX "PersonagemHabilidade_personagemId_habilidadeId_parametro_key" ON "PersonagemHabilidade"("personagemId", "habilidadeId", "parametro");

-- CreateIndex
CREATE UNIQUE INDEX "PersonagemConexao_personagemId_conexaoId_key" ON "PersonagemConexao"("personagemId", "conexaoId");

-- CreateIndex
CREATE UNIQUE INDEX "PersonagemMagia_personagemId_magiaId_key" ON "PersonagemMagia"("personagemId", "magiaId");

-- CreateIndex
CREATE UNIQUE INDEX "InventarioItem_personagemId_itemId_key" ON "InventarioItem"("personagemId", "itemId");

-- CreateIndex
CREATE UNIQUE INDEX "_ArquetipoToRaca_AB_unique" ON "_ArquetipoToRaca"("A", "B");

-- CreateIndex
CREATE INDEX "_ArquetipoToRaca_B_index" ON "_ArquetipoToRaca"("B");
