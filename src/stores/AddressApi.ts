import { Storage } from '@capacitor/storage';
import type IAddressObject from '../types/AddressObject.interface';

export const addAddressToStorage = async (addressObject: IAddressObject) => {
	const storedAddresses: IAddressObject[] = await getAllAddressesFromStorage();
	const updatedAddresses: IAddressObject[] = storedAddresses.concat(addressObject);
	const stringifyAddresses = JSON.stringify(updatedAddresses);
	await Storage.set({
		key: 'addresses',
		value: stringifyAddresses,
	});
};

export const removeAllAddressesFromStorage = async () => {
	await Storage.remove({ key: 'addresses' });
};

export const getAllAddressesFromStorage = async (): Promise<IAddressObject[]> => {
	const { value } = await Storage.get({ key: 'addresses' });
	return JSON.parse(value) ?? [];
};

export const removeAddressFromStorage = async (address: string) => {
	const storedAddresses: IAddressObject[] = await getAllAddressesFromStorage();
	const updatedAddresses: IAddressObject[] = storedAddresses.filter((addressObject: IAddressObject) => {
		return addressObject.bech32 !== address;
	});
	const stringifyAddresses = JSON.stringify(updatedAddresses);
	await Storage.set({
		key: 'addresses',
		value: stringifyAddresses,
	});
};

export const checkIfAddressInStorage = async (address: string) => {
	const storedAddresses: IAddressObject[] = await getAllAddressesFromStorage();
	const found = storedAddresses.find((addressObject: IAddressObject) => {
		return addressObject.bech32 === address;
	});
	return found;
};

export const updateAddressObjectsInStorage = async (addressObjects: IAddressObject[]) => {
	const stringifyAddresses = JSON.stringify(addressObjects);
	await Storage.set({
		key: 'addresses',
		value: stringifyAddresses,
	});
};
