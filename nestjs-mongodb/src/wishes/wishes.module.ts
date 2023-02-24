import { Module } from '@nestjs/common';
import { WishesService } from './wishes.service';
import { WishesController } from './wishes.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { wishes, wishSchema } from './schemas/wish.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: wishes.name, schema: wishSchema }]),
  ],
  controllers: [WishesController],
  providers: [WishesService],
})
export class WishesModule {}
