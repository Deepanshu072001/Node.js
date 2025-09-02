const fs = require('fs');

const filename = 'demo.txt';
// const filepath = __dirname + '/' + filename; using path module for the 2 lines below having paths.
const filepath = path.join(__dirname, filename);
console.log(filepath);

const writeFile = fs.writeFileSync(
    filepath,
    'Hello World is the file content!!!!! updated',
    'utf8'
);

console.log('File written successfully');
console.log(writeFile);