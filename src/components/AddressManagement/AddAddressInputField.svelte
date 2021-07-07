<script lang='ts'>
    import { addAddressToWallet } from '../../services/wallet';

    export let onSuccess: () => void;

    let value;

    const onSubmit = () => {
        addAddressToWallet(value).then(() => {
            value = ''
            if(onSuccess) {
                onSuccess()
            }
        });
    }
</script>

<main class='main'>
    <form on:submit|preventDefault={onSubmit}>
        <label for="name">Add an address</label>
        <input id="name" type="text" bind:value={value} />
    </form>
</main>

<style>

    .main {
        margin: 16px;
    }

</style>