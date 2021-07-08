<script lang="ts">
	import { endpoint } from '../../stores/nodeStore';
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

<div>
    {#if info}
    <h4>Node details</h4>
	<ul class="list-group">
  		<li class="list-group-item">Name: {info?.name ?? ""}</li>
  		<li class="list-group-item">Version: {info?.version ?? ""}</li>
  		<li class="list-group-item">Network Id: {info?.networkId ?? ""}</li>
  		<li class="list-group-item">Is Healthy: {info?.isHealthy ?? ""}</li>
	</ul>
    {:else if info = null}
    <h4>Unable to connect to node</h4>
    {/if}
</div>

<style>
	div {
		margin-bottom: 16px;
	}
</style>
