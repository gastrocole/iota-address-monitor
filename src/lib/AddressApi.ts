import { Storage } from '@capacitor/storage';
import type { IAddressResponse } from '@iota/iota.js';

export const addAddressToStorage = async (address: any) => {
    const { value } = await Storage.get({ key: 'addresses' });
    const storedAddresses : any[] = JSON.parse(value) ?? [];
    const updatedAddresses: any[] = storedAddresses.concat(address);
    const stringifyAddresses = JSON.stringify(updatedAddresses);
    await Storage.set({
      key: 'addresses',
      value: stringifyAddresses,
    });
};

export const removeAllAddresses = async () => {
  await Storage.remove({ key: 'addresses' });
};

export const getAllAddresses = async () => {
  const { value } = await Storage.get({ key: 'addresses' });
  return JSON.parse(value) ?? [];
};

export const getAddress = async () => {
  const { value } = await Storage.get({ key: 'addresses' });
  return value; 
}
