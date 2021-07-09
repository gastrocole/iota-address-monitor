import { SingleNodeClient } from '@iota/iota.js';
import {
	addAddressToStorage,
	checkIfAddressInStorage,
	getAllAddressesFromStorage,
	updateAddressObjectsInStorage,
} from '../stores/AddressApi';
import { getNodeEndpointFromStorage } from '../stores/SettingsApi';
import type IAddressObject from '../types/AddressObject.interface';
import { searchAddressObjects } from '../utils/searchAddressObjects';

export const addAddressToWallet = async (inputAddress: string) => {
	// Check if address already added
	let found = await checkIfAddressInStorage(inputAddress);
	if (found) {
		throw 'Address has already been added';
	}

	let addressObject = await getAddressDetailsFromNode(inputAddress);

	// Add address to persisted storage if it doesn't already exist
	if (addressObject) {
		await addAddressToStorage(addressObject);
	}
};

export const updateAllAddressDetailsInWallet = async () => {
	// Get all addresses from storage
	const storedAddresses = await getAllAddressesFromStorage();

	// Update all addresses
	const updatedAddresses = await Promise.all(
		storedAddresses.map(async (addressObject) => {
			try {
				let updatedAddressObject = await getAddressDetailsFromNode(addressObject.bech32);
				return updatedAddressObject;
			} catch {
				return addressObject;
			}
		})
	);

	await updateAddressObjectsInStorage(updatedAddresses);

	return updatedAddresses;
};

export const getAddressDetailsFromNode = async (inputAddress: string) => {
	// Get node endpoint
	const endpoint = await getNodeEndpointFromStorage();

	// Connect to node
	const client = new SingleNodeClient(endpoint);

	// Get address details from node
	let addressObject = await client.address(inputAddress).catch((error) => {
		if (error == 'TypeError: Failed to fetch') {
			throw 'Unable to connect to node, please check settings';
		} else {
			throw 'Invalid address, please check the input and try again';
		}
	});

	let newAddressObject: IAddressObject = { bech32: inputAddress, ...addressObject };

	return newAddressObject;
};

export const getAddressObjectsFromWallet = async (searchTerm: string = '') => {
	const storedAddresses = await getAllAddressesFromStorage();

	if (storedAddresses.length < 1 || searchTerm.length < 1) {
		return storedAddresses;
	}

	return await searchAddressObjects(storedAddresses, searchTerm);
};
