import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type OptionsDocument = Options & Document;

@Schema()
export class Options {
  @Prop()
  key: string;

  @Prop()
  value: string;
}

export const OptionsSchema = SchemaFactory.createForClass(Options);
