<script lang="ts">
	import { endpoint } from '../stores/node';
	import { SingleNodeClient } from '@iota/iota.js'

    let endpointValue;
    let info;

	async function getNodeInfo() {
		const client = new SingleNodeClient(endpointValue);
    	info = await client.info();
	}

    endpoint.subscribe((value)=> {
        console.log('Endpoint: ', value);
        endpointValue = value;
        if(value) {
            getNodeInfo();
        }
    });
	

</script>

<main>
	<h2>Node Info</h2>
	<p>Name: {info?.name ?? ""}</p>
	<p>Version: {info?.version ?? ""}</p>
	<p>Is Healthy: {info?.isHealthy ?? ""}</p>
	<p>Network Id: {info?.networkId ?? ""}</p>
	<p>Latest Milestone Index: {info?.latestMilestoneIndex ?? ""}</p>
	<p>Confirmed Milestone Index: {info?.confirmedMilestoneIndex ?? ""}</p>
	<p>Pruning Index: {info?.pruningIndex ?? ""}</p>
	<p>Features: {info?.features ?? ""}</p>
	<p>Min PoW Score: {info?.minPoWScore ?? ""}</p>
</main>

<style>
</style>
