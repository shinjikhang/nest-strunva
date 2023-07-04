import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './common/filtes/http-exception/http-exception.filter';
import { WrapResponseInterceptor } from './common/interceptors/wrap-response.interceptor';
import { TimeoutResponseInterceptor } from './common/interceptors/timeout-response.interceptor';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

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
  app.setGlobalPrefix('api');
  app.useGlobalFilters(new HttpExceptionFilter()); //apply global filyer http exeption
  app
    .useGlobalInterceptors
    // new WrapResponseInterceptor(),
    // new TimeoutResponseInterceptor(),
    ();

  const options = new DocumentBuilder()
    .setTitle('Swagger')
    .setDescription('Swagger Description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
