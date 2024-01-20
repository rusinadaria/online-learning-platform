require('dotenv').config();
const {User} = require('../models/models');
const jwt = require('jsonwebtoken');
const Token = require('../models/models');
const userController = require('../controllers/userController');

class userToken {
    // функция для генерации токенов
    async generate() {
        const access = jwt.sign(
            {id: User.id, email: User.email}, 
            ACCESSKEY,
            {expiresIn: '24h'});
        
        const refresh = jwt.sign({id: User.id, email: User.email}, 
            REFRESHKEY,
            {expiresIn: '30d'})
        
        return {access, refresh};
        }
        
        //функция для сохранения токена
        async dkgfs() {
        await Token.create({
            userid: access,
            refresh:  refresh,
        });
    }
}

module.exports = new userToken();