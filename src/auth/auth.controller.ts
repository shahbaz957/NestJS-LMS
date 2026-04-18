import { Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth') // this 'auth' prefix of route slug
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('register')
  register() {
    // logic for registering the user but we dont write logic in controller we do this work mostly in service file
    return this.authService.registerUser();
    // return { message: 'User registered Successfully' };
  }
  @Get('message')
  msg() {
    return { message: 'I got the message Hurrah!!!' };
  }
}
