import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { PoiHasTags } from '../poi-has-tags/poi-has-tags.entity';

@Entity('tag')
export class Tag {
    @PrimaryGeneratedColumn()
    @ManyToOne(type => PoiHasTags, poiHasTags => poiHasTags.tagId)
    id: number;
    // @ManyToOne(() => PoiHasTags, poiHasTags => poiHasTags.tagId)
    // @JoinColumn({ name: 'id' })
    // tagId: PoiHasTags;

    @Column()
    tag: string;
}
