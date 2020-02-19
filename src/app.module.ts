import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Connection } from 'typeorm';
import { PoiModule } from './pois/poi/poi.module';
import { TagModule } from './pois/tag/tag.module';

@Module({
  imports: [PoiModule, TagModule, TypeOrmModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor( private readonly connection: Connection ) {}
}
