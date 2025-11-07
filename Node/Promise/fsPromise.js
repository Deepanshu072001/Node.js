const fs = require ("fs");
const path = require ("path");
//const promise = require ("promise");

const filename = "fsPromises.txt";
const filepath = path.join(__dirname, filename);

// fs.writeFileSync(filepath,"This is a file created by fs module");

const file = __dirname;
fs.promises 
.readdir(file)
.then((data) => console.log(data))
.catch((err) => console.error(err));