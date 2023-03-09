-- CreateTable
CREATE TABLE `Post` (
    `id` VARCHAR(191) NOT NULL,
    `date` VARCHAR(191) NOT NULL,
    `code` VARCHAR(191) NOT NULL,
    `view` VARCHAR(191) NOT NULL,
    `categoty` VARCHAR(191) NOT NULL,
    `label` VARCHAR(191) NOT NULL,
    `sentiment` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
