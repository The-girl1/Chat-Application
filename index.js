
//Including external modules
var express = require('express');
var socket = require('socket.io');

//App setup
var app = express();
var server =app.listen(4000 , function(){
  console.log('listening to requests on 4000');
});

//static files
app.use(express.static('public'));

//socket setup
var io = socket(server);

io.on('connection',(socket) => {
  console.log('made socket connection',socket.id);

  socket.on('chat',function(data){
    io.sockets.emit('chat',data);
  });
  socket.on('typing',function(data){
    socket.broadcast.emit('typing',data);
  })
});
