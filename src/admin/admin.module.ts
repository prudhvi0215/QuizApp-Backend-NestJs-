import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { QuestionSchema } from './admin.model';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'question', schema: QuestionSchema }])],
  providers: [AdminService],
  controllers: [AdminController]
})
export class AdminModule {}
