import Elysia from "elysia";
import { auth } from "./auth";

export const userMiddleware = async (request: Request) => {
  const session = await auth.api.getSession({ headers: request.headers });
  if (!session) {
    return {
      user: null,
      session: null
    }
  }
  return {
    user: session.user,
    session: session.session
  }
} 

export const userValidation = new Elysia({ name: 'user/validation'})
  .derive(({ request }) => {
    return userMiddleware(request)
  })
  .guard({
    beforeHandle({user, session, error}){
      if(!user || !session) return error(401)
    }
  }).as('plugin')