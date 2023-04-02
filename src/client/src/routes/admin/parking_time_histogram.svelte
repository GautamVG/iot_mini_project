<script lang='ts'>

    // import { fade } from 'svelte/transition';

    import chart from "$lib/chart";

    import type { ApexOptions } from 'apexcharts';

    export let receipts: Array<ParkingReceipt>;
    
    // Props
    export let bin_start = 0;
    export let bin_gap = 5;
    export let bin_count = 10;
    
    // Generate bin labels
    const bins_labels: Array<string> = [];
    let prev_bin_max = bin_start;
    for (let i = 0; i < bin_count; i++) {
        bins_labels.push(`${prev_bin_max}-${prev_bin_max + bin_gap}`);
        prev_bin_max += bin_gap;
    }

    // Generate data
    const frequencies: Array<number> = [];
    prev_bin_max = bin_start;
    for (let i = 0; i < bin_count; i++) {
        const count = receipts.filter(r => r.time_parked > prev_bin_max && r.time_parked < prev_bin_max + bin_gap).length;
        frequencies.push(count);
        prev_bin_max += bin_gap;
    }

    let options: ApexOptions = {
        chart: {
            type: "bar",
        },
        series: [
            {
                name: "Parking times",
                data: frequencies
            },
        ],
        xaxis: {
            categories: bins_labels
        },
    };

</script>

<div 
    use:chart={options} 
    class="w-full"
/>