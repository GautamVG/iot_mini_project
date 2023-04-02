<script lang='ts'>

    import { fade } from "svelte/transition";

    export let spot: Spot;

</script>

<div class="rounded-lg p-8 flex flex-col items-center justify-center w-40 relative overflow-hidden" >

    <!-- Layer beneath the text content -->
    <div 
        class="flipper absolute w-full h-full -z-10"
        class:bg-primary={!spot.occupied}
        class:bg-error={spot.occupied}
        class:occupied={spot.occupied}
    ></div>
    
    <!-- Text content -->
    <p class="text-md text-primary-content">{spot.name}</p>
    {#if spot.occupied}
        <p class="text-sm text-secondary-content" in:fade>OCCUPIED</p>
    {:else}
        <p class="text-sm text-secondary-content" in:fade>FREE</p>
    {/if}

</div>

<style>

    .flipper {
        perspective: 1000px;
        transition: transform 0.8s, background-color 0.5s;
    }

    .occupied {
        transform: rotateY(180deg);
    }

</style>