// =======
// Task 1
// =======

function percentageCalculator(number, percentage) {
    return number * (percentage / 100)
}

console.log(percentageCalculator(135, 30))

// =======
// Task 2
// =======

function drinkOrder(size, drink) {

    let availableSizes = ['small', 'medium', 'large'];

    if (availableSizes.includes(size)) {

        switch (drink) {
            case 'cola':
                return `You have ordered a ${size} Cola.`;
            case 'lemon':
                return `You have ordered a ${size} Lemonade.`;
            case 'orange':
                return `You have ordered a ${size} Orangeade.`;
            default:
                return `The drink of ${drink} is not available.`;
        }

    } else {
        return `The size of ${size} is not available.`;
    }
}

console.log(drinkOrder('small', 'cola'));
console.log(drinkOrder('medium', 'orange'));
console.log(drinkOrder('large', 'cherryade'));
console.log(drinkOrder('super', 'lemon'));

// =======
// Task 3
// =======

function calculator(number1, number2, operator) {

    // if(number2 === 0 && operator === 'divide'){
    //     console.log('You cannot divide by zero.');
    //     return;
    // } else if(typeof(number1) != 'number' || typeof(number2) != 'number') {
    //     console.log('You chose a value that is not a number.')
    //     return;
    // }

    let value;
    let validOperator = true;

    switch (operator) {
        case '+':
            value = number1 + number2;
            break;
        case '-':
            value = number1 - number2;
            break;
        case '*':
            value = number1 * number2;
            break;
        case '/':
            value = number1 / number2;
            break;
        case '%':
            value = number1 % number2;
            break;
        default:
            validOperator = false;
            break;
    }

    if(!validOperator) {
        return 'Operator not recognised.';
    } else if(number2 === 0 && operator === '/'){
        return 'You cannot divide by zero.';
    } else if(typeof(number1) != 'number' || typeof(number2) != 'number') {
        return 'You chose a value that is not a number.';
    } else {
        return `${number1} ${operator} ${number2} = ${value}`;
    }
}

console.log(calculator(10,5,'+'));
console.log(calculator(11,6,'-'));
console.log(calculator(6,3,'*'));
console.log(calculator(8,4,'/'));
console.log(calculator(7,2,'%'));
console.log(calculator(3,3,'**'));
console.log(calculator(3,0,'/'));
console.log(calculator(3,true,'*'));
