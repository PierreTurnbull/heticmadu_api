require('dotenv').config();
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.API_PORT);
  Logger.log(`Application is running on port ${process.env.API_PORT}`, 'Bootstrap');
}
bootstrap();