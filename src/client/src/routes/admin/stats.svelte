<script lang='ts'>

    import { fade } from 'svelte/transition';

    export let receipts: Array<ParkingReceipt>;
    
    $: total_parkings = receipts.length; 

    let total_income = 0;
    $: {
        total_income = 0;
        receipts.forEach(receipt => total_income += receipt.payed ? receipt.amount : 0);
    }

    $: stats = [
        {
            figure: total_parkings,
            caption: "Vehicles parked"
        },
        {
            figure: total_income,
            caption: "Amount earned"
        }
    ];

</script>

<div class="grid grid-cols-2 w-full gap-8">

    {#each stats as stat}
        <div class="bg-primary rounded-lg px-16 py-8 flex flex-col items-center gap-4" transition:fade> 
            <div class="text-primary-content text-4xl font-bold">{stat.figure}</div>
            <div class="text-primary-content text-xl">{stat.caption}</div>
        </div>
    {/each}

</div>