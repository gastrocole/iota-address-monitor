
<script lang="ts">
    import { removeAllAddresses } from '../../lib/AddressApi';
    import Button from '@smui/button'

    export let onSuccess: () => void;


    const onClick = () => {
        removeAllAddresses().then(() => {
            if(onSuccess) {
                onSuccess()
            }
        });
    }

</script>

<div class='container'>
    <button class='button' on:click={onClick}>
        Remove all addresses
    </button>
</div>


<style>
    .container {
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        padding: 16px;
    }

    .button {
        
        width: 100%;
        align-items: center;
        background: #D23939;
        border-radius: 5px;
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 21px;
        color: #FFFFFF;
    }

</style>
