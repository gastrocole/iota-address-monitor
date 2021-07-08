import { writable } from 'svelte/store';

export const endpoint = writable('');
export const pollingInterval = writable('');
export const lastUpdate = writable(''); 
export const shouldStopPolling = writable(false);
export const isPolling = writable(false);