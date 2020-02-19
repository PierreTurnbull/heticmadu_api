import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { ClientsEntity } from '../clients/clients.entity';

@Entity('client')
export class ClientPositionsEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    longitude: string;

    @Column()
    latitude: string;

    @Column()
    perimeter: number;

    @Column()
    clientId: number;

    @ManyToOne(type => ClientsEntity, { cascade: ['insert', 'update'] })
    @JoinColumn()
    client: ClientsEntity;
}
