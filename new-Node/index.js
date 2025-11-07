const fs = require("fs");

const contents = fs.readFileSync('copy.txt', 'utf-8');
console.log(contents);

fs.writeFileSync('copy.txt', 'I want to show the in-built fs module', 'utf-8');
//fs.mkdirSync('folder/sub-folder/file', {recursive: true});
//fs.rmdirSync('folder/sub-folder/file');

fs.unlinkSync('notes.txt');

