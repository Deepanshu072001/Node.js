const fs = require('fs');
const path = require('path');

const filename = 'demo.txt';
const filepath = path.join(__dirname, filename); // const filepath = __dirname + '/' + filename; using path module for the 2 lines below having paths.

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
{/*
const appendFile = fs.appendFileSync(
  filepath,
  ' This is the appended data. \n=> Hello World is the file content!!!!! appended data. Welcome to the Node.js world',
  'utf8'
);
console.log('File appended successfully');
console.log(appendFile);
*/}

// Rename a file
const newUpdatedFileName = 'demo_renamed.txt';
const newFilepath = path.join(__dirname, 'demo_renamed.txt');
const renameFile = fs.renameSync(filepath, newFilepath);
console.log('File renamed successfully');
console.log(renameFile);

// Delete a file
{/*
const deleteFile = fs.unlinkSync(filePath);
console.log('File deleted successfully');
console.log(deleteFile);
*/}