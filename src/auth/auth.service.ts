import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user-dto';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { HttpException, UnauthorizedException } from '@nestjs/common/exceptions';
import { HttpStatus } from '@nestjs/common/enums';
import { User } from 'src/users/users.model';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        private userSevice: UsersService,
        private jwtService: JwtService) { }


    async login(dto: CreateUserDto) {
        const user = await this.validateUser(dto);
        return this.generateToken(user)
    }

    async registration(dto: CreateUserDto) {
        try {
            const candidate = await this.userSevice.getUserByEmail(dto.email)
            if (candidate) {
                throw new HttpException('User with this email already exsist', HttpStatus.BAD_REQUEST)
            }
            const salt = await bcrypt.genSalt();
            const hashedPassword = await bcrypt.hash(dto.password, salt);
            const user = await this.userSevice.createUsers({ ...dto, password: hashedPassword })
            return this.generateToken(user);
        } catch (error) {
            console.log(error)
        }
    }

    private async generateToken(user: User) {
        const payload = { email: user.email, id: user.id, roles: user.roles }
        return {
            token: this.jwtService.sign(payload)
        }
    }
    private async validateUser(dto: CreateUserDto) {
        const user = await this.userSevice.getUserByEmail(dto.email);
        const passwordEquals = await bcrypt.compare(dto.email, user.password)
        if (user && passwordEquals) {
            return user;
        }
        throw new UnauthorizedException({message: 'Uncorrect email or password'})
    }
}
