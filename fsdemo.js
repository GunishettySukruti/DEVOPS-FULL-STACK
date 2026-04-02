const fs = require('fs');

// read the file
const data = fs.readFileSync('hello.txt', 'utf8');

console.log(data);
