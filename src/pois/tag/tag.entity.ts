import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tag')
export class Tag {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    tag: string;
}
