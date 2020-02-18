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

    async getClients() {
        return this.clientsRepository.find();
    }

    async getClient(id: number) {
        return this.clientsRepository.findOne(id);
    }

    async createClients(clientsBody: ClientsModel) {
        const { clients } = clientsBody;
        for (let i = 0; i < clients.length; i++) {
            await this.clientsRepository.insert(clients[i])
        }
        return null;
    }
}
