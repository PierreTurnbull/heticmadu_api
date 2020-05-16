import { Controller, Post, Get, Body, Param, Delete, UseGuards, UseInterceptors, Res, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AuthGuard } from '@nestjs/passport';
import { StoryService } from './story.service';
import { diskStorage } from 'multer';
import { join } from 'path';

const storageOptions = diskStorage({
    destination: join(__dirname, '../../uploads'),
    filename: (req, file, callback) => {
        callback(null, generateImagename(file));
    }
});

function generateImagename(file) {
    return `${Date.now()}_${file.originalname}`;
}

@Controller('stories')
export class StoryController {
    constructor(private storyService: StoryService) {}

    @Get()
    // @UseGuards(AuthGuard('jwt'))
    getThemes() {
        return this.storyService.getStories();
    }

    @Get(':img')
    getImg(@Param('img') img, @Res() res) {
        return res.sendFile(img, { root: join(__dirname, '../../uploads') });
    }

    @Post('upload')
    @UseInterceptors(FileInterceptor(
        'file',
        {
            storage: storageOptions
        }
    ))
    addImage(@UploadedFile() img) {
        return img;
    }

    @Post()
    // @UseGuards(AuthGuard('jwt'))
    createStory(@Body() story) {
        return this.storyService.createStory(story);
    }

    @Delete(':id')
    // @UseGuards(AuthGuard('jwt'))
    deleteStory(@Param('id') id: number) {
        return this.storyService.deleteStory(id);
    }
}

