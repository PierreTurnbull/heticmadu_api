import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { PoiHasTags } from '../poi-has-tags/poi-has-tags.entity';

@Entity('point_of_interest')
export class PointOfInterest {
    @PrimaryGeneratedColumn()
    @ManyToOne(type => PoiHasTags, poiHasTags => poiHasTags.poiId)
    id: number;
    // @ManyToOne(() => PoiHasTags, poiHasTags => poiHasTags.poiId)
    // @JoinColumn({ name: 'id' })
    // poiId: PoiHasTags;

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
