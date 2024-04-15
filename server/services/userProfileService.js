const { Op } = require('sequelize');
const {User, Course} = require('../models/models');

class userProfileService {
    async getUserProfile(userId) {
        userId = [1]
        const favoriteCourses = await User.findAll({
            attributes: ['username'],
            where: {
                id: {
                    [Op.in]: userId
                }
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