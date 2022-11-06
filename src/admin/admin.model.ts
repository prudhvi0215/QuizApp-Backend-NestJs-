import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { OptionsSchema } from './admin.orderModel';

export type QuestionDocument = Question & Document;

@Schema()
export class Question {
  @Prop({required: true})
  title: string;

  @Prop([{ type: OptionsSchema,required: true}])
  options: Object

  @Prop({ type: OptionsSchema,required: true })
  correctOption: Object;

  @Prop({required: true})
  difficulty: string;

  @Prop({required: true})
  type: string;
}

export const QuestionSchema = SchemaFactory.createForClass(Question);
