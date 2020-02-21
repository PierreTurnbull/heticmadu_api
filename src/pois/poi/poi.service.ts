import { Injectable, Inject } from '@nestjs/common';
import { PointOfInterest } from './poi.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PoiDTO } from '../../dto/poi.dto';
import { PoiParamRequestDto } from '../../dto/poi.param.request.dto';
import { Tag } from '../tag/tag.entity';

@Injectable()
export class PoiService {
    constructor(
        @InjectRepository(PointOfInterest)
        private readonly poiRepository: Repository<PointOfInterest>,
    ) {}
     async _getPois() {
        return this.poiRepository.find({ relations: ['tags'] });
    }

     async _getPoi(id: PoiParamRequestDto) {
        return this.poiRepository.findOne(id, { relations: ['tags'] });
    }

    async _createPoi(poi: PoiDTO) {
        return this.poiRepository.save(poi);
    }

    async _deletePoi(id: PoiParamRequestDto) {
        return this.poiRepository.delete(id);
    }

    async _updatePoi(poi: PoiDTO) {
        return this.poiRepository.update(poi.id, poi);
    }
}
