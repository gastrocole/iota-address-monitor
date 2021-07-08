<script lang='ts'>
  import { endpoint } from '../stores/nodeStore';
  import { getAllAddresses } from '../lib/AddressApi';
  import PageTitle from '../components/common/PageTitle.svelte';
  import AddressMonitorList from '../components/AddressMonitor/AddressMonitorList.svelte';

  let endpointValue;
  let items: any[] = [];

   endpoint.subscribe((value)=> {
        endpointValue = value;
    });

  async function getAllAddressesFromStroage() {
    items = await getAllAddresses();
  }

  getAllAddressesFromStroage();

</script>

<div>
  <PageTitle title="Address Monitor" />

  <button type="submit" class="btn btn-primary button">Refresh</button>
 
  <AddressMonitorList data={items}/>
</div>

<style>
  .button {
        float: right;
        margin: 8px;
    }
</style>