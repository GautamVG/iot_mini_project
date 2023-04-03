<script lang='ts'>
	import { onMount } from "svelte";
    import { fade } from "svelte/transition";
    import { Shadow } from "svelte-loading-spinners";

    import ParkingSpot from "./parking_spot.svelte";

    let ready = false;
    let config: Config | null;
    let spots: Array<Spot> = [];

    onMount(() => {
        init();
        let timer = setInterval(update, 10);
        return () => clearInterval(timer);
    });

    async function init() {
        const res = await fetch("/api/config");
        config = await res.json();
    }

    async function update() {
        const res = await fetch("/api/spots/list");
        spots = await res.json();
        ready = true;
    }

</script>

{#if !ready}

    <!-- Loader -->
    <div class="w-screen h-screen flex justify-center items-center">
        <Shadow size={48} />
    </div>

{:else}

    <!-- Outer Container -->
    <div class="flex flex-col gap-8 items-center mx-auto my-16" transition:fade>
        <h1 class="text-3xl">Current parking layout</h1>
        <h2 class="text-xl">Parking fees: {config?.parking_fee} rs. / minute</h2>

        <div class="grid grid-cols-3 gap-16 w-1/2">
            {#each spots as spot}
                <ParkingSpot {spot} />
            {/each}
        </div>

    </div>

{/if}