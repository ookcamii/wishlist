import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose'; 

export type listDocument = list & Document; 

@Schema() 
export class list {
  @Prop() 
  categoria : string;

  @Prop()
  description: string;

  @Prop()
  url: string;

  @Prop()
  precio: number;

  @Prop()
  image_url: string;

  @Prop([String]) 
  keywords: string[];
}

export const listSchema = SchemaFactory.createForClass(list); 