require('dotenv').config();
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PoiModule } from './pois/poi/poi.module';
import { TagModule } from './pois/tag/tag.module';
import { ClientsModule } from './clients/clients.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './auth/user.module';
import { ThemeModule } from './theme/theme.module';
import { StoryModule } from './theme/story/story.module';

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
      synchronize: true
    }),
    AuthModule,
    UserModule,
    PoiModule,
    TagModule,
    ClientsModule,
    ThemeModule,
    StoryModule
  ],
})
export class AppModule {}
