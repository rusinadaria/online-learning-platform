const courseService = require('../services/courseService');

class courseController {
    async findCourse(req, res) {
        const coursename = req.body
        const courseData = await courseService.find(coursename)
        return res.json(courseData);
    }

    async getCourses(req, res) {
        const courses = await courseService.get()
        console.log(courses);
    }

    //добавить в мои курсы => добавить 

    //перенести в раздел пройдено
}

module.exports = new courseController()