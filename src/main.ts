import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './common/filtes/http-exception/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //only validate property define in dto folder
      transform: true, //: Cho phép biến đổi dữ liệu truyền vào, ví dụ như từ chuỗi sang số nguyên, hoặc ngược lại.
      forbidNonWhitelisted: true, //property not exists in dto will be throw exeption BadRequestException
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(3000);
}
bootstrap();
