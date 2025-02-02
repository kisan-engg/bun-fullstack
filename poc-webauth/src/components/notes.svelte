<script lang="ts">
    import { Notebook, type NoteInfo, type NoteOperationInfo, } from "../lib/notes";
    import AddNote from "./add-note.svelte";
    import AllNotes from "./all-notes.svelte";

    let notes: NoteInfo[] = $state([]);
    let editMode = $state(false)

    const notebook = Notebook()
    
    const getNotes = async() => { notes = await notebook.get()}
    const addNote = async(noteInfo: Partial<NoteInfo>) => {         
        const addedNote = await notebook.add(noteInfo)
        notes.unshift(addedNote)
        changeSaveMode(false)
    }
    const deleteNote = async(index: number, noteId: number) => { 
        await notebook.delete(noteId)
        notes.splice(index, 1)

    }  
    const updateNote = async(updatedInfo: NoteOperationInfo) => { 
        const updatedNote =  await notebook.udpate(updatedInfo.note) 
        notes.splice(updatedInfo.index, 1, updatedNote)
        editNote(false)
    }

    // svelte-ignore non_reactive_update
    let changeSaveMode: (enabled: boolean, activeNote?: NoteOperationInfo) => void;    
    const editNote = (enable: boolean, activeNote?: NoteOperationInfo) => {
        editMode = enable
        changeSaveMode(enable, activeNote)
    }
    /*  */
    getNotes()
    /*  */
</script>

<AddNote 
    {addNote}
    {editMode}
    {editNote}
    bind:changeSaveMode={changeSaveMode}   
    {updateNote}  
/>
<AllNotes {notes} {deleteNote} {editMode} {editNote}/>
