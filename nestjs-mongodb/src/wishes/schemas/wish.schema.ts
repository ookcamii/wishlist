import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type WishDocument = wishes & Document;

@Schema()
export class wishes {
  @Prop()
  deseo: string;

  @Prop()
  tipo: string;

  @Prop()
  see: string;
}

export const wishSchema = SchemaFactory.createForClass(wishes);
