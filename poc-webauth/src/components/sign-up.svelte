<script lang="ts">
    import { signUp } from "../lib/auth-client";

    const { alreadyRegistered } = $props();

    let signUpForm = $state({
        name: "",
        email: "",
        password: ""
    })

    const userSignUp = async (event: { preventDefault: () => void; }) => {
        if(event.preventDefault)
            event.preventDefault();
        const { data, error } = await signUp.email({...signUpForm});
    }
</script>
<form class="max-w-md mx-auto" onsubmit={userSignUp}>
    <div class="relative z-0 w-full mb-5 group">
        <input
            type="email"
            name="user_email"
            id="user_email"
            bind:value={signUpForm.email}
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
        />
        <label
            for="user_email"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Email address</label
        >
    </div>
    <div class="relative z-0 w-full mb-5 group">
        <input
            type="password"
            name="user_password"
            id="user_password"
            bind:value={signUpForm.password}
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            minlength="8"
            required
        />
        <label
            for="user_password"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Password</label
        >
    </div>
    <div class="relative z-0 w-full mb-5 group">
        <input
            type="text"
            name="user_first_name"
            id="user_first_name"
            bind:value={signUpForm.name}
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            minlength="3"
            required
        />
        <label
            for="user_first_name"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Name</label
        >
    </div>
    <div class="grid grid-cols-2 gap-8">
        <div class="relative z-0 w-full mb-5 group ms-2">
            <button 
                onclick={alreadyRegistered}
                type="button" 
                class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-0.5 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">
                Already Registered
            </button>
            <p class="text-sm text-gray-400 dark:text-gray-600 ms-0.5">Move to Sign-In!</p>
        </div>
        <div class="relative z-0 w-full mb-5 group text-right">
            <button 
                type="submit" 
                class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">
                Register
            </button>
        </div>
    </div>
    
</form>
