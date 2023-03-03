var connect = require('connect');
var serveStatic = require('serve-static');
var connectRoute = require('connect-route');

var port = 9090;
var app = connect();

app.use(connectRoute(function(route){
    route.get("/", function(req, resp){
        resp.writeHead(200, {
            'Content-Type': 'text/html'
        });
        resp.end("<h1>Main</h1>");
    });
    route.get("/user", function(req, resp){
        resp.writeHead(200, {
            'Content-Type': 'text/html'
        });
        resp.end("<h1>User</h1>")
    });
}));

app.use(serveStatic(__dirname+"/public"));
app.listen(port, function(){
    console.log('http server running on '+port);
});
