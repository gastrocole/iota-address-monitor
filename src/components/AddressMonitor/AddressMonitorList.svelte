<script lang="ts">
	import { lastUpdate } from '../../stores/store';
	import type IAddressObject from '../../types/AddressObject.interface';
	import { convertBalance } from '../../utils/convertBalance';

	export let data: IAddressObject[];
	let lastUpdateString: string;

	lastUpdate.subscribe((value) => {
		lastUpdateString = value;
	});
</script>

<table class="table caption-top">
	<caption>Last updated: {lastUpdateString}</caption>
	<thead>
		<tr>
			<th scope="col">Address</th>
			<th scope="col">Balance</th>
		</tr>
	</thead>
	<tbody>
		{#each data as row}
			<tr>
				<td class="col-sm">{row.bech32}</td>
				<td class="col-sm">{convertBalance(row.balance)}</td>
			</tr>
		{/each}
	</tbody>
</table>

<style>
	caption {
		caption-side: top;
	}

	td {
		max-width: 150px;
		word-wrap: break-word;
	}
</style>
