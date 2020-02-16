import { Module } from '@nestjs/common';
import { PoiController } from './poi.controller';
import { PoiService } from './poi.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Poi } from './poi.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Poi])],
  controllers: [PoiController],
  providers: [PoiService],
})
export class PoiModule {}
