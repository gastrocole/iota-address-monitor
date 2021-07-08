import { Storage } from '@capacitor/storage';

export const addAddressToStorage = async (addressObject: any) => {
    const storedAddresses = await getAllAddressesFromStorage();
    const updatedAddresses: any[] = storedAddresses.concat(addressObject);
    const stringifyAddresses = JSON.stringify(updatedAddresses);
    await Storage.set({
      key: 'addresses',
      value: stringifyAddresses,
    });
};

export const removeAllAddressesFromStorage = async () => {
  await Storage.remove({ key: 'addresses' });
};

export const getAllAddressesFromStorage = async () => {
  const { value } = await Storage.get({ key: 'addresses' });
  return JSON.parse(value) ?? [];
};

export const getAddressFromStorage = async () => {
  const { value } = await Storage.get({ key: 'addresses' });
  return value; 
}

export const removeAddressFromStorage = async (address: string) => {
  const storedAddresses = await getAllAddressesFromStorage();
  const updatedAddresses: any[] = storedAddresses.filter((addressObject) => {
    return addressObject.bech32 !== address;
  });
  const stringifyAddresses = JSON.stringify(updatedAddresses);
  await Storage.set({
    key: 'addresses',
    value: stringifyAddresses,
  });
}

export const checkIfAddressInStorage = async (address: string) => {
  const storedAddresses = await getAllAddressesFromStorage();
  console.log('storedAddresses: ', storedAddresses);
  const found = storedAddresses.find((addressObject) => {
    return addressObject.bech32 === address;
  });
  return found;
}

export const updateAddressObjectsInStorage = async (addressObjects: any[]) => {
  const stringifyAddresses = JSON.stringify(addressObjects);
  await Storage.set({
      key: 'addresses',
      value: stringifyAddresses,
  });
}