import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from 'src/user/user.module';

@Module({
  imports : [UserModule],
  controllers: [AuthController],
  providers: [AuthService],
  // services will also registered here
})
export class AuthModule {}
