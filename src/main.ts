import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  
  const app = await NestFactory.create(AppModule);

  //To add api prefix
  app.setGlobalPrefix('api/v1');
  
  //To Enable Swagger url...
  const options = new DocumentBuilder()
    .setTitle('SimplyLogin Api Endpoints')
    .setDescription('The SimplyLogin Api Endpoint Documentation.')
    .setVersion('1.0')
    .addTag('SimplyLogin')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swagger-ui-api', app, document);
  
  //To enable Cors.
  app.enableCors();

  const configService = app.get(ConfigService);
  await app.listen(configService.get('PORT'));
}
bootstrap();