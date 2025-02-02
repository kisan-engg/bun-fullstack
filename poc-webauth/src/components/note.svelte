<script lang="ts">
    import { onDestroy } from "svelte";

    const { note, deleteIt, editMode, editIt } = $props();    
    const noteTime = new Date(note.timestamp).toLocaleString()
    let isOptionsOpened = $state(false);

    const openMenu = (event: Event) => {
        event.stopPropagation()
        isOptionsOpened = true
        document.body.addEventListener('click', closeMenu)
    };
    const closeMenu = (event: Event) => {
        event.stopPropagation()
        isOptionsOpened = false
        document.body.removeEventListener('click', closeMenu)
    }
    const toggleMenu = (event: Event) =>  {
        isOptionsOpened? closeMenu(event) : openMenu(event)
    }
    onDestroy(() => {
        document.body.removeEventListener('click', closeMenu)
    })
</script>
 
 <div class="flex flex-col justify-between bg-gray-300 dark:bg-gray-900 dark:border-gray-700 rounded-lg border border-gray-300 mb-6 py-5 px-4">
    <div>
        <h4 class="text-gray-800 dark:text-gray-400 font-bold mb-3">{note.subject}</h4>
        <p class="text-gray-800 dark:text-gray-400 text-sm">{note.text}</p>
    </div>
    <div>
        <div class="flex items-center justify-between text-gray-800 dark:text-gray-100">

            <p class="text-sm text-gray-500 dark:text-gray-400">{noteTime}</p>
            
            <div class="block relative">
                <button onclick={toggleMenu} disabled={editMode}
                    id="noteOptionButton" aria-label="note_options" 
                    class="inline-flex self-center items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800 dark:focus:ring-gray-600" 
                    type="button">
                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 4 15">
                    <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>
                    </svg>
                </button>
                {#if isOptionsOpened}
                <div id="noteOptionsDiv" class="absolute -top-14 right-10 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-40 dark:bg-gray-800 dark:divide-gray-600">
                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="noteOptionsList">
                        <li>
                            <button 
                                onclick={editIt} 
                                type="button" 
                                class="flex flex-row w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-gray-200">Edit</button>
                        </li>
                        <li>
                            <button 
                                onclick={deleteIt} 
                                type="button" 
                                class="flex flex-row w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-gray-200">Delete</button>
                        </li>
                    </ul>
                </div>
                {/if}
            </div>
        </div>
    </div>
    
</div>