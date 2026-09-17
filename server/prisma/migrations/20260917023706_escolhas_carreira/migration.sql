-- AlterTable
ALTER TABLE "Carreira" ADD COLUMN "regrasExtra" TEXT;

-- AlterTable
ALTER TABLE "Pericia" ADD COLUMN "observacao" TEXT;

-- CreateTable
CREATE TABLE "CarreiraEscolha" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "carreiraId" INTEGER NOT NULL,
    "tipo" TEXT NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "descricao" TEXT,
    CONSTRAINT "CarreiraEscolha_carreiraId_fkey" FOREIGN KEY ("carreiraId") REFERENCES "Carreira" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "CarreiraEscolhaOpcao" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "escolhaId" INTEGER NOT NULL,
    "periciaId" INTEGER,
    "habilidadeId" INTEGER,
    "itemId" INTEGER,
    "nivel" INTEGER,
    "quantidade" INTEGER,
    CONSTRAINT "CarreiraEscolhaOpcao_escolhaId_fkey" FOREIGN KEY ("escolhaId") REFERENCES "CarreiraEscolha" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "CarreiraEscolhaOpcao_periciaId_fkey" FOREIGN KEY ("periciaId") REFERENCES "Pericia" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "CarreiraEscolhaOpcao_habilidadeId_fkey" FOREIGN KEY ("habilidadeId") REFERENCES "Habilidade" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "CarreiraEscolhaOpcao_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
