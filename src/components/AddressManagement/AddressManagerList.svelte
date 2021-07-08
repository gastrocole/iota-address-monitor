<script>

    export let data;

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