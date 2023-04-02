<script lang='ts'>
	import { onMount } from "svelte";
    import { fade } from "svelte/transition";
    import { Shadow } from "svelte-loading-spinners";

    import ParkingSpot from "./parking_spot.svelte";

    let spots: Array<Spot> = [];
    let parking_fee = "7 Rs."; // per minute

    onMount(() => {
        let timer = setInterval(update, 1000);
        return () => clearInterval(timer);
    });

    async function update() {
        const res = await fetch("/api/spots/list");
        spots = await res.json();
    }

</script>

{#if spots.length == 0}

    <!-- Loader -->
    <div class="w-screen h-screen flex justify-center items-center">
        <Shadow size={48} />
    </div>

{:else}

    <!-- Outer Container -->
    <div class="flex flex-col gap-8 items-center mx-auto my-16" transition:fade>
        <h1 class="text-3xl">Current parking layout</h1>
        <h2 class="text-xl">Parking fees: {parking_fee} / minute</h2>

        <div class="grid grid-cols-3 gap-16">
            {#each spots as spot}
                <ParkingSpot {spot} />
            {/each}
        </div>

    </div>

{/if}