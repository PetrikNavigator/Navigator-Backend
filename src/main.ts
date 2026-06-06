import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import cookieParser from 'cookie-parser';
import { BigIntSerializationInterceptor } from './other/interceptors/BigIntSerialInterceptor.interceptor';
import { ParseBigIntPipe } from './other/pipes/ParseBigIntPipe';
import { Logger } from '@nestjs/common';

const WEAK_SECRETS = new Set(['secret', 'changeme', 'password', 'default']);

function requireSecret(name: string): string {
  const value = process.env[name]?.trim()

  if (!value || value.length < 16 || WEAK_SECRETS.has(value.toLowerCase())) {
    throw new Error(
      `Environment variable ${name} must be set to a strong value ` +
      `(at least 16 characters, not a common word). Refusing to start.`,
    )
  }

  return value
}

async function bootstrap() {
  const cookieSecret = requireSecret('COOKIE_SECRET')
  requireSecret('JWT_SECRET')

  const app = await NestFactory.create<NestExpressApplication>(AppModule)

  app.use(cookieParser(cookieSecret))

  app.enableCors({
    origin: [
      "http://localhost:5174",
      "http://127.0.0.1:5174"
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
  })

  app.useGlobalInterceptors(new BigIntSerializationInterceptor())

  app.useGlobalPipes(
    new ParseBigIntPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  )

  const port = process.env.PORT ?? 8001
  await app.listen(port, '0.0.0.0')
  Logger.log(`Application listening on port ${port}`, 'Bootstrap')
}
void bootstrap();
