<script lang="ts">
	import { SingleNodeClient } from '@iota/iota.js'
	const client = new SingleNodeClient("https://chrysalis-nodes.iota.org");

	let info;

	async function run() {

    	info = await client.info();
	}

	run()
    	.then()
    	.catch((err) => console.error(err));

</script>

<main>
	<h1>Node Info</h1>
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
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
