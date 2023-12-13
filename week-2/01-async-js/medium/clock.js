


function clock() {
    let date = new Date();
    console.log(`24hr format:${date.getHours()}:${date.getMinutes()}::${date.getSeconds()}`);
    console.log(`12hr format:${date.getHours() - 12}:${date.getMinutes()}::${date.getSeconds()}`);
}

setInterval(clock, 1000);