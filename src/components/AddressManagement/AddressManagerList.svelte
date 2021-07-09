<script>
	import { removeAddressFromStorage } from '../../lib/AddressApi';

	export let data;
	export let onRemoveComplete;

	const onClick = (address) => {
		removeAddressFromStorage(address)
			.then(() => {
				if (onRemoveComplete) {
					onRemoveComplete();
				}
			})
			.catch();
	};
</script>

<table class="h-50 table">
	<thead>
		<tr>
			<th scope="col">Address</th>
			<th scope="col">Controls</th>
		</tr>
	</thead>
	<tbody>
		{#each data as row}
			{#if row?.bech32}
				<tr>
					<td class="col-sm">{row.bech32}</td>
					<td
						><button type="button" class="btn btn-danger button btn-sm" on:click={() => onClick(row.bech32)}
							>Remove</button
						></td
					>
				</tr>
			{/if}
		{/each}
	</tbody>
</table>

<style>
	td {
		max-width: 150px;
		word-wrap: break-word;
	}
</style>
