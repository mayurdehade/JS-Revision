//*************************** for of loop ************************

//["", "", ""]
//[{}, {}, {}]

const arr = [1,2,3,4,5];

//for of on array
for(const num of arr){
    console.log(`using for...of on array: ${num}`);
}
//output: 
// using for...of on array: 1
// using for...of on array: 2
// using for...of on array: 3
// using for...of on array: 4
// using for...of on array: 5


//for of with strings
const greetings = "Hello World!";
for(const greet of greetings){
    if(greet === " ") continue;
    console.log(`Each char is ${greet}`);
}
//output: 
// Each char is H
// Each char is e
// Each char is l
// Each char is l
// Each char is o
// Each char is W
// Each char is o
// Each char is r
// Each char is l
// Each char is d
// Each char is !

//******************************* MAPS ******************************
//Maps -> holds key value pairs
const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");
map.set("IN", "India");

console.log(map);
//output: Map(3) 
//Map(3) {
//   'IN' => 'India',
//   'USA' => 'United States of America',
//   'Fr' => 'France'
// }

//using for...of on map
for(key of map){
    console.log(key);
}
//output:
// [ 'IN', 'India' ]
// [ 'USA', 'United States of America' ]
// [ 'Fr', 'France' ]

//array destructuring for...of
for([key, value] of map){ //destructuring 
    console.log(key, ":-",value);
}
//output:
// IN :- India
// USA :- United States of America
// Fr :- France


const myObject = {
    game1: "NFS",
    game2: "Spiderman"
};

//Error -> object is not iterable using for of loop
// for(const[key, value] of myObject){
//     console.log(key, ":-", value);
// }


//------------------------ More ----------------------------

//for...of loop

//Applicability:
//Array: Ideal for iterating over element of an array.
//Maps: Suitable for iterating over entires (key-value pairs) in a map.
//Objects: Not applicable directly; throws an error. Use Object.values(). Object.keys(), or Object.entries() for objects.

//Key Characteristics:
//Provides a simple syntax for iterating over iterable objects.
//Guarantees order of iteration for array of maps.
//Cannot be used directly with plain objects.

// Summary:
// use for...of with arrays and maps for simplicity and clarity.
// use for...in with objects when you need to iterate over the properties of an objects.
// Avoid using for...in with arrays and map due to potential unexpected behavior.