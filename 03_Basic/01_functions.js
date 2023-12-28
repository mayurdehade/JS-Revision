//Functions

//function declaration
//no parameter
function sayMyName() {
    console.log("M");
    console.log("A");
    console.log("Y");
    console.log("U");
    console.log("R");
}

//functionReference =number, () =execution
//calling function
sayMyName(); //no arguments

//with parameters
//parameters -> passing to function
function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
}

//refer with the arguments
//arguments -> pass into function call
addTwoNumbers(3,5); //output: 8

const result = addTwoNumbers(2,3); //output: 8

console.log("Result: ", result); //output: undefined

//we can define the variable in function so that we can return it
function addTwoNumbers2(number1, number2){
    let result = number1 + number2;
    // return number1 + number2;
    return result; //we can directly add number1 + number2 in the return instead of variables :)
    console.log("Done"); //it will never execute ones the function return will be executed further in the function
}

const result2 = addTwoNumbers2(2,5);
console.log("Result: ", result2); //output: 7


function loginUserMessage(username) {
    if(username == undefined){
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`;
}

console.log(loginUserMessage("Mayur")); //output: Mayur just logged in
console.log(loginUserMessage()); //output: undefined just logged in 
//if we don't pass any value then it assumes undefined

//now use this in the shopping cart
//but in this function you don't have parameter user can add as many products


//default value
//if you don't pass any value then it consider steve as default
function loginUserMessage1(username = 'steve') {
    //here this condition never executed because we have default value as steve
    if(username == undefined){
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`;
}

console.log(loginUserMessage1()); //output: steve just logged in


//***************************** REST OPERATOR **********************
//Rest operator -> return all elements combined into array
//... is spread operator also rest operator
//here is used rest
//rest is used for combining
//spread is used for separate
function calculateCartPrice(...num1){
    return num1;
}
console.log(calculateCartPrice(200,400,500)); //output: [ 200, 400, 500 ]

//Important for interview
function calculateCartPrice2(val1, val2, ...num1){
    return num1;
}
//first two elements stored in val1 and val2 and remaining will store in array by rest operator
console.log(calculateCartPrice2(100,2000,3938,4848)); //output:[ 3938, 4848 ]


//handle object in the function
const user = {
    username: "mayur",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}

handleObject(user); //output: username is mayur and price is 199

handleObject({
    username: "sam",
    price: 299
})

//Handle array 
const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray){
    return getArray[2];
}

console.log(returnSecondValue(myNewArray)); //output: 100
console.log(returnSecondValue([100,500,600,800])); //output: 600