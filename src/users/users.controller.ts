import { Controller, Post, Get, Body, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user-dto';
import { UsersService } from './users.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ApiResponse } from '@nestjs/swagger/dist';
import { User } from './users.model';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Roles } from 'src/auth/roles.auth.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { AddRoleDto } from './dto/add-role.dto';
import { BanUserDto } from './dto/ban.dto';

@ApiTags('Users')
@Controller('users')
export class UsersController {

    constructor(private userService: UsersService){}
    //dependency injection

    @ApiOperation({summary: "User creation"})
    @ApiResponse({status: 200, type: User })
    @UsePipes(ValidationPipe)
    @Post()
    create(@Body() userDto: CreateUserDto){
        return this.userService.createUsers(userDto)
    }

    @ApiOperation({summary: "Getting all users"})
    @ApiResponse({status: 200, type: [User] })
    @Roles("ADMIN")
    @UseGuards(JwtAuthGuard)
    @Get()
    getAll(){
        return this.userService.getAllUsers()
    }

    @ApiOperation({summary: "Roles give away"})
    @ApiResponse({status: 200})
    @Roles("ADMIN")
    @UseGuards(RolesGuard)
    @Post('/role')
    addRole(@Body() dto: AddRoleDto ){
        return this.userService.addRole(dto)
    }

    @ApiOperation({summary: "Banning user"})
    @ApiResponse({status: 200})
    @Roles("ADMIN")
    @UseGuards(RolesGuard)
    @Post('/ban')
    ban(@Body() dto: BanUserDto ){
        return this.userService.ban(dto)
    }
}
