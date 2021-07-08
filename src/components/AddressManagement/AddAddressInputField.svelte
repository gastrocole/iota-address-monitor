<script lang='ts'>
    import { addAddressToWallet } from '../../services/wallet';

    export let onSuccess: () => void;

    let value;
    let errorMessage;

    const onSubmit = () => {

        if(!value) {
            errorMessage = "Please enter an address";
            return;
        }

        addAddressToWallet(value)
        .then(() => {
            if(onSuccess) {
                value = '';
                errorMessage = null;
                onSuccess();
            }
        })
        .catch((error) => {
            errorMessage = error;
        });
    }
</script>

<form on:submit|preventDefault={onSubmit} class="mb-3">
    <label for="addressInput" class="form-label h4">Add an IOTA address</label>
    <input type="text" class="form-control {errorMessage && "is-invalid" }" id="addressInput" bind:value={value}>
    <div class="invalid-feedback">
      {errorMessage}
    </div>
    <button type="submit" class="btn btn-success button">Add address</button>
</form>

<style>
    button {
        width: 100%;
        margin-top: 8px;
    }
</style>