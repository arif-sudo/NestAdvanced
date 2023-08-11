import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import * as uuid from 'uuid'
import * as fs from 'fs'
import * as path from 'path'


@Injectable()
export class FilesService {
    async createFile(file: { buffer: string | NodeJS.ArrayBufferView; }): Promise<string> {
       try {
        const fileName = uuid.v4() + '.jpg';
        const filePath = path.resolve(__dirname, '..', 'static');
        //C:\Users\USER\Desktop\first-nest-project\dist\static <----------------- FILE PATH
        if (!fs.existsSync(filePath)) {
            fs.mkdirSync(filePath, { recursive: true });
        }
        fs.writeFileSync(path.join(filePath, fileName), file.buffer)
        return fileName;
       } catch (error) {
            throw new HttpException('An error occurred while writing the file', HttpStatus.INTERNAL_SERVER_ERROR)
       }
    }
}
