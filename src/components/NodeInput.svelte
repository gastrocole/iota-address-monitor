<script lang="ts">
	import { endpoint } from '../stores/nodeStore';
    import { getNodeEndpointFromStorage, setNodeEndpointInStateAndStorage } from '../lib/NodeApi'

    let input;

    getNodeEndpointFromStorage().then((value) => {
        input = value;
        setEndpoint();
    });

    const setEndpoint = () => {
        endpoint.set(input);
        setNodeEndpointInStateAndStorage(input);
    }

    endpoint.subscribe((value)=> {
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
