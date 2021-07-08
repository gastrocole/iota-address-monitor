import { Storage } from '@capacitor/storage';
import type { IAddressResponse } from '@iota/iota.js';

export const addAddressToStorage = async (address: any) => {
    console.log('addAddress started');
    console.log('address: ', address);
    const { value } = await Storage.get({ key: 'addresses' });
    console.log("value: ", value);
    const storedAddresses : any[] = JSON.parse(value) ?? [];
    console.log('storedAddresses: ', storedAddresses);
    const updatedAddresses: any[] = storedAddresses.concat(address);
    console.log('updatedAddresses: ', updatedAddresses);
    const stringifyAddresses = JSON.stringify(updatedAddresses);
    console.log('stringifyAddresses: ', stringifyAddresses);
    await Storage.set({
      key: 'addresses',
      value: stringifyAddresses,
    });
    console.log('addAddress complete');
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
