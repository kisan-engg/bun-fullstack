import swagger from "@elysiajs/swagger";
import Elysia from "elysia";
import notes from "./controllers/notes";
import betterAuthView from "./lib/auth.view";
import { cors } from '@elysiajs/cors'

const app = new Elysia()
  .use(swagger())
  .use(cors())
  .all("api/auth/*", betterAuthView)  
  .use(notes)
  .onError(({ error }) => {
    //console.log("Error: ", error)
  })
  .listen(4000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
