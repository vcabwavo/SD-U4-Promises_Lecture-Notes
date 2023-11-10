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


//! Promise
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

//? The Process
/* 
    - Creating a new Promise
        - resolve / reject are parameters of a callback function
    - setTimeout() is acting out our "waiting" for a resource
    - resolve() or reject() response
    - When returned, returns a Promise - not a string
    - use of resolvers (.then() / .catch()) with callbacks to extrapolate the info from that promise.

 */