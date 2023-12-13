/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => resolve("Hi there"), n * 1000);
    });
}


let p = wait(10);
console.log(p);
p.then((message) => console.log(message));