import { Injectable } from '@nestjs/common';
import { Poi } from './poi.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PoiModel } from '../../interfaces/poi.interface';

@Injectable()
export class PoiService {
    constructor(
        @InjectRepository(Poi)
        private readonly poiRepository: Repository<Poi>,
    ) {}
     _getPois() {
        return this.poiRepository.find();
    }

     _getPoi(id): Promise<Poi[]> {
        return this.poiRepository.find(id);
    }

    _createPoi(poi: PoiModel) {
        return this.poiRepository.create(poi);
    }
}
