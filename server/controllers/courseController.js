const courseService = require('../services/courseService');

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

    async createCourse(req, res) {
        const {name} = req.body
        const courseData = await courseService.create(name)
        return res.json(courseData);
    }

    async AddToFavorites(req, res) {
    
    }

    //добавить в мои курсы => добавить 

    //перенести в раздел пройдено
}

module.exports = new courseController()