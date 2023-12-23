//Dates 1970
//object
//JavaScript Date object represents a single moment in time in a platform-independent format.
//Data object encapsulated an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC (the epoch).

//Creating a Data Object
let myDate = new Date();
console.log(myDate);
console.log(myDate.toString()); //Current date and time in the format "Sat Dec 23 2023 15:31:38 GMT+0530 (India Standard Time)"
console.log(myDate.toDateString()); //output: Sat Dec 23 2023
console.log(myDate.toLocaleString()); //output: 23/12/2023, 3:31:38 pm
console.log(typeof myDate); //object

//Creating a Date Object with Different Formats
let myCreatedDate = new Date(2023, 0, 23); //declare data (month start from 0)
console.log(myCreatedDate.toDateString()); //output: Mon Jan 23 2023

let myCreatedDate1 = new Date(2023, 0, 23, 5, 3); //with include time
console.log(myCreatedDate1.toString()); //output: Mon Jan 23 2023 05:03:00 GMT+0530 (India Standard Time)

let myCreatedDate2 = new Date("2023-01-14") //yyyy-mm-dd
let myCreatedDate3 = new Date("11-05-2023"); //dd-mm-yyyy
console.log(myCreatedDate2.toLocaleString());

//Time Stamp
//Time stamp is used to calculate accurate time in milliseconds
let myTimeStamp = Date.now();
console.log(myTimeStamp); //millisecond value from 1 jan 1970
console.log(myCreatedDate.getTime());
console.log(Date.now()/1000); //convert into second


//Extracting components fo a data
let newDate = new Date();
console.log(newDate);

let year = newDate.getFullYear();
let month = newDate.getMonth(); //Note: Months are zero-indexed (0 for January, 11 for December)
let date = newDate.getDate();
let hours = newDate.getHours();
let minutes = newDate.getMinutes();
console.log(`Date components: ${year}-${month+1}-${date} ${hours}:${minutes}`); //output: Date components: 2023-12-23 15:59

//Formatting Dates
let formattedDate = newDate.toLocaleString('default', {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
});
console.log(formattedDate); //output: Saturday, 23 December, 2023

//Manipulating Dates
let nextWeek = new Date();
nextWeek.setDate(nextWeek.getDate()+7);
console.log(nextWeek); //output: Date object representing the current date + 7 days

//Calculating Time Difference
let startDate = new Date("2023-11-01");
let endDate = new Date("2023-11-20");
let timeDifference = endDate - startDate;
let daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
console.log(`Days Difference: ${daysDifference}`); //output: Days Difference: 19
