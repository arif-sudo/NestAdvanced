import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user-dto';

@Injectable()
export class AuthService {
    constructor(private authRepository: any){}

    async login(dto: CreateUserDto){
        
    }

    async register(dto: CreateUserDto){
        
    }
}
