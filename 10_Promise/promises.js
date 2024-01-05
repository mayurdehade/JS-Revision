// Promises in JavaScript are a way to handle asynchronous operations more effectively.
// The represent the eventual completion or failure of an asynchronous operations
// and allow you to attach callback to handle the results.

//States:
//Pending: Initial state, the promise is neither fulfilled nor rejected.
//Fulfilled: The operation completed successfully, and the promise has a resulting value.
//Rejected: The operation failed, and the promise has a reason for the failure.

//*************** Create Promise (with variable) *************************
//A new promise is created using the promise constructor.
//inside the promise, there is an asynchronous task simulated by a setTimeout
//If the synchronous task completes successfully, it calls the resolve function.
//and this resolve is connected with the .then

const myPromise = new Promise(function(resolve, rejected) {
    //Asynchronous operation
    //If successful, call resolve(value)
    //If unsuccessful, call reject(reason)
});

//create promise -> promise is object
const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    //DB calls, cryptography, network call
    setTimeout(() => {
        console.log('Async task is complete');
        resolve(); //connect to .then to execute promise
    }, 1000);
})

//consumption of promise
//.then
promiseOne.then(function(){
    console.log("Promise consumed");
})


//***************** without variables **************** */
//directly create promise
new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log("Async task 2");
        resolve();
    }, 1000);
}).then(function(){
    console.log("Async 2 resolved");
});


// ********************************* Connection of resolve - then ******************
const promiseThree = new Promise((resolve, reject) => {
    //Simulate an synchronous task (e.g. DB call, Network call) using setTimeout
    setInterval(() => {
        //Resolve the promise with an object containing user information
        //passing data to resolve
        resolve({username: "mayur", email: "mayur@gmail.com"})
    }, 1000);
})

//consume the promise using the 'then' method
promiseThree.then(function(user) {
    //This callback function executes when the promise is resolved
    //we access parameter from resolve
    console.log(user); //Log the user object to the console
});


//*********************** Promise Chaining *************************** */

myPromise
.then((result) => {
    //Handle successful operation
})
.catch((error) => {
    //Handle failed operation
})


const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(() => {
        let error = false;
        if (!error) {
            resolve({username: "mayur", pass:"123"})
        } else {
            //reject gives error
            reject("ERROR: Something went wrong")
        }
    }, 1000);
});

// promiseFour.then().catch();

promiseFour
.then((user) => {
    console.log(user);
    return user.username;
})
.then((username) => {
    console.log(username);
})
.catch(function(error) { //catch errors
    console.log(error);
})
.finally(() => { //executes every time
    console.log("The promise is either resolved or rejected");
})


const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if(!error) {
            resolve({username: 'javascript', password: '123'})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000);
});



//********************************* Async / Await ***************************** */
//async await
async function consumePromiseFive(){
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

async function getAllUsers(){
    try {
        const response = await fetch('https://randomuser.me/api/');
        // console.log(response);
        const data = await response.json();
        console.log(data);
    } catch (error){
        console.log("E: ", error);
    }
}

getAllUsers()

//here try catch is not necessary
fetch('https://randomuser.me/api/')
.then((response) => {
    return response.json();
})
.then((data) => console.log(data))
.catch((error) => console.log(error))



// ******************************* Promise.all ****************************
//combines multiple promises into one
//Resolve when all promises are fulfilled or rejects when any promise is rejected.

/*
const promise1 = fetch('...');
const promise2 = readFile('...');

Promise.all([promise1, promise2])
.then(([result1,  result2]) => {
    //Handle result of both promises
})
.catch((error) => {
    //Handle any error from either promise
});
*/ 


//Example
//Promise that resolves after 2 seconds
const promise3 = new Promise(resolve => setTimeout(() => resolve('Promise 1 resolved'), 2000));

//Promise that resolved after 1 seconds
const promise4 = new Promise(resolve => setTimeout(() => resolve('Promise 2 resolved'), 1000));

//use Promise.all to wait for all promises to resolve
Promise.all([promise3, promise4])
.then(results => console.log(results))
.catch(error => console.log(error));

//******************************* Promise.race ************************** */
//Resolves or rejects as soon as one of the promises resolves or rejects.
/*
const promise5 = fetch('...');
const promise6 = delay(2000);
 
Promise.race([promise5, promise6])
.then((result) => {
    //Handle the first resolved promise
})
.catch((error) => {
    //Handle the first rejected promise
});
*/
