const userProfileService = require('../services/userProfileService');

class userProfileController {
    async getProfile(req, res) {
        const userId = req.query.id;
        const data = await userProfileService.getUserProfile(userId);
        res.json(data);
    }
}

module.exports = new userProfileController()