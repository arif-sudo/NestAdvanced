import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class AddRoleDto {
    @ApiProperty({example: 'USER', description: 'Role value'})
    @IsString({message: "Should be a string"})
    readonly value: string;

    @ApiProperty({example: '1', description: 'user id'})
    @IsNumber({}, {message: "Should be a number"})
    readonly userId: number;
}