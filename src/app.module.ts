import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'heticmadu-api-db',
      port: 3306,
      username: 'heticmadu',
      password: 'j30d8YEf_2FEO',
      database: 'heticmadu',
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
