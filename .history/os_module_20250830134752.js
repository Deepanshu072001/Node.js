const os = require('os');

console.log("Platform:", os.platform());
console.log("User:", os.userInfo());

console.log("CPU Architecture:", os.arch());
console.log("CPU Info:", os.cpus()); 