/* 
    - Data will likely NOT be stored directly within our projects.
        - Getting a list of users.
        - Getting data per a users account.
*/

//? MOCK INTERNET REQUEST FUNCTION
/* 
*   Using this window method to mimic this request.
    - setTimeout(cb,number)
        - takes two parameters
            - Callback function
            - A number
                - References a length of time in milliseconds
                - ex: 5 seconds = 5000
*/

// function getData (){
//     setTimeout( () => {
//         return "Data has been received";
//     }, 3000);
// }

// let data = getData();
// console.log(data); // undefined


function getData(cb) {
    setTimeout (() => {
            cb('Data has been received 2');
        }, 3000);
}

// getData(data => console.log(data))
// console.logo(getData());
// //! Promise
/* 
    A promise is an object that may produce a singular value in the return.

    Three (3) possible states:
        - Pending
        - Fulfilled
        - Rejected

    Requires two parameters
        - resolve
        - reject

    ALWAYS returns an object
*/

function returnData() {
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(true){
                resolve('some data from promise')
            }else{
                reject('error: promise rejected')
            }
        })
    })
}

console.log(returnData());

//! Resolvers
/* 
    - When returned, the returnData() function will return a Promise instead of a string.

    - Chained with a resolver
    - Takes in a callback function
    - syntax notes: semicolon (;) placed ONLY after the last resolver

*       Keywords:
            .then(cb) 
                - success
                - can be chained together
            .catch(cb)
                - error
*/

returnData()
    .then(response => {
        console.log('1st', response)
        return response
    })
    .then(data => {
        console.log('2nd', data)

    })
    .catch(function(err){
        console.log('CATCH', err)
    })

//? The Process
/* 
    - Creating a new Promise
        - resolve / reject are parameters of a callback function
    - setTimeout() is acting out our "waiting" for a resource
    - resolve() or reject() response
    - When returned, returns a Promise - not a string
    - use of resolvers (.then() / .catch()) with callbacks to extrapolate the info from that promise.

 */