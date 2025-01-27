import { betterAuth } from "better-auth";
import { drizzleAdapter, DrizzleAdapterConfig } from "better-auth/adapters/drizzle";
import { anonymous } from "better-auth/plugins"
import { passkey } from "better-auth/plugins/passkey"
import { db } from "../db/db";
import {schema} from "../db/schema";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema:  { ...schema },
  }, ),
  emailAndPassword: { enabled: true},
  plugins: [anonymous(), passkey(),]
});