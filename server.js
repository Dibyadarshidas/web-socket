const express = require('express');
const socket = require('socket.io');
//MIODDLEWARE
const app = express();
app.use(express.static('public'))

//PORT
const port = 7000;
const server = app.listen(port, ()=>{
    console.log("app running on port 7000")
});

//WEB SOCKET
const io = socket(server)

io.on('connection', (socket)=>{
    socket.on("chat",data=>{
        io.sockets.emit('chat', data)
    })
    socket.on('typing', data=>[
        socket.broadcast.emit('typing', data)
    ])
})


