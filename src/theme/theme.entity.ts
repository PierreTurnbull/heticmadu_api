import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';
import { StoryEntity } from './story/story.entity';

@Entity('theme')
export class ThemeEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    type: string;

    @OneToMany(type => StoryEntity, storyEntity => storyEntity.theme)
    @JoinColumn()
    stories: StoryEntity;
}
