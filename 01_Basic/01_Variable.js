//Variables and constant

//------------------------------------- var ----------------------------------------------
//var = it can be re-assigned a value and it can also be declared again (Global scope)
//Never use var in your code instead of let because of block and functional scope issue.

var AccountCity = "Nashik";

//re-declaration
var accountCity = "Mumbai";

//------------------------------------ const ---------------------------------------------
//const = can't be re-assigned a value and can't be declared again (Block scope)

const AccountID = 1234;

//------------------------------------ let -----------------------------------------------
//let = can be re-assigned a value but can't be declared again (Block scope)
//block scope ex if {scope}, meaning it is limited to the block in which it is defined
//and you cannot have multiple variables with same name in same scope.

let AccountName = "Mayur";

//However, you cannot redeclare it with the same name in the same scope using let

//----------------------------------- DIRECT ---------------------------------------------
AccountType = "Saving";

//We can also declare variable without assign the value
let AccountEmail;

console.log(AccountID, AccountCity, AccountName, AccountType);