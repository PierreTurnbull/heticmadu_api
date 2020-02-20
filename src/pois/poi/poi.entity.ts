import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import { Tag } from '../tag/tag.entity';

@Entity('point_of_interest')
export class PointOfInterest {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToMany(type => Tag, { cascade: true })
    @JoinTable({
        name: 'point_of_interest_has_tags',
        joinColumn: {
            name: 'poiId',
            referencedColumnName: 'id'
        },
        inverseJoinColumn: {
            name: 'tagId',
            referencedColumnName: 'id'
        },
    })
    tags: Tag[];

    @Column()
    name: string;

    @Column()
    longitude: number;

    @Column()
    latitude: number;

    @Column()
    address: string;

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
    picture: string;

    @Column()
    description: string;

    @Column()
    status: string;
}
