import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'heticmadu-api-db',
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DB,
      logging: true,
      entities: [
        __dirname + '/../**/*.entity{.ts,.js}',
      ],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
