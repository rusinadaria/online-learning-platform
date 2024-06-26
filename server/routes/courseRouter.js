const Router = require('express');
const router = new Router();
const courseController = require('../controllers/courseController');
const courseService = require('../services/courseService');

router.get('/findCourse', courseController.findCourse)
router.get('/fetchCourses', courseController.getCourses)
router.post('/createCourse', courseController.createCourse)
router.get('/fetchCourse', courseController.getOneCourse)
router.post('/addToFavorites', courseController.addToFavorites)
router.post('/addToCompleted', courseController.addToCompleted)
router.get('/userFavorites', courseService.userFavorites)



module.exports = router