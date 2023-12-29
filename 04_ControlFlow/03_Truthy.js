const userEmail = "mayur@gmail.com";

if(userEmail) {
    //no comparison userEmail is truthy value
    console.log("got user");
} else {
    console.log("dont");
}

//falsy value -------------------------
//false
// 0 (zero)
// -0 (-ve)
//BigInt 0n
//"" (empty string)
//null
//undefined
//NaN (Not a Number)

//truthy value
//"0"
//"false" (complete string :))
//" " (space)
//[]
//{}
//function(){}


if(userEmail.length === 0){
    console.log("Array is empty");
} else {
    console.log("is email");
}

const emptyObj = {};
if(Object.keys(emptyObj).length === 0) {
    console.log("empty");
}


//nullish coalescing operator (??) ----------------------
//null
//undefine
//is a logical operator that returns its right-hand side operand when its left-hand
//side operand is null or undefined, and otherwise returns its left-hand side operand.

let val1;
val1 = 5 ?? 10; //5
val1 = null ?? 10; //10

val1 = undefined ?? 15; //15
val1 = null ?? 10 ?? 25; //10

console.log(val1);


//ternary operator ---------------------------
//condition ? true : false
const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");