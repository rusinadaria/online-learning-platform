require('dotenv').config();
const {Token} = require('../models/models');
const jwt = require('jsonwebtoken');

class tokenService {
    async generateTokens(payload) {
        const accessToken = jwt.sign(
            payload, 
            ACCESS_KEY,
            {expiresIn: '24h'});
        
        const refreshToken = jwt.sign(
            payload, 
            REFRESH_KEY,
            {expiresIn: '30d'});
        
        return {accessToken, refreshToken};
    }
        
    async saveToken(userId, refreshToken) {
        const tokenData = await Token.findOne({userid: userId})

        if (tokenData) {
            tokenData.refreshToken = refreshToken;
        }

        const token = await Token.create({
            user: userId,
            refresh:  refreshToken,
        });

        return token;
    }
}

module.exports = new tokenService();