import { forwardRef, Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from './user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UserService))
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.userService.findOne(email);
    if (!user) { throw new UnauthorizedException(); }

    const passwordIsCorrect = password === user.hashedPassword;

    if (!passwordIsCorrect) { throw new UnauthorizedException(); }

    return this.getJWT(user);
  }

  getJWT(user) {
    const JWTPayload = {
      user: user
    }
    return this.jwtService.sign(JWTPayload);
  }
}
