import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, JoinColumn, OneToOne } from 'typeorm';
import { ChallengeEntity } from '../theme/challenge/challenge.entity';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  picture: string;

  @Column()
  hashedPassword: string;

  @OneToOne(type => ChallengeEntity)
  @JoinColumn()
  currentChallenge: ChallengeEntity;

  @ManyToMany(type => ChallengeEntity)
  @JoinTable({
    name: 'user_has_stories',
    joinColumn: {
      name: 'userId',
      referencedColumnName: 'id'
    },
    inverseJoinColumn: {
      name: 'challengeId',
      referencedColumnName: 'id'
    },
  })
  stories: ChallengeEntity[];
}
