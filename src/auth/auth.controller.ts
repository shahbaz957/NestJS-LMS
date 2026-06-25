import { Body, Controller, Get, Post, UseGuards , Request} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/registerUser.dto';
import { AuthGuard } from './auth.guard';
import { UserService } from 'src/user/user.service';

@Controller('auth') // this 'auth' prefix of route slug
export class AuthController {
  constructor(private readonly authService: AuthService , private readonly userService : UserService) {}
  @Post('register')
  async register(@Body() registerUserDto:RegisterDto) { 
    // this (DTO) is used for getting the payload in request
    // logic for registering the user but we dont write logic in controller we do this work mostly in service file
    const token = await this.authService.registerUser(registerUserDto);
    console.log(token );
    return token ; 
    // return { message: 'User registered Successfully' };
  }
  @Get('message')
  msg() {
    return { message: 'I got the message Hurrah!!!' };
  }
  @UseGuards(AuthGuard)
  @Get("profile") 
  async getProfile(@Request() req) { 
    const user_id = req.user.sub;
    return await this.userService.getProfile(user_id);
  }
}
