<script lang="ts">
    import { getActive, type NoteInfo } from "../lib/notes";
    
    let {saveNote, changeMode = $bindable(), editMode, noteMode } = $props()

    const note = $state({text:"", subject: ""})
    const resetNote = (iNote?: Partial<NoteInfo> | undefined) => {
        note.text = iNote?.text ||  ""
        note.subject = iNote?.subject || ""
    }

    const addNote = (event: Event) => {
        event.preventDefault();
        saveNote({
            ...note, 
            timestamp: new Date().getTime()
        })
        resetNote()
    }
    /*  */
    changeMode = (editEnabled: boolean) => editEnabled? resetNote(getActive()): resetNote()

</script>

<form class="max-w-md mx-auto" onsubmit={addNote}>
    <div class="relative z-0 w-full mt-2 mb-5 group">
        <input
            bind:value={note.subject}
            type="text"
            name="note_subject"
            id="note_subject"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=""
            minlength="3"
            required
        />
        <label
            for="note_subject"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Subject</label
        >
    </div>
    <div class="relative z-0 w-full mt-2 mb-5 group">
        <textarea
            id="message"
            bind:value={note.text}
            rows="2"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            minlength="4"
            placeholder=""
            required
        ></textarea>
        <label
            for="floating_email"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Note</label
        >
    </div>
    <div class="flex flex-row-reverse justify-between">
        <button
            type="submit"
            class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:bg-gray-800 dark:focus:ring-gray-800"
        >
            Save
        </button>
        {#if editMode}
        <button type="button" onclick={() => noteMode(false)}
            class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:bg-gray-800 dark:focus:ring-gray-800"
        >
            Cancel
        </button>
        {/if}
    </div>
</form>