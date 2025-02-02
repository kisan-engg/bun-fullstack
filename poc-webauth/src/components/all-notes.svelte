<script lang="ts">
    import type { NoteInfo } from "../lib/notes";
    import Note from "./note.svelte";
    const { notes, deleteNote, editMode, editNote } = $props();
    let editIndex = $state(-1);
    const enableEdit = (index: number, note: NoteInfo) => {
        editIndex = index;
        editNote(true, {note, index})
    }
</script>

<div class="max-w-md mx-auto mt-5 mb-5">
    {#each notes as note, index}
        {#if !(editMode && editIndex === index)}
        <Note 
            {note}
            deleteIt={() => deleteNote(index, note.id)} 
            editIt={() => enableEdit(index, note)}
            {editMode}
        />
        {/if}
    {/each}
</div>
