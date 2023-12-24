// Object.create //Constructor -> Singleton
//Constructor:
//It's like a blueprint for creating objects.
//Object.create is tool to make new objects based on an existing one.
//singleton from in the constructor

//Singleton:
//Think of it like having just one special instance of something.
//In JavaScript, you make sure a class has only one object, and you can always access that one.
//Single ton will not from in the literal

//Literal:
//A quick way to make objects using curly braces {} or arrays using square brackets [].
//in array we have only value to decide key will be always 0 1 2 3 4
//in object we can define the key along with the VALUE


//key: value
const JsUser = {
    name: "Mayur",
    age: 20,
    "full name": "Mayur Dehade",
    location: "Nashik",
    email: "mayur@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

//two types fo accessing the object
//1-Dot Notation
console.log(JsUser.email); //output: mayur@google.com
//not possible in when 
//1. Dynamic Property Access
//2. Property Names with Special Characters
//3. Not Suitable for Property Names with Spaces

//2-Bracket Notation:
console.log(JsUser["email"]); //output: mayur@google.com
console.log(JsUser["full name"]); //output: Mayur Dehade
//overcomes the all three drawbacks of the Dot Notation
//square natation is best way

//Q ********************************
//make one symbol and add that in objects key and print
//Create a symbol
const mySym = Symbol("key1");

//Create an object with a key using the symbol
const myObject = {
    [mySym]: "This is a vue associated with the symbol key"
    //we have to add our symbol in the []
    //if we declare it directly it will be remain the string
};

//Accessing and print the value using the symbol key
console.log(myObject[mySym]); //output: This is a vue associated with the symbol key

//Change the value in the object
JsUser.email = "mayur@whatsapp.com";

//to stop the further changes in the object
// Object.freeze(JsUser); //cannot change the values of arrays
// JsUser.email = "mayurdehade.com"; //will bot change
console.log(JsUser);

//adding function in object
JsUser.greeting = function(){
    console.log("Hello JS User");
}

JsUser.greeting2 = function() {
    console.log(`Hello Js User ${JsUser.name}`)
}
console.log(JsUser.greeting); //output: [Function (anonymous)]
JsUser.greeting(); //output: Hello JS User
JsUser.greeting2(); //output: Hello Js User Mayur
