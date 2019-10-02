const Spot = require('../models/Spot');
const User = require('../models/User');
module.exports = {
    async index(req,res){
        const { tech } = req.query;

        const spots = await Spot.find({ techs: tech });

        return res.json(spots);
    },
    async store(req,res){
        const { filename } = req.file;
        const { company, techs, price } = req.body;
        //req.header = Acessar contexto da requisição;
        const { user_id } = req.headers;

        const user = await User.findById(user_id);
        //verificando se usuario existe.
        if(!user){
            return res.status(400).json({error:'User does not exists.'});
        }

        const spot = await Spot.create({
            user: user_id,
            thumbnail: filename,
            company,
            //convertendo string em uma array.
            techs: techs.split(',').map(tech => tech.trim()) ,
            price
        });

        return res.json(spot);
    }
}