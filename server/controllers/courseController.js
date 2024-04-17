const courseService = require('../services/courseService');
const uuid = require('uuid')
const path = require('path')

class courseController {
    async findCourse(req, res) {
        const {name} = req.body
        const courseData = await courseService.find(name)
        return res.json(courseData);
    }

    async getCourses(req, res) {
        const courses = await courseService.get()
        res.json(courses);
        console.log(courses);
    }

    async getOneCourse(req, res) {
        const courseId = req.query.id
        const course = await courseService.getOneCourse(courseId)
        res.json(course);
        console.log(course);
    }

    async createCourse(req, res) {
        const {name} = req.body
        const {img} = req.files
        const fileName = uuid.v4() + '.jpg'
        img.mv(path.resolve(__dirname, '..', 'static', fileName))
        const courseData = await courseService.create(name, fileName)
        return res.json(courseData);
    }

    async addToFavorites(req, res) {
        const {userId} = req.body
        const {courseId} = req.body
        const data = await courseService.favorite(userId, courseId)
        return res.json(data);
    }

    async userFavorites(req, res) {
        const {userId} = req.body
        const data = await courseService.userFavorites
        return res.json(data);
    }

    //перенести в раздел пройдено
}

module.exports = new courseController()