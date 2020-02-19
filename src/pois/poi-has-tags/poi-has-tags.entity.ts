import { Entity, Column, PrimaryGeneratedColumn, OneToMany, Index, ManyToMany, JoinColumn, OneToOne, JoinTable } from 'typeorm';
import { Tag } from '../tag/tag.entity';
import { PointOfInterest } from '../poi/poi.entity';

@Entity('point_of_interest_has_tags')
export class PoiHasTags {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    tagId: number

    @Column()
    poiId: number

    @OneToMany(type => Tag, tag => tag.id)
    tag: Tag;

    @OneToMany(type => PointOfInterest, pointOfInterest => pointOfInterest.id)
    poi: PointOfInterest;
}
