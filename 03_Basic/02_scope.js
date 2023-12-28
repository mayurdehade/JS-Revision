//Global scope
var c = 100;

let a = 200;

//Block scope
if(1){
    let a = 10; //Re-declaration of 'a' in block scope
    const b = 20; // Variable declared with 'const'
    var c = 30; //variable declared with 'var'
    console.log("INNER: " + a); //output: INNER: 10
}

console.log(a); //output: 200 (Global scope 'a' remains accessible)
// console.log(b); //Error: 'b' is not accessible outside of block scope
console.log(c); //output: 30 ('c' declared with 'var' remains accessible)


//****************** Nested scope ********************************
function parent(){
    const username = "mayur";

    function child(){
        const website = "youtube";
        console.log(username); //accessing the parent variable
    }
    // console.log(website); //error (line by line execution)
    child();
}
// parent();

//if else -----------------------
if (true) {
    const username = "mayur";
    if(username === "mayur"){
        const website = " youtube";
        console.log(username + website);
    }
    // console.log(website); not in scope
}
// console.log(username); not in scope 



//**************************** INTERESTING (Hoisting) ****************************** */

//------------------ Example of declaring function and just the overview of the hoisting

//Function Hoisting: Function declaration are moved to the top of their scope, and their entire function
//body is also hoisted. This means that you can call a function before it is actually defined in the code.
console.log(addone(5));
//so here we have declare the addone() function before the function
//it will run 

function addone(num){
    return num + 1;
}


//Variable Hoisting: Variable declaration are moved to the top of their scope, but their initializations remains
//in place. This means that you can use the variable before it is assigned a value, but it will have the default value of undefined.
// addTwo(5);
let addtwo = function(num){
    return num + 2;
}