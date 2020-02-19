import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, ManyToMany, JoinTable } from 'typeorm';
import { PointOfInterest } from '../poi/poi.entity';

@Entity('tag')
export class Tag {
    @PrimaryGeneratedColumn()
    id: number;
    // @ManyToOne(() => PoiHasTags, poiHasTags => poiHasTags.tagId)
    // @JoinColumn({ name: 'id' })
    // tagId: PoiHasTags;

    @Column()
    tag: string;
}
