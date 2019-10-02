const multer = require('multer');
const path = require('path');

module.exports = {
    storage: multer.diskStorage({
        //definindo destino para mídias, e utilizando path.resolve para que o destino seja reconhecido em todos os sistemas operacionais.
        //__dirname indica local do arquivo atual.
        destination: path.resolve(__dirname,'..','..','uploads'),
        filename: (req, file, cb) =>{
            const ext = path.extname(file.originalname);
            const name = path.basename(file.originalname, ext).split(' ').join("_");
            //mudando o nome dos arquivos pelo seu nome original-data da postagem mais a extensão
            cb(null, `${name}-${Date.now()}${ext}`);

        }
    }),
}