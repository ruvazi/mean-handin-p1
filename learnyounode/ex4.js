var fs = require('fs');
var mainArg3 = process.argv[2];

file = fs.readFile(mainArg3, function (err, data) {
    if (!err) {
        console.log(data.toString().split('\n').length - 1);
    }
//    else console.log("fail");
});