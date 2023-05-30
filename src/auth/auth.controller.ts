import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger'
import { CreateUserDto } from 'src/users/dto/create-user-dto';
import { AuthService } from './auth.service';

@ApiTags('Authorization')
@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService){}

    @Post('/login')
    login(@Body() userDto: CreateUserDto ){
        // return this.authService.login
    }

    @Post('/registration')
    registration(@Body() userDto: CreateUserDto ){
        // this.authService.register 
    }
}
