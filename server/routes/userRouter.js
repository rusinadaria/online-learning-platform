const Router = require('express');
const router = new Router();
const userController = require('../controllers/userController');
const passport = require('../middlewares/passport');


router.post('/registration', userController.registration);
router.post('/login', userController.auth);
router.post('/logout', userController.logout);
router.get('/reresh', userController.refreshToken);
router.get('/profile', passport.authenticate('jwt', {session: false}), userController.profile)




module.exports = router