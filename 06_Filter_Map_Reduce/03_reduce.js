//***************************** Reduce ************************** */
//used in shopping cart
//accumulator and currentvalue
const myNums = [1,2,3,4];

const myTotal = myNums.reduce(function (acc, currval){
    console.log(`acc: ${acc} and currval: ${currval}`);
    //output: 
    // acc: 0 and currval: 1
    // acc: 1 and currval: 2
    // acc: 3 and currval: 3
    // acc: 6 and currval: 4
    return acc + currval;
}, 0);

console.log(myTotal); //output: 10

//reduce using arrow function
const myTotal2 = myNums.reduce((acc, currval) => acc+currval, 0);
console.log(myTotal2); //output: 10

const shoppingCart = [
    {
        itemName: "Javascript Course",
        price: 2999
    },
    {
        itemName: "Python Course",
        price: 999
    },
    {
        itemName: "Mobile Development Course",
        price: 6999
    },
    {
        itemName: "Data Science Course",
        price: 12999
    },
    {
        itemName: "BlochChain Course",
        price: 15999
    },
];

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price ,0);
console.log(priceToPay); //output: 39995
