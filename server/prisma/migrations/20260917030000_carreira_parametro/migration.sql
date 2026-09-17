-- Adiciona suporte a perícias/habilidades repetíveis parametrizadas
-- (ex.: "Conhecimento (Trolloide)", "Especialização (Alabarda)") nas
-- concessões e escolhas de carreira.

ALTER TABLE "CarreiraPericia" ADD COLUMN "subtipo" TEXT;
DROP INDEX "CarreiraPericia_carreiraId_periciaId_key";
CREATE UNIQUE INDEX "CarreiraPericia_carreiraId_periciaId_subtipo_key" ON "CarreiraPericia"("carreiraId", "periciaId", "subtipo");

ALTER TABLE "CarreiraHabilidade" ADD COLUMN "parametro" TEXT;
DROP INDEX "CarreiraHabilidade_carreiraId_habilidadeId_key";
CREATE UNIQUE INDEX "CarreiraHabilidade_carreiraId_habilidadeId_parametro_key" ON "CarreiraHabilidade"("carreiraId", "habilidadeId", "parametro");

ALTER TABLE "CarreiraEscolhaOpcao" ADD COLUMN "parametro" TEXT;
