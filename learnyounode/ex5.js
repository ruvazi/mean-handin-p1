var fs = require('fs');
//var myModule = require('myModule'); til opg 6
var path = require('path');
var mainArg3 = process.argv[2];

file = fs.readdir(mainArg3, function (err, list) {
    if (!err) {
        list.forEach( function(file, i){
            if (path.extname(file) === '.' + process.argv[3]) {
                console.log(file);
            }
        });
    }
});
