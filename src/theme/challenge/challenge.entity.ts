import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { ThemeEntity } from '../theme.entity';

@Entity('challenge')
export class ChallengeEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    text: string;

    @Column()
    type: string;

    @ManyToOne(type => ThemeEntity, themeEntity => themeEntity.challenges)
    theme: ThemeEntity;
}
