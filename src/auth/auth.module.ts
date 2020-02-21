import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from './user.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { JWTStrategy } from './strategies/jwt.strategy';

const passportModule = PassportModule.register({ defaultStrategy: 'jwt' });

@Module({
  imports: [
    UserModule,
    passportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '12h' },
    }),
  ],
  providers: [AuthService, LocalStrategy, JWTStrategy],
  exports: [AuthService, passportModule],
  controllers: [AuthController],
})
export class AuthModule {}