<script lang="ts">
    import Note from "./note.svelte";
    const { notes, deleteNote, editMode, noteMode } = $props();
    
    const deleteIt = (index: number) => {
        deleteNote(index);
    };
</script>

<div class="max-w-md mx-auto mt-5 mb-5">
    {#each notes as note, index}
        <Note 
            {note}
            deleteIt={() => deleteIt(index)} 
            enableEdit={() => noteMode(true, index)}
            {editMode}
        />
    {/each}
</div>
