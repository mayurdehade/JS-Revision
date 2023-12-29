//Example of a simple for loop
for(let index=0; index<=10; index++){
    const element = index;

    //Check if the current element is equal to 5
    if(element == 5) {
        console.log("5 is the best number");
    }

    //Print the current element
    console.log(element);
}

//Example of nested loop
for(let i=0; i<10; i++){
    console.log(`outer loop value: ${i}`);

    //Inner loop to print multiplication table
    for(let j=0; j<10; j++){
        console.log(`${i} * ${j} = ${i*j}`);
    }
}

//Looping through an array
let myArray = ["shaktiman", "batman", "superman"];
for(let index=0; index<myArray.length; index++){
    const element = myArray[index];
    console.log(element);
}

//Keywords: break and continue
//Example of using 'break' in a loop
for(let index = 1; index <= 20; index++){
    if(index == 5){
        console.log("Detected 5. Breaking loop");
        break; //This will terminate the loop
    }

    console.log(`Value of i is ${index}`);
}

//Example of using 'continue' in a loop
for(let index=1; index<=20; index++){
    if(index == 5){
        console.log("Detected 5. Continuing to the nex iteration.");
        continue; //This will skip the rest of the loop body and continue to the next iteration
    }
    console.log(`Value of i is ${index}`);
}