//The Fetch API is a modern JavaScript API for making network requests
//(like fetching data from a server).
//It provides a cleaner and more powerful interface
//compared to older method like XMLHttpRequest
//Fetch returns a promise, allowing you to handle asynchronous operations more easily.

//!. What is `fetch()`?
//'Fetch()' is a function in JavaScript for making network requests (like asking the internet for data).

//2. How do you use 'fetch()'?
//You call 'fetch()' and pass in the URL of the data you want.

const apiUrl = fetch('https://api.github.com/users/mayurdehade')
.then((response) => response.json()) //convert into json
.then(data => console.log(data)) //print data fetch from api
.catch(err => console.log(err)); //Handle error

//3. What does 'fetch()' do?
//'fetch()' goes to the internet and brings back the data you asked for.

fetch(apiUrl)
//4. What does 'fetch()' give you?
//'fetch()' gives you a Promise. It's like a promise to get the data, but it takes time.

.then(response => {
    //5. How do you open the package (Promise)?
    //Use 'then()' to open the package when 'fetch()' is done getting the data.

    //6. How do you handle the data?
    //Write code inside 'then()' to do things with the data, like showing it on a webpage.

    //Checking if the response is okay (status code 200-299)
    if(!response.ok){
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    //convert the response to JSON
    return response.json();
})
.then(data => {
    //Now you can use the data in your program
    console.log("Data: ", data);
})
.catch(error => {
    //Handle errors, like a network issue or a non-ok response
    console.error('Fetch Error: ', error.message);
})