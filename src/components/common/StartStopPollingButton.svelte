<script lang="ts">
	import { registerAddressPollingService, stopAddressPollingService } from '../../services/polling';
	import { isPolling } from '../../stores/nodeStore';

	let isCurrentyPolling = false;

	isPolling.subscribe((value) => {
		isCurrentyPolling = value;
	});
</script>

{#if isCurrentyPolling}
	<button on:click={stopAddressPollingService} class="btn btn-danger">Stop polling</button>
{:else}
	<button on:click={registerAddressPollingService} class="btn btn-success">Start polling</button>
{/if}

<style>
	button {
		width: 100%;
	}
</style>
