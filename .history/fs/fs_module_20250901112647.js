const fs = require('fs');

const filename = 'demo.txt';

const writeFile = fs.writeFileSync(
    filename,
    'Hello World is the file content!!!!!',
    'utf8'
);

console.log('File written successfully');
console.log(writeFile);