-- CreateTable
CREATE TABLE "Condicao" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "efeito" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "CombateEncontro" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "mesaId" INTEGER NOT NULL,
    "rodada" INTEGER NOT NULL DEFAULT 1,
    "fase" TEXT NOT NULL DEFAULT 'ativacao',
    "turnoAtual" INTEGER NOT NULL DEFAULT 0,
    "encerrado" BOOLEAN NOT NULL DEFAULT false,
    "criadoEm" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "CombateEncontro_mesaId_fkey" FOREIGN KEY ("mesaId") REFERENCES "Mesa" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "CombateParticipante" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "encontroId" INTEGER NOT NULL,
    "personagemId" INTEGER,
    "nomeAdHoc" TEXT,
    "defAdHoc" INTEGER,
    "armAdHoc" INTEGER,
    "bonusAtaqueAdHoc" INTEGER,
    "podAdHoc" INTEGER,
    "vidaMaxAdHoc" INTEGER,
    "vidaAtualAdHoc" INTEGER,
    "bonusIniciativa" INTEGER NOT NULL,
    "rolagemIniciativa" INTEGER,
    "ordem" INTEGER,
    "ativouNaRodada" BOOLEAN NOT NULL DEFAULT false,
    "adiado" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "CombateParticipante_encontroId_fkey" FOREIGN KEY ("encontroId") REFERENCES "CombateEncontro" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "CombateParticipante_personagemId_fkey" FOREIGN KEY ("personagemId") REFERENCES "Personagem" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "CombateCondicaoAtiva" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "participanteId" INTEGER NOT NULL,
    "condicaoId" INTEGER NOT NULL,
    "origem" TEXT,
    "rodadasRestantes" INTEGER,
    CONSTRAINT "CombateCondicaoAtiva_participanteId_fkey" FOREIGN KEY ("participanteId") REFERENCES "CombateParticipante" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "CombateCondicaoAtiva_condicaoId_fkey" FOREIGN KEY ("condicaoId") REFERENCES "Condicao" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Condicao_nome_key" ON "Condicao"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "CombateCondicaoAtiva_participanteId_condicaoId_key" ON "CombateCondicaoAtiva"("participanteId", "condicaoId");
