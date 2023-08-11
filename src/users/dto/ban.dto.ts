import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNumber } from 'class-validator'


export class BanUserDto {
    @ApiProperty({example: '1', description: 'user id'})
    @IsNumber({}, {message: "Should be a number"})
    readonly useId: number;

    @ApiProperty({example: 'For ruffianism', description: 'Ban reason'})
    @IsString({message: 'Should be string'})
    readonly banReason: string;
}