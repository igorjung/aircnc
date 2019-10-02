//importando  express.
const express = require('express');
//importando mongoose.
const mongoose = require('mongoose');
//importando cors.
const cors = require('cors');
//importando path.
const path = require('path');

//importando rotas.
const routes = require('./routes');


//chamando funçao express.
const app = express();

//conectando com mongo atlas.
mongoose.connect('mongodb+srv://usuario:senha@cluster0-sc5c8.mongodb.net/arcnc?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
//comando que pede para que express use formato json
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname,'..', 'uploads')));
app.use(routes);


//ouvir a porta local 3333.
app.listen(3333);
