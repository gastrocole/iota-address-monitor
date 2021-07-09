import { getPollingIntervalFromSettings } from '../stores/SettingsApi';
import { lastUpdate, pollingInterval, shouldStopPolling } from '../stores/store';
import { asyncTimeout } from '../utils/aysncTimeout';
import { poll } from '../utils/poll';
import { updateAllAddressDetailsInWallet } from './wallet';

export const registerAddressPollingService = async () => {
	shouldStopPolling.set(false);
	pollingInterval.set((await getPollingIntervalFromSettings()) ?? '1');

	const validate = () => {
		let stop = false;
		shouldStopPolling.subscribe((value) => {
			stop = value;
		});
		return stop;
	};

	const getInterval = () => {
		let interval = 0;
		pollingInterval.subscribe((value) => {
			interval = Number(value) * 1000;
		});
		return interval;
	};

	const pollingOptions = {
		fn: async () => {
			await updateAllAddressDetailsInWallet();
			let date = new Date();
			let localDate = date.toLocaleString('en-GB');
			lastUpdate.set(localDate);
		},
		interval: getInterval(),
		validate: validate,
		maxAttempts: 10000,
	};

	poll(pollingOptions).catch();
};

export const stopAddressPollingService = async () => {
	const getInterval = () => {
		let interval = 0;
		pollingInterval.subscribe((value) => {
			interval = Number(value) * 1000;
		});
		return interval;
	};

	shouldStopPolling.set(true);

	await asyncTimeout(getInterval());

	shouldStopPolling.set(false);

	return;
};

export const restartAddressPollingService = async () => {
	await stopAddressPollingService();
	registerAddressPollingService();
};
