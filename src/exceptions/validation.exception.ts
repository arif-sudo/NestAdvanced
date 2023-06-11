import { HttpException } from '@nestjs/common/exceptions';
import { HttpStatus } from '@nestjs/common/enums';

export class ValidationException extends HttpException {
    messages: string;
    constructor(response: string){
        super(response, HttpStatus.BAD_REQUEST)
        this.messages = response
    }
}