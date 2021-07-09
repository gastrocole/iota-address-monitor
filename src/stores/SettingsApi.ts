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

export const getPollingIntervalFromSettings = async () => {
	const { value } = await Storage.get({ key: 'pollingInterval' });
	return value;
};

export const setPollingIntervalFromSettings = async (value: string) => {
	await Storage.set({
		key: 'pollingInterval',
		value: value,
	});
};

export const unsetPollingIntervalFromSettings = async () => {
	await Storage.remove({ key: 'pollingInterval' });
};
