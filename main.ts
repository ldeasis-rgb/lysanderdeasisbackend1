import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config();

  const app = await NestFactory.create(AppModule);

  app.enableCors();

  // Safely parse port or fall back to 3000
  const parsedPort = Number(process.env.PORT);
  const port = !isNaN(parsedPort) && parsedPort > 0 ? parsedPort : 3000;

  await app.listen(port, '0.0.0.0');
  console.log(`Server listening on http://localhost:${port}`);
}

bootstrap();