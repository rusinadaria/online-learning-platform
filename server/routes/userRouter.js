const Router = require('express');
const router = new Router();
const userController = require('../controllers/userController');


router.post('/registration', userController.registration);
router.post('/login', userController.auth);
router.post('/logout', userController.logout);


module.exports = router