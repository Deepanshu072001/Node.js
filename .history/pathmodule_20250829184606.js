const path = require('path');

console.log(__dirname);
console.log(__filename);

const filepath = path.join("folder",'learning','hello.txt');

console.log(filepath);

const parseData = path.parse(filepath);
const resolvedPath = path.resolvedPath(filepath);
const extname = path.extname(filepath);
const basename = path.basename(filepath);
const dirname = path.dirname(filepath);

console.log(parseData);
console.log(resolvedPath);
console.log(extname);
console.log(basename);
console.log(dirname);
