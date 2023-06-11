import { Injectable } from '@nestjs/common';
import { User } from './users.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user-dto';
import { RolesService } from 'src/roles/roles.service';
import { AddRoleDto } from './dto/add-role.dto';
import { BanUserDto } from './dto/ban.dto';

import { HttpException } from '@nestjs/common/exceptions';
import { HttpStatus } from '@nestjs/common/enums';


@Injectable()
export class UsersService {

    constructor(@InjectModel(User) private userRepository: typeof User,
        private roleService: RolesService) { }

    async createUsers(dto: CreateUserDto) {
        const user = await this.userRepository.create(dto)
        const role = await this.roleService.getRoleByValue('USER')
        await user.$set('roles', [role.id])
        user.roles = role
        return user
    }

    async getAllUsers() {
        const users = await this.userRepository.findAll({ include: { all: true } })
        return users
    }

    async getUserByEmail(email: string) {
        const user = await this.userRepository.findOne({ where: { email }, include: { all: true } })
        return user
    }

    async addRole(dto: AddRoleDto) {
        const user = await this.userRepository.findByPk(dto.userId)
        const role = await this.roleService.getRoleByValue(dto.value)
        if (role && user) {
            await user.$add('role', role.id)
            return dto;
        }
        throw new HttpException("User or role is not found", HttpStatus.NOT_FOUND)
    }

    async ban(dto: BanUserDto) {
        const user = await this.userRepository.findByPk(dto.useId);
        if(!user){
            throw new HttpException("User is not found", HttpStatus.NOT_FOUND)
        }
        user.banned = true;
        user.banReason = dto.banReason;
        await user.save();
        return user;
    }
}
