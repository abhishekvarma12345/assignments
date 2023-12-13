const fs = require('fs');

function testFileRead(filepath){
    let readPromise = new Promise((resolve, reject) =>{
        fs.readFile(filepath, 'utf-8', (err, data) => {
            console.log("Read successfully....");
            resolve(data);
        });
    });
    return readPromise;
}

function testFileWrite(filepath, filecontent) {
    let writePromise = new Promise((resolve, reject) => {
        fs.writeFile(filepath, filecontent, () => {
            resolve("Rewritten by removing spaces successfully");
        });
    });
    return writePromise;
}



async function readAndWriteToFile(filepath) {
    let content = await testFileRead(filepath);
    let processedFileContent = content.split(" ").filter(string => string.length>=1).join(" ");
    let isContentWritten = await testFileWrite(filepath, processedFileContent);
    console.log(isContentWritten);
}

readAndWriteToFile('medium/testfile.txt');