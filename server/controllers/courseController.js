const {Course} = require('../models/models');

class courseController {
    async findCourse(req, res) {
        const coursename = req.body
        const course = Course.findOne({where: {name: coursename}})
        if (!course) {
            return res.send({msg: ['Курс не найден']})
        }
        return res.send({msg: "Курс найден"})
    }
}

module.exports = new courseController()