// ******************* for in ***************
//for in on object
const myObject2 = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject2){
    console.log(key);
}
//output: 
// js
// cpp
// rb
// swift

for(const key in myObject2){
    console.log(`${key} shortcut is for ${myObject2[key]}`);
}
//output: 
// js shortcut is for javascript
// cpp shortcut is for c++
// rb shortcut is for ruby
// swift shortcut is for swift by apple

//for in loop on string
const programming = ["js", "rb", "py", "java", "cpp"];
for(const key in programming){
    console.log(key);
    // console.log(programming[key]);
}
//output: 
// 0
// 1
// 2
// 3
// 4

//for in on map (not recommended)
const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");
map.set("IN", "India");

//no output
for(const key in map){
    console.log(key);
}

//-------------------------- More ----------------------------
// for... in loop

// Applicability:
// Arrays: Not recommended. Iterates over array indices and addition properties.
// Maps: Not recommended. Iterates over properties, including internal properties of the Map objects.
// Objects: Suitable for iterating over properties of object.

// key Characteristics:
// Iterates over enumerable properties of an object.
// Can be used with arrays and maps, but not recommended due to potential unexpected behavior.
// Suitable for iterating over properties of plain object.

// Summary:
// use for...of with arrays and maps for simplicity and clarity.
// use for...in with objects when you need to iterate over the properties of an objects.
// Avoid using for...in with arrays and map due to potential unexpected behavior.