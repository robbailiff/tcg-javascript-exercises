let preTipTotal = 53.75;
let tipPercentage = 10;
let totalBill = (preTipTotal * (1 +(tipPercentage / 100))).toFixed(2);

console.log(`Total bill: £${totalBill} with ${tipPercentage}% tip.`)