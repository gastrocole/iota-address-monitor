<script lang="ts">
	import { SingleNodeClient } from '@iota/iota.js'

	let info;

	async function run() {
	    const client = new SingleNodeClient("https://chrysalis-nodes.iota.org");
    	info = await client.info();
	}

	run()
    	.then()
    	.catch((err) => console.error(err));

</script>

<main>
	<h1>Address Monitor</h1>
</main>

<style>

</style>
