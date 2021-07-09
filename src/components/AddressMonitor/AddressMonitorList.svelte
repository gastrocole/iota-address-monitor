<script>
    import { convertBalance } from "../../utils/convertBalance";
    import { lastUpdate } from '../../stores/nodeStore';

    export let data;
    let lastUpdateString;

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