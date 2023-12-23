const name = "Mayur";
const email = "mayurdehade@gmail.com";
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

//substring
//Extracts characters from index 0 to 4 (exclusive)
const newString = gameName.substring(0,4);
console.log(newString); //output: Mayu

//slice
//Extracts characters staring from the end (negative index) to index 4
const newString2 = gameName.slice(-8,4);
console.log(newString2); //output: Mayu

//trim
//Removes leading and trailing spaces from a string
const newStringOne = "     mayur    ";
console.log(newStringOne);
console.log(newStringOne.trim()); //output: mayur

//replace
//Replace spaces with an empty string
const url = "https : //mayur . com/ mayur dehade";
console.log(url.replace(" ", "-")); //only replace first occurrence string output: https: //mayur . com/ mayur dehade
console.log(url.replaceAll(" ", "")); //output: https://mayur.com/mayurdehade

//includes
//check if a string contains another string
console.log(url.includes('sundar')); //false

//toLowerCase
//Converts the string to lowercase
console.log(gameName.toLowerCase()); //output: mayur

//toUpperCase
//Converts the string to uppercase
console.log(gameName.toUpperCase()); //output: MAYUR

//charAt
//Returns the character at a specified index
console.log(gameName.charAt(3)); //output: u

//indexOf
//Return the index of the first occurrence of a specified value in a string
console.log(gameName.indexOf('a')); //output: 1

//split()
//split the string form given character
const newName = "Mayur-Bhimrao-Dehade";
console.log(newName.split("-")); //Output: [ 'Mayur', 'Bhimrao', 'Dehade' ]

//concat
//Concatenates two or more strings
const greeting = "Hello";
const fullName = greeting.concat(" ", name);
console.log(fullName); //Output: Hello Mayur

//startsWith
//Checks if a string starts with a specified value
console.log(email.startsWith("mayur")); //output: true

//endsWith
//Checks if a string ends with a specified value
console.log(email.endsWith(".com")); //output: true