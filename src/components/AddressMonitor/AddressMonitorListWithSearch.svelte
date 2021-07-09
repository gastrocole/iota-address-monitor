<script lang="ts">
	import { onMount } from 'svelte';
	import { getAddressObjectsFromWallet } from '../../services/wallet';
	import AddressMonitorList from './AddressMonitorList.svelte';

	export let data;

	let searchSubset = data;
	let inputValue;
	let searchTerm = '';
	let errorMessage = 'No results found';

	onMount(async () => {
		reload();
	});

	const onSubmit = () => {
		searchTerm = inputValue;
		reload();
	};

	const reload = async () => {
		searchSubset = await getAddressObjectsFromWallet(searchTerm);
	};

	$: data && reload();
</script>

<form on:submit|preventDefault={onSubmit} class="mb-3">
	<input
		type="text"
		class="form-control {searchSubset.length < 1 && 'is-invalid'}"
		id="addressInput"
		bind:value={inputValue}
	/>
	<div class="invalid-feedback">
		{errorMessage}
	</div>
	<button type="submit" class="btn btn-success button">Search</button>
</form>
<AddressMonitorList data={searchSubset} />

<style>
	button {
		width: 100%;
		margin-top: 8px;
	}
</style>
