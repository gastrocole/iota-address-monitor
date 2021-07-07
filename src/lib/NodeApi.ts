import { Storage } from '@capacitor/storage';

export const setNodeEndpointInStateAndStorage = async (value: string) => {
  await Storage.set({
    key: 'endpoint',
    value: value,
  });
};

export const getNodeEndpointFromStorage = async () => {
  const { value } = await Storage.get({ key: 'endpoint' });
  return value;
};

export const unsetNodeEndpointFromStorage = async () => {
  await Storage.remove({ key: 'endpoint' });
};
