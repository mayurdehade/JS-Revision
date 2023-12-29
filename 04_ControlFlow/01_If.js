//if--------------------------------------------
const isUserLoggedIn = true;
const temp = 41;

if (temp < 50) {
  console.log("less than 50");
} else {
  console.log("");
}
console.log();
//<, >, <=, >=, ==(comparison), !=, === (chek type), !==

const score = 200;
if (score > 100) {
  const power = "fly";
  console.log(`user power ${power}`);
}

const balance = 1000;
if (balance > 500) console.log("test");
//implicite scope dont write multiple line

// nested if-----------------------------------------
if (balance < 500) {
  console.log("less than");
} else if (balance < 750) {
  console.log("less than 750");
} else {
  console.log("less than 1200");
}

// online shoping example---------------------

const isUserLoggedInn = true;
const debitCard = true;
const LoggedInFromGoogle = false;
const LoggedInFromEmail = true;

if (isUserLoggedInn && debitCard) {
  console.log("allow to buy course");
}

if (LoggedInFromEmail || LoggedInFromGoogle) {
  console.log("logged in");
}