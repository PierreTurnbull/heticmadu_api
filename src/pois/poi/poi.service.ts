import { Injectable, Inject } from '@nestjs/common';
import { PointOfInterest } from './poi.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PoiDTO } from 'src/dto/poi.dto';
import { PoiParamRequestDto } from '../../dto/poi.param.request.dto';

@Injectable()
export class PoiService {
    constructor(
        @InjectRepository(PointOfInterest)
        private readonly poiRepository: Repository<PointOfInterest>,
    ) {}
     async _getPois() {
        return this.poiRepository.find();
    }

     async _getPoi(id: PoiParamRequestDto) {
        return this.poiRepository.findOne(id);
    }

    async _createPoi(poi: PoiDTO) {
        return this.poiRepository.save(poi);
    }

    async _deletePoi(id: PoiParamRequestDto) {
        return this.poiRepository.delete(id);
    }

    async _updatePoi(poi: PoiDTO) {
        return this.poiRepository.update(poi.id, poi)
    }
}
