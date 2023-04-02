<script lang='ts'>

    import { fade } from "svelte/transition";

    export let spot: Spot;
    export let ticket: ParkingTicket | null;
// $: if (spot.occupied && ticket == null) throw new Error("pass proper props");

</script>

<div class="rounded-lg px-4 py-12 flex flex-col items-center justify-center w-full relative overflow-hidden" >

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
        {#if ticket}
            <p class="text-sm mt-4 text-center" in:fade>Parked at: <br /> {ticket.start_time}</p>
            <p class="text-sm" in:fade>Fee: {ticket.parking_fee}</p>
        {/if}
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