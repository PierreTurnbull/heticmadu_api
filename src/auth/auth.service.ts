import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UserService } from './user.service';
import { JwtService } from '@nestjs/jwt';

import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UserService))
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.userService.findOne(email);
    if (!user) { return null; }

    const passwordIsCorrect = await bcrypt.compare(password, user.hashedPassword);
    
    return passwordIsCorrect ? this.createJWT(user) : null;
  }

  createJWT(user) {
    const JWTPayload = {
      user: user
    }
    return this.jwtService.sign(JWTPayload);
  }
}
