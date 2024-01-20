const Router = require('express');
const router = new Router();
const courseController = require('../controllers/courseController');

router.get('/findCourse', courseController.findCourse)

module.exports = router