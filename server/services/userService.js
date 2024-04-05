const {User, UserCourse} = require('../models/models');
const bcrypt = require('bcrypt');
const {Token} = require('../models/models');
const { response } = require('express');
const tokenService = require('../services/tokenService');
const { where } = require('sequelize');

class UserService {
    async create(username, email, password) {
        //проверить нет ли пользователя в базе 
        //сделать валидацию
        try {
            const hashPassword = await bcrypt.hash(password, 3)
            const user = await User.create({
                username,
                email,
                password: hashPassword
            });

            const payload = {id: user.id}
            const tokens = await tokenService.generateTokens(payload)
            await tokenService.saveToken(user.id, (await tokens).refreshToken)
            //console.log((await tokens).accessToken);
            //return {accessToken: (await tokens).accessToken, refreshToken: (await tokens).refreshToken, user};
            return {tokens, user};
        }
        catch (e) {
            console.log(e);
        }

    }

    async checkPassword(email, password) {
        const user = await User.findOne({where: {email}})
        if (!user) {
            throw new Error ({errors: 'Неверный email'})
        } else {
            const userpasswd = user.get('password')
            const isValidPasswd = await bcrypt.compare(password, userpasswd)
            if (!isValidPasswd) {
                throw new Error ('Неверный пароль');
            } else {
                const payload = {id: user.id}
                const tokens = await tokenService.generateTokens(payload)
                await tokenService.saveToken(user.id, (await tokens).refreshToken)

                return {tokens, user};
            }

        };
    }

    async logout(refreshToken) {
        const token = await tokenService.removeToken(refreshToken)
        return token;
    }

    async refresh(refreshToken) {
        const findToken = await Token.findOne({where: {refreshToken}})
        if (!findToken) {
            return console.error('Токен не найден');
        } else {
            const payload = {id: User.id}
            const user = User.id
            const tokens = tokenService.generateTokens(payload)
            await tokenService.saveToken(user, (await tokens).refreshToken)

            return {tokens, user};
        }
    }

    async account(id) {
        const user = await UserCourse.findOne({where: {userId: id}});
        return user;
    }

}

module.exports = new UserService();