import { t } from "elysia";
import { createInsertSchema, createSelectSchema, createUpdateSchema } from "drizzle-typebox";
import { deleteNote, insertNote, selectNotes, updateNote } from "../db/operations";
import { notes } from "../db/schema/notes.schema";

const notesTable = {...notes} as const

const _getNote = createSelectSchema(notesTable)
export type GetNote = typeof _getNote.static
export type GetNotes = Array<GetNote>

const _addNote = createInsertSchema(notesTable)
const addNote = t.Omit(_addNote, ["id"])
export type AddNote = typeof addNote.static

const _changeNote = createUpdateSchema(notesTable)
const changeNote = t.Omit(_changeNote, ["id"])
export type ChangeNote = typeof changeNote.static


export class Note {

  async get(userId: string): Promise<GetNotes | null> {
    try {
      const result = await selectNotes(userId)
      return result
    } catch(error) {
      console.error(Note.name + ":get:"+error)
      return null
    }    
  }
  async add(note: AddNote): Promise<GetNote | null> {
    try {
      const [result] = await insertNote(note)
      return result
    } catch(error) {
      console.error(Note.name + ":add:"+error)
      return null
    }
  }
  async remove(noteId: number): Promise<true | null> {
    try {
      await deleteNote(noteId)
      return true
    } catch(error) {
      console.error(Note.name + ":remove:"+error)
      return null
    }
  }
  async update(noteId: number, note: ChangeNote): Promise<GetNote | null> {
    try {
      const [result] = await updateNote(noteId, note)
      return result
    } catch(error) {
      console.error(Note.name + ":update:"+error)
      return null
    }
  }
}
