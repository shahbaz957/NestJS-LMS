import { Module } from '@nestjs/common';
import { CourseService } from './course.service';
import { CourseController } from './course.controller';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './roles.guard';
@Module({
  controllers: [CourseController],
  providers: [CourseService , {
    provide: APP_GUARD,
    useClass: RolesGuard,
  },],
})
export class CourseModule {}
