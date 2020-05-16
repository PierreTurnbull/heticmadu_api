import { Controller, Post, Get, Body, Param, Delete, UseGuards } from '@nestjs/common';
import { ThemeService } from './theme.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('themes')
export class ThemeController {
    constructor(private themeService: ThemeService) {}

    @Get()
    // @UseGuards(AuthGuard('jwt'))
    getThemes() {
        return this.themeService.getThemes();
    }

    @Post()
    // @UseGuards(AuthGuard('jwt'))
    createTheme(@Body() theme) {
        return this.themeService.createTheme(theme);
    }

    @Delete(':id')
    // @UseGuards(AuthGuard('jwt'))
    deleteTheme(@Param('id') id: number) {
        return this.themeService.deleteTheme(id);
    }
}
