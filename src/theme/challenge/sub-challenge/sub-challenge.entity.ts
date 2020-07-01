import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { ThemeEntity } from '../../theme.entity';
import { ChallengeEntity } from '../challenge.entity';

@Entity('sub_challenge')
export class SubChallengeEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column({ type: 'text' })
    description: string;

    @ManyToOne(type => ChallengeEntity, challengeEntity => challengeEntity.subChallenges)
    challenge: ChallengeEntity;
}
