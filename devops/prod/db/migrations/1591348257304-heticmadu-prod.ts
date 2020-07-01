import {MigrationInterface, QueryRunner} from "typeorm";

export class heticmaduProd1591348257304 implements MigrationInterface {
    name = 'heticmaduProd1591348257304'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `user` (`id` int NOT NULL AUTO_INCREMENT, `email` varchar(255) NOT NULL, `hashedPassword` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `client` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `address` varchar(255) NOT NULL, `rse` varchar(255) NOT NULL, `numberOfEmployees` int NOT NULL, `picture` varchar(255) NOT NULL, `perimeter` int NOT NULL, `status` varchar(255) NOT NULL, `type` varchar(255) NOT NULL, `creationDate` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `client_position` (`id` int NOT NULL AUTO_INCREMENT, `longitude` varchar(255) NOT NULL, `latitude` varchar(255) NOT NULL, `perimeter` int NOT NULL, `clientId` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `tag` (`id` int NOT NULL AUTO_INCREMENT, `tag` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `point_of_interest` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `longitude` float NOT NULL, `latitude` float NOT NULL, `address` varchar(255) NOT NULL, `postalCode` int NOT NULL, `monday` varchar(255) NOT NULL, `tuesday` varchar(255) NOT NULL, `wednesday` varchar(255) NOT NULL, `thursday` varchar(255) NOT NULL, `friday` varchar(255) NOT NULL, `saturday` varchar(255) NOT NULL, `sunday` varchar(255) NOT NULL, `schedule` varchar(255) NOT NULL, `category` varchar(255) NOT NULL, `averagePrice` varchar(255) NOT NULL, `glutenFree` tinyint NOT NULL, `bio` varchar(255) NOT NULL, `disabledAccess` tinyint NOT NULL, `greenScore` int NOT NULL, `phoneNumber` varchar(255) NOT NULL, `picture` varchar(255) NOT NULL, `description` varchar(255) NOT NULL, `status` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `theme` (`id` int NOT NULL AUTO_INCREMENT, `title` varchar(255) NOT NULL, `description` varchar(255) NOT NULL, `type` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `story` (`id` int NOT NULL AUTO_INCREMENT, `title` varchar(255) NOT NULL, `text` varchar(255) NOT NULL, `themeId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `point_of_interest_has_tags` (`poiId` int NOT NULL, `tagId` int NOT NULL, INDEX `IDX_982f67d6ea7c79925635d949f3` (`poiId`), INDEX `IDX_93e1ffd994f5e25bee417b8636` (`tagId`), PRIMARY KEY (`poiId`, `tagId`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("ALTER TABLE `client_position` ADD CONSTRAINT `FK_0dc1d558b53ca2163b628ff2537` FOREIGN KEY (`clientId`) REFERENCES `client`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `story` ADD CONSTRAINT `FK_a137b691db85ac439f32f198f0a` FOREIGN KEY (`themeId`) REFERENCES `theme`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `point_of_interest_has_tags` ADD CONSTRAINT `FK_982f67d6ea7c79925635d949f32` FOREIGN KEY (`poiId`) REFERENCES `point_of_interest`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `point_of_interest_has_tags` ADD CONSTRAINT `FK_93e1ffd994f5e25bee417b86360` FOREIGN KEY (`tagId`) REFERENCES `tag`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `point_of_interest_has_tags` DROP FOREIGN KEY `FK_93e1ffd994f5e25bee417b86360`", undefined);
        await queryRunner.query("ALTER TABLE `point_of_interest_has_tags` DROP FOREIGN KEY `FK_982f67d6ea7c79925635d949f32`", undefined);
        await queryRunner.query("ALTER TABLE `story` DROP FOREIGN KEY `FK_a137b691db85ac439f32f198f0a`", undefined);
        await queryRunner.query("ALTER TABLE `client_position` DROP FOREIGN KEY `FK_0dc1d558b53ca2163b628ff2537`", undefined);
        await queryRunner.query("DROP INDEX `IDX_93e1ffd994f5e25bee417b8636` ON `point_of_interest_has_tags`", undefined);
        await queryRunner.query("DROP INDEX `IDX_982f67d6ea7c79925635d949f3` ON `point_of_interest_has_tags`", undefined);
        await queryRunner.query("DROP TABLE `point_of_interest_has_tags`", undefined);
        await queryRunner.query("DROP TABLE `story`", undefined);
        await queryRunner.query("DROP TABLE `theme`", undefined);
        await queryRunner.query("DROP TABLE `point_of_interest`", undefined);
        await queryRunner.query("DROP TABLE `tag`", undefined);
        await queryRunner.query("DROP TABLE `client_position`", undefined);
        await queryRunner.query("DROP TABLE `client`", undefined);
        await queryRunner.query("DROP TABLE `user`", undefined);
    }

}
