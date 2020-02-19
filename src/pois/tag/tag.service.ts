import { Injectable, Inject } from '@nestjs/common';
import { Tag } from './tag.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TagModel } from '../../interfaces/tag.interface';

@Injectable()
export class TagService {
    constructor(
        @InjectRepository(Tag)
        private readonly tagRepository: Repository<Tag>,
    ) {}

    async _getTags() {
        return this.tagRepository.find();
    }

    async _createTag(tag: TagModel) {
        return this.tagRepository.insert(tag);
    }
}
