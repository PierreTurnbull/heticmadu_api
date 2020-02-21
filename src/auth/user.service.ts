import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { getRepository } from 'typeorm';

@Injectable()
export class UserService {
  async findOne(email: string): Promise<UserEntity> {
    return await getRepository(UserEntity)
      .createQueryBuilder('user')
      .where('email = :email', { email })
      .getOne();
  }
}