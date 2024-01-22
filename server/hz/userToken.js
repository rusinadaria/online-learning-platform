require('dotenv').config();
const {User} = require('../models/models');
const jwt = require('jsonwebtoken');
const Token = require('../models/models');
const userController = require('../controllers/userController');
const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy

// class userToken {
//     // функция для генерации токенов
//     async generateTokens() {
//         const access = jwt.sign(
//             {id: User.id, email: User.email}, 
//             ACCESS_KEY,
//             {expiresIn: '24h'});
        
//         const refresh = jwt.sign({id: User.id, email: User.email}, 
//             REFRESH_KEY,
//             {expiresIn: '30d'})
        
//         return {access, refresh};
//         }
        
//         //функция для сохранения токена
//         async saveToken(access, refresh) {
//         await Token.create({
//             userid: access,
//             refresh:  refresh,
//         });
//     }
// }

module.exports = new userToken();