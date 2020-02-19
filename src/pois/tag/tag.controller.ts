import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { TagService } from './tag.service';
import { TagModel } from '../../interfaces/tag.interface';

@Controller('tags')
export class TagController {
    constructor(private tagService: TagService) {}
    @Get()
    getTags() {
        return this.tagService._getTags();
    }

    @Post()
    createTag(@Body() tag: TagModel) {
        return this.tagService._createTag(tag);
    }
}
