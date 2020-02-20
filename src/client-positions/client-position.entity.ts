import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { ClientsEntity } from '../clients/clients.entity';

@Entity('client_position')
export class ClientPositionEntity {
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

    @ManyToOne(type => ClientsEntity, { onDelete: 'CASCADE' })
    @JoinColumn()
    client: ClientsEntity;
}
