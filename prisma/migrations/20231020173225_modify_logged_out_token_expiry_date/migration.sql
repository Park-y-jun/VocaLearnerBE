/*
  Warnings:

  - Added the required column `expiryDate` to the `LoggedOutToken` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `LoggedOutToken` ADD COLUMN `expiryDate` DATETIME(3) NOT NULL;
