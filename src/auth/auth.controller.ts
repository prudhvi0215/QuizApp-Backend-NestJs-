import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async loginUser(@Request() req) {
    return this.authService.loginUser(req.user);
  }

  @UseGuards(AuthGuard('local'))
  @Post('admin/login')
  async loginAdmin(@Request() req) {
    return this.authService.loginAdmin(req.user);
  }
}
