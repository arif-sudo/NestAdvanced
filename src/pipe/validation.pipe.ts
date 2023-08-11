import { ArgumentMetadata, Injectable, PipeTransform, ValidationError } from "@nestjs/common";
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";
import { ValidationException } from "src/exceptions/validation.exception";

@Injectable()
export class ValidationPipe implements PipeTransform<any> {
    async transform(value: any, metadata: ArgumentMetadata): Promise<any>{
        const obj = plainToClass(metadata.metatype, value);
        const errors = await validate(obj);

        if(errors.length){
            const messages: string[] = errors.map((err: ValidationError) => {
                return `${err.property} - ${Object.values(err.constraints).join(', ')}`
            })
            throw new ValidationException(messages)
            // Example
            // [
            //     "email - Uncorrect email",
            //     "password - Less than 16, more than 4, Should be a string"
            // ]
        }
        return value;
    }
    
}

