<script lang='ts'>
  import { endpoint, lastUpdate, shouldStopPolling } from '../stores/nodeStore';
  import { getAllAddressesFromStorage } from '../lib/AddressApi';
  import { updateAllAddressDetailsInWallet } from '../services/wallet'
  import PageTitle from '../components/common/PageTitle.svelte';
  import AddressMonitorList from '../components/AddressMonitor/AddressMonitorList.svelte';
  import StartStopPollingButton from '../components/common/StartStopPollingButton.svelte';
  

  let endpointValue;
  let data: any[] = [];

   endpoint.subscribe((value)=> {
        endpointValue = value;
    });

    lastUpdate.subscribe(() => {
      reloadData();
    })

  async function reloadData() {
    await updateAllAddressDetailsInWallet();
    data = await getAllAddressesFromStorage();
  }

  reloadData();

</script>

<div>
  <PageTitle title="Address Monitor" />
  <StartStopPollingButton />
  <AddressMonitorList data={data}/>
</div>

<style>
</style>