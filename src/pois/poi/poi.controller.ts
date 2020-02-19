import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { PoiService } from './poi.service';
import { PoiModel } from '../../interfaces/poi.interface';

@Controller('pois')
export class PoiController {
    constructor(private poiService: PoiService) {}
    @Get()
    getPois() {
        return this.poiService._getPois();
    }

    @Get(':id')
    getPoi(@Param('id') id: string) {
        return this.poiService._getPoi(id);
    }

    @Post()
    createPoi(@Body() poi: PoiModel) {
        return this.poiService._createPoi(poi);
    }
}
