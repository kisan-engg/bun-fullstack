<script lang="ts">
    import { Notebook, type NoteInfo, type NoteOperationInfo } from "../lib/notes";
    
    let {addNote, editMode, editNote, changeSaveMode = $bindable(), updateNote } = $props()

    const noteNow = $state({text:"", subject: ""})
    const getNoteSnapShot = () => {
        return $state.snapshot(noteNow)
    }
    const resetNote = (iNote?: Partial<NoteInfo>) => {
        noteNow.text = iNote?.text ||  ""
        noteNow.subject = iNote?.subject || ""
    }

    const notebook = Notebook()
    let currentNote: NoteOperationInfo;
    const saveNote = (event: Event) => {
        event.preventDefault();
        if(editMode && currentNote) {
            const { index, note} = currentNote;
            const updatedInfo: NoteOperationInfo = { index, note: { ...note, ...getNoteSnapShot() }}
            updateNote(updatedInfo)

        } else {
            addNote(getNoteSnapShot())
        }
    }
    
    changeSaveMode = (editEnabled: boolean, activeNote?:NoteOperationInfo) => {
        if(editEnabled && activeNote) {
            currentNote = activeNote;            
            resetNote(activeNote.note)
        } else {
            resetNote()
        }
    }

</script>

<form class="max-w-md mx-auto" onsubmit={saveNote}>
    <div class="relative z-0 w-full mt-2 mb-5 group">
        <input
            bind:value={noteNow.subject}
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
            bind:value={noteNow.text}
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
        <button type="button" onclick={() => editNote(false)}
            class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:bg-gray-800 dark:focus:ring-gray-800"
        >
            Cancel
        </button>
        {/if}
    </div>
</form>