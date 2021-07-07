<script lang='ts'>
  import { endpoint } from '../stores/nodeStore';
	import { SingleNodeClient, IAddressResponse } from '@iota/iota.js'
  import { addAddress, getAllAddresses } from '../lib/AddressApi';
  import RemoveAllAddressesButton from '../components/RemoveAllAddressesButton.svelte'

  let endpointValue;
  let items: IAddressResponse[] = [];
  let name = "";

   endpoint.subscribe((value)=> {
        console.log('Endpoint: ', value);
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
        addAddress(address);
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

<style>
  div,
  h1 {
    color: #333;
    max-width: 300px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  }
  #name {
    width: 100%;
  }
  form {
    margin-bottom: 0.5em;
  }
  input[type="text"] {
    outline: none;
    margin: 0;
  }
  input[type="text"]:focus {
    border-color: #dc4f21;
    box-shadow: 0 0 2px #dc4f21;
  }
  input[type="checkbox"] {
    margin: 0 10px 0 0;
  }
  li button {
    float: right;
    border: none;
    background: transparent;
    padding: 0;
    margin: 0;
    color: #dc4f21;
    font-size: 18px;
    cursor: pointer;
  }
  li button:hover {
    transform: scale(2);
  }
  li button:focus {
    outline: #dc4f21;
  }
  li:last-child {
    border-bottom: none;
  }
  label {
    display: block;
    text-transform: uppercase;
    font-size: 0.8em;
    color: #777;
  }
  li {
    list-style: none;
    padding: 6px 10px;
    border-bottom: 1px solid #ddd;
  }
  ul {
    padding-left: 0;
  }
  .done span {
    opacity: 0.4;
  }
</style>

<div>
  <h3>Address Management</h3>

  <form on:submit|preventDefault={addItem}>
    <label for="name">Add an address</label>
    <input id="name" type="text" bind:value={name} />
  </form>

  <ul>
    {#each items as item}
      <li>
        <span>{item.address}</span>
        <button on:click={() => remove(item)}>&times;</button>
      </li>
    {/each}
  </ul>

  <RemoveAllAddressesButton />
</div>
