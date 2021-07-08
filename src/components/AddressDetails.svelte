<script lang="ts">
	import { endpoint } from '../stores/nodeStore';
	import { SingleNodeClient } from '@iota/iota.js'

    let endpointValue;
    let addressDetails = undefined;

	async function getNodeInfo() {
		const client = new SingleNodeClient(endpointValue);
    	addressDetails = await client.address("iota1qpqas38m5flnr4cl8vydc8ktu3jy4hhhay89ztdkkgxu0qkm4wuz7wxssz2").catch(()=>{addressDetails = null});
    }

    endpoint.subscribe((value)=> {
        endpointValue = value;
        if(value) {
            getNodeInfo();
        }
    });
	

</script>

<main>
    {#if addressDetails}
    <h3>Address Details</h3>
    <p>{JSON.stringify(addressDetails)}</p>
    {:else if addressDetails = null}
    <h2>Unable to find address details</h2>
    {/if}
	
</main>

<style>
    p { max-width: 300px; }
</style>
