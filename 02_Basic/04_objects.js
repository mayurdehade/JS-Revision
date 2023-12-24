//It's a single, unique instance of an object
const tinderUser = new Object(); //Singleton Object
console.log(tinderUser); //output: {}

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;
console.log(tinderUser);

//non singleton object
//Regular objects that can have multiple instances.
const tinderUser2 = {};
tinderUser2.id = "123";
tinderUser2.name = "Bobby";
console.log(tinderUser2);

//object in object
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "mayur",
            lastname: "dehade"
        }
    }
}

console.log(regularUser.fullname.userfullname); //output: { firstname: 'mayur', lastname: 'dehade' }

console.log(regularUser.fullnames?.userfullname); //if full name is not in object 
//? available or not


//what if we want to assign the any object to other object
//The Object.assign() static method copies all properties and elements form one or more source 
//object to a target object. It return the modified target object.

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};
const obj3 = {5: "a", 6: "b"};

// const obj4 = {obj1, obj2};

//const returnedTarget = Object.assign(target, source);
//it stores in new array {} (destination)
const obj4 = Object.assign({}, obj1, obj2, obj3); 
//output: { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }
console.log(obj4);

//Spared Operator
//but for simplicity we always use spared operator
const obj5 = {...obj1, ...obj2, ...obj3}; 
//output: { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }
console.log(obj5);

//array of object
//it useful when we are dealing with the objects
const users = [
    {
        id:1,
        email: "m@gmail.com"
    },
    {
        id:1,
        email: "m@gmail.com"
    
    },
    {
        id:1,
        email: "m@gmail.com"
    },
    {
        id:1,
        email: "m@gmail.com"
    },
    {
        id:1,
        email: "m@gmail.com"
    }
];

console.log(users[1].email); //output: m@gmail.com
//user is our array
//and users[1] is our object
//so we an access it by dot operator
//getting all keys

//Object.keys
//how to extract the key and value from object
//this will return the array so that wen can apply the loop other functions
console.log(Object.keys(tinderUser)); //output: [ 'id', 'name', 'isLoggedIn' ] (array format)

console.log(Object.values(tinderUser)); //output: [ '123abc', 'Sammy', false ] (array format)

console.log(Object.entries(tinderUser)); //output: [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn')); //output: true


//Destructuring the object

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

//normal
// course.courseInstructor

//destructure object
const {courseInstructor} = course;
const {courseInstructor: instructor} = course;
console.log(courseInstructor); //output: hitesh
console.log(instructor); //output: hitesh


// API
//all values come in the from of the json
//jason have key string and value also

// {
//   "name": "asda";
//   "course": "sadasd";
//   "price": "asdasd";
// }

// [
//     {},
//     {},
//     {}
// ]
