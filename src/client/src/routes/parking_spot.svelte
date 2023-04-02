<script lang='ts'>

    import { fade } from "svelte/transition";

    export let spot: Spot;

</script>

<div class="rounded-lg px-8 py-16 flex flex-col items-center justify-center w-full relative overflow-hidden" >

    <!-- Layer beneath the text content -->
    <div 
        class="flipper absolute w-full h-full -z-10"
        class:bg-primary={!spot.occupied}
        class:bg-error={spot.occupied}
        class:occupied={spot.occupied}
    ></div>
    
    <!-- Text content -->
    <p class="text-lg font-bold">{spot.name}</p>
    {#if spot.occupied}
        <p class="text-sm" in:fade>OCCUPIED</p>
    {:else}
        <p class="text-sm" in:fade>FREE</p>
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