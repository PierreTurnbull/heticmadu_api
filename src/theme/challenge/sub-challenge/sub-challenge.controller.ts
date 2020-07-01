import { Controller, Post, Get, Body, Param, Delete, UseGuards } from '@nestjs/common';
import { SubChallengeService } from './sub-challenge.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('sub-challenges')
export class SubChallengeController {
    constructor(private subChallengeService: SubChallengeService) {}

    @Get()
    // @UseGuards(AuthGuard('jwt'))
    getSubChallenges() {
        return this.subChallengeService.getSubChallenges();
    }

    @Post()
    // @UseGuards(AuthGuard('jwt'))
    createSubChallenge(@Body() subChallenge) {
        return this.subChallengeService.createSubChallenge(subChallenge);
    }

    @Delete(':id')
    // @UseGuards(AuthGuard('jwt'))
    deleteSubChallenge(@Param('id') id: number) {
        return this.subChallengeService.deleteSubChallenge(id);
    }
}
