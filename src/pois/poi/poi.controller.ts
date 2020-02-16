import { Controller, Post, Get, Body } from '@nestjs/common';
import { PoiService } from './poi.service';
import { PoiModel } from '../../interfaces/poi.interface';

@Controller('poi')
export class PoiController {
    constructor(private poiService: PoiService) {}
    @Get('pois')
    getPois() {
        return this.poiService._getPois();
    }

    @Get(':id')
    getPoi(@Body('id') id: string) {
        return this.poiService._getPoi(id);
    }

    @Post()
    createPoi(@Body() poi: PoiModel) {
        console.log('createPoi', poi);
        return this.poiService._createPoi(poi);
    }
}
