export default interface IAddressObject {
	address: string;
	addressType: number;
	balance: number;
	bech32: string;
	dustAllowed: boolean;
}
