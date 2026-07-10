import {
  ConflictException,
  Injectable,
  BadRequestException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schemas/user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}
  async createUser(user: unknown) {
    try {
      const u = user as {
        fname?: string;
        lname?: string;
        email?: string;
        password?: string;
      };
      if (!u.lname || !u.fname || !u.email) {
        throw new BadRequestException(
          'All Fields are required for registration purpose',
        );
      }
      return await this.userModel.create({
        fname: u.fname,
        lname: u.lname,
        email: u.email,
        password: u.password,
      });
    } catch (error) {
      const e = error as { code?: number };
      if (e.code === 11000) {
        throw new ConflictException('Email alredy Exist Thanks');
      }
      return error;
    }
  }
  async getProfile(id) { 
    const user = await this.userModel.findById(id);
    return user ; 
  }
}
// this is called the wiring of software
