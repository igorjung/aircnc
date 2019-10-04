const Booking = require('../models/Booking');

module.exports = {
    async store(req, res){
        const { user_id } = req.headers;
        //pegando o id do spot pelos params.
        const { spot_id } = req.params;
        const { date } = req.body;

        const booking = await Booking.create({
            user: user_id,
            spot: spot_id,
            date,
        });
        
        //populate é uma função para preencher dados de uma requisição com os dados de outra.
        await booking.populate('spot').populate('user').execPopulate();

        //verifica se o usuario esta conectado.
        const ownerSocket = req.connectedUsers[booking.spot.user];

        if(ownerSocket) {
            req.io.to(ownerSocket).emit('booking_request', booking);
        }
        return res.json(booking);
    }
}