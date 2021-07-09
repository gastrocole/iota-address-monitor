<script lang="ts">
	import AddAddressInputField from '../components/AddressManagement/AddAddressInputField.svelte';
	import AddressManagerList from '../components/AddressManagement/AddressManagerList.svelte';
	import RemoveAllAddressesButton from '../components/AddressManagement/RemoveAllAddressesButton.svelte';
	import PageTitle from '../components/common/PageTitle.svelte';
	import { getAddressObjectsFromWallet } from '../services/wallet';
	import { lastUpdate } from '../stores/store';

	let data: any[] = [];

	lastUpdate.subscribe(() => {
		reloadData();
	});

	async function reloadData() {
		data = await getAddressObjectsFromWallet();
	}

	reloadData();
</script>

<div>
	<PageTitle title="Address Management" />

	<AddAddressInputField onSuccess={reloadData} />

	{#if data.length > 0}
		<h4>Remove IOTA addresses</h4>
		<RemoveAllAddressesButton onSuccess={reloadData} />
		<AddressManagerList {data} onRemoveComplete={reloadData} />
	{/if}
</div>

<style>
</style>
