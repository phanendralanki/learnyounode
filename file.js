var fs = require('fs');
var result;
var buf = fs.readFileSync('notes.txt');
var str = buf.toString();
result=str.split('\n');
// console.log(str);
console.log(result.length-1);
// console.log(process.argv[1]);