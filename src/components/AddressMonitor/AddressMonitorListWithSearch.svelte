<script lang='ts'>
    import AddressMonitorList from "./AddressMonitorList.svelte";
    import { onMount } from 'svelte';
    import { lastUpdate } from "../../stores/nodeStore";
    export let data;

    
    let searchSubset = data;
    let inputValue;
    let searchTerm = '';
    let errorMessage = 'No results found';

    const search = () => {
        searchSubset = data.filter((addressObject) => {
            let addressString: string = addressObject.bech32;
            let balanceString: string = String(addressObject.balance);
            return addressString.includes(searchTerm) || balanceString == searchTerm;
        })
    }

    lastUpdate.subscribe(() => {
      //search();
    })

	onMount(async () => {
		search();
	});

    const onSubmit = () => {
        searchTerm = inputValue;
    }
    
    $: data && search();
    

</script>

<form on:submit|preventDefault={onSubmit} class="mb-3">
    <input type="text" class="form-control {searchSubset.length < 1 && "is-invalid" }" id="addressInput" bind:value={inputValue}>
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