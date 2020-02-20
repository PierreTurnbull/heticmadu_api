import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { PointOfInterest } from '../poi/poi.entity';

@Entity('tag')
export class Tag {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    tag: string;
}
