import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Connection } from 'typeorm';
import { PoiModule } from './pois/poi/poi.module';
import { ClientsModule } from './clients/clients.module';

@Module({
  imports: [PoiModule, ClientsModule, TypeOrmModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor( private readonly connection: Connection ) {}
}
