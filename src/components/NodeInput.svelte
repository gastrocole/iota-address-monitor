<script lang="ts">
	import { endpoint } from '../stores/nodeStore';
    import { getNodeEndpointFromStorage, setNodeEndpointInStateAndStorage } from '../lib/NodeApi'

    let input;

    getNodeEndpointFromStorage().then((value) => {
        input = value;
        setEndpoint();
    });

    const setEndpoint = () => {
        console.log("setEndpoint: ", input);
        endpoint.set(input);
        setNodeEndpointInStateAndStorage(input);
        console.log("setEndpoint: ", input);
    }

    endpoint.subscribe((value)=> {
        console.log('Endpoint: ', value);
        input = value;
    });

</script>

<main>
	<h3>Node endpoint</h3>
    <form on:submit|preventDefault={setEndpoint}>
    <label for="endpoint">Enter endpoint URL:</label>
    <input id="endpoint" type="text" bind:value={input} />
  </form>
</main>

<style>
</style>
