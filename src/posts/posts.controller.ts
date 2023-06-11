import { Controller, Post, Body, UploadedFile } from '@nestjs/common';
import { CreatePostDto } from 'src/users/dto/create-post.dto';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {

    constructor(private postsService: PostsService){}

    @Post()
    createPost(@Body() dto: CreatePostDto, @UploadedFile() image:any ){
        this.postsService.create(dto, image)
    }
}
