let shoppingCart = [
    { name: "loaf of bread", type: "food", quantity: 1, price: 0.85 },
    { name: "multipack beans", type: "food", quantity: 1, price: 1 },
    { name: "mushrooms", type: "food", quantity: 10, price: 0.1 },
    { name: "can of beer", type: "alcohol", quantity: 4, price: 1.1 },
    { name: "prosecco", type: "alcohol", quantity: 1, price: 8.99 },
    { name: "steak", type: "food", quantity: 2, price: 3.99 },
    { name: "blue cheese", type: "food", quantity: 1, price: 2.99 },
    { name: "candles", type: "home", quantity: 3, price: 1.99 },
    { name: "cheesecake", type: "food", quantity: 1, price: 4.99 },
    { name: "onions", type: "food", quantity: 3, price: 0.4 }
  ];

// Calculating Totals

function totalPrice(cart, discountAmount, type) {
    let total = 0;
    for (const item of cart) {
        if (item.type === type || type === 'any'){
            total += (item.quantity * item.price) * (1 - discountAmount / 100);
        } else {
            total += (item.quantity * item.price);
        }
    }
    return total.toFixed(2);
}

console.log(totalPrice(shoppingCart, 20, 'food'));
console.log(totalPrice(shoppingCart, 50, 'any'));
console.log(totalPrice(shoppingCart, 0, 'alcohol'));
console.log(totalPrice(shoppingCart, 10, 'alcohol'));


// Filtering the cart

function filterByPrice(cart, lowPrice, highPrice, quantity) {
    let arrItems = [];
    for (const item of cart) {
        if (quantity) {
            const combinedPrice = item.quantity * item.price
            if (combinedPrice > lowPrice && combinedPrice < highPrice) {
                arrItems.push(item);
            }
        } else if (item.price > lowPrice && item.price < highPrice) {
            arrItems.push(item);
        }
    }
    return arrItems;
}

console.log(...filterByPrice(shoppingCart, 2, 4, false));
console.log(...filterByPrice(shoppingCart, 2, 4, true));
console.log(...filterByPrice(shoppingCart, 3, 6, true));


// Alternative Solution for Task 1 //

function getTotal(cart) {
    return totalPrice = cart.reduce((total, currentItem) => total + (currentItem.quantity * currentItem.price), 0).toFixed(2);
}

console.log(getTotal(shoppingCart));

