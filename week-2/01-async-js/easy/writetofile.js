const fs = require('fs');

fs.writeFile("easy/a1.txt", "I am Abhishek Varma", () => {
    console.log("written to file successfully");
});

let i = 0;
for (i=0; i<10000000000; i++) {
    i += 1;
}

console.log("end of for loop");