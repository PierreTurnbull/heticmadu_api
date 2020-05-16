require('dotenv').config();
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
      .setTitle('Group5 API')
      .setDescription('CRUD API for group5')
      .setVersion('1.0')
      .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.API_PORT);
  Logger.log(`Application is running on port ${process.env.API_PORT}`, 'Bootstrap');
}
bootstrap();
