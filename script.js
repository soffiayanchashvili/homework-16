//#1.
function evenNumbers(numbers) {
    if ( numbers % 2 === 0) {
        console.log (false)
    } else {
        console.log (true)
    }
}

evenNumbers ("4")
evenNumbers ("5")


//#2.
function getCurrencySymbolFromCode (currency) {
    if (currency === "USD") {
        console.log ("$");
        return "$";
    }
    if (currency === "EUR") {
        console.log ("€");
        return "€";
    }
        console.log ("ლ");
}

getCurrencySymbolFromCode ("USD");
getCurrencySymbolFromCode ("EUR");
getCurrencySymbolFromCode ("GEL");


//#3.
function name(name) {
    console.log(name.toLowerCase())
}
name ("MY NAME IS JOHN")

//#4.

let numbers = [ 1, 23, 22, 56, 48, 29, 98];

const filterEvenNumbers = numbers.filter((numbers) => numbers % 2 === 0 );
console.log (filterEvenNumbers)

//#5.
let personArry = [{
    name: 'giorgi',
}]
//ამ დავალების პირობას ვერ მივხვდი, დამაბნია

//#6.
function calcExpense(income, expense) {
    const profit = income - expense;
    return profit;
}

const jan = calcExpense (2000,1940)
const feb = calcExpense (5093,2390)
const mar = calcExpense (2045,1000)
const apr = calcExpense (1945,3056)
const may = calcExpense (10000,6093)
const sumOfProfit = jan+feb+mar+apr+may;
console.log (sumOfProfit)