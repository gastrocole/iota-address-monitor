<script lang="ts">
	import { removeAllAddressesFromStorage } from '../../stores/AddressApi';

	export let onSuccess: () => void;

	const onClick = () => {
		removeAllAddressesFromStorage().then(() => {
			if (onSuccess) {
				onSuccess();
			}
		});
	};
</script>

<button type="button" class="btn btn-danger button" on:click={onClick}> Remove all addresses </button>

<style>
	.button {
		width: 100%;
	}
</style>
