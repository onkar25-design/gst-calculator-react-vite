
export const formatIndianCurrency = (number) => {
    if (isNaN(number)) return '';
    const [integer, decimal] = number.toString().split('.');
    const lastThreeDigits = integer.slice(-3);
    const otherDigits = integer.slice(0, -3);
    const formattedInteger = otherDigits.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + ',' + lastThreeDigits;
    return decimal ? formattedInteger + '.' + decimal : formattedInteger;
};
