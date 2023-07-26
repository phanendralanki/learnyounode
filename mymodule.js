// export this to make-it-modular.js

var fs = require('fs');
var path = require('path');

module.exports = function(directory,exact,callback){
    fs.readdir(directory,function(err,files){
        if(err){
            return callback (err);
        }else{
            const filteredfile = files.filter(file=>path.extname(file)==='.${exact}');
            callback(null,filteredfile);
        }
    })
}