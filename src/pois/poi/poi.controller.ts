import { Controller, Post, Get, Body, Param, Patch, Delete } from '@nestjs/common';
import { PoiService } from './poi.service';
import { PoiDTO } from 'src/dto/poi.dto';
import { ApiCreatedResponse, ApiForbiddenResponse, ApiOkResponse, ApiTags, ApiParam, ApiOperation } from '@nestjs/swagger';
import { PoiParamRequestDto } from '../../dto/poi.param.request.dto';
import { poiResponseExample } from '../examples/get-poi-response.example'

@ApiTags('pois')
@Controller('pois')
export class PoiController {
    constructor(private poiService: PoiService) {}

    @Get()
    @ApiOperation({ summary: 'Get all POIS', description: 'Returns all POIS' })
    @ApiOkResponse({ description: 'Successful operation.', schema: {
            example: poiResponseExample[0]
        }
    })
    @ApiForbiddenResponse({ description: 'Access forbidden.'})
    getPois() {
        return this.poiService._getPois();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get a POI by ID', description: 'Returns single POI' })
    @ApiParam({
        description: 'ID of POI to return',
        required: true,
        name: 'id',
        type: Number,
    })
    @ApiForbiddenResponse({ description: 'Access forbidden.'})
    getPoi(@Param('id') id: PoiParamRequestDto) {
        return this.poiService._getPoi(id);
    }

    @Post()
    @ApiOperation({ summary: 'Create a POI', description: 'Returns a single POI' })
    @ApiCreatedResponse({ description: 'The POI has been created succesfully.'})
    @ApiForbiddenResponse({ description: 'Access forbidden.'})
    createPoi(@Body() poi: PoiDTO) {
        return this.poiService._createPoi(poi);
    }

    @Delete(':id')
    deletePoi(@Param('id') id: PoiParamRequestDto) {
        return this.poiService._deletePoi(id);
    }

    @Patch()
    updatePoi(@Body() poi: PoiDTO) {
        return this.poiService._updatePoi(poi);
    }
}
