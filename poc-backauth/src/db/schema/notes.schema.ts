import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { user } from "./auth.schema";

export const notes = pgTable("notes", {
    id: serial("id").primaryKey(),
    text: text("text").notNull(),
    subject: text("subject").notNull(),
    author: text('user_id').notNull().references(() => user.id),
    timestamp: timestamp('timestamp').defaultNow().notNull(),
})