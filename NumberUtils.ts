export const formatMoney = (amount: number, decimalSize: number = 2) => {
    if(amount) {
        return amount.toFixed(decimalSize).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    }
    return '0';
}