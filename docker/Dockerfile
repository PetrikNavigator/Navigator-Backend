# ---- Builder ----
FROM node:24.16.0-alpine AS builder

WORKDIR /usr/src/app

COPY package.json ./
COPY tsconfig*.json ./
COPY nest-cli.json ./
COPY webpack.config.js ./
COPY prisma.config.ts ./
COPY prisma ./prisma
COPY src ./src

RUN npm i

RUN DATABASE_URL="mysql://build:build@localhost:3306/build" npx prisma generate

RUN npm run build
RUN npm ci --omit=dev

# ---- Runtime ----
FROM node:24.16.0-alpine AS runtime

# required for database port ping
RUN apk add --no-cache netcat-openbsd

WORKDIR /usr/src/app

# RUN npm cache clean --force
COPY --from=builder --chown=node:node /usr/src/app/node_modules ./node_modules

# ------------------------------------ copy prisma files ------------------------------------

# migrations
COPY --from=builder --chown=node:node /usr/src/app/prisma/migrations ./prisma/migrations

# generated
COPY --from=builder --chown=node:node /usr/src/app/generated ./generated
# -------------------------------------------------------------------------------------------

COPY --from=builder --chown=node:node /usr/src/app/dist ./dist
COPY --chown=node:node scripts ./scripts

COPY docker/docker-entrypoint.sh /usr/local/bin/docker-entrypoint.sh
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

USER node

ENTRYPOINT [ "/usr/local/bin/docker-entrypoint.sh" ]

EXPOSE 8001

CMD [ "node", "dist/main.js" ]