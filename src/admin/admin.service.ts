import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Question, QuestionDocument } from './admin.model';

@Injectable()
export class AdminService {
  constructor(
    @InjectModel('question')
    private readonly questionModel: Model<QuestionDocument>,
  ) {}

  async getQuestions(): Promise<Question[]> {
    return await this.questionModel.find();
  }

  async postQuestions(Question: object): Promise<Question> {
    return this.questionModel.create(Question);
  }
}
