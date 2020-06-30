import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { getRepository, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import * as bcrypt from 'bcryptjs';

@Injectable()
export class UserService {
  constructor(
      @InjectRepository(UserEntity)
      private readonly userEntity: Repository<UserEntity>,
  ) {}

  async findOne(email: string): Promise<UserEntity> {
    return await getRepository(UserEntity)
      .createQueryBuilder('user')
      .where('email = :email', { email })
      .getOne();
  }

  async getUsers() {
    return this.userEntity.find({ relations: ['challenges', 'currentChallenge'] });
  }

  async createUser(user) {
    user.hashedPassword = await bcrypt.hash(user.hashedPassword, 10);
    return this.userEntity.save(user);
  }

  async updateUser(user) {
    return this.userEntity.save(user);
  }

  async deleteUser(id: number) {
    return this.userEntity.delete(id);
  }
}
