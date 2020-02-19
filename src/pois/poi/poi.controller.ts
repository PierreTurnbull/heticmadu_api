import { Controller, Post, Get, Body, Param, Patch, Delete } from '@nestjs/common';
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
    getPoi(@Param('id') id: number) {
        return this.poiService._getPoi(id);
    }

    @Post()
    createPoi(@Body() poi: PoiModel) {
        return this.poiService._createPoi(poi);
    }

    @Delete(':id')
    deletePoi(@Param('id') id) {
        return this.poiService._deletePoi(id);
    }

    @Patch()
    updatePoi(@Body() poi: PoiModel) {
        return this.poiService._updatePoi(poi);
    }
}
