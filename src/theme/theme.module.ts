import { Module } from '@nestjs/common';
import { ThemeEntity } from './theme.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ThemeService } from './theme.service';
import { ThemeController } from './theme.controller';

@Module({
    imports: [TypeOrmModule.forFeature([ThemeEntity])],
    controllers: [ThemeController],
    providers: [ThemeService],
})
export class ThemeModule {}
