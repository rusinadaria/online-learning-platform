const {Course} = require('../models/models');

class CourseService {
    async find(coursename) {
        const course = await Course.findOne({where: {name: coursename}})
        if (!course) {
            return res.send({msg: ['Курс не найден']})
        }
        return res.send({msg: "Курс найден"})
    }

    async get() {
        const course = await Course.findAll({raw:true})
        console.log(courses);
    }
}

module.exports = new CourseService();