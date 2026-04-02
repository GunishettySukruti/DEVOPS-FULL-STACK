const os = require('os');

console.log("OS Name:", os.type());
console.log("Platform:", os.platform());
console.log("Architecture:", os.arch());
console.log("User:", os.userInfo().username);
console.log("Total Memory:", os.totalmem());
console.log("Free Memory:", os.freemem());
