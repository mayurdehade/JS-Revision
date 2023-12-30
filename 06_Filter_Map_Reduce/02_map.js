//**************************** MAP (function) *********************** */
//used in transforming data
// Definition: The map() method creates a new array with the results of calling a provided functions on every element in the array.

const myNumbers = [1,2,3,4,5,6,7,8,9,10];

//in map there is not have condition
const newNums = myNumbers.map((num) => num+10);
console.log(newNums);
//output: 
// [
//   11, 12, 13, 14, 15,
//   16, 17, 18, 19, 20
// ]

// ************************** Chaining ************************
//using multiple function
const newNums2 = myNumbers
                .map((num) => num * 10) //this result will be pass to second chain
                .map((num) => num + 1) //receives 1st chain data
                .filter((num) => num>=40);


console.log(newNums2); 
//output: 
// [
//   41, 51,  61, 71,
//   81, 91, 101
// ]

const myNumbers2 = [1,2,3,4,5];

const doubleNumbers = myNumbers2.map(function (num) {return num * 2});

console.log(doubleNumbers); //output: [ 2, 4, 6, 8, 10 ]

//example
const originalPrices = [10,20,30,40,50];
const discountPrices = originalPrices.map((price) => price*0.9);

console.log(discountPrices); //output: [ 9, 18, 27, 36, 45 ]