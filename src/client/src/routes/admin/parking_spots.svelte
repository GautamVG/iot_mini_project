<script lang='ts'>

    import ParkingSpot from "./parking_spot.svelte";

    export let spots: Array<Spot>;
    export let tickets: Array<ParkingTicket>;

    let data: Array<{
        spot: Spot,
        ticket: ParkingTicket | null
    }>;

    $: data = spots.map(spot => {
        let ticket = null;
        if (spot.occupied)
            ticket = tickets.find(t => t.parking_spot_name == spot.name) ?? null;
        return { spot, ticket };
    });

</script>

<div class="grid grid-cols-3 gap-16 w-full">
    {#each data as datum}
        <ParkingSpot 
            spot={datum.spot} 
            ticket={datum.ticket} 
        />
    {/each}
</div>