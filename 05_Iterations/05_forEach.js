//most used for each :)
const coding = ["js", "ruby", "java", "python", "cpp"];

//callback function = task to perform
//call back function don't have name
coding.forEach(
    function (item) {
        console.log(item);
        // return item //undefined
        //for each not return anything
        //only used for coditions
    }
);

//forEach loop with arrow function
coding.forEach(
    (item) => {
        console.log(item);
    }
);

//normal function pass to for each
function printMe(item){
    console.log(item);
};

//give reference of call back function
coding.forEach(printMe);
//output: 
// js
// ruby
// java
// python
// cpp

//for each has many parameters
coding.forEach( 
    (item, index, arr) => {
        console.log(item, index, arr);
    }
);
//output: 
// js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]


//forEach loop on object
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
    {
        languageName: "c++",
        languageFileName: "cpp"
    }
]

myCoding.forEach(
    (item) => {
        console.log(item.languageName, ":-", item.languageFileName);
        //you can access objects like this directly
        //so you have extracted array's objects's property
    }
);
// output: 
// javascript :- js
// java :- java
// python :- py
// c++ :- cpp