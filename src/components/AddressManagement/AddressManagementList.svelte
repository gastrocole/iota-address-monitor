<script lang='ts'>
import { convertBalance } from "../../utils/convertBalance";



    export let data;

    const MAX_ADDRESS_DISPLAY_LENGTH = 15;
    const CHECKSUM_LENGTH = 6;

    const truncateAddress = (address) => {
        return address.substring(0, MAX_ADDRESS_DISPLAY_LENGTH) + '...';

    }

    const getChecksum = (address) => {
        return address.substring(address.length-CHECKSUM_LENGTH, address.length);
    }

</script>

<table class="h-50 table">
  <thead>
    <tr>
      <th scope="col">Address</th>
      <th scope="col">Controls</th>
    </tr>
  </thead>
  <tbody>
      {#each data as row}
            <tr >
                <td class='col-sm'>{row.bech32}</td>
                <td><button type="button" class="btn btn-danger button" on:click={() => console.log("Remove")}>Remove</button></td>
            </tr>
        {/each}
  </tbody>
</table>

<style>

    td {
        max-width: 150px;
        word-wrap: break-word;
    }
</style>