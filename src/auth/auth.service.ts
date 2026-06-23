import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { RegisterDto } from './dto/registerUser.dto';

@Injectable()
// due to dependency injection feature it gonna injected in the controllers
export class AuthService {
    constructor(private readonly userService : UserService){}
  registerUser(registerUserDto: RegisterDto) {
    console.log("Register User DTO : " , registerUserDto)
    /*
    // Below point is basically is on creating User 
        *check the duplication of Email
        *hash the password 
        *save to DB
    *generate JWT
    *send Token to the user
    */
   return this.userService.createUser();
  }
}
