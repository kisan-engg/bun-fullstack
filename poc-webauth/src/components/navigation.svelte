<script lang="ts">
    import { onDestroy } from "svelte";
    import { signOut } from "../lib/auth-client";

    let isMenuOpened = $state(false)
    const { isSignedIn, userInfo } = $props();

    const userSignOut = async() => {
        await signOut();
    }

    const openMenu = (event: Event) => {
        event.stopPropagation()
        isMenuOpened = true
        document.body.addEventListener('click', closeMenu)
    };
    const closeMenu = (event: Event) => {
        event.stopPropagation()
        isMenuOpened = false
        document.body.removeEventListener('click', closeMenu)
    }
    const toggleMenu = (event: Event) =>  {
        isMenuOpened? closeMenu(event) : openMenu(event)
    }
    onDestroy(() => {
        document.body.removeEventListener('click', closeMenu)
    })    
    
</script>

<nav class="bg-white border-gray-200 dark:bg-gray-900">
    <div class="max-w-screen-xl grid grid-cols-3 gap-4 mx-auto p-2">
        <div class="flex items-center space-x-3 rtl:space-x-reverse">
            <svg height="24" width="60" xmlns="http://www.w3.org/2000/svg">
                <text x="2" y="24" fill="none" stroke="#C0C0C0" font-size="24">K.G.E.</text>
            </svg>
        </div>
        <div class="justify-self-auto text-center">
            <h2 class="text-2xl text-gray-700 dark:text-gray-400">Notes Manager</h2>
        </div>        
        {#if isSignedIn}        
        <div class="block relative justify-self-end place-content-center">
            <div class="flex items-center mr-0.5 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                <button onclick={toggleMenu} type="button" class="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false">
                    <span class="sr-only">Open user menu</span>
                    <div class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                        <svg class="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                    </div>
                </button>               
            </div>
            <!-- Dropdown menu -->
            {#if isMenuOpened}
            <div class="absolute right-2 top-12 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-700 dark:divide-gray-600">
                <div class="px-4 py-3">
                <span class="block text-sm text-gray-900 dark:text-white">{userInfo?.name}</span>
                <span class="block text-sm  text-gray-500 truncate dark:text-gray-400">{userInfo?.email}</span>
                </div>
                <ul class="py-2" aria-labelledby="user-menu-button">           
                <li>
                    <button onclick={userSignOut} class="flex flex-row w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</button>
                </li>
                </ul>
            </div>
            {/if}
        </div>
        {/if}        
    </div>
    <hr class="h-px mt-2 mb-3 bg-gray-200 border-0 dark:bg-gray-700">
</nav>



  

        