const name = "Mayur";
const repoCount = 24;

console.log(name + repoCount);

//Difference between double quotes and backticks
//Double Quotes (") and Single Quotes ('): In these of quotes,
//you concatenate strings and variables using the + operator

//Backticks (`) allow string interpolation or placeholders
//Backticks (`): Backticks allow for string interpolation using ${}.
//This means you can embed expression and variables directly within the string.

console.log(`Hello! My name is ${name} and my repo is ${repoCount}`);

//Creating a string using the string constructor 
const gameName = new String("Mayur");

console.log(gameName[0]); //Accessing characters by index, output: M
console.log(gameName.__proto__); //output: {} (String objects inherit from the object prototype)
console.log(gameName.length); //5

//String Methods