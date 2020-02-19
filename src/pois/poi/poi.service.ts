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

     async _getPoi(id: number) {
        return this.poiRepository.findOne(id);
    }

    async _createPoi(poi: PoiModel) {
        return this.poiRepository.save(poi);
    }

    async _deletePoi(id: number) {
        return this.poiRepository.delete(id);
    }

    async _updatePoi(poi: PoiModel) {
        return this.poiRepository.update(poi.id, poi)
    }
}
