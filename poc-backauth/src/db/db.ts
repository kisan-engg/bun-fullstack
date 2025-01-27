import { drizzle } from 'drizzle-orm/postgres-js';

export const db = drizzle("postgres://postgres:postgres@localhost:5432/users");