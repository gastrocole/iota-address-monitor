<script>
    import { convertBalance } from "../../utils/convertBalance";
    import { lastUpdate } from '../../stores/nodeStore';



    export let data;
    let lastUpdateString;

    const MAX_ADDRESS_DISPLAY_LENGTH = 25;
    const CHECKSUM_LENGTH = 6;

    const truncateAddress = (address) => {
        return address.substring(0, MAX_ADDRESS_DISPLAY_LENGTH) + '...';

    }

    const getChecksum = (address) => {
        return address.substring(address.length-CHECKSUM_LENGTH, address.length);
    }

    lastUpdate.subscribe((value) => {
        lastUpdateString = value;
    })

</script>

<table class="table caption-top">
  <caption>Last updated: {lastUpdateString}</caption>
  <thead>
    <tr>
      <th scope="col">Address</th>
      <th scope="col">Balance</th>
    </tr>
  </thead>
  <tbody>
      {#each data as row}
            <tr >
                <td class='col-sm'>{row.bech32}</td>
                <td class='col-sm'>{convertBalance(row.balance)}</td>
            </tr>
        {/each}
  </tbody>
</table>

<style>

    caption {
        caption-side: top;
    }

    td {
        max-width: 150px;
        word-wrap: break-word;
    }


</style>