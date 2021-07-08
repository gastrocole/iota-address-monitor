<script lang='ts'>
  import { endpoint } from '../stores/nodeStore';
	import { SingleNodeClient, IAddressResponse } from '@iota/iota.js'
  import { addAddressToStorage, getAllAddresses } from '../lib/AddressApi';
  import RemoveAllAddressesButton from '../components/AddressManagement/RemoveAllAddressesButton.svelte'
  import PageTitle from '../components/PageTitle.svelte';
  import AddAddressInputField from '../components/AddressManagement/AddAddressInputField.svelte';
  import SimpleAddressList from '../components/AddressManagement/SimpleAddressList.svelte';
import AddressManagementList from '../components/AddressManagement/AddressManagementList.svelte';

  let endpointValue;
  let items: IAddressResponse[] = [];
  let name = "";

   endpoint.subscribe((value)=> {
        console.log('Endpooint: ', value);
        endpointValue = value;
    });

  async function getAllAddressesFromStroage() {
    items = await getAllAddresses();
  }

  getAllAddressesFromStroage();

  async function getAddressDetails() {
    let address;
		const client = new SingleNodeClient(endpointValue);
    address = await client.address(name).catch(()=>{address = null});
    return address;
	}

  const addItem = async () => {
    try {
      let address = await getAddressDetails();
      console.log("addItem - address: ", address);
      if(address) {
        addAddressToStorage(address);
        items.concat(address);
        name = "";
      }
    } catch (error) {
      console.error(error);
    }
  };

  const remove = item => {
    items = items.filter(i => i !== item);
  };

  const toggle = item => {
    item.done = !item.done;
    items = items;
  };

</script>

<div>
  <PageTitle title="Address Management" />

  <AddAddressInputField onSuccess={getAllAddressesFromStroage}/>

  {#if items.length > 0 }
    <h4>Address Removal</h4>
    <RemoveAllAddressesButton onSuccess={getAllAddressesFromStroage} />
    <AddressManagementList data={items}/>
  {/if}




</div>

<style>
</style>