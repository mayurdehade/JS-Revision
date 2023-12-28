//Immediately Invoked Function Expression (IIFE)
//We use it to avoid the global scope pollution

//Syntax
// (function definition)(function execution)

(function chai(){
    //named IIFE
    console.log("DB CONNECTED");
})();


//un-named (arrow function) IIFE with parametrs
((database) => {
    console.log(`DB connect to ${database}`);
})('mongo db');
