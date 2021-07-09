<script lang='ts'>
  import { lastUpdate } from '../stores/nodeStore';
  import { getAllAddressesFromStorage } from '../lib/AddressApi';
  import PageTitle from '../components/common/PageTitle.svelte';
  import AddressMonitorListWithSearch from '../components/AddressMonitor/AddressMonitorListWithSearch.svelte';
  

  let data: any[] = [];

    lastUpdate.subscribe(() => {
      reloadData();
    })

  async function reloadData() {
    data = await getAllAddressesFromStorage();
  }

  reloadData();

</script>

<div>
  <PageTitle title="Address Search" />
  <AddressMonitorListWithSearch data={data}/>
</div>

<style>
</style>