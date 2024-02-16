const {Course, UserCourse} = require('../models/models');

class CourseService {
    async find(coursename) {
        const course = await Course.findOne({where: {name: coursename}})
        if (!course) {
            return res.send({msg: ['Курс не найден']})
        }
        return course;
    }

    async get() {
        const course = await Course.findAll({raw:true})
        return course;
    }

    async create(coursename) {
        const course = await Course.findOne({where: {name: coursename}})
        if (course) {
            return res.send({msg: "Курс с таким названием уже существует"})
        } else {
            const data = await Course.create({name: coursename})
            return data;
        }

    }

    async favorite(userId, courseId) {
        const userCourse = await UserCourse.findOne({where: userId, courseId})
        if (!userCourse) {
            const newCourse = await UserCourse.create({userId, courseId})
            await UserCourse.update(
                {favorites: true},
                { where: { userId, courseId }
            })
            return newCourse;
        }  else {
            return res.json('Курс уже находится в избранном')
        }
    }
}

module.exports = new CourseService();