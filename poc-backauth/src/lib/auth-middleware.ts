import { auth } from "./auth";
import { Session, User } from "better-auth/types";

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
 
// type User can be export from `typeof auth.$Infer.Session.user`
// type Session can be export from `typeof auth.$Infer.Session.session`
export const userInfo = (user: User | null, session: Session | null) => {
  return {
    user: user,
    session: session
  }
}