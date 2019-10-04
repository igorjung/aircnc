const mongoose = require('mongoose');


const BookingSchema = new mongoose.Schema({
    date: String,
    approved: Boolean,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    spot: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Spot'
    }
})

//criando novo schema passando como parametro o nome, o conteúdo.
module.exports = mongoose.model('Booking', BookingSchema);
