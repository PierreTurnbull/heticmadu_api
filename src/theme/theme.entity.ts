import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';
import { ChallengeEntity } from './challenge/challenge.entity';

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

    @OneToMany(type => ChallengeEntity, challengeEntity => challengeEntity.theme)
    @JoinColumn()
    challenges: ChallengeEntity;
}
