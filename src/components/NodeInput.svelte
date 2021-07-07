<script lang="ts">
	import { endpoint } from '../stores/nodeStore';

    let input;

    const setEndpoint = () => {
        console.log("setEndpoint: ", input);
        endpoint.set(input);
        console.log("setEndpoint: ", input);
    }

    endpoint.subscribe((value)=> {
        console.log('Endpoint: ', value);
        input = value;
    });

</script>

<main>
	<h2>Node endpoint</h2>
    <form on:submit|preventDefault={setEndpoint}>
    <label for="endpoint">Enter endpoint URL:</label>
    <input id="endpoint" type="text" bind:value={input} />
  </form>
</main>

<style>
</style>
