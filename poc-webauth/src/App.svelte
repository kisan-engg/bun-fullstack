<script lang="ts">
  import AddNote from "./components/add-note.svelte";
  import Login from "./components/login.svelte";
  import Navigation from "./components/navigation.svelte";
  import Notes from "./components/notes.svelte";
  import { useSession } from "./lib/auth-client";

  const session = useSession();
  const isSignedIn = $derived(Boolean($session && $session?.data));
  const userInfo = $derived($session?.data?.user);
</script>

<Navigation {isSignedIn} userInfo={userInfo}/>

<main class="p-2 m-2">
  {#if isSignedIn}    
    <Notes />
  {:else}
    <Login />
  {/if}
</main>
