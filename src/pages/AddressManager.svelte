<script lang='ts'>
  import { endpoint } from '../stores/nodeStore';
  import { getAllAddresses } from '../lib/AddressApi';
  import RemoveAllAddressesButton from '../components/AddressManagement/RemoveAllAddressesButton.svelte'
  import PageTitle from '../components/common/PageTitle.svelte';
  import AddAddressInputField from '../components/AddressManagement/AddAddressInputField.svelte';
  import AddressManagerList from '../components/AddressManagement/AddressManagerList.svelte';

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
  <PageTitle title="Address Management" />

  <AddAddressInputField onSuccess={getAllAddressesFromStroage}/>

  {#if items.length > 0 }
    <h4>Remove IOTA addresses</h4>
    <RemoveAllAddressesButton onSuccess={getAllAddressesFromStroage} />
    <AddressManagerList data={items}/>
  {/if}
</div>

<style>
</style>