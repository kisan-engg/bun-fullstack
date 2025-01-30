import { createAuthClient } from "better-auth/svelte"

export const { signIn, signUp, useSession, getSession, signOut } =  createAuthClient({
    baseURL: "http://localhost:4000", // the base url of your auth server
});

export const userSignOut =  async() => { await signOut};


/* const { data, error } = await authClient.signUp.email({
    email: "test1@example.com",
    password: "password1234",
    name: "test1"
  });
 */

/*   const { data, error } = await authClient.signIn.email({
    email: "test@example.com",
    password: "password1234",
  }); */


  //const session = authClient.useSession();