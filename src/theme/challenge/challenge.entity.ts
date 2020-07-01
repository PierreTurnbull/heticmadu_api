import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { ThemeEntity } from '../theme.entity';

@Entity('challenge')
export class ChallengeEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column({ type: 'text' })
    text: string;

    @ManyToOne(type => ThemeEntity, themeEntity => themeEntity.challenges)
    theme: ThemeEntity;
}
