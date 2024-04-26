//const { Op } = require('sequelize');
const {User, Course, UserCourse} = require('../models/models');

class userProfileService {
    // async getUserProfile(userId) {
    //     userId = [userId]
    //     const favoriteCourses = await User.findAll({
    //         attributes: ['username'],
    //         where: {
    //             id: userId
    //          },
    //          include: [{
    //             model: Course,
    //             attributes: ['id', 'name', 'img'],
    //             through: {
    //                 attributes: []
    //             }
    //          }]
    //     });

    //     return favoriteCourses
    // }

    async getUserProfile(userId) {
        // Получаем пользователя
        const user = await User.findOne({
            where: { id: userId },
            attributes: ['username']
        });

        // Получаем избранные курсы
        const favoriteCourses = await UserCourse.findAll({
            where: {
                userId: userId,
                favorites: true
            },
            include: [{
                model: Course,
                attributes: ['id', 'name', 'img']
            }]
        });

        // Получаем завершенные курсы
        const completedCourses = await UserCourse.findAll({
            where: {
                userId: userId,
                completed: true
            },
            include: [{
                model: Course,
                attributes: ['id', 'name', 'img']
            }]
        });

        // Возвращаем объект с информацией о пользователе и его курсах
        return {
            user: user,
            favoriteCourses: favoriteCourses.map(uc => uc.Course),
            completedCourses: completedCourses.map(uc => uc.Course)
        };
    }
}
module.exports = new userProfileService();