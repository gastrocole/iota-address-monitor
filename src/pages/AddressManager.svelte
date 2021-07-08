<script lang='ts'>
  import { endpoint } from '../stores/nodeStore';
  import { getAllAddressesFromStorage } from '../lib/AddressApi';
  import RemoveAllAddressesButton from '../components/AddressManagement/RemoveAllAddressesButton.svelte'
  import PageTitle from '../components/common/PageTitle.svelte';
  import AddAddressInputField from '../components/AddressManagement/AddAddressInputField.svelte';
  import AddressManagerList from '../components/AddressManagement/AddressManagerList.svelte';

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
  <PageTitle title="Address Management" />

  <AddAddressInputField onSuccess={reloadData}/>

  {#if data.length > 0 }
    <h4>Remove IOTA addresses</h4>
    <RemoveAllAddressesButton onSuccess={reloadData} />
    <AddressManagerList data={data} onRemoveComplete={reloadData}/>
  {/if}
</div>

<style>
</style>