const coding = ["js", "ruby", "java", "python", "cpp"];

//for each loop not return anything
//only used for conditions
const value = coding.forEach((item) => {
    console.log(item);
    return item;
});
//output:
// js
// ruby
// java
// python
// cpp

console.log("returned value: ", value); //undefined


//************************ filter ******************* */
//used in selecting specific elements
//Definition: The filter() method creates a new array with all elements that pass the test implemented by the provided function.
const myNums  = [1,2,3,4,5,6,7,8,9,10];

const newNums = myNums.filter((num) => num>5);
console.log(newNums); //output: [ 6, 7, 8, 9, 10 ]
//in filter you have call back function then you give condition that value will be return
//when you use () it will return value
//but if you use {} scope you have to add return keyword
//otherwise it will return empty array

const newNums2 = myNums.filter((num) => {
    return num > 2;
});
console.log(newNums2);
//output: 
// [
//   3, 4, 5,  6,
//   7, 8, 9, 10
// ]

//return using forEach
const newNums3 = [];

myNums.forEach((num) => {
    if(num > 4){
        newNums3.push(num); //pushing value to numNums3 array
    }
});
console.log(newNums3); //output: [ 5, 6, 7, 8, 9, 10 ]


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

//filtering objects value using filter
let userBooks = books.filter((bk) => bk.genre === "History" ); 
console.log(userBooks);
//output: 
// [
//   {
//     title: 'Book Three',
//     genre: 'History',
//     publish: 1999,
//     edition: 2007
//   },
//   {
//     title: 'Book Seven',
//     genre: 'History',
//     publish: 1986,
//     edition: 1996
//   }
// ]

userBooks = books.filter( (bk) => bk.publish >= 2000);
console.log(userBooks);
//output: 
// [
//   {
//     title: 'Book Five',
//     genre: 'Science',
//     publish: 2009,
//     edition: 2014
//   },
//   {
//     title: 'Book Eight',
//     genre: 'Science',
//     publish: 2011,
//     edition: 2016
//   }
// ]

userBooks = books.filter( (bk) => bk.publish >= 1995 && bk.genre === "History");
console.log(userBooks);
//output:
// [
//   {
//     title: 'Book Three',
//     genre: 'History',
//     publish: 1999,
//     edition: 2007
//   }
// ]