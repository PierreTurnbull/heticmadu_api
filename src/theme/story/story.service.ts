import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StoryEntity } from './story.entity';

@Injectable()
export class StoryService {
    constructor(
        @InjectRepository(StoryEntity)
        private readonly storyRepository: Repository<StoryEntity>,
    ) {}

    async getStories() {
        return this.storyRepository.find();
    }

    async createStory(story) {
        return this.storyRepository.insert(story);
    }

    async deleteStory(id: number) {
        return this.storyRepository.delete(id)
    }
}
