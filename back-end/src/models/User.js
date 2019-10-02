const mongoose = require('mongoose');

//criando modelo.
const UserSchema = new mongoose.Schema({
    email: String,
})

//criando novo schema passando como parametro o nome, o conteúdo.
module.exports = mongoose.model('User', UserSchema);
