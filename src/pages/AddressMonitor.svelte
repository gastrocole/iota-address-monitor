<script lang='ts'>
  import { endpoint } from '../stores/nodeStore';
  import { getAllAddressesFromStorage } from '../lib/AddressApi';
  import PageTitle from '../components/common/PageTitle.svelte';
  import AddressMonitorList from '../components/AddressMonitor/AddressMonitorList.svelte';

  let endpointValue;
  let data: any[] = [];

   endpoint.subscribe((value)=> {
        endpointValue = value;
    });

  async function reloadData() {
    data = await getAllAddressesFromStorage();
  }

  reloadData();

</script>

<div>
  <PageTitle title="Address Monitor" />

  <button type="submit" class="btn btn-primary button">Refresh</button>
 
  <AddressMonitorList data={data}/>
</div>

<style>
  .button {
        float: right;
        margin: 8px;
    }
</style>