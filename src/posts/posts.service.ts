import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreatePostDto } from 'src/users/dto/create-post.dto';
import { Post } from './posts.model';
import { FilesService } from 'src/files/files.service';

@Injectable()
export class PostsService {

    constructor(@InjectModel(Post) private postRepositry: typeof Post,
    private fileService: FilesService ) {}

    async create(dto: CreatePostDto, image: any) {
        const filename = await this.fileService.createFile(image); 
        const post = this.postRepositry.create({...dto, image: filename})
        return post;
    }
}
