import { Injectable, Inject } from '@nestjs/common';
import { Repository, Connection } from 'typeorm';
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
        return this.clientsRepository.find({ relations: ['clientPositions'] });
    }

    async getClient(id: number) {
        return this.clientsRepository.findOne(id, { relations: ['clientPositions'] });
    }

    async createClients(clientsBody: ClientsModel) {
        const { clients } = clientsBody;
        for (let i = 0; i < clients.length; i++) {
            const client = clients[i]
            await this.clientsRepository.save(client)
        }
        return null;
    }
}
