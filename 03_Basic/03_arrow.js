const user = {
    username: "mayur",
    price: 999,

    welcomeMessage: function(){
        //.this refer to the current context 

        console.log(`${this.username}, welcome to website`); //output: mayur, welcome to website
        console.log(this);
        // output: 
        // {
        //     username: 'mayur',
        //     price: 999,
        //     welcomeMessage: [Function: welcomeMessage]
        // }
    },
};

user.welcomeMessage(); //mayur, welcome to website
user.username = "sam"
user.welcomeMessage(); //sam, welcome to website

console.log(this); //output: empty object {}

//console.log(this);
//browser engine shows window object instead of empty
//here in node engine (local machine) shows empty object {}


// ---------------------------- this in function -------------------------
function chai(){
    let username = "mayur";
    console.log(this);
    console.log(this.username); //undefined (this only works in object not function)
}

chai();

// const chai = function(){
//     let username = "mayur";
//     console.log(this);
//     console.log(this.username); //undefined (this only works in object not function)
// }

// chai();


//********************************** Arrow Function ***************************/
//Arrow function do not have their own execution context. Instead, they inherit the execution context of the
//surrounding function or scope.
//Arrow functions cannot be used as constructors.

const arrowFun = () => {
    let username = "Mayur";
    console.log(this.username); //undefine //this not work in arrow function
}

//
//----------- Explicit return
const addTwo = (num1, num2) => {
    return num1 + num2;
}

//----------- Implicit return
//if you use {} you have to use return
//instead it will assume return
const addTwo2 = (num1, num2) => num1+num2; //return num1+nume2
const addTwo3 = (num1, num2) => (num1+num2);

//object must be pass in {}
const addTwo4 = (num1, num2) => ({username: "mayur"}); //return object implicitly 
console.log(addTwo4);


const myArray = [2,5,6,8,7];
// myArray.forEach(() => ())
