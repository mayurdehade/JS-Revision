//+++++++++++++++++++++++++++++++ Numbers ++++++++++++++++++++++++++++++++++++++
//Primitive number
const score = 400;
console.log(score); //output: 400

//Number object
const balance = new Number(100);
console.log(balance); //output: [Number: 100]

//String Length of Number
console.log(balance.toString().length); //output: 3 (Length of the string representation of the number)

//String Representation with Precision
console.log(typeof balance.toFixed(4)); //output: "100.0000" (Formatted as a string with two decimal places)

//String Representation with Precision
const otherNumber = 23.8966;
console.log(otherNumber.toPrecision(3)); //output: "23.9" (String representation with three significant digits)

//Local-Specific Formatting
const hundreds = 10000000;
console.log(hundreds.toLocaleString()); //by USA standard Output: 1,00,00,000 (Formatted as a string with locale-specific formatting)
console.log(hundreds.toLocaleString('en-IN')); //by INDIAN standard 1,00,00,000


// ++++++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++
//Logging the Math object
console.log(Math); //output: [object Math] (Math is an object in JavaScript)

//Absolute value
console.log(Math.abs(-4)); //output: 4 (Absolute value - negative becomes positive, positive remains the same)

//Rounding Methods
console.log(Math.round(4.4)); //output: 5 (Rounds to the nearest integer)
console.log(Math.ceil(4.2)); //output: 5 (Rounds up to the nearest integer)
console.log(Math.floor(4.9)); //output: 4 (Rounds down to the nearest integer)

//Minimum Value
console.log(Math.min(4,2,3,5,3,1)); //output: 1

//Maximum Value
console.log(Math.max(4,2,3,5,3,1)); //output: 5

//Random Number Generation
console.log(Math.random()); //random values from 0 (inclusive) to 1 (exclusive)
console.log((Math.random()*10)+1); //random values from 1 to 10
console.log(Math.floor(Math.random()*10) + 1);

//Formula for custom range random number generation
const min = 10;
const max = 20;

//Math.random() * (max - min + 1)
console.log(Math.floor(Math.random() * (max - min + 1) + min));


//Dice Game Simulation
const min1 = 1;
const max1 = 6;
console.log(Math.floor(Math.random() * (max1 - min1 + 1) + min1));
//output: A random integer between 1 and 6


