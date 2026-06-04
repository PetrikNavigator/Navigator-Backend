#!/usr/bin/env node
/* eslint-disable */
/**
 * Prisma-free migration runner.
 *
 * Reads SQL files from prisma/migrations/<name>/migration.sql, applies any
 * that have not yet been recorded in the schema_migrations table, and records
 * each one after it succeeds. Each migration is applied inside a transaction.
 *
 * Required env vars: DB_HOST, DB_PORT, DB_USER, DB_NAME, DB_PASSWORD
 * Optional env vars: MIGRATIONS_DIR (default: prisma/migrations)
 */

const fs = require('fs');
const path = require('path');
const mariadb = require('mariadb');

const {
  DB_HOST,
  DB_PORT,
  DB_USER,
  DB_NAME,
  DB_PASSWORD,
  MIGRATIONS_DIR = 'prisma/migrations',
} = process.env;

function requireEnv(name, value) {
  if (!value) {
    console.error(`Missing required env var: ${name}`);
    process.exit(1);
  }
}

requireEnv('DB_HOST', DB_HOST);
requireEnv('DB_PORT', DB_PORT);
requireEnv('DB_USER', DB_USER);
requireEnv('DB_NAME', DB_NAME);
requireEnv('DB_PASSWORD', DB_PASSWORD);

function splitStatements(sql) {
  // Strip line comments and block comments, then split on `;` at statement end.
  // Good enough for Prisma-generated migration SQL; doesn't handle stored
  // procedures with embedded `;`. If you add those, switch to multipleStatements.
  const stripped = sql
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/^\s*--.*$/gm, '');
  return stripped
    .split(/;\s*(?:\r?\n|$)/)
    .map((s) => s.trim())
    .filter((s) => s.length > 0);
}

async function main() {
  const conn = await mariadb.createConnection({
    host: DB_HOST,
    port: Number(DB_PORT),
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    multipleStatements: false,
    allowPublicKeyRetrieval: true,
  });

  try {
    await conn.query(`
      CREATE TABLE IF NOT EXISTS schema_migrations (
        migration_name VARCHAR(255) PRIMARY KEY,
        applied_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    const migrationsRoot = path.resolve(MIGRATIONS_DIR);
    if (!fs.existsSync(migrationsRoot)) {
      console.log(`No migrations directory at ${migrationsRoot}`);
      return;
    }

    const migrationDirs = fs
      .readdirSync(migrationsRoot, { withFileTypes: true })
      .filter((d) => d.isDirectory())
      .map((d) => d.name)
      .sort();

    if (migrationDirs.length === 0) {
      console.log(`No migrations found in ${migrationsRoot}`);
      return;
    }

    const appliedRows = await conn.query(
      'SELECT migration_name FROM schema_migrations',
    );
    const applied = new Set(appliedRows.map((r) => r.migration_name));

    for (const name of migrationDirs) {
      if (applied.has(name)) {
        console.log(`Skipping already applied migration: ${name}`);
        continue;
      }

      const file = path.join(migrationsRoot, name, 'migration.sql');
      if (!fs.existsSync(file)) {
        console.warn(`No migration.sql in ${name}, skipping`);
        continue;
      }

      const sql = fs.readFileSync(file, 'utf8');
      const statements = splitStatements(sql);

      console.log(`Applying migration: ${name} (${statements.length} statements)`);

      await conn.beginTransaction();
      try {
        for (const stmt of statements) {
          await conn.query(stmt);
        }
        await conn.query(
          'INSERT INTO schema_migrations (migration_name) VALUES (?)',
          [name],
        );
        await conn.commit();
        console.log(`Applied: ${name}`);
      } catch (err) {
        await conn.rollback().catch(() => {});
        console.error(`Failed to apply migration ${name}:`, err.message);
        throw err;
      }
    }

    console.log('All migrations complete.');
  } finally {
    await conn.end();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
