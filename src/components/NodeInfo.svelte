<script lang="ts">
	import { endpoint } from '../stores/nodeStore';
	import { SingleNodeClient } from '@iota/iota.js'

    let endpointValue;
    let info = undefined;

	async function getNodeInfo() {
		const client = new SingleNodeClient(endpointValue);
    	info = await client.info().catch(()=>{info = null});
	}

    endpoint.subscribe((value)=> {
        endpointValue = value;
        if(value) {
            getNodeInfo();
        }
    });
	

</script>

<main>
    {#if info}
    <h3>Node Info</h3>
	<p>Name: {info?.name ?? ""}</p>
	<p>Version: {info?.version ?? ""}</p>
	<p>Is Healthy: {info?.isHealthy ?? ""}</p>
	<p>Network Id: {info?.networkId ?? ""}</p>
	<p>Latest Milestone Index: {info?.latestMilestoneIndex ?? ""}</p>
	<p>Confirmed Milestone Index: {info?.confirmedMilestoneIndex ?? ""}</p>
	<p>Pruning Index: {info?.pruningIndex ?? ""}</p>
	<p>Features: {info?.features ?? ""}</p>
	<p>Min PoW Score: {info?.minPoWScore ?? ""}</p>
    {:else if info = null}
    <h2>Unable to connect to node</h2>
    {/if}
	
</main>

<style>
</style>
