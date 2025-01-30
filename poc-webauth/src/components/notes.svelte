<script lang="ts">
    import { deleteIt, getActive, getIt, postIt, setActive, updateIt, type NoteInfo } from "../lib/notes";
    import AddNote from "./add-note.svelte";
    import AllNotes from "./all-notes.svelte";

    let notes = $state([] as Partial<NoteInfo>[]);
    let editMode = $state(false)
    
    const getNotes = async () => {
        notes = await getIt()
    };
    let nIndex:number = 0;
    const saveNote = async (noteInfo: NoteInfo) => {
        let note;
        if(editMode) {
            note = await updateIt(nIndex, noteInfo)            
            changeEditMode(false)
        }
        else
            note = await postIt(noteInfo)
        notes.splice(nIndex, 0, note)
    };
    const deleteNote = async(index: number) => {
        await deleteIt(index);
        notes.splice(index, 1)
    }    
    // svelte-ignore non_reactive_update
    let changeMode: (enabled: boolean) => void;
    const noteMode = (editEnabled: boolean, index?:number) => {
        if(editEnabled) {
            nIndex = index??-1;
            setActive(notes.splice(nIndex, 1)[0])
        } else {
            notes.splice(nIndex, 0, getActive())
            nIndex = 0;
        }
        changeEditMode(editEnabled)
    }
    const changeEditMode = (enabled: boolean) => {
        editMode = enabled;
        changeMode(enabled);
    }
    /*  */
    getNotes();
</script>

<AddNote bind:changeMode={changeMode} {saveNote} {editMode} {noteMode}/>
<AllNotes {notes} {deleteNote} {editMode} {noteMode}/>
