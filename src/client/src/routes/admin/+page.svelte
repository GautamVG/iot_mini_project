<script lang='ts'>

	import { onMount } from "svelte";
    import { fade } from "svelte/transition";
    import { Shadow } from "svelte-loading-spinners";

	import ParkingSpots from "./parking_spots.svelte";
	import Stats from "./stats.svelte";
	import ParkingTimeHistogram from "./parking_time_histogram.svelte";

    let count = 0;
    $: ready = count >= 3;

    let config: Config | null;
    let spots: Array<Spot> = [];
    let tickets: Array<ParkingTicket> = [];
    let receipts: Array<ParkingReceipt> = [];

    onMount(() => {
        init();
        let timer = setInterval(update, 10);
        return () => clearInterval(timer);
    });

    async function init() {
        const res = await fetch("/api/config");
        config = await res.json();
    }

    function update() {
        updateSpots();
        updateTickets();
        updateReceipts();
    }

    async function updateSpots() {
        console.log("hi");
        const res = await fetch("/api/spots/list");
        spots = await res.json();
        count++;
    }

    async function updateTickets() {
        console.log("hiaa");
        const res = await fetch("/api/tickets/list");
        tickets = await res.json();
        count++;
    }

    async function updateReceipts() {
        console.log("hiee");
        const res = await fetch("/api/receipts/list");
        receipts = await res.json();
        count++;
    }


</script>

{#if !ready}

    <!-- Loader -->
    <div class="w-screen h-screen flex justify-center items-center">
        <Shadow size={48} />
    </div>

{:else}

    <!-- Outer Container -->
    <div class="flex flex-col gap-8 items-center mx-auto my-16 w-1/2" transition:fade>

        <h1 class="text-3xl">Current parking fees: {config?.parking_fee} rs. / minute</h1>

        <section>
            <Stats {receipts} />
        </section>

        <section>
            <h1 class="section-title">Parking spots</h1>
            <ParkingSpots {spots} {tickets} />
        </section>

        <section>
            <h1 class="section-title">Parking times</h1>
            <ParkingTimeHistogram {receipts} />
        </section>

    </div>

{/if}

<style lang='postcss'>

    section {
        @apply w-full my-8;
    }

    .section-title {
        @apply text-3xl mb-8;
    }

</style>