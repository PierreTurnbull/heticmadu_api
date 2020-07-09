import {MigrationInterface, QueryRunner} from "typeorm";

export class heticmaduProd1594308888098 implements MigrationInterface {
    name = 'heticmaduProd1594308888098'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `sub_challenge` (`id` int NOT NULL AUTO_INCREMENT, `title` varchar(255) NOT NULL, `description` text NOT NULL, `challengeId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `challenge` (`id` int NOT NULL AUTO_INCREMENT, `title` varchar(255) NOT NULL, `themeId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `user_has_challenges` (`userId` int NOT NULL, `challengeId` int NOT NULL, INDEX `IDX_f452eaaf94bbc46f8789584296` (`userId`), INDEX `IDX_bf298f58d0c69c1b4c3e28cdab` (`challengeId`), PRIMARY KEY (`userId`, `challengeId`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `user` ADD `firstName` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `user` ADD `lastName` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `user` ADD `picture` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `user` ADD `currentChallengeId` int NULL");
        await queryRunner.query("ALTER TABLE `user` ADD UNIQUE INDEX `IDX_3b07a7b26fe1d7f7a70a237d2f` (`currentChallengeId`)");
        await queryRunner.query("ALTER TABLE `theme` DROP COLUMN `description`");
        await queryRunner.query("ALTER TABLE `theme` ADD `description` text NOT NULL");
        await queryRunner.query("ALTER TABLE `point_of_interest` CHANGE `longitude` `longitude` float NOT NULL");
        await queryRunner.query("ALTER TABLE `point_of_interest` CHANGE `latitude` `latitude` float NOT NULL");
        await queryRunner.query("CREATE UNIQUE INDEX `REL_3b07a7b26fe1d7f7a70a237d2f` ON `user` (`currentChallengeId`)");
        await queryRunner.query("ALTER TABLE `sub_challenge` ADD CONSTRAINT `FK_86f657223ece14ad9bcacdc28e5` FOREIGN KEY (`challengeId`) REFERENCES `challenge`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `challenge` ADD CONSTRAINT `FK_323da9fd837f6ed38a5ea240bee` FOREIGN KEY (`themeId`) REFERENCES `theme`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `user` ADD CONSTRAINT `FK_3b07a7b26fe1d7f7a70a237d2f1` FOREIGN KEY (`currentChallengeId`) REFERENCES `challenge`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `user_has_challenges` ADD CONSTRAINT `FK_f452eaaf94bbc46f8789584296b` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `user_has_challenges` ADD CONSTRAINT `FK_bf298f58d0c69c1b4c3e28cdabd` FOREIGN KEY (`challengeId`) REFERENCES `challenge`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user_has_challenges` DROP FOREIGN KEY `FK_bf298f58d0c69c1b4c3e28cdabd`");
        await queryRunner.query("ALTER TABLE `user_has_challenges` DROP FOREIGN KEY `FK_f452eaaf94bbc46f8789584296b`");
        await queryRunner.query("ALTER TABLE `user` DROP FOREIGN KEY `FK_3b07a7b26fe1d7f7a70a237d2f1`");
        await queryRunner.query("ALTER TABLE `challenge` DROP FOREIGN KEY `FK_323da9fd837f6ed38a5ea240bee`");
        await queryRunner.query("ALTER TABLE `sub_challenge` DROP FOREIGN KEY `FK_86f657223ece14ad9bcacdc28e5`");
        await queryRunner.query("DROP INDEX `REL_3b07a7b26fe1d7f7a70a237d2f` ON `user`");
        await queryRunner.query("ALTER TABLE `point_of_interest` CHANGE `latitude` `latitude` float(12) NOT NULL");
        await queryRunner.query("ALTER TABLE `point_of_interest` CHANGE `longitude` `longitude` float(12) NOT NULL");
        await queryRunner.query("ALTER TABLE `theme` DROP COLUMN `description`");
        await queryRunner.query("ALTER TABLE `theme` ADD `description` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `user` DROP INDEX `IDX_3b07a7b26fe1d7f7a70a237d2f`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `currentChallengeId`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `picture`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `lastName`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `firstName`");
        await queryRunner.query("DROP INDEX `IDX_bf298f58d0c69c1b4c3e28cdab` ON `user_has_challenges`");
        await queryRunner.query("DROP INDEX `IDX_f452eaaf94bbc46f8789584296` ON `user_has_challenges`");
        await queryRunner.query("DROP TABLE `user_has_challenges`");
        await queryRunner.query("DROP TABLE `challenge`");
        await queryRunner.query("DROP TABLE `sub_challenge`");
    }

}
