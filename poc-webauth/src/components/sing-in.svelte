<script lang="ts">
    import { signIn } from "../lib/auth-client";

    let username = $state("");
    let password = $state("");
    const { registerNow } = $props()
    const userSignIn = (event: { preventDefault: () => void; }) => {
        if(event.preventDefault)
            event.preventDefault();
        signIn.email({
                email: username,
                password: password,
            }
        );
    }
</script>

<form class="max-w-md mx-auto" onsubmit={userSignIn}>
    <div class="relative z-0 w-full mb-5 group">
        <input
            type="email"
            bind:value={username}
            name="signin_email"
            id="singin_email"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            minlength="4"
        />
        <label
            for="singin_email"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Email address</label
        >
    </div>
    <div class="relative z-0 w-full mb-5 group">
        <input
            type="password"
            bind:value={password}
            name="signin_password"
            id="singin_password"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            minlength="8"
        />
        <label
            for="singin_password"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Password</label
        >
    </div>
    <div class="grid grid-cols-2 gap-8">
        <div class="relative z-0 w-full mb-5 group">
            <button 
                onclick={registerNow}
                type="button" 
                class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ms-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">
                Register
            </button>
            <p class="text-sm text-gray-400 dark:text-gray-600 ms-2">If not a member!</p>
        </div>
        <div class="relative z-0 w-full mb-5 group text-right">
            <button 
                type="submit" 
                class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">
                Submit
            </button>
        </div>
    </div>
    
</form>
