import { SingleNodeClient } from '@iota/iota.js';
import { getNodeEndpointFromStorage } from '../lib/NodeApi'
import { addAddressToStorage } from '../lib/AddressApi'

export const addAddressToWallet = async (inputAddress: string) => {
    // Get node endpoint
    const endpoint = await getNodeEndpointFromStorage()

    // Connect to node
    const client = new SingleNodeClient(endpoint);

    // Get address details from node
    let addressObject = await client.address(inputAddress).catch((error) => {throw error});

    let newAddressObject = { bech32: inputAddress, ...addressObject };

    // Add address to persisted storage if it doesn't already exist
    if(addressObject) {
        await addAddressToStorage(newAddressObject);
    }
};