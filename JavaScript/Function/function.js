/* Write a function named makeTea that takes one parameter typeofTea,
and returns a string like Making green tea when called with green tea,
store the result in a variable named teaOrder.
*/

function makeTea(typeofTea) {
    return `Making ${typeofTea}`;
    console.log(test);
}
let greet =  makeTea("Lemon Tea");
console.log(greet);


/*
Create a function named orderTea that take one parameter teaType , inside this function , create another function called confirmOrders that returns a message like Order confirm for chai.
Call confirmOrder from within orderTea and return the result
*/

function orderTea (teaType) {
    function confirmOrder() {
        return `Order confirmed for chai`;
    }
    return confirmOrder ();
}
    let orderConfirmation = orderTea("chai");
    console.log(orderConfirmation);


/* Write an arrow func named calculateTotal that takes two parameters: price and quantity. 
The function should return the total cost by multiplying the price and quantity.
Store the result in a variable named totalCost.
*/

let calculateTotal = (price, quantity) =>  price*quantity

let totalCost = calculateTotal(450, 100);
console.log(totalCost);
