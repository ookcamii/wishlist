import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { ListModule } from './list/list.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/lista_1'),
    UserModule,
    ListModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
