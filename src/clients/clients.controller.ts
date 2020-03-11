import { Controller, Post, Get, Body, Param, Delete, Patch, UseGuards } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { ClientsDTO } from '../dto/clients.dto';
import { ApiTags, ApiOperation, ApiOkResponse, ApiForbiddenResponse, ApiParam, ApiCreatedResponse, ApiResponse,
    ApiBadRequestResponse } from '@nestjs/swagger';
import { poiResponseExample } from '../pois/examples/get-poi-response.example';
import { AuthGuard } from '@nestjs/passport';
import { clientResponseExample } from './examples/get-client-response.example';

@ApiTags('clients')
@Controller('clients')
export class ClientsController {
    constructor(private clientsService: ClientsService) {}

    @Get()
    // @UseGuards(AuthGuard('jwt'))
    @ApiOperation({ summary: 'Get all CLIENTS.', description: 'Returns all CLIENTS.' })
    @ApiOkResponse({ description: 'Successful operation.', schema: { example: clientResponseExample }})
    @ApiForbiddenResponse({ description: 'Access forbidden.'})
    getClients() {
        return this.clientsService.getClients();
    }

    @Get(':id')
    // @UseGuards(AuthGuard('jwt'))
    @ApiOperation({ summary: 'Get a CLIENT by ID', description: 'Returns a single CLIENT.' })
    @ApiParam({
        description: 'ID of CLIENT to return.',
        required: true,
        name: 'id',
        type: Number,
    })
    @ApiForbiddenResponse({ description: 'Access forbidden.'})
    getClient(@Param('id') id: number) {
        return this.clientsService.getClient(id);
    }

    @Post()
    // @UseGuards(AuthGuard('jwt'))
    @ApiOperation({ summary: 'Create a CLIENT' })
    @ApiCreatedResponse({ description: 'The CLIENT has been succesfully created.',  schema: { example: clientResponseExample[0] }})
    @ApiForbiddenResponse({ description: 'Access forbidden.'})
    async createClient(@Body() clientsBody: ClientsDTO) {
        await this.clientsService.createClients(clientsBody);
        return null;
    }


    @Delete(':id')
    // @UseGuards(AuthGuard('jwt'))
    @ApiParam({
        description: 'ID of CLIENT to delete.',
        required: true,
        name: 'id',
        type: Number,
    })
    @ApiOperation({ summary: 'Delete a CLIENT', description: 'Delete a CLIENT by ID.' })
    @ApiOkResponse({ description: 'CLIENT succesfully deleted.'})
    @ApiResponse({ description: 'CLIENT not found.', status: 404 })
    @ApiForbiddenResponse({ description: 'Access forbidden.'})
    @ApiBadRequestResponse({ description: 'Invalid parameter.'})
    async deleteClient(@Param('id') id: number) {
        await this.clientsService.deleteClient(id);
        return null
    }
}
