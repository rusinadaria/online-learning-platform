const {User} = require('../models/models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {Token} = require('../models/models');
const { response } = require('express');
const tokenService = require('../services/tokenService');

class UserService {
    async create(username, email, password) {
        const hashPassword = await bcrypt.hash(password, 3)
        const user = await User.create({
            username,
            email,
            password: hashPassword
        });

        const payload = {id: User.id}
        const tokens = tokenService.generateTokens(payload)
        await tokenService.saveToken(payload, (await tokens).refreshToken)
    }
}

module.exports = new UserService();