import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import cookieParser from 'cookie-parser';
import { BigIntSerializationInterceptor } from './other/interceptors/BigIntSerialInterceptor.interceptor';
import { ParseBigIntPipe } from './other/pipes/ParseBigIntPipe';
import { Logger } from '@nestjs/common';
import type { Request, Response, NextFunction } from 'express';

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

  app.use((req: Request, res: Response, next: NextFunction) => {
    res.setHeader('X-Content-Type-Options', 'nosniff')
    res.setHeader('X-Frame-Options', 'DENY')
    res.setHeader('Referrer-Policy', 'no-referrer')
    res.setHeader('Cross-Origin-Opener-Policy', 'same-origin')
    res.setHeader('X-DNS-Prefetch-Control', 'off')
    res.removeHeader('X-Powered-By')
    next()
  })

  app.enableCors({
    origin: [
      "http://localhost:5174"
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
  })

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Petrik Navigator API')
    .setDescription(
      'REST API for the Petrik Navigator backend. ' +
      'Authentication is performed via the `access_token` HttpOnly cookie issued by `POST /api/auth/login`. ' +
      'All BigInt identifiers are serialised as strings in responses and accepted as numeric strings in path/query parameters.',
    )
    .setVersion('1.0.0')
    .addCookieAuth('access_token', {
      type: 'apiKey',
      in: 'cookie',
      name: 'access_token',
      description: 'JWT issued on login. Sent automatically by the browser.',
    })
    .addTag('Auth', 'Login, session inspection, logout')
    .addTag('Admins', 'Admin and premise management (ADMIN role)')
    .addTag('Buildings', 'Buildings inside a premise')
    .addTag('Classrooms', 'Classrooms attached to a building')
    .addTag('Corridors', 'Corridor segments and their links')
    .addTag('Lifts', 'Vertical lifts between storeys')
    .addTag('Stairs', 'Stair segments between storeys')
    .build();

  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api/docs', app, swaggerDocument, {
    swaggerOptions: {
      withCredentials: true,
      persistAuthorization: true,
      operationsSorter: (a: any, b: any) => {
        const methodOrder: Record<string, number> = {
          get: 1,
          post: 2,
          delete: 3,
          put: 4,
        };

        const methodA = a.get('method');
        const methodB = b.get('method');

        return (methodOrder[methodA] || 99) - (methodOrder[methodB] || 99);
      },
    },
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
