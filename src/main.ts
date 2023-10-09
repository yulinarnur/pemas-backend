import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Tambahkan baris ini untuk menerapkan ValidationPipe ke seluruh aplikasi
  app.useGlobalPipes(new ValidationPipe());

  const cors = {
    origin: ['http://localhost:3000'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS ',
  };

  app.enableCors(cors);
  await app.listen(3000);
}

bootstrap();
