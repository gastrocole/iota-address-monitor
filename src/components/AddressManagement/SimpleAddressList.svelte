<script lang='ts'>

    import { Datatable, rows } from 'svelte-simple-datatables'

    const MAX_ADDRESS_DISPLAY_LENGTH = 20;
    const CHECKSUM_LENGTH = 6;
 
    const settings = {
        sortable: false,
        pagination: true,
        rowPerPage: 50,
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

    const truncateAddress = (address: string) => {
        return address.substring(0, MAX_ADDRESS_DISPLAY_LENGTH) + '...';

    }

    const getChecksum = (address: string) => {
        return address.substring(address.length-CHECKSUM_LENGTH, address.length);
    }

</script>
 
<Datatable settings={settings} data={data}>
    <thead>
        <th data-key="address">Address</th>
        <th data-key="checksum">Checksum</th>
        <th data-key="button"></th>
    </thead>
    <tbody>
    {#each $rows as row}
        <tr>
            <td class='tdaddress'>{truncateAddress(row)}</td>
            <td class='tdchecksum'>{getChecksum(row)}</td>
            <td class='tdbutton'><button on:click={() => console.log("Remove")}>&times;</button></td>
        </tr>
    {/each}
    </tbody>
</Datatable>

<style>
    button {
        float: right;
        border: none;
        background: transparent;
        padding: 0;
        margin: 0;
        color: #dc4f21;
        font-size: 18px;
        cursor: pointer;
    }
    button:hover {
        transform: scale(2);
    }
    button:focus {
        outline: #dc4f21;
    }

    .datatable thead th {
        padding: 8px 0px 8px 0px;
        text-align: left;
        border-bottom: 1px solid #eee;
        background: #fff;
    }

    .tdaddress {
        min-width: 8;
        max-width: fit-content;
    }
    .tdchecksum {
        min-width: 0;
        max-width: fit-content;
    }
    .tdbutton {
        min-width: 0;
        max-width: fit-content;
    }
</style>