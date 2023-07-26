// const one = prompt()
// const two = prompt()

// console.log(process.argv);
// var result = 0;
// for(var i=2;i<process.argv.length;i++){
//     result+=Number(process.argv[i]);
// }

// console.log(result);
var result = 0;
for(var i=2;i<process.argv.length;i++){
    result+= Number(process.argv[i]);
}
// console.log(process.argv);
console.log(result);