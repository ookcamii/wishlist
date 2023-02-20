import { Module } from '@nestjs/common';
import { ListService } from './list.service';
import { listController } from './list.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { list, listSchema } from './schemas/list.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: list.name, schema: listSchema }]), 
  ],
  controllers: [listController],
  providers: [ListService],
})
export class BooksModule {}