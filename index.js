var express = require('express')
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path')

app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/index.html', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
    console.log('a user connected');
    socket.on('chat message', function(message) {
        io.emit('chat message', message);
        console.log('message: ' + message);
    });
    socket.on('disconnect', function() {
        console.log('user disconnected');
    });
});

http.listen(3000, function () {
    console.log('listening on *: 3000');
});
