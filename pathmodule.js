const path = require('path');

// // Path name
const a = path.basename('C:\\temp\\file.txt');
const b = path.basename('Z:\\folder\\temporary.txt');
console.log(a);
console.log(b);

// // Dir name
const aa = path.dirname('C:\\temp\\file.txt');
const bb = path.dirname('Z:\\folder\\temporary.txt');
console.log(aa);
console.log(bb);

// // Current File Extension
const ext = path.extname(__filename);
console.log(ext);