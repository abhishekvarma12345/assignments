const fs = require('fs');

function processData(data){
    console.log(data);
}

fs.readFile('easy/a.txt', 'utf-8', (err, data) => {
    processData(data);
});

let i = 0;
for (i=0; i<10000000000; i++) {
    i += 1;
}

console.log("end of for loop");

