const Router = require('express');
const router = new Router();

const userRouter = require('./userRouter') 
const homeRouter = require('./homeRouter')
const courseRouter = require('./courseRouter')
const profileRouter = require('./userProfileRouter')

router.use('/users', userRouter);
router.use('/home', homeRouter);
router.use('/courses', courseRouter);
router.use('/profile', profileRouter);


module.exports = router

