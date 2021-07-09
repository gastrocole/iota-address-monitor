import { convertBalance } from './convertBalance';

export const searchAddressObjects = (addressObjects, searchTerm) => {
	return addressObjects.filter((addressObject) => {
		let addressString: string = addressObject.bech32;
		let balanceString: string = String(addressObject.balance);
		let convertedBalanceString: string = convertBalance(addressObject.balance);
		return (
			addressString.includes(searchTerm) ||
			balanceString == searchTerm ||
			convertedBalanceString.includes(searchTerm)
		);
	});
};
