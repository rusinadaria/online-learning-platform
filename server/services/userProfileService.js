//const { Op } = require('sequelize');
const {User, Course} = require('../models/models');

class userProfileService {
    async getUserProfile(userId) {
        userId = [userId]
        const favoriteCourses = await User.findAll({
            attributes: ['username'],
            where: {
                id: userId
             },
             include: [{
                model: Course,
                attributes: ['id', 'name'],
                through: {
                    attributes: []
                }
             }]
        });

        return favoriteCourses

    }
}
module.exports = new userProfileService();