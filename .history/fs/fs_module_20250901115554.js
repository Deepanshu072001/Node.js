const fs = require('fs');
const path = require('path');
const filename = 'demo.txt';
// const filepath = __dirname + '/' + filename; using path module for the 2 lines below having paths.
const filepath = path.join(__dirname, filename);
{/*
console.log("filepath:", filepath);
console.log("directoryname:",__dirname);

const writeFile = fs.writeFileSync(
    filepath,
    'Hello World is the file content!!!!! updated \n Welcome to the Node.js world',
    'utf8'
);

console.log('File written successfully');
console.log(writeFile);
*/}
const readFile = fs.readFileSync(filepath);
console.log(readFile);
