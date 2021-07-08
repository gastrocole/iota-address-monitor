<script lang='ts'>
  import { endpoint } from '../stores/nodeStore';
	import { SingleNodeClient } from '@iota/iota.js'
  import { addAddressToStorage, getAllAddresses } from '../lib/AddressApi';
  import PageTitle from '../components/common/PageTitle.svelte';
  import AddressMonitorList from '../components/AddressMonitor/AddressMonitorList.svelte';

  let endpointValue;
  let items: any[] = [];
  let name = "";

   endpoint.subscribe((value)=> {
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