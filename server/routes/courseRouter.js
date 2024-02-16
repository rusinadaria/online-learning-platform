const Router = require('express');
const router = new Router();
const courseController = require('../controllers/courseController');

router.get('/findCourse', courseController.findCourse)
router.get('/fetchCourses', courseController.getCourses)
router.post('/createCourse', courseController.createCourse)
router.post('/addToFavorites', courseController.addToFavorites)



module.exports = router