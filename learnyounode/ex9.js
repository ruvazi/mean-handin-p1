http = require("http");

var info = [];
var urlList = [];
var counter = 0;
var mainArrLenght = process.argv.length;

//saving the urlList
function UL() {
    for (var i = 2; i < mainArrLenght; i++) {
        urlList.push(process.argv[i]);
    }
};

//prints out all the data from info[]
function AsyncComplete(){
    for(var j = 0; j < info.length; j++){
        console.log(info[j]);
    };
};

//main function
function main(){
    UL();
    //http get on each of the URL's
    for(var i = 0; i < urlList.length; i++) {
        (function (i) {
            http.get(urlList[i], function (response) {
                var body = "";
                //got the data
                response.on("data", function (chunk) {
                    body += chunk;
                });
                //done with the request.
                response.on("end", function () {
                    //Store the response from the URL
                    info[i] = body;
                    counter++;
                    //Check if the results can be printed
                    //wait for all the calls using counter
                    if (counter == urlList.length) {
                        AsyncComplete();
                    }
                });
            });
        })(i);
    };
};

main();