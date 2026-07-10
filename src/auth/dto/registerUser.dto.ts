import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class RegisterDto {
  @IsNotEmpty()
  fname!: string;
  @IsNotEmpty()
  lname!: string;
  @IsEmail()
  email!: string;
  @IsString()
  @IsNotEmpty()
  password!: string;
  // @IsString()
  role!:string ; 
}
