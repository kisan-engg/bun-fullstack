import { number } from "better-auth/*";
import { t } from "elysia";

export const memo = t.Object({
  text: t.String(),
  subject: t.Optional(t.String()),
  author: t.Optional(t.String()),
  timestamp: t.Optional(t.Number())
})

export type Memo = typeof memo.static

export class Note {
  constructor(
    public data: Memo[] = [
      {
        text: 'test note',
        subject: "new",
        author: 'test1',
        timestamp: new Date('01/01/2025').getTime()
      }
    ]
  ) { }

  add(note: Memo) {
    this.data.push(note);
    return note;
  }
  remove(index: number) {
    return this.data.splice(index, 1)
  }

  update(index: number, note: Partial<Memo>) {
    return (this.data[index] = { ...this.data[index], ...note })
  }

}