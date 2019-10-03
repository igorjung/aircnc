const mongoose = require('mongoose');

//criando modelo.
const SpotSchema = new mongoose.Schema({
    thumbnail: String,
    company: String,
    price: Number,
    techs: [String],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    toJSON: {
        virtuals: true,
    },
});

SpotSchema.virtual('thumbnail_url').get(function(){
    return `http://192.168.0.10:3333/files/${this.thumbnail}`
})
//criando novo schema passando como parametro o nome, o conteúdo.
module.exports = mongoose.model('Spot', SpotSchema);
