import { Controller, Post, Get, Body, Param, Delete, UseGuards } from '@nestjs/common';
import { TagService } from './tag.service';
import { TagDTO } from 'src/dto/tag.dto';
import { ApiCreatedResponse, ApiForbiddenResponse, ApiOkResponse, ApiResponse, ApiBadRequestResponse, ApiTags,
    ApiOperation } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('tags')
@Controller('tags')
export class TagController {
    constructor(private tagService: TagService) {}

    @Get()
    @UseGuards(AuthGuard('jwt'))
    @ApiOperation({ summary: 'Get all TAGS.', description: 'Returns all TAGS.' })
    @ApiOkResponse({ description: 'Successful operation.', schema: {
            example: [
                { id: 1, tag: 'Un premier tag'},
                { id: 2, tag: 'Un deuxieme tag'},
                { id: 3, tag: 'Un troisième tag'},
            ]
        }
    })
    @ApiForbiddenResponse({ description: 'Access forbidden.'})
    getTags() {
        return this.tagService._getTags();
    }

    @Post()
    @UseGuards(AuthGuard('jwt'))
    @ApiOperation({ summary: 'Create a TAG.' })
    @ApiCreatedResponse({ description: 'Tag succesfully created.' })
    @ApiForbiddenResponse({ description: 'Access forbidden.'})
    createTag(@Body() tag: TagDTO) {
        return this.tagService._createTag(tag);
    }

    @Delete(':id')
    @UseGuards(AuthGuard('jwt'))
    @ApiOperation({ summary: 'Delete a TAG by id.' })
    @ApiOkResponse({ description: 'Tag successfully deleted.'})
    @ApiForbiddenResponse({ description: 'Access forbidden.'})
    @ApiBadRequestResponse({ description: 'Invalid parameter.'})
    @ApiResponse({ description: 'Tag not found.', status: 404 })
    deleteTag(@Param('id') id: number) {
        return this.tagService._deleteTag(id);
    }
}
