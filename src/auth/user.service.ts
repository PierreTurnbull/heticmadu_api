import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { AuthService } from './auth.service';
import { getRepository, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import * as bcrypt from 'bcryptjs';

@Injectable()
export class UserService {
  constructor(
      @InjectRepository(UserEntity)
      private readonly userEntity: Repository<UserEntity>,
      @Inject(forwardRef(() => AuthService))
      private readonly authService: AuthService,
  ) {}

  async findOne(email: string): Promise<UserEntity> {
    return await getRepository(UserEntity)
      .createQueryBuilder('user')
      .where('email = :email', { email })
      .addSelect('user.hashedPassword')
      .getOne();
  }

  async getUsers() {
    return this.userEntity.find({ relations: ['challenges', 'currentChallenge'] });
  }

  async createUser(user) {
    user.hashedPassword = await bcrypt.hash(user.hashedPassword, 10);
    const saveUser = await this.userEntity.save(user);
    if (saveUser) {
      return this.authService.createJWT(user);
    }
  }

  async updateUser(user) {
    const saveUser = await this.userEntity.save(user);
    if (saveUser) {
      return this.authService.createJWT(user);
    }
  }

  async deleteUser(id: number) {
    return this.userEntity.delete(id);
  }
}
