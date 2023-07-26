const fs = require('fs');

const buf = fs.readFile(process.argv[2],'utf-8',function(err,data){
        if(err) throw error;
        const result = data.toString().split('\n');
        console.log(result.length-1);
});