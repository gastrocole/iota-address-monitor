<script>

    import { Datatable, rows } from 'svelte-simple-datatables'

    const MAX_ADDRESS_DISPLAY_LENGTH = 20;
    const CHECKSUM_LENGTH = 6;
 
    const settings = {
        sortable: false,
        pagination: true,
        rowPerPage: 10,
        columnFilter: false,
        css: true,
        labels: {
            noRows: 'No entries to found',
        },
        blocks: {
            searchInput: false, 
            paginationButtons: true,
            paginationRowCount: true,
        }
    }

    export let data;

    const truncateAddress = (address) => {
        return address.substring(0, MAX_ADDRESS_DISPLAY_LENGTH) + '...';

    }

    const getChecksum = (address) => {
        return address.substring(address.length-CHECKSUM_LENGTH, address.length);
    }

    const onRemoveClick = () => {

    }

</script>

    <h4>Address List</h4>
    <Datatable settings={settings} data={data}>
        <col width="100">
        <thead>
            <th data-key="address">Address</th>
            <th data-key="checksum">Checksum</th>
            <th data-key="button">&times;</th>
        </thead>
        <tbody>
        {#each $rows as row}
            <tr >
                <td style="min-width: 0;">{truncateAddress(row)}</td>
                <td style="min-width: 0;">{getChecksum(row)}</td>
                <td style="min-width: 0;"><button on:click={() => console.log("Removee")}>&times;</button></td>
            </tr>
        {/each}
        </tbody>
    </Datatable>


<style>
    h4 {
        margin-top: 16px
    }
    button {
        float: right;
        border: none;
        background: transparent;
        padding: 0;
        margin: 0;
        color: #dc4f21;
        font-size: 18px;
        cursor: pointer;
        float: left;
    }
    button:hover {
        transform: scale(2);
    }
    button:focus {
        outline: #dc4f21;
    }


    /* Datatable override */
    
    .datatable thead th {
        padding: 8px 0px 8px 0px;
        text-align: left;
    }
</style>