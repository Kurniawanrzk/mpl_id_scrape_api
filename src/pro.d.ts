const CC = require('currency-converter-lt')


declare module 'currency-converter-lt'{
    let currencyConverter = new CC()
    export default CurrencyConverter
}