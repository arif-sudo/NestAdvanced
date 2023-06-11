import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import * as dotenv from 'dotenv'

dotenv.config()

async function start() {
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule)

    const config = new DocumentBuilder().setTitle('Backend with Nest js').setDescription('Rest api documentation').setVersion('1.0.0').addTag('Ark Docs').build();

    const document = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup('/api/docs', app, document)


    await app.listen(PORT, () => console.log('Server started on port = ' + PORT))
}

start()