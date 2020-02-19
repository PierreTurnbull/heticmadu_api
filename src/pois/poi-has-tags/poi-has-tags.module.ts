import { Module } from '@nestjs/common';
import { PoiHasTagsController } from './poi-has-tags.controller';
import { PoiHasTagsService } from './poi-has-tags.service';
import { PoiHasTags } from './poi-has-tags.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([PoiHasTags])],
    controllers: [PoiHasTagsController],
    providers: [PoiHasTags],
})
export class TagModule {}
