
<script lang="ts">
    import { removeAllAddresses } from '../../lib/AddressApi';

    export let onSuccess: () => void;


    const onClick = () => {
        removeAllAddresses().then(() => {
            if(onSuccess) {
                onSuccess()
            }
        });
    }

</script>

<button type="button" class="btn btn-danger button" on:click={onClick}>
    Remove all addresses
</button>

<style>
    .button {
        width: 100%;
    }

</style>
