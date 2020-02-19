import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';
import { ClientPositionsEntity } from 'src/clientPositions/clientPositions.entity';

@Entity('client')
export class ClientsEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    address: string;

    @Column()
    rse: string;

    @Column()
    numberOfEmployees: number;

    @Column()
    logo: string;

    @Column()
    perimeter: number;

    @Column()
    status: string;

    @Column()
    type: string;

    @Column()
    creationDate: string;

    @OneToMany(type => ClientPositionsEntity, translation => translation.clientId, { cascade: ['insert', 'update'] })
    @JoinColumn([
        {
            name: 'id',
            referencedColumnName: 'clientId'
        }
    ])
    clientPositions: ClientPositionsEntity;
}
