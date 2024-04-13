const {User, UserCourse} = require('../models/models');

class userProfileService {
    async getUserProfile(userId) {
        const user = await User.findOne({where: {id: userId}});
        const favoriteCourses = await UserCourse.findAll(
            {where: {
                userId: userId,
                favorites: true
            }
        });
        // const completedCourses = await UserCourse.findAll(
        //     {where: {
        //         userId: userId,
        //         favorites: true
        //     }
        // });

        return {user, favoriteCourses}

    }
}
module.exports = new userProfileService();