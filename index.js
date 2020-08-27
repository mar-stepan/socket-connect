const express = require('express');
const socketIO = require('socket.io');

// App setup
const app = express();

const server = app.listen(4000, () => {
    console.log('Listening to request on port 4000',);
});


// Static files
app.use(express.static('public'));


// Socket setup
const io = socketIO(server);

io.on('connection', socket => {

    socket.on('chat', data => {
        io.sockets.emit('chat', data);
    });

    socket.on('typing', data => {
        socket.broadcast.emit('typing', data);
    });
});