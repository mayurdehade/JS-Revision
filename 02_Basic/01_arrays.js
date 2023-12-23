//Array
//Collection of elements
//Contiguous
//The Array object, as with arrays in other programming language, enables storing a collection of 
//multiple items under a single variable name, and has member for performing common array operations.

//Deep Copy:
//A Deep copy creates a completely independent copy of the original array.
//Changes in the copied array don't affect the original, and vice versa.

//Shallow Copy:
//A shallow copy creates a new array, but the elements inside the new array still references the same object as the original array.
//Changes to the objects inside the copied array may affect the original array, and vice versa.

const myArr = [0, 1, 2, 3, 4, 5];

const myHeros = ["shaktiman", "naagraj"];

const myArr2 = new Array(1, 2, 3, 4);
console.log(myArr2[1]);

//Array Methods
//Push()
myArr.push(6); //Add the element to the end of the array.
console.log(myArr);

//Pop()
myArr.pop(); //remove last element from the array.
console.log(myArr);

//Unshift()
myArr.unshift(9); //add the element to the beginning of the array.
console.log(myArr);

//Shift()
myArr.shift(); //remove the first element from the array.
console.log(myArr);

//Includes()
console.log(myArr.includes(3)); //True (Checks if the array includes the element)

//IndexOf()
console.log(myArr.indexOf(9)); //-1 (Returns the index of the first occurrence of the element in the array)
console.log(myArr.indexOf(2)); //2

//Join -> Joins all array elements into a string separated by a comma.
const newArr = myArr.join();
console.log(newArr); //output: 0,1,2,3,4,5
console.log(typeof newArr); //string

console.log("A ", myArr); //output: A  [ 0, 1, 2, 3, 4, 5 ]

//Slice -> Return the specified element and original array remains unchanged
const myn1 = myArr.slice(1,3); // Creates a new array containing elements from index 1 to 3
console.log(myn1); //output: [ 1, 2 ]

console.log("B ", myArr) //output: B  [ 0, 1, 2, 3, 4, 5 ] (array value not changed)

//Splice -> splice remove the specified elements and modify original array
const myn2 = myArr.splice(1,3); //output: [ 1, 2, 3 ] (Returns array with 3 elements starting form index 1 to 3 (include)) 
//Removes 3 element starting from index 1 to 3 from original array
console.log(myn2);

console.log("C ", myArr); //output: B  [ 0, 4, 5 ]


myArr.splice(0,1, 100,200); //Removes 2 elements staring from index 0 to 1 and insert 100 and 200 at that position.
console.log("E", myArr); //output: E [ 100, 200, 4, 5 ]

//Difference between slice and splice
// - Slice does not modify the original array: it return a new array;
// - Splice modifies the original array by removing or replacing elements.
