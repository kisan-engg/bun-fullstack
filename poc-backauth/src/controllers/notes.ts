import Elysia, { t } from "elysia";
import { Note, addNote, changeNote } from "../model/note.model";
import { userValidation } from "../lib/auth-middleware";

const notes = new Elysia({ prefix: "api/notes" })
  .decorate('notebook', new Note())
  .use(userValidation)
  .model({
    newNote: t.Omit(addNote, ['author']),
    updateNote: changeNote
  })
  .get("/", async ({ user, notebook, error }) => {
    if (!user) return error(401)
    const res = await notebook.get(user.id)
    if (!res) return error(500)
    return res
  })
  .post('/', async ({ notebook, body: { text, subject }, user, error }) => {
    if (!user) return error(401)
    const res = await notebook.add({ text, subject, author: user.id })
    if (!res) return error(500)
    return res
  },
    {
      body: 'newNote'
    }
  )
  .guard({
    params: t.Object({
      noteId: t.Number({
        minimum: 0,
      })
    })
  })
  .delete('/:noteId', async ({ notebook, params: { noteId }, user, error }) => {
    if (!user) return error(401)
    const result = await notebook.remove(noteId)
    if (!result) error(422)
    return result
  }
  )
  .patch('/:noteId', async ({ notebook, params: { noteId }, body: { text, subject }, error, user }) => {
    if (!user) return error(401)
    const res = notebook.update(noteId, { text, subject })
    if (!res) return error(500)
    return res
  },
    {
      body: 'updateNote'
    }
  )

export default notes;
