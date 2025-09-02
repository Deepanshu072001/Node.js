const os = require('os');

console.log("Platform:", os.platform());
console.log("User:", os.userInfo());
console.log("CPU Architecture:", os.arch());
console.log("CPU Info:", os.cpus()); 
console.log("Free Memory:", os.freemem());
console.log("Total Memory:", os.totalmem());
console.log("Home Directory:", os.homedir());
console.log("Uptime (seconds):", os.uptime());
console.log("Hostname:", os.hostname());
console.log("Network Interfaces:", os.networkInterfaces());
console.log("Temporary Directory:", os.tmpdir());
console.log("OS Release:", os.release());
console.log("OS Type:", os.type());
console.log("OS Version:", os.version());