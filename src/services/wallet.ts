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
    let addressObject = await client.address(inputAddress).catch((error) => {throw error});
    console.log('addAddressToWallet - addressObject: ', addressObject);

    let newAddressObject = { bech32: inputAddress, ...addressObject };

    // Add address to persisted storage if it doesn't already exist
    if(addressObject) {
        await addAddressToStorage(newAddressObject);
    }
};
