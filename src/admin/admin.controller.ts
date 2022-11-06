import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Question } from './admin.model';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
  constructor(private adminService: AdminService) {}

  // @UseGuards(AuthGuard('jwt')) //For Authorization
  @Get('/getAllQuestions')
  async getAllQuestions(): Promise<Question[]> {
    return await this.adminService.getQuestions();
  }

  // @UseGuards(AuthGuard('local'))
  @Post('/createQuestions')
  async createQuestions(@Body('question') question: object): Promise<any> {
    return await this.adminService.postQuestions(question);
  }
}
