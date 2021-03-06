import { Injectable, Inject } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ChallengeEntity } from "./challenge.entity";

@Injectable()
export class ChallengeService {
  constructor(
    @InjectRepository(ChallengeEntity)
    private readonly challengeRepository: Repository<ChallengeEntity>
  ) {}

  async getChallenges() {
    return this.challengeRepository.find({
      relations: ["theme", "subChallenges"],
    });
  }

  async getChallenge(id: number) {
    return this.challengeRepository.findOne(id);
  }

  async updateChallenge(challenge) {
    return this.challengeRepository.save(challenge);
  }
  
  async createChallenge(challenge) {
    return this.challengeRepository.save(challenge);
  }

  async deleteChallenge(id: number) {
    return this.challengeRepository.delete(id);
  }
}
