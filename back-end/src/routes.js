const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');
//importando controller.
const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingController');

const routes = express.Router();
const upload = multer(uploadConfig);

//post posta novo dado no banco de dados.
routes.post('/sessions', SessionController.store);

routes.get('/spots', SpotController.index);
//adicionando parametro responsavel pelo aramazenamento de imagens.
routes.post('/spots', upload.single('thumbnail'), SpotController.store);

routes.get('/dashboard', DashboardController.show);

routes.post('/spots/:spot_id/bookings', BookingController.store),

module.exports = routes;