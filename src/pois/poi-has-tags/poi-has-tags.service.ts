import { Injectable, Inject } from '@nestjs/common';
import { PoiHasTags } from './poi-has-tags.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PoiHasTagsService {
    constructor(
        @InjectRepository(PoiHasTags)
        private readonly poiHasTagsRepository: Repository<PoiHasTags>,
    ) {}

    async _createReferenceBetweenPoiAndTags(poiWithTags) {
        // la logique ici
        return this.poiHasTagsRepository.insert(poiWithTags)
    }
}
