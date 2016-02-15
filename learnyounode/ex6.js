var modul = require('./ex6-2.js');
var mainArg3 = process.argv[2];
var mainArg4 = process.argv[3];

modul(mainArg3, mainArg4, function(err, list) {
    if (err)
        console.log('err');
    else {
        for (var i = 0; i < list.length; ++i) {
            console.log(list[i]);
        }
    }
});
