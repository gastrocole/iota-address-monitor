import { Storage } from '@capacitor/storage';

export const addAddressToStorage = async (addressObject: any) => {
    const { value } = await Storage.get({ key: 'addresses' });
    const storedAddresses : any[] = JSON.parse(value) ?? [];
    const updatedAddresses: any[] = storedAddresses.concat(addressObject);
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

export const removeAddress = async (address: string) => {
  const { value } = await Storage.get({ key: 'addresses' });
  const storedAddresses: any[] = JSON.parse(value) ?? [];
  const updatedAddresses: any[] = storedAddresses.filter((addressObject) => {
    return addressObject.bech32 !== address;
  });
  const stringifyAddresses = JSON.stringify(updatedAddresses);
  await Storage.set({
    key: 'addresses',
    value: stringifyAddresses,
  });

}