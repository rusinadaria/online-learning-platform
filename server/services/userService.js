const {User} = require('../models/models');
const bcrypt = require('bcrypt');
const {Token} = require('../models/models');
const { response } = require('express');
const tokenService = require('../services/tokenService');

class UserService {
    async create(username, email, password) {
        //проверить нет ли пользователя в базе 
        //сделать валидацию
        const hashPassword = await bcrypt.hash(password, 3)
        const user = await User.create({
            username,
            email,
            password: hashPassword
        });

        const payload = {id: user.id}
        const tokens = tokenService.generateTokens(payload)
        await tokenService.saveToken(payload.id, (await tokens).refreshToken)

        return {...tokens, user}

    }

    async checkPassword(email, password) {
        const user = await User.findOne({where: {email}})
        if (!user) {
            return res.status(400).send({errors: 'Неверный email'})
        } else {
            const userpasswd = user.get('password')
            const isValidPasswd = await bcrypt.compare(password, userpasswd)
            if (!isValidPasswd) {
                return console.error('Неверный пароль');
            } else {
                const payload = {id: user.id}
                const tokens = tokenService.generateTokens(payload)
                await tokenService.saveToken(payload.id, (await tokens).refreshToken)

                return {tokens, user};
            }

        };
    }

    async logout(refreshToken) {
        const token = await tokenService.removeToken(refreshToken)
        return token;
    }
}

module.exports = new UserService();