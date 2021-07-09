<script lang="ts">
	import AddressMonitorList from '../components/AddressMonitor/AddressMonitorList.svelte';
	import PageTitle from '../components/common/PageTitle.svelte';
	import StartStopPollingButton from '../components/common/StartStopPollingButton.svelte';
	import { getAllAddressesFromStorage } from '../stores/AddressApi';
	import { lastUpdate } from '../stores/store';

	let data: any[] = [];

	lastUpdate.subscribe(() => {
		reloadData();
	});

	async function reloadData() {
		data = await getAllAddressesFromStorage();
	}

	reloadData();
</script>

<div>
	<PageTitle title="Address Monitor" />
	<StartStopPollingButton />
	<AddressMonitorList {data} />
</div>

<style>
</style>
