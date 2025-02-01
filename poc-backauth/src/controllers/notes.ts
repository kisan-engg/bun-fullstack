import Elysia, { t } from "elysia";
import { Note } from "../model/note.model";
import { userMiddleware } from "../lib/auth-middleware";

const notes = new Elysia({ prefix: "api/notes" })
  .decorate('note', new Note())
  .derive(({ request }) => {
    return userMiddleware(request)
  })
  .model({
    memo: t.Omit(memo, ['author'])
  })
  .get("/", ({ note }) => {
    return note.data
  })
  .post('/', ({ note, body: { text, subject, timestamp }, user}) => {
      return note.add({ text, subject, timestamp, author: user?.name })
    },
    {
      body: 'memo'
    }
  )
  .guard({
    params: t.Object({
      index: t.Number({
        minimum: 0,
      })
    })
  })
  .delete(
    '/:index',
    ({ note, params: { index }, error }) => {
      if (index < note.data.length) return note.remove(index);
      return error(422)
    }
  )  
  .patch(
    '/:index',
    ({ note, params: { index }, body: { text, subject, timestamp }, error, user }) => {
      if (index in note.data){
        return note.update(index, { text, subject, timestamp, author: user?.name })
      }
      return error(422)
    },
    {
      body: 'memo'
    }
  );

export default notes;
