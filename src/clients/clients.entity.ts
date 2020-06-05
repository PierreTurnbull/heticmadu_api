import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';
import { ClientPositionEntity } from '../client-positions/client-position.entity';

@Entity('client')
export class ClientsEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    address: string;

    @Column()
    rsefffff: string;

    @Column()
    numberOfEmployees: number;

    @Column()
    picture: string;

    @Column()
    perimeter: number;

    @Column()
    status: string;

    @Column()
    type: string;

    @Column()
    creationDate: string;

    @OneToMany(type => ClientPositionEntity, clientPosition => clientPosition.client, { cascade: ['insert', 'update', 'remove'] })
    @JoinColumn([
        {
            name: 'id',
            referencedColumnName: 'clientId'
        }
    ])
    clientPositions: ClientPositionEntity[];
}
