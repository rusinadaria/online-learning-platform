const Router = require('express');
const router = new Router();
const userProfileController = require('../controllers/userProfileController');


router.get('/getProfile', userProfileController.getProfile);


module.exports = router