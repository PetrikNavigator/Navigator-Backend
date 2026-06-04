#!/bin/sh

set -e

echo "Waiting for database...."

until nc -z "$DB_HOST" "$DB_PORT" >/dev/null 2>&1
do
  sleep 0.5
done
echo "Database port open"

echo "Deploying migrations"
node /usr/src/app/scripts/apply-migrations.js

echo "Seeding database"
node dist/seed.js

# Start the app
exec "$@"
