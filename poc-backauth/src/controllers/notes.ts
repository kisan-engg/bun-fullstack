import Elysia, { t } from "elysia";
import { memo, Note } from "../model/note.model";
import { userMiddleware } from "../lib/auth-middleware";

const notes = new Elysia({ prefix: "note" })
  .decorate('note', new Note())
  .derive(({ request }) => userMiddleware(request))
  .model({
    memo: t.Omit(memo, ['author'])
  })
  .onTransform(function log({ body, params, path, request: { method } }) {
    console.log(`${method} ${path}`, {
      body,
      params
    })
  })
  .guard({
    params: t.Object({
      index: t.Number()
    }),
    isSignIn: true    
  })
  .get("/", ({ note }) => note.data)
  .get(
    "/:index",
    ({ note, params: { index }, error }) => {
      return note.data[index] ?? error(404, `No notes for: ${index}`)
    }, {
    params: t.Object({
      index: t.Number()
    })
  })
  .delete(
    '/:index',
    ({ note, params: { index }, error }) => {
      if (index in note.data) return note.remove(index);
      return error(422)
    }
  )
  .put('/', ({ note, body: { data }, user}) =>
    note.add({ data, author: user?.name }),
    {
      body: 'memo'
    }
  )
  .patch(
    '/:index',
    ({ note, params: { index }, body: { data }, error, user }) => {
      if (index in note.data)
        return note.update(index, { data, author: user?.name })

      return error(422)
    },
    {
      body: 'memo'
    }
  );

export default notes;
