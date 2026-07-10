import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() // Get Http method map all the get requests to this particular module
  getHello(): string {
    return this.appService.getHello();
  }
}
