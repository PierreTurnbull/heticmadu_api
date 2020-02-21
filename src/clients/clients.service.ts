import { Injectable, Inject } from '@nestjs/common';
import { Repository, Connection } from 'typeorm';
import { ClientsEntity } from './clients.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ClientsDTO } from 'src/dto/clients.dto';
import { ClientDTO } from 'src/dto/client.dto';

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

    async createClients(clientsBody: ClientsDTO) {
        const { clients } = clientsBody;
        for (let i = 0; i < clients.length; i++) {
            const client = clients[i];
            await this.clientsRepository.save(client)
        }
        return null;
    }

    async deleteClient(id: number) {
        await this.clientsRepository.delete(id)
    }
}
