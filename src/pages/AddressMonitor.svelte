<script lang='ts'>
  import { endpoint } from '../stores/nodeStore';
  import { getAllAddressesFromStorage } from '../lib/AddressApi';
  import { updateAllAddressDetailsInWallet } from '../services/wallet'
  import PageTitle from '../components/common/PageTitle.svelte';
  import AddressMonitorList from '../components/AddressMonitor/AddressMonitorList.svelte';

  let endpointValue;
  let data: any[] = [];

   endpoint.subscribe((value)=> {
        endpointValue = value;
    });

  async function reloadData() {
    await updateAllAddressDetailsInWallet();
    data = await getAllAddressesFromStorage();
  }

  reloadData();

</script>

<div>
  <PageTitle title="Address Monitor" />
  <h4>Address list</h4>
  <AddressMonitorList data={data}/>
</div>

<style>
</style>