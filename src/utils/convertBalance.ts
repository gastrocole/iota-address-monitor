import UnitsEnum from '../enums/UnitsEnum';

export const convertBalance = (balance: any, decimalFigures: number = 3) => {
	const balanceString: string = String(balance);
	const unitNumber = Math.floor((balanceString.length - 1) / 3);
	const unit = UnitsEnum[unitNumber];

	const remainder = balanceString.length % 3;

	const wholePart = balanceString.substring(0, remainder);
	const decimalPart = balanceString.substring(remainder, remainder + decimalFigures);
	const balanceAsDecimal = decimalPart.length > 0 ? wholePart + '.' + decimalPart : wholePart;

	return balanceAsDecimal + ' ' + unit;
};
