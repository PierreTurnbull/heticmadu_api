import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SubChallengeEntity } from './sub-challenge.entity';

@Injectable()
export class SubChallengeService {
    constructor(
        @InjectRepository(SubChallengeEntity)
        private readonly themeRepository: Repository<SubChallengeEntity>,
    ) {}

    async getSubChallenges() {
        return this.themeRepository.find();
    }

    async createSubChallenge(theme) {
        return this.themeRepository.insert(theme);
    }

    async deleteSubChallenge(id: number) {
        return this.themeRepository.delete(id);
    }
}
