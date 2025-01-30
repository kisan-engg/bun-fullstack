import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { anonymous } from "better-auth/plugins"
import { passkey } from "better-auth/plugins/passkey"
import { db } from "../db/db";
import * as authSchema from "../db/schema/auth.schema";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema:  { ...authSchema },
  }, ),
  emailAndPassword: { enabled: true},
  plugins: [anonymous(), passkey(),],
  trustedOrigins: ["http://localhost:3000"],
  advanced: {
    cookiePrefix: "kge_analytics"
  }
});