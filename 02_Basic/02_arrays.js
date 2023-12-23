//Arrays of Marvel and DC heroes 
const marvel_heros = ["Thor", "Ironman", "Spiderman"];
const dc_heros = ["Superman", "Flash", "Batman"];

//Attempt to push the entire DC heroes array into the Marvel heroes array
// marvel_heros.push(dc_heros); //Incorrect, would add the entire DC array as a single element

//Uncomment the following to see the incorrect result
// console.log(marvel_heros); //output: [ 'Thor', 'Ironman', 'Spiderman', [ 'Superman', 'Flash', 'Batman' ] ]
// console.log(marvel_heros[3][2]); //output: Batman


//Concatenate two arrays using push and spread operator
const allHeros = marvel_heros.concat(dc_heros); //output: [ 'Thor', 'Ironman', 'Spiderman', 'Superman', 'Flash', 'Batman' ]
console.log(allHeros); 

//Use the spared operator to create a new array combining Marvel and DC heroes 
const all_new_heros = [...marvel_heros, ...dc_heros]; //we can add multiple arrays with ...
console.log(all_new_heros);

//Nested array with varying levels of depth
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

//Flatten the nested array using the flat method with Infinity as the depth
const real_another_array = another_array.flat(Infinity); //depth output: [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]
const real_another_array1 = another_array.flat(1); //depth output: [ 1, 2, 3, 4, 5, 6, 7, 6, 7, [ 4, 5 ] ]

console.log(real_another_array);
console.log(real_another_array1);

//Check if a given value is an array
console.log(Array.isArray("Mayur")); //false
console.log(Array.from("Mayur")); //output: [ 'M', 'a', 'y', 'u', 'r' ]  (convert a string to an array of characters)

//Convert object to an array (interesting but not recommended)
console.log(Array.from({name: "Mayur"})); //output: [] (interesting for interview)
//Return empty array because we don't have specified the which values considers to create an array (key or values)

//Create an array from individual values using Array.of
let score1 = 100;
let score2 = 200;
let score3 = 300;

//return new array from set of elements 
console.log(Array.of(score1, score2, score3)); //output: [ 100, 200, 300 ]

//Difference between push, concat, and spread;
//-> push: Adds elements to the end of an array
//-> concat: Concatenates arrays, creating a new array
//-> spread: Expands an array into individual elements, useful for creating new arrays or functions arguments