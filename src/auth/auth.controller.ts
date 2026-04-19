import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/registerUser.dto';

@Controller('auth') // this 'auth' prefix of route slug
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('register')
  register(@Body() registerUserDto:RegisterDto) { 
    // this (DTO) is used for getting the payload in request
    // logic for registering the user but we dont write logic in controller we do this work mostly in service file
    const result = this.authService.registerUser(registerUserDto);
    return result ; 
    // return { message: 'User registered Successfully' };
  }
  @Get('message')
  msg() {
    return { message: 'I got the message Hurrah!!!' };
  }
}
