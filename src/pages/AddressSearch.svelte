<script lang="ts">
	import AddressMonitorListWithSearch from '../components/AddressMonitor/AddressMonitorListWithSearch.svelte';
	import PageTitle from '../components/common/PageTitle.svelte';
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
	<PageTitle title="Address Search" />
	<AddressMonitorListWithSearch {data} />
</div>

<style>
</style>
