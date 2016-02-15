http = require("http");
var mainArg3 = process.argv[2];
var info = [];

http.get(mainArg3,function(res){
    //res.setEncoding('utf8');
    res.on("data",function(input){
        info.push(input);
    });
    res.on("error",console.error);
    res.on("end",function(){
        console.log(info.join("").length)
        console.log(info.join(""));
    });
});