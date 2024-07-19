const exprees = require('express');
const path = require('path');
require('dotenv').config();


// app de expres
const app = exprees();

// node server
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);
require('./sockets/socket');

//path
const publicPath = path.resolve(__dirname, 'public')

app.use( exprees.static( publicPath ));

server.listen(process.env.PORT , ( err )=>{
    if(err) throw new Error(err);
    console.log('servidor corriendo en puerto!!!!: ', process.env.PORT)
})
