import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Poi {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    longitude: number;

    @Column()
    latitude: number;

    @Column()
    adress: string;

    @Column()
    postalCode: number;

    @Column()
    monday: string;

    @Column()
    tuesday: string;

    @Column()
    wednesday: string;

    @Column()
    thursday: string;

    @Column()
    friday: string;

    @Column()
    saturday: string;

    @Column()
    sunday: string;

    @Column()
    schedule: string;

    @Column()
    category: string;

    @Column()
    type: string;

    @Column()
    averagePrice: string;

    @Column()
    glutenFree: boolean;

    @Column()
    bio: string;

    @Column()
    disabledAccess: boolean;

    @Column()
    greenScore: number;

    @Column()
    phoneNumber: string;

    @Column()
    logo: string;

    @Column()
    description: string;

    @Column()
    status: string;
}
