import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Injectable()
// due to dependency injection feature it gonna injected in the controllers
export class AuthService {
    constructor(private readonly userService : UserService){}
  registerUser() {
    /*
    *check the duplication of Email
    *hash the password 
    *save to DB
    *generate JWT
    *send Token to the user
    */
   return this.userService.createUser();
    
  }
}
