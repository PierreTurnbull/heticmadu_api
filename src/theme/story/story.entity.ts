import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { ThemeEntity } from '../theme.entity';

@Entity('story')
export class StoryEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    text: string;

    @ManyToOne(type => ThemeEntity, themeEntity => themeEntity.stories)
    theme: ThemeEntity
}
