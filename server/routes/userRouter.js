const Router = require('express');
const router = new Router();
const userController = require('../controllers/userController');

//http запросы + ссылка на контроллер



router.post('/registration', userController.registration);
router.post('/login', userController.authorization);
router.post('/logout', userController.deleteAccount);


module.exports = router