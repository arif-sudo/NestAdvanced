import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNumber } from 'class-validator'

export class CreatePostDto {
    @ApiProperty({ example: 'Sunset', description: 'Title' })
    @IsString({ message: 'Should be a string' })
    readonly title: string

    @ApiProperty({ example: 'A sunset is a beautiful view of sun', description: 'Content' })
    @IsString({ message: 'Should be a string' })
    readonly content: string;

    @ApiProperty({ example: '1', description: 'user id' })
    // @IsNumber({}, {message: "Should be a number💀"})
    readonly userId: any;
}