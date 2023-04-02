<script lang='ts'>
	import { onMount } from "svelte";
    import type { ApexOptions } from 'apexcharts';
    import chart from "$lib/chart";

    let data = "";

    onMount(() => {
        let timer = setInterval(update, 1000);
        return () => clearInterval(timer);
    });

    async function update() {
        const res = await fetch("/api/spots/list");
        data = JSON.stringify(await res.json());
    }

    let options: ApexOptions = {
        chart: {
            type: "bar",
        },
        series: [
            {
                name: "sales",
                data: [30, 10, 35, 50, 49, 60, 70, 91, 125],
            },
        ],
        xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
        },
    };

</script>

{#if data == ""}
    <h1>Loading</h1>
{:else}
    <h1>{data}</h1>
{/if}

<div use:chart={options} />