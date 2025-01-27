import { Context, error } from "elysia";
import { auth } from "./auth";

const betterAuthView = (context: Context) => {
  const BETTER_AUTH_ACCEPT_METHODS = [ 'GET', 'POST']
  if(BETTER_AUTH_ACCEPT_METHODS.includes(context.request.method)){
    console.log(context.request)
    return auth.handler(context.request);
  } else error(405);
}

export default betterAuthView;