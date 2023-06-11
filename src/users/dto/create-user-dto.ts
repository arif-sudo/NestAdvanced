import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from 'class-validator'

export class CreateUserDto {

    @ApiProperty({ example: 'example@gmail.com', description: 'Mail' })
    @IsString({message: "Should be string"})
    @IsEmail({}, {message: "Uncorrect email"})
    readonly email: string;
    @ApiProperty({ example: '12345', description: 'Password' })
    @IsString({message: "Should be a string"})
    @Length(4, 16, {message: "Less than 16, more than 4"})
    readonly password: string;
}