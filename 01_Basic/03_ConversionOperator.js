let score = "33"; //33
let score1 = '33a'; //NaN not an number but type is string :)
let score2 = undefined;
let score3 = "Ashutosh"; //NaN
let score4 = null; //0
let score5 = true; //1
let score6 = false; //0

console.log(typeof score1); //String


//conversion
//string to number conversion
let valueInNumber = Number("33");
console.log(typeof valueInNumber); //number
console.log(valueInNumber); //33

//Q convert 0 into boolean
let IsLoggedOut = 0; //number
let ConvertBoolean = Boolean(IsLoggedOut);
console.log(typeof ConvertBoolean); //boolean
console.log(ConvertBoolean); //false


//String to Boolean Conversion:
//You can also convert a string to a boolean using the Boolean() function.
//Empty strings result in false, and non-empty strings result in true.
let emptyString = "";
let nonEmptyString = "Mayur";

let isEmptyString = Boolean(emptyString);
let isNonEmptyString = Boolean(nonEmptyString);

console.log(isEmptyString); //false
console.log(isNonEmptyString); //true


//Number to Boolean Conversion:
//You can convert a number to a boolean using the Boolean() function. Any non-zero 
//number is converted to true, and 0 is converted to false.
let number = 1;
let isTrue = Boolean(number); //true
console.log(isTrue); //true


//Number to String Conversion:
//To convert a number to a string, you can use the String() function or simply
//concatenate an empty string ("") to the number.
let numberAsString = String(number);
console.log(typeof numberAsString); //string
console.log(numberAsString); //"1"



//********************************** Operator ***************************************
//Arithmetic Operators:
let x = 5;
let y = 2;
let sum = x+y; // 7 (Addition)
let difference = x-y; // 3 (Subtraction)
let product = x*y; // 10 (Multiplication)
let quotient = x/y; // 2.5 (Division)
let remainder = x%y; // 1 (Modulus)
x++; // Increment x by 1
y--; // Decrement y by 1


//Assignment Operators:
let a = 10;
a += 5; // a is now 15 (Add and Assign)
a -= 3; // a is now 12 (Subtract and Assign)


//Comparison Operators:
let num1 = 5;
let num2 = "5";
let isEqual = num1 == num2;
//true (Equal to, does not check data type)
let isStrictEqual = num1 === num2;
//false (Strict Equal to, check data type)
let isNotEqual = num1 != num2;
//false (Not Equal to)
let isNotStrictEqual = num1 !== num2;
//true (Strict Not Equal to)

//Logical Operators:
let isTuree = true;
let isFalse = false;
let result1 = isTrue && isFalse; //false (Logical AND)
let result2 = isTrue || isFalse; //true (Logical OR)
let result3 = !isTrue; //false (Logical NOT)

//Concatenation Operator:
let firstName = "Mayur";
let lastName = "Dehade";
let fullName = firstName + " " + lastName;
//"John Doe" (String Concatenation)

//Conditional (Ternary) Operator:
let age = 18;
let canVote = age >= 18 ? "Yes" : "No";
//"Yes" (Ternary Operator)

//Typeof Operator:
let value = 42;
let valueType = typeof value;
//"number" (Typeof Operator)

console.log("1" + 2); //12
console.log(1 + "2"); //12
console.log("1" + 2 + 2); //122
console.log(1 + 2 + "2"); //32

let gameCounter = 100;
gameCounter++;
console.log(gameCounter); //101


//Prefix and Postfix Operators:
//Prefix: When an operator appears before a variable or operand, it's called a prefix operator.
//It performs the operation before using the variable's current value.

//Postfix: When an operator appears after a variable or operand, it's called a postfix operator.
//It performs the operation after using the variables's current value.

let z = 5;
let q = 5;

let prefixIncrementZ = ++z; //Prefix Increment: Add 1 to x, then assign to prefixIncrementX
let postfixIncrementQ = q++; //Postfix Increment: Assign y to postfixIncrementY, then add 1 to y

console.log(prefixIncrementZ); //6
console.log(postfixIncrementQ); //5

//Operator Precedence:
let result = 2 + 3 * 4; //Result is 14, not 20
//multiplication (*) has higher precedence than addition (+), so it's evaluated first.

