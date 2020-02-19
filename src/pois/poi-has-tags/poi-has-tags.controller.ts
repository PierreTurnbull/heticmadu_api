import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { PoiHasTagsService } from './poi-has-tags.service';
import { PoiModel } from '../../interfaces/poi.interface';

@Controller('poi-has-tags')
export class PoiHasTagsController {
    constructor(private poiHasTagsService: PoiHasTagsService) {}

    @Get()
    createReferenceBetweenPoiAndTags(@Body() poiWithTags) {
        return this.poiHasTagsService._createReferenceBetweenPoiAndTags(poiWithTags);
    }
}
