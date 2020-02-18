import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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
}
