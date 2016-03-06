/**
 * Created by Rune on 06-03-2016.
 */
// middleware that manipulate, save change og log data before reaching the desire called function, shortly said its mounting the calls to the api

//Third-party middleware
app.use(bodyParser.urlencoded())

//Custom middleware
app.use(function (req, res, next) {
    console.log('Time:', Date.now()+"Log all requests");
    next();
});

//Route functions
app.all('/somePath',function(req,res){
    console.log("Log on all request for /somePath (GET,POST, PUT, DELETE)")
})
app.get('/somePath', function(req, res){
    res.send('This is a route');
});
app.post('/somePath', function(req, res){
    //.. Do something with the request parameters
});

//Built-in middleware (the only one left in V4.x.x)
app.use(express.static('./public'));