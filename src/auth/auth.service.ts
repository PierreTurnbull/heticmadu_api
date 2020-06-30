import { Injectable } from '@nestjs/common';
import { UserService } from './user.service';
import { JwtService } from '@nestjs/jwt';
import { UserEntity } from './user.entity';
import { JWTPayloadDTO } from '../dto/jwt.dto';

import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.userService.findOne(email);
    if (!user) { return null; }

    const passwordIsCorrect = bcrypt.compare(password, user.hashedPassword);
    return passwordIsCorrect ? this.createJWT(user) : null;
  }

  createJWT(user) {
    delete user.hashedPassword;
    const JWTPayload = {
      user: user
    }
    const JWT = this.jwtService.sign(JWTPayload);
    return JWT;
  }
}
