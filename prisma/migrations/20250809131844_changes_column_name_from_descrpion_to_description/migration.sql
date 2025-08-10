/*
  Warnings:

  - You are about to drop the column `descripion` on the `gyms` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."gyms" DROP COLUMN "descripion",
ADD COLUMN     "description" TEXT;
