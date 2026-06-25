import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { RegisterDto } from './dto/registerUser.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
@Injectable()
// due to dependency injection feature it gonna injected in the controllers
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}
  async registerUser(registerUserDto: RegisterDto) {
    // console.log("Register User DTO : " , registerUserDto)
    const saltOrRounds = 10;
    const password = registerUserDto.password;
    const hash = await bcrypt.hash(password, saltOrRounds);
    const user = { ...registerUserDto, password: hash };
    /*
    // Below point is basically is on creating User 
        *check the duplication of Email // we will use the mongoose feature of duplication here 
        *hash the password // we will hash the password here using bcryptjs library
        *save to DB // user info will be saved in user module in user schema 
        *generate JWT // generate the JWT here and also send it from this module also 
        *send Token to the user
    */
    const createdUser = await this.userService.createUser(user);
    const payload = { sub: createdUser._id };
    const accessToken = await this.jwtService.signAsync(payload);
    return accessToken;
  }
}
