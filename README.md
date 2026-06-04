## Description

Petrik Navigator Backend

## Project setup

```bash
$ npm install
```

## Database setup

The backend uses a MySql database

```sql
DROP DATABASE IF EXISTS `navigator`; CREATE DATABASE `navigator` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

## Compile and run the project

```sh
# watch mode
nest start --watch
# build
npm run build
# this runs: 
nest build --webpack --webpackPath webpack.config.js
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Running in Docker

The application can be run in Docker with all services (backend, MySQL database, Redis and Prisma Studio) using Docker Compose.

### Prerequisites

- Docker installed
- Docker Compose installed
- [Run in docker](./docs/README.Docker.md)

### Services
There are 3 main networks in this project. Two of them are shown here other two are in the proxy's and the frontend's documentation.
- **backend-net (external)**
    - **Backend API**: available at **`http://petrik-navigator-backend:8001`** on the backend-net
    - **MySQL Database**: available as **`db:3306`**
    - **Prisma Studio**: available at **`http://127.0.0.1:5555`** (database UI)
    - **Proxy** available at **`http://petrik-navigator-proxy:8002`**
- **redis-net (internal)**
    - **Backend** can reach the redis server only
    - **Redis** available on the redis-net only

### Environment Variables

The compose configuration includes the following environment variables:

- **App config**
    - NODE_ENV=production
    - PORT=8001
    - FRONTEND_ORIGIN=http://127.0.0.1:5174
    - ENABLE_SWAGGER=true

- **Database config**
    - DATABASE_URL=mysql://appuser:apppassword@db:3306/petrik-navigator
    - DB_HOST=db
    - DB_USER=appuser
    - DB_PASSWORD=apppassword
    - DB_PORT=3306
    - DB_NAME=petrik-navigator

- **Redis config**
    - REDIS_HOST=redis
    - REDIS_PORT=6379
    - REDIS_PASSWORD=dev_redis_password_change_for_prod

- **Mailer config**
    - SMTP_HOST=smtp.example.com
    - SMTP_PORT=587
    - SMTP_USERNAME=emaple@example.com
    - SMTP_PASSWORD=password
    - MAIL_DAILY_LIMIT=64

- **Token config** 
    These secrets will be readed from a .env.production.local file in this directory in the future.
    - JWT_SECRET=dev_jwt_dfgdfghd5324sgdhGDSGJHSFDSF_change_for_prod
    - COOKIE_SECRET=dev_cookie_werfsvíGrgíetsdélkvdsfsb_change_for_prod

- **Proxy config**
    - CACHE_INVALIDATION_SECRET=dev_cache_invalidation_secret_change_for_prod
        - the value must match the proxy's value
    - PROXY_ADDRESS=127.0.0.1
    - PROXY_URL=http://petrik-navigator-proxy:8002