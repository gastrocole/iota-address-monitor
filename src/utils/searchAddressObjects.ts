import type IAddressObject from '../types/AddressObject.interface';
import { convertBalance } from './convertBalance';

export const searchAddressObjects = (addressObjects: IAddressObject[], searchTerm: string) => {
	return addressObjects.filter((addressObject: IAddressObject) => {
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
