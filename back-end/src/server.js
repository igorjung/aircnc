//importando  express.
const express = require('express');
//importando mongoose.
const mongoose = require('mongoose');
//importando cors.
const cors = require('cors');
//importando path do node.
const path = require('path');
//importando socket.io.
const socketio = require('socket.io');
//importando http do node.
const http = require('http');


//importando rotas.
const routes = require('./routes');


//chamando funçao express.
const app = express();
const server = http.Server(app);
const io = socketio(server);

//conectando com mongo atlas.
mongoose.connect('mongodb+srv://usuario:senha@cluster0-sc5c8.mongodb.net/arcnc?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const connectedUsers = {};

//detecta se a usuários conectados.
io.on('connection', socket =>{
   
    const { user_id }  = socket.handshake.query;

    connectedUsers[ user_id ] = socket.id;
});

//next serve para que após essa função seja lida as próximas.
app.use((req, res, next) => {
    req.io = io;
    req.connectedUsers = connectedUsers;

    return next();
});

app.use(cors());
//comando que pede para que express use formato json
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname,'..', 'uploads')));
app.use(routes);


//ouvir a porta local 3333.
server.listen(3333);
