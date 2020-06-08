import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChallengeEntity } from './challenge.entity';
import { ChallengeController } from './challenge.controller';
import { ChallengeService } from './challenge.service';

@Module({
    imports: [TypeOrmModule.forFeature([ChallengeEntity])],
    controllers: [ChallengeController],
    providers: [ChallengeService],
})
export class ChallengeModule {}
