// var fs = require('fs');

// const file = fs.readdir(process.argv[1],'txt',function (err,list){
//     if(err) throw err;
//     console.log(file);
// })

// console.log(process.argv[1]);

// var fs = require('fs');

// const file = fs.readdir(process.argv[1],(err,list)=>{
//     if(err) throw err;
//     else{
//     list.forEach(element => {
        // console.log(element); 
//         var extension = element.split('.');
//         // console.log(extension[1]);
//         if(extension[1]=='txt'){
//             console.log(extension[0]);
//         }
//     });
//     }
// })

// const file = fs.readdir('node',function(err,list){
//     if(err) throw err;
//     console.log(list);
// });



var fs = require('fs');
var path = require('path');
var directory = process.argv[2];
var exact = '.'+process.argv[3];

fs.readdir(directory,function(err,files){
    if(err) throw err;
    files.forEach((file)=>{
        if([path.extname(file)==exact]){
            console.log(file);
        }
    })
});
