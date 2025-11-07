const {Buffer} = require('buffer');

// const buf = Buffer.alloc(4);
// console.log(buf);
// console.log(buf[1]);

const buf = Buffer.from("Hello to Node.js");
console.log(buf);
console.log(buf.toString());
console.log(buf.toJSON());

// const bufTwo = Buffer.allocUnsafe(102);
// console.log(bufTwo);

