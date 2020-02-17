import { Module } from '@nestjs/common';
import { PoiController } from './poi.controller';
import { PoiService } from './poi.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PointOfInterest } from './poi.entity';
import { poiProviders } from './poi.providers';

@Module({
  imports: [TypeOrmModule.forFeature([PointOfInterest])],
  controllers: [PoiController],
  providers: [PoiService],
})
export class PoiModule {}
