import { eq } from 'drizzle-orm';
import { notes } from "./schema/notes.schema";
import { db } from "./db";
import { AddNote, GetNotes, ChangeNote } from '../model/note.model';

export const selectNotes = async (userId: string): Promise<GetNotes> => {
    return db.select().from(notes).where(eq(notes.author, userId)).orderBy(notes.timestamp)        
}

export const insertNote = async (insertNote: AddNote): Promise<GetNotes> => {
    return db.insert(notes).values(insertNote).returning()
}

export const deleteNote = async(noteId: number) => {
    return db.delete(notes).where(eq(notes.id, noteId))
}

export const updateNote = async (noteId: number, insertNote: ChangeNote): Promise<GetNotes> => {
    return db.update(notes).set(insertNote).where(eq(notes.id, noteId)).returning()
}

