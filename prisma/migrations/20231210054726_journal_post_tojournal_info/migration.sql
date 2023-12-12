-- AlterTable
ALTER TABLE `JournalPost` ADD COLUMN `journalInfoId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `JournalPost` ADD CONSTRAINT `JournalPost_journalInfoId_fkey` FOREIGN KEY (`journalInfoId`) REFERENCES `JournalInfo`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
