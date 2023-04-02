<script lang='ts'>

	import { onMount } from "svelte";
    import { fade } from "svelte/transition";
    import { Shadow } from "svelte-loading-spinners";

    let ready = false;
    let receipts: Array<ParkingReceipt> = [];

    onMount(() => {
        let timer = setInterval(update, 1000);
        return () => clearInterval(timer);
    });

    async function update() {
        const res = await fetch("/api/receipts/list_payable");
        receipts = await res.json();
        ready = true;
    }

    function handleClick(id: number) {
        return async () => {
            const res = await fetch(`/api/receipts/pay?id=${id}`);
            if (res.status == 200) 
                alert("Payed Succeessfully");
            else {
                const err_msg = (await res.json()).description;
                alert("There was an issue " + err_msg);
            }
        }
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
        <h1 class="text-3xl">Pay up</h1>
        {#if receipts.length == 0}
            <p class="text-lg">No receipts yet</p>
        {:else}
            <table class="table w-3/4" in:fade>
                <thead>
                    <tr>
                        <th> Parking Spot </th>
                        <th> Start time </th>
                        <th> End time </th>
                        <th> Time parked </th>
                        <th> Parking fees </th>
                        <th> Amount </th>
                        <th> </th>
                    </tr>
                </thead>
                <tbody>
                    {#each receipts as receipt}
                        <tr transition:fade>
                            <td>{receipt.parking_spot_name}</td>
                            <td>{receipt.start_time}</td>
                            <td>{receipt.end_time}</td>
                            <td>{receipt.time_parked}</td>
                            <td>{receipt.parking_fee}</td>
                            <td>{receipt.amount}</td>
                            <td>
                                <button on:click={handleClick(receipt.id)} class="btn btn-primary">Pay</button>
                            </td>
                        </tr>
                    {/each}
                </tbody>
            </table>
        {/if}
    </div>

{/if}