import { Controller, Post, Body, UploadedFile, UseInterceptors } from '@nestjs/common';
import { CreatePostDto } from 'src/users/dto/create-post.dto';
import { PostsService } from './posts.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('posts')
export class PostsController {
    constructor(private postsService: PostsService) { }

    @Post()
    @UseInterceptors(FileInterceptor('image'))
    createPost(@Body() dto: CreatePostDto, @UploadedFile() image: any) {
        return this.postsService.create(dto, image)
    }
}
