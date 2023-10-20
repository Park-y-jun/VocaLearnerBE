/*
  Warnings:

  - The primary key for the `LoggedOutToken` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE `LoggedOutToken` DROP PRIMARY KEY,
    MODIFY `token` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`token`);
