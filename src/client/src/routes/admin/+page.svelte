<script>
	import { onMount } from "svelte";

    let data = "";

    onMount(() => {
        let timer = setInterval(update, 1000);
        return () => clearInterval(timer);
    });

    async function update() {
        const res = await fetch("/api/receipts/list");
        data = JSON.stringify(await res.json());
    }

</script>

{#if data == ""}
    <h1>Loading</h1>
{:else}
    <h1>{data}</h1>
{/if}