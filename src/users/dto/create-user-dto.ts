import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {

    @ApiProperty({example: 'example@gmail.com', description: 'Mail'})
    readonly email: string;
    @ApiProperty({example: '12345', description: 'Password'})
    readonly password: string;
}