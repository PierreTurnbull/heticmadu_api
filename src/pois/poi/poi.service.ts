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

     async _getPoi(id) {
        return this.poiRepository.findOne(id);
    }

    async _createPoi(poi: PoiModel) {
        // insert return a Promise<InsertResult>
        const currentPoi = this.poiRepository.insert(poi);;
        currentPoi.then(res => {
            const id = res.identifiers[0].id;


        });

        return currentPoi;
    }
}
