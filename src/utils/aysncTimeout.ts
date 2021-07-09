export const asyncTimeout = async (duration) => {
	await new Promise((resolve) => setTimeout(resolve, duration));
};
