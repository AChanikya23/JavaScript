function formatCurrency(amount, currencyCode) {
    const currencyFormats = {
        'USD': { symbol: '$', position: 'before', decimals: 2, thousandsSeparator: ',' },
        'EUR': { symbol: '€', position: 'before', decimals: 2, thousandsSeparator: '.' },
        'INR': { symbol: '₹', position: 'before', decimals: 2, thousandsSeparator: ',' },

    };
    if (isNaN(amount)) {
        return 'Invalid amount';
    }
    if (!currencyFormats[currencyCode]) {
        return 'Unsupported currency code';
    }
    const { symbol, position, decimals, thousandsSeparator } = currencyFormats[currencyCode];
    let formattedAmount = amount.toFixed(decimals);
    let [wholePart, decimalPart] = formattedAmount.split('.');
    wholePart = wholePart.replace(/\B(?=(\d{3})+(?!\d))/g, thousandsSeparator);
    formattedAmount = decimalPart ? `${wholePart}${thousandsSeparator}${decimalPart}` : wholePart;
    return position === 'before' ? `${symbol}${formattedAmount}` : `${formattedAmount}${symbol}`;
}
console.log(formatCurrency(1234567.89, 'USD')); // Output: $1,234,567.89
console.log(formatCurrency(1234567.89, 'EUR')); // Output: €1.234.567,89
console.log(formatCurrency(1234567.89, 'INR')); // Output: ₹1,234,567.89
