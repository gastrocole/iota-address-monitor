import { isPolling } from '../stores/store';

export const poll = async ({ fn, validate, interval, maxAttempts }) => {
	isPolling.set(true);
	let attempts = 0;

	const executePoll = async (resolve, reject) => {
		const result = await fn();
		attempts++;

		if (validate(result)) {
			isPolling.set(false);
			return resolve(result);
		} else if (maxAttempts && attempts === maxAttempts) {
			isPolling.set(false);
			return reject(new Error('Exceeded max polling attempts'));
		} else {
			setTimeout(executePoll, interval, resolve, reject);
		}
	};

	return new Promise(executePoll);
};
