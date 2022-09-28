-- CreateTable
CREATE TABLE `Game` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `thumbnail` VARCHAR(800) NOT NULL,
    `short_description` VARCHAR(800) NOT NULL,
    `game_url` VARCHAR(800) NOT NULL,
    `genre` VARCHAR(800) NOT NULL,
    `platform` VARCHAR(800) NOT NULL,
    `publisher` VARCHAR(800) NOT NULL,
    `developer` VARCHAR(800) NOT NULL,
    `release_date` VARCHAR(191) NOT NULL,
    `freetogame_profile_url` VARCHAR(800) NOT NULL,

    UNIQUE INDEX `Game_title_key`(`title`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
