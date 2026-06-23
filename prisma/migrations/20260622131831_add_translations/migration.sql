-- CreateTable
CREATE TABLE `translations` (
    `lang_key` VARCHAR(10) NOT NULL,
    `text_key` VARCHAR(191) NOT NULL,
    `text` TEXT NOT NULL,

    PRIMARY KEY (`lang_key`, `text_key`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
