import { SingleNodeClient } from '@iota/iota.js';
import { getNodeEndpointFromStorage } from '../lib/NodeApi'
import { addAddressToStorage, checkIfAddressInStorage } from '../lib/AddressApi';

export const addAddressToWallet = async (inputAddress: string) => {
    // Check if address already added
    let found = await checkIfAddressInStorage(inputAddress);
    if (found) {
      throw 'Address has already been added';
    }
      
    // Get node endpoint
    const endpoint = await getNodeEndpointFromStorage();

    // Connect to node
    const client = new SingleNodeClient(endpoint);

    // Get address details from node
    let addressObject = await client.address(inputAddress)
    .catch((error) => {
        if (error == 'TypeError: Failed to fetch') {
          throw 'Unable to connect to node, please check settings';
        } else {
          throw 'Invalid address, please check the input and try again';
        }
    });

    let newAddressObject = { bech32: inputAddress, ...addressObject };

    // Add address to persisted storage if it doesn't already exist
    if(addressObject) {
        await addAddressToStorage(newAddressObject);
    }
};