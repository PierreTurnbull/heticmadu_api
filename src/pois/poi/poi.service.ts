import { Injectable, Inject } from '@nestjs/common';
import { PointOfInterest } from './poi.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PoiModel } from '../../interfaces/poi.interface';

@Injectable()
export class PoiService {
    constructor(
        @InjectRepository(PointOfInterest)
        private readonly poiRepository: Repository<PointOfInterest>,
    ) {}
     async _getPois() {
        return this.poiRepository.find();
    }

     async _getPoi(id): Promise<PointOfInterest[]> {
        return this.poiRepository.find(id);
    }

    async _createPoi(poi: PoiModel) {
        return this.poiRepository.insert(poi);
    }
}
