import { Controller, Post, Get, Body, Param, Delete, UseGuards, UseInterceptors, Res, UploadedFile, Patch } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AuthGuard } from '@nestjs/passport';
import { diskStorage } from 'multer';
import { join } from 'path';
import { UserService } from './user.service';

const storageOptions = diskStorage({
    destination: join(__dirname, '../../uploads'),
    filename: (req, file, callback) => {
        callback(null, generateImagename(file));
    }
});

function generateImagename(file) {
    return `${Date.now()}_${file.originalname}`;
}

@Controller('users')
export class UserController {
    constructor(private userService: UserService) {}

    @Get()
    // @UseGuards(AuthGuard('jwt'))
    getUsers() {
        return this.userService.getUsers();
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
    async createUser(@Body() user) {
        return this.userService.createUser(user);
    }

    @Patch()
    // @UseGuards(AuthGuard('jwt'))
    updateUser(@Body() user) {
        return this.userService.updateUser(user);
    }

    @Delete(':id')
    // @UseGuards(AuthGuard('jwt'))
    deleteUser(@Param('id') id: number) {
        return this.userService.deleteUser(id);
    }
}
