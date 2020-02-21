import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { ApiTags, ApiBody, ApiResponse } from '@nestjs/swagger';
import { LoginDTO } from '../dto/login.dto';
import { JWTDTO } from '../dto/jwt.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiBody({ type: LoginDTO })
  @ApiResponse({ status: 201, description: 'Authorized', type: JWTDTO })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @UseGuards(AuthGuard('local'))
  @Post('login')
  getJWT(@Request() request): string {
    return this.authService.getJWT(request.user);
  }
}