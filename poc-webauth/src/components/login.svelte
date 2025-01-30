<script lang="ts">
    import SignUp from "./sign-up.svelte";
    import SingIn from "./sing-in.svelte";

    let registered = $state(false)
    const alreadyRegistered = () => {
        registered = true
    }
    const registerNow = () => {
        registered = false
    }
</script>

{#if registered}
    <SingIn {registerNow}/>
{:else}
    <SignUp alreadyRegistered={alreadyRegistered}/>
{/if}

