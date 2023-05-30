import { Controller, Post, Get, Body } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user-dto';
import { UsersService } from './users.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ApiResponse } from '@nestjs/swagger/dist';
import { User } from './users.model';

@ApiTags('Users')
@Controller('users')
export class UsersController {

    constructor(private userService: UsersService){}
    //dependency injection

    @ApiOperation({summary: "User creation"})
    @ApiResponse({status: 200, type: User })
    @Post()
    create(@Body() userDto: CreateUserDto){
        return this.userService.createUsers(userDto)
    }

    @ApiOperation({summary: "Getting all users"})
    @ApiResponse({status: 200, type: [User] })
    @Get()
    getAll(){
        return this.userService.getAllUsers()
    }
}
