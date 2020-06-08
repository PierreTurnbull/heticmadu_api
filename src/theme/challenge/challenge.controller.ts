import { Controller, Post, Get, Body, Param, Delete, UseGuards, UseInterceptors, Res, UploadedFile, Patch } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AuthGuard } from '@nestjs/passport';
import { ChallengeService } from './challenge.service';
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

@Controller('challenges')
export class ChallengeController {
    constructor(private challengeService: ChallengeService) {}

    @Get()
    // @UseGuards(AuthGuard('jwt'))
    getChallenges() {
        return this.challengeService.getChallenges();
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
    createChallenge(@Body() Challenge) {
        return this.challengeService.createChallenge(Challenge);
    }

    @Patch()
    // @UseGuards(AuthGuard('jwt'))
    updateChallenge(@Body() Challenge) {
        return this.challengeService.updateChallenge(Challenge);
    }

    @Delete(':id')
    // @UseGuards(AuthGuard('jwt'))
    deleteChallenge(@Param('id') id: number) {
        return this.challengeService.deleteChallenge(id);
    }
}
