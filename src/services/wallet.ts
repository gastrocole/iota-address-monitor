import { SingleNodeClient } from '@iota/iota.js';
import { getNodeEndpointFromStorage } from '../lib/NodeApi'
import { addAddressToStorage } from '../lib/AddressApi'

export const addAddressToWallet = async (inputAddress: string) => {
    console.log('addAddressToWallet called with: ', inputAddress);
    // Get node endpoint
    const endpoint = await getNodeEndpointFromStorage()
    console.log('addAddressToWallet - endpoint: ', endpoint);

    // Connect to node
    const client = new SingleNodeClient(endpoint);
    console.log('addAddressToWallet - client: ', client);


    // Get address details from node
    let addressObject = await client.address(inputAddress).catch(()=>{addressObject = undefined});
    console.log('addAddressToWallet - addressObject: ', addressObject);

    // Add address to persisted storage if it doesn't already exist
    if(addressObject) {
        await addAddressToStorage(inputAddress);
    }
};
