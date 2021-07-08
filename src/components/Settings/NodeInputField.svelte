<script lang="ts">
	import { endpoint } from '../../stores/nodeStore';
    import { getNodeEndpointFromStorage, setNodeEndpointInStateAndStorage } from '../../lib/NodeApi'

    let input;
    let errorMessage = '';

    getNodeEndpointFromStorage().then((value) => {
        input = value;
        setEndpoint();
    });

    const setEndpoint = () => {
        endpoint.set(input);
        setNodeEndpointInStateAndStorage(input);
    }

    endpoint.subscribe((value)=> {
        input = value;
    });

</script>

<form on:submit|preventDefault={setEndpoint} class="mb-3">
    <label for="addressInput" class="form-label h4">Update node endpoint URL</label>
    <input type="text" class="form-control {errorMessage && "is-invalid" }" id="addressInput" bind:value={input}>
    <div class="invalid-feedback">
      {errorMessage}
    </div>
    <button type="submit" class="btn btn-success button">Update URL</button>
</form>

<style>
    button {
        width: 100%;
        margin-top: 8px;
    }
</style>
