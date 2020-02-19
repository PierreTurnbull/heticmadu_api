require('dotenv').config();
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Connection } from 'typeorm';
import { PoiModule } from './pois/poi/poi.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_SCHEMA,
      logging: true,
      entities: [
        __dirname + '/../**/*.entity{.ts,.js}',
      ],
    }),
    PoiModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor( private readonly connection: Connection ) {}
}
