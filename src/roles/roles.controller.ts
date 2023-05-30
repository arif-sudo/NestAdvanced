import { Controller, Post, Param, Get, Body} from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRoleDto } from 'src/users/dto/create-role-dto'; 

@Controller('roles')
export class RolesController {
    constructor(private roleService: RolesService){}

    @Post()
    create(@Body() roleDto: CreateRoleDto){
        return this.roleService.createRole(roleDto)
    }
    //@Body() is a decorator used in NestJS to indicate that the userDto parameter should be extracted from the request body of an incoming HTTP request
    @Get('/:value')
    getByValue(@Param('value') value: string){
        return this.roleService.getRoleByValue(value)
    }

}
