import { Controller, Post, Get, Body, Param, Delete } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { ClientsModel } from '../interfaces/clients.interface';

@Controller('clients')
export class ClientsController {
    constructor(private clientsService: ClientsService) {}

    @Get()
    getClients() {
        return this.clientsService.getClients();
    }

    @Get(':id')
    getClient(@Param('id') id: number) {
        return this.clientsService.getClient(id);
    }

    @Post()
    async createClient(@Body() clientsBody: ClientsModel) {
        await this.clientsService.createClients(clientsBody)
        return null;
    }


    @Delete(':id')
    async deleteClient(@Param('id') id: number) {
        await this.clientsService.deleteClient(id)
        return null
    }
}
