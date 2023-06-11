import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreatePostDto } from 'src/users/dto/create-post.dto';
import { Post } from './posts.model';

@Injectable()
export class PostsService {

    constructor(@InjectModel(Post) private postRepositry: typeof Post ) {}

    async create(dto: CreatePostDto, image: any) {
        const filename = 'asd'
        const post = this.postRepositry.create({...dto, image: filename})
        return post;
    }
}
