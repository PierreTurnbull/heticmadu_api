import { Injectable, Inject } from '@nestjs/common';
import { Tag } from './tag.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TagDTO } from 'src/dto/tag.dto';

@Injectable()
export class TagService {
    constructor(
        @InjectRepository(Tag)
        private readonly tagRepository: Repository<Tag>,
    ) {}

    async _getTags() {
        return this.tagRepository.find();
    }

    async _createTag(tag: TagDTO) {
        return this.tagRepository.insert(tag);
    }

    async _deleteTag(id: number) {
        return this.tagRepository.delete(id)
    }
}
