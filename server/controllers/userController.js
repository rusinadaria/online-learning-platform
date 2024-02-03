const { response } = require('express');
const userService = require('../services/userService');

class UserController {
    async registration(req, res) {
        const {username, email, password} = req.body
        const newUser = await userService.create(username, email, password);
        res.cookie('refreshToken', newUser.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
        return res.json(newUser);
    }
    
    async auth(req, res) {
        const {email, password} = req.body
        const userData = await userService.checkPassword(email, password)
        res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
        return res.json(userData);
    }

    async logout(req, res) {
        const {refreshToken} = req.cookies
        const token = await userService.logout(refreshToken)
        res.clearCookie('refreshToken')
        return res.json(token)
    }
    
    async deleteAccount(req, res) {
        
    }
    
}

module.exports = new UserController();


