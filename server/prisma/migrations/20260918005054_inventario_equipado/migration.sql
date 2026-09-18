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
    CONSTRAINT "InventarioItem_personagemId_fkey" FOREIGN KEY ("personagemId") REFERENCES "Personagem" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "InventarioItem_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_InventarioItem" ("id", "itemId", "notasEstado", "personagemId", "quantidade") SELECT "id", "itemId", "notasEstado", "personagemId", "quantidade" FROM "InventarioItem";
DROP TABLE "InventarioItem";
ALTER TABLE "new_InventarioItem" RENAME TO "InventarioItem";
CREATE UNIQUE INDEX "InventarioItem_personagemId_itemId_key" ON "InventarioItem"("personagemId", "itemId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
