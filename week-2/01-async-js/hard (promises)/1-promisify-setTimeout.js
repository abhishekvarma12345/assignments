/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return  new Promise(function (resolve, reject) {
        setTimeout(() => resolve(), n * 1000);
    });
}


// let p = wait(3);
// const start = Date.now();
// p.then((() => {
//     const end = Date.now();
//     const difference = end - start;
//     console.log(difference); // Expect difference to be at least 1000 ms (1 second)
//   }));

module.exports = wait;
