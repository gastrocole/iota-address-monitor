import { Storage } from '@capacitor/storage';
import { endpoint, pollingInterval } from './store';

export const setNodeEndpointInStateAndStorage = async (value: string) => {
	await Storage.set({
		key: 'endpoint',
		value: value,
	});
	endpoint.set(value);
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

export const setPollingIntervalInStateAndStorage = async (value: string) => {
	await Storage.set({
		key: 'pollingInterval',
		value: value,
	});
	pollingInterval.set(value);
};

export const unsetPollingIntervalFromSettings = async () => {
	await Storage.remove({ key: 'pollingInterval' });
};
