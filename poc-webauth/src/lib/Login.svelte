<script lang="ts">
  import { authClient } from "./auth-client";
  

  const login = async () => {
    //const user = await authClient.signIn.anonymous();
    const { data, error } = await authClient.signUp.email({
      email: "test1@example.com",
      password: "password1234",
      name: "test1"
    });
    /* const { data, error } = await authClient.signIn.email({
      email: "test@example.com",
      password: "password1234",
    }); */
    /* console.log("data: ", data);
    console.log("error: ", error); */
  };

  const session = authClient.useSession();

  console.log("session: ", $session?.data?.user.name);
</script>

<button onclick={login}> Sign In </button>

<div
  style="display: flex; flex-direction: column; gap: 10px; border-radius: 10px; border: 1px solid #4B453F; padding: 20px; margin-top: 10px;"
>
  <div>
    {#if $session}
      <div>
        <p>
          name: {$session?.data?.user.name}
        </p>
        <p>
          email: {$session?.data?.user.email}
        </p>
        <button
          onclick={async () => {
            await authClient.signOut();
          }}
        >
          Signout
        </button>
      </div>
    {:else}
      <button
        onclick={async () => {
          await authClient.signIn.social({
            provider: "github",
          });
        }}
      >
        Continue with github
      </button>
    {/if}
  </div>
</div>
