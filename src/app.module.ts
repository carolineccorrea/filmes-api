import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BackofficeModule } from './modules/backoffice/backoffice.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://admin:xpto123@cluster0.snge5.mongodb.net/db_filmess?retryWrites=true&w=majority'),
    BackofficeModule,
  ],
})
export class AppModule { }