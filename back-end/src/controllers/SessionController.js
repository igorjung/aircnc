//store posta coisa no banco de dados.


//req.query = Acessar query params (para filtros).
//req.params = Acessar routes params (para edição, delete).
//req.body = Acessar corpo da requisição(para criação, edição).

//importando modelo.
const User = require('../models/User');

module.exports = {
    async store(req,res){
        //modelo do dado a ser criado
        const {email} = req.body;
        //verificando se a usuario criado.
        let user = await User.findOne({ email });
        //se não houver usuario criado, comando para se criar um novo usuario.
        if(!user){
            user = await User.create({ email });
        }
        //retorna dado criado.
        return res.json(user);
    }
}