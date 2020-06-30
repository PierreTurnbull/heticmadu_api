import { Controller, Request, Post, UseGuards, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { ApiTags, ApiBody, ApiResponse } from '@nestjs/swagger';
import { LoginDTO } from '../dto/login.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiBody({ type: LoginDTO })
  @ApiResponse({ status: 201, description: 'Authorized', type: String })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @Post('login')
  login(@Body() user) {
    return this.authService.validateUser(user.email, user.hashedPassword);
  }

  @ApiResponse({ status: 201, description: 'Authorized', type: String })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @Post('jwt')
  getJwt(@Request() request) {
    return this.authService.getJWT(request.user);
  }
}
