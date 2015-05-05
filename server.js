/**
 * Main application file
 */

'use strict';

var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);
var io=require('socket.io').listen(server, {log:false});

var connectedSockets=[];

io.sockets.on('connection', function(socket){
  connectedSockets.push(socket);
  console.log('a new connection, num of connections is '+(connectedSockets.length));

  socket.on('control', function(msg){
  	console.log(msg);
  	connectedSockets.forEach(function(s){
  		s.emit('control', msg);
  	});
  })

  socket.on('disconnect', function(){
    var idx = connectedSockets.indexOf(socket);
    connectedSockets.splice(idx,1);

    console.log('disconnected, remaining connections: '+ (connectedSockets.length));
  });


})




app.use(express.static('./public'));
app.set('views', './public/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/control', function (req, res) {
	res.render('control.html');
});

server.listen(3000);
console.log('Listening on port 3000');

// Expose app
exports = module.exports = app;