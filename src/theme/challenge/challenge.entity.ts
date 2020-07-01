import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { ThemeEntity } from '../theme.entity';
import { SubChallengeEntity } from './sub-challenge/sub-challenge.entity';

@Entity('challenge')
export class ChallengeEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @ManyToOne(type => ThemeEntity, themeEntity => themeEntity.challenges)
    theme: ThemeEntity;

    @OneToMany(type => SubChallengeEntity, subChallengeEntity => subChallengeEntity.challenge)
    subChallenges: SubChallengeEntity[];
}
