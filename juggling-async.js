var http = require('http');
var bl = require('bl');
var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];

http.get(url1,function(response){
    response.pipe(bl(function(err,data){
        if(err){
            return console.error(err);
        }
        console.log(data.toString());
        // return data.toString();
        // var data1 = data.toString();
    }))
})

http.get(url2,function(response){
    response.pipe(bl(function(err,data){
        if(err){
            return console.error(err);
        }
        // console.log(data.toString());
        // var data2 = data.toString();
        return data.toString();
    }))
})

http.get(url3,function(response){
    response.pipe(bl(function(err,data){
        if(err){
            return console.error(err);
        }
        // console.log(data.toString());
        // var data3 = data.toString();

        return data.toString();
    }))
})

