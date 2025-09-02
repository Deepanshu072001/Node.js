const fs = require('fs');
const path = require('path');
const append = require('append');

const filename = 'demo.txt';
// const filepath = __dirname + '/' + filename; using path module for the 2 lines below having paths.
const filepath = path.join(__dirname, filename);
{/*
    // write file
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

// Reading a file
{/*
const readFile = fs.readFileSync(filepath, 'utf8');
console.log(readFile);
console.log(readFile.toString());
*/}

// Append/Update a file

const appendFile = fs.appendFileSync(
  filepath,
  '\n This is the appended data. \n Hello World is the file content!!!!! updated \n Welcome to the Node.js world',
  'utf8'
);
console.log('File appended successfully');
console.log(appendFile);