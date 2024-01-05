//******************* Object Literal *************************
//An oject literal is created to represent a user. It includes properties like 'username' and loginCount',
//along with a method 'toLowerCase' to convert the username to lowercase.
const user = {
    username: 'MAYUR',
    loginCount: 8,
    signedIn: true,

    getUserDetails: function() {
        console.log("Got user details from database");
        this.username = this.username.toLowerCase();
        console.log(this.username);
    }
};

//Accessing a property of the object
console.log(user.username);
console.log(user.getUserDetails());


//************************ Constructor Function ************************
//The user constructor function is defined to create user objects with properties and methods.
//Instance are created using the new keyword.
function Users(username, signedIn){
    this.username - username;
    this.signedIn = signedIn;

    //Adding a method to the prototype
    Users.prototype.change = function() {
        this.username = "Mayur";
    };
}

//Creating an instance using the constructor functions
const newUser = new Users("Mark", true);

//Accessing property of the instance
console.log(newUser.username); //Output: Mark

//Using the method from the prototype
newUser.change();
console.log(newUser.username); //output: mark


// **************************** ES6 Classes *************************
//The class is introduced in ES6, providing a cleaner syntax for creating constructor functions and prototypes.
//Methods can be added directly inside the class.
class NewUser{
    constructor(username, signedIn){
        this.username = username;
        this.signedIn = signedIn;
    }

    //Adding a method directly in the class
    toLowerCase(){
        this.username = this.username;
    }
}

//Creating an instance using the class
const newerUser = new NewUser("Milind", false);

//Accessing a property of the instance
console.log(newerUser.username); //output: Milind

//using the method directly from the class
newerUser.toLowerCase();
console.log(newerUser.username); //output: milind
