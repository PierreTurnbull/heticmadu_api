import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ThemeEntity } from './theme.entity';

@Injectable()
export class ThemeService {
    constructor(
        @InjectRepository(ThemeEntity)
        private readonly themeRepository: Repository<ThemeEntity>,
    ) {}

    async getThemes() {
        return this.themeRepository.find({ relations: ['stories'] });
    }

    async createTheme(theme) {
        return this.themeRepository.insert(theme);
    }

    async deleteTheme(id: number) {
        return this.themeRepository.delete(id)
    }
}
