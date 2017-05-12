var http = require('http');
var fs = require('fs');
var socketio = require('socket.io');

var server = http.createServer(function(req, res){

    fs.readFile('HTMLPage.html', function(error, data){
        res.writeHead(200, {'Content-Type':'text/html'});
        res.end(data);
    });

}).listen(52273, function(){

    console.log('Server running at http://127.0.0.1:52273');

});

var io = socketio.listen(server);