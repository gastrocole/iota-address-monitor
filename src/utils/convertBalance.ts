
enum UNITS {
  'i' = 0,
  'Ki' = 1,
  'Mi' = 2,
  'Gi' = 3,
  'Ti' = 4,
  'Pi' = 5,
}

export const convertBalance = (balance: any, decimalFigures: number = 3) => {
    const balanceString: string = String(balance);
    console.log('balanceString', balanceString);
    const unitNumber = Math.floor((balanceString.length - 1) / 3);
    console.log('unitNumber', unitNumber);
    const unit = UNITS[unitNumber];

    const remainder = balanceString.length % 3;
    console.log('remainder', remainder);

    const wholePart = balanceString.substring(0, remainder);
    console.log('wholePart', wholePart);

    const decimalPart = balanceString.substring(remainder, remainder + decimalFigures);
    console.log('decimalPart', decimalPart);

    const balanceAsDecimal = decimalPart.length > 0 ? wholePart + '.' + decimalPart : wholePart;
    console.log('balanceAsDecimal', balanceAsDecimal);

    
    return balanceAsDecimal + ' ' + unit;
    
}