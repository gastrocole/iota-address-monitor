<script>

    import SvelteGenericCrudTable from "svelte-generic-crud-table";
    import {onMount} from 'svelte';

    const CHECKSUM_LENGTH = 6;
 
    export let data;

    let transformedData = data.map((row) => {
        return {address: row.bech32, checksum: getChecksum(row.bech32)};
    })

    onMount(reload);

    function reload() {
        transformedData = data.map((row) => {
            return {address: row.bech32, checksum: getChecksum(row.bech32)};
        })
        console.log('transfored: ', transformedData)
    }

    const getChecksum = (address) => {
        return address.substring(address.length-CHECKSUM_LENGTH, address.length);
    }

    const onRemoveClick = () => {

    }

    console.log("data: ", data)

    const table_config = {
        name: 'Awesome',
        options: ['DELETE'],
        columns_setting: [
            {name: 'address', show: true, edit: false, width: '200px', tooltip: true},
            {name: 'checksum', show: true, edit: false, width: '80px', tooltip: true},
        ],
    }


    function handleDelete(event) {
        delete(event.detail.body.id).then(() => {
                    reload();
                });
    }

</script>

    <h4>Address List</h4>
    <SvelteGenericCrudTable on:delete={handleDelete}
                            table_config={table_config}
                            table_data={
                                data.map((row) => {
                                    return {address: row.bech32, checksum: getChecksum(row.bech32)};
                                })                      
                                }
    />


<style>
    h4 {
        margin-top: 16px
    }
</style>