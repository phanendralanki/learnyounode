const fs = require('fs');

// reading file
var buf = fs.readFileSync(process.argv[2]);   //will gives buffer objects

const str = buf.toString();
// console.log(str);
const result = str.split('\n');
console.log(result.length-1);


// console.log(process.argv[1]);