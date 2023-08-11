import { ApiProperty } from "@nestjs/swagger";
import { IsString } from 'class-validator'

export class CreateRoleDto {
    @ApiProperty({ example: 'USER', description: 'Value' })
    @IsString({ message: 'Should be string' })
    readonly value: string;

    @ApiProperty({ example: 'For moderating', description: 'description' })
    @IsString({ message: 'Should be string' })
    readonly description: string;
}
