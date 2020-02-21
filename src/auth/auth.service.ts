import { Injectable } from '@nestjs/common';
import { UserService } from './user.service';
import { JwtService } from '@nestjs/jwt';
import { UserEntity } from './user.entity';
import { JWTPayloadDTO } from '../dto/jwt.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<UserEntity> {
    const user: UserEntity = await this.userService.findOne(email);
    if (!user) { return null; }
    const passwordIsCorrect = password === user.hashedPassword;
    return passwordIsCorrect ? user : null;
  }

  getJWT(user) {
    const JWTPayload: JWTPayloadDTO = {
      sub: user.id
    }
    const JWT = this.jwtService.sign(JWTPayload);
    return JWT;
  }
}