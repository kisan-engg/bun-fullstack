import { drizzle } from 'drizzle-orm/node-postgres';

export const db = drizzle("postgres://pgelysia:fullstack@localhost:5432/users");