import { Controller, Post, Get, Body, Param, Patch, Delete, UseGuards } from '@nestjs/common';
import { PoiService } from './poi.service';
import { PoiDTO } from '../../dto/poi.dto';
import { ApiCreatedResponse, ApiForbiddenResponse, ApiOkResponse, ApiTags, ApiParam, ApiOperation, ApiBadRequestResponse,
    ApiResponse } from '@nestjs/swagger';
import { PoiParamRequestDto } from '../../dto/poi.param.request.dto';
import { poiResponseExample } from '../examples/get-poi-response.example'
import { AuthGuard } from '@nestjs/passport';

@ApiTags('pois')
@Controller('pois')
export class PoiController {
    constructor(private poiService: PoiService) {}

    @Get()
    @UseGuards(AuthGuard('jwt'))
    @ApiOperation({ summary: 'Get all POIS.', description: 'Returns all POIS.' })
    @ApiOkResponse({ description: 'Successful operation.', schema: {
            example: poiResponseExample[0]
        }
    })
    @ApiForbiddenResponse({ description: 'Access forbidden.'})
    getPois() {
        return this.poiService._getPois();
    }

    @Get(':id')
    @UseGuards(AuthGuard('jwt'))
    @ApiOperation({ summary: 'Get a POI by ID', description: 'Returns a single POI.' })
    @ApiParam({
        description: 'ID of POI to return.',
        required: true,
        name: 'id',
        type: Number,
    })
    @ApiForbiddenResponse({ description: 'Access forbidden.'})
    getPoi(@Param('id') id: PoiParamRequestDto) {
        return this.poiService._getPoi(id);
    }

    @Post()
    @UseGuards(AuthGuard('jwt'))
    @ApiOperation({ summary: 'Create a POI' })
    @ApiCreatedResponse({ description: 'The POI has been succesfully created.', schema: {
            example: { id: 1, ...poiResponseExample[0]}
        }})
    @ApiForbiddenResponse({ description: 'Access forbidden.'})
    createPoi(@Body() poi: PoiDTO) {
        return this.poiService._createPoi(poi);
    }

    @Delete(':id')
    @UseGuards(AuthGuard('jwt'))
    @ApiParam({
        description: 'ID of POI to delete.',
        required: true,
        name: 'id',
        type: Number,
    })
    @ApiOperation({ summary: 'Delete a POI', description: 'Delete a POI by ID.' })
    @ApiOkResponse({ description: 'POI succesfully deleted.'})
    @ApiResponse({ description: 'POI not found.', status: 404 })
    @ApiForbiddenResponse({ description: 'Access forbidden.'})
    @ApiBadRequestResponse({ description: 'Invalid parameter.'})
    deletePoi(@Param('id') id: PoiParamRequestDto) {
        return this.poiService._deletePoi(id);
    }

    @Patch()
    @UseGuards(AuthGuard('jwt'))
    @ApiOperation({ summary: 'Update a POI', description: 'Update a single POI (specify the ID in the object sended).' })
    @ApiOkResponse({ description: 'POI succesfully updated.', schema: {
            example: poiResponseExample[0]
        }
    })
    @ApiBadRequestResponse({ description: 'Invalid ID supplied.' })
    @ApiResponse({ description: 'POI not found.', status: 404 })
    updatePoi(@Body() poi: PoiDTO) {
        return this.poiService._updatePoi(poi);
    }
}
