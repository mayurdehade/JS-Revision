//Primitive data type
// 1. String
// 2. Number
// 3. Boolean 
// 4. Null
// 5. Undefined
// 6. Symbol
// 7. BigInt

//******************************************** */

//Non Primitive Data Types
//reference
//call by value whenever we copy it from anywhere its original data reference is not given to you
//it just give you the copy separately // function scope
//and your changes will be done in copy

//1. Primitive Datatypes
//      Number => number 
//      String => String
//      Boolean => Boolean
//      null => object
//      undefined => undefined
//      Symbol => Symbol
//      BigInt => bigint

//2. Non-primitive datatypes
//      Arrays => object
//      Function => function object
//      Object => object

//Array 
const hero = ["shaktiman", "naagraj", "doga"];

//Objects
let my = {
  name: "Mayur",
  age: 20,
};

//Function
const myFunction = function() {
  console.log("namaste");
};

//**************************** Memory **************************** */

//Stack
// All primitive data types are stored in the stack.
// When using stack memory, a copy of the variable is created.
// Any changes made affect only the copy, leaving the original unchanged.

//Example of Stack
let MyYouTubeName = "Mayur";
let AnotherName = MyYouTubeName; //coping the value
AnotherName = "MrBeast"; //Modifying the copy

console.log(AnotherName); //MrBeast
console.log(MyYouTubeName); //Mayur (Original remains unchanged)

//Heap
// Non-primitive data types are stored in the heap.
// When using heap memory, a reference to the variable is stored.
// Any changes made through the reference affect the original value.

//Example of Heap
let userOne = {
  email: "user@gmail.com",
  upi: "123@ybl",
};

let userTwo = userOne; //Referencing the same object in the heap
userTwo.email = "mayur@gmail.com"; //also modifying the original object

console.log(userTwo.email); //mayur@gmail.com
console.log(userOne.email); //mayur@gmail.com