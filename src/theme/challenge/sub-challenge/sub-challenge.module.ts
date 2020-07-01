import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubChallengeEntity } from './sub-challenge.entity';
import { SubChallengeController } from './sub-challenge.controller';
import { SubChallengeService } from './sub-challenge.service';

@Module({
    imports: [TypeOrmModule.forFeature([SubChallengeEntity])],
    controllers: [SubChallengeController],
    providers: [SubChallengeService],
})
export class SubChallengeModule {}
