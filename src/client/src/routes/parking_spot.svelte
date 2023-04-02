<script lang='ts'>

    import { fade } from "svelte/transition";

    export let spot: Spot;

</script>

<div 
    class="rounded-lg p-8 flex flex-col items-center justify-center transition-colors w-40"
    class:bg-primary={!spot.occupied}
    class:bg-error={spot.occupied}
>
    <p class="text-md text-primary-content">{spot.name}</p>
    {#if spot.occupied}
        <p class="text-sm text-secondary-content" in:fade>OCCUPIED</p>
    {:else}
        <p class="text-sm text-secondary-content" in:fade>FREE</p>
    {/if}
</div>