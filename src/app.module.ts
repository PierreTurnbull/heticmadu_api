import { SubChallengeModule } from './theme/challenge/sub-challenge/sub-challenge.module';

require('dotenv').config();
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PoiModule } from './pois/poi/poi.module';
import { TagModule } from './pois/tag/tag.module';
import { ClientsModule } from './clients/clients.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './auth/user.module';
import { ThemeModule } from './theme/theme.module';
import { ChallengeModule } from './theme/challenge/challenge.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_SCHEMA,
      extra: {
          charset: "utf8mb4_unicode_ci"
      },
      logging: process.env.ENV_TYPE === 'dev',
      entities: [
        __dirname + '/../**/*.entity{.ts,.js}',
      ],
      synchronize: process.env.ENV_TYPE === 'dev'
    }),
    AuthModule,
    UserModule,
    PoiModule,
    TagModule,
    ClientsModule,
    ThemeModule,
    ChallengeModule,
    SubChallengeModule,
  ],
})
export class AppModule {}
