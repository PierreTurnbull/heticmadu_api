import {MigrationInterface, QueryRunner} from "typeorm";

export class heticmaduProd1591273440925 implements MigrationInterface {
    name = 'heticmaduProd1591273440925'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `point_of_interest` CHANGE `longitude` `longitude` float NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `point_of_interest` CHANGE `latitude` `latitude` float NOT NULL", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `point_of_interest` CHANGE `latitude` `latitude` float(12) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `point_of_interest` CHANGE `longitude` `longitude` float(12) NOT NULL", undefined);
    }

}
