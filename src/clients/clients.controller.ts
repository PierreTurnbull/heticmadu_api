import { Controller, Post, Get, Body } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { ClientsModel } from '../interfaces/clients.interface';

@Controller('clients')
export class ClientsController {
    // constructor(private clientsService: ClientsService) {}
    @Get()
    getClients() {
        console.log('ok');
        return 1;
        // return this.clientsService._getClients();
    }

    @Post()
    createClient(@Body() poi: ClientsModel) {
        return 1;
        // return this.clientsService._createClients(poi);
    }
}
