import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user-dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(private userSevice: UsersService){} 

    async login(dto: CreateUserDto){

    }

    async register(dto: CreateUserDto){
        
    }
}
