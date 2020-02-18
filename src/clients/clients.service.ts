import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ClientsEntity } from './clients.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ClientsModel } from '../interfaces/clients.interface';

@Injectable()
export class ClientsService {
    constructor(
        @InjectRepository(ClientsEntity)
        private readonly clientsRepository: Repository<ClientsEntity>,
    ) {}

    async _getClients() {
        return this.clientsRepository.find();
    }

    async _createClients(client: ClientsModel) {
        return this.clientsRepository.insert(client);
    }
}
