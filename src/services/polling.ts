import { getPollingIntervalFromSettings } from '../lib/SettingsApi';
import { poll } from '../utils/poll';
import { lastUpdate, pollingInterval, shouldStopPolling } from '../stores/nodeStore';
import { asyncTimeout } from '../utils/aysncTimeout';
import { updateAllAddressDetailsInWallet } from './wallet';

export const registerAddressPollingService = async () => {
  console.log('reg polling service');

  pollingInterval.set((await getPollingIntervalFromSettings()) ?? '60000');

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
      interval = Number(value);
    });
    return interval;
  };

  const pollingOptions = {
    fn: async () => {
      await updateAllAddressDetailsInWallet();
      let date = new Date();
      let localDate = date.toLocaleString();
      lastUpdate.set(localDate);
    },
    interval: getInterval(),
    validate: validate,
    maxAttempts: 1000,
  };

  console.log('pollingOptions: ', pollingOptions);

  poll(pollingOptions);
};

export const stopAddressPollingService = async () => {
  const getInterval = () => {
    let interval = 0;
    pollingInterval.subscribe((value) => {
      interval = Number(value);
    });
    return interval;
  };

  console.log('switching polling off');

  shouldStopPolling.set(true);

  

  await asyncTimeout(getInterval());

  shouldStopPolling.set(false);
  console.log('reset polling flag');
  
  return;
};

export const restartAddressPollingService = async () => {
    await stopAddressPollingService();
    registerAddressPollingService();
}