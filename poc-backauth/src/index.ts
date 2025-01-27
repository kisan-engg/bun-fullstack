import swagger from "@elysiajs/swagger";
import Elysia from "elysia";
import notes from "./controllers/notes";
import betterAuthView from "./lib/auth.view";
import { cors } from '@elysiajs/cors'
import { userInfo, userMiddleware } from "./lib/auth-middleware";

const app = new Elysia()
  .use(swagger())
  .use(cors())
  .derive(({ request }) => userMiddleware(request))
  .all("api/auth/*", betterAuthView)
  .get("/user", ({ user, session }) => userInfo(user, session))
  .use(notes)
  .onError(({ error }) => {
    console.log("Error: ", error)
  })
  .listen(4000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
