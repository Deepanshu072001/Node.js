const fs = require('fs');
const path = require('path');

const filename = 'async_demo.txt';
const filepath = path.join(__dirname, filename); // const filepath = __dirname + '/' + filename; using path module for the 2 lines below having paths.

//async write file
{/*
fs.writeFile(
  filepath,
  'Hello World is the async file content! \n Welcome to the Node.js world',
    'utf8',
    (err) => {
        if (err) {
            console.log('Error writing file:', err);
        } else {
            console.log('File written successfully');
        }
    }
);
*/}

// Async read file
{/*
fs.readFile(filepath, 
    'utf-8', 
    (err, data) => {
        if (err) {
            console.log('Error reading file:', err);
        } else {
            console.log('File content:', data);
        }
    }
);
*/}

// Async append/update file
{
fs.appendFile(
  filepath,
    ' This is the async appended data. \n=> Hello World is the file content!!!!! appended data. Welcome to the Node.js code',
    'utf8',
    (err) => {
        if (err) {
            console.log('Error appending file:', err);
        } else {
            console.log('File appended successfully');
        }
    }
);
}
