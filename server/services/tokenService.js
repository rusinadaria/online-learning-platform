require('dotenv').config();
const { where } = require('sequelize');
const {Token} = require('../models/models');
const jwt = require('jsonwebtoken');

class tokenService {
    async generateTokens(jwt_payload) {
        const accessToken = jwt.sign(
            jwt_payload, 
            process.env.ACCESS_KEY,
            {expiresIn: '24h'});
        
        const refreshToken = jwt.sign(
            jwt_payload, 
            process.env.REFRESH_KEY,
            {expiresIn: '30d'});
        
        return {accessToken, refreshToken}, console.log(accessToken, refreshToken);
    }
        
    async saveToken(userId, refreshToken) {
        try {
            const tokenData = await Token.findOne({userid: userId})

            if (tokenData) {
                tokenData.refreshToken = refreshToken;
                return tokenData.save();
            } else {
                const token = await Token.create({
                    userid: userId,
                    refresh: refreshToken
                });
                return token;
            }
        } 
        catch (e) {
            console.log(e);
        }
    }

    async removeToken(refreshToken) {
        const token = await Token.destroy({where: {refresh: refreshToken}})
        return token;
    }
}

module.exports = new tokenService();