import { createInsertSchema } from "drizzle-typebox";
import { t } from "elysia";
import * as authSchema from "./auth.schema";

export const schema = { ...authSchema } as const

export type Table  = typeof schema; 

export const _createUser = createInsertSchema(schema.user, {
  email: t.String({format: "email"})
})

const createUser = t.Omit(
	_createUser,
	['id', 'salt', 'createdAt']
);


