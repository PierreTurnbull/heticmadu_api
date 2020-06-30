import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, JoinColumn, OneToOne, BeforeInsert } from 'typeorm';
import { ChallengeEntity } from '../theme/challenge/challenge.entity';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  firstName: string;

  @Column()
  lastName: string;

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
    name: 'user_has_challenges',
    joinColumn: {
      name: 'userId',
      referencedColumnName: 'id'
    },
    inverseJoinColumn: {
      name: 'challengeId',
      referencedColumnName: 'id'
    },
  })
  challenges: ChallengeEntity[];
}
