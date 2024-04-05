const { response } = require('express');
const userService = require('../services/userService');

class UserController {
    async registration(req, res) {
        try {
            const {username, email, password} = req.body
            const newUser = await userService.create(username, email, password);
            res.cookie('refreshToken', (await newUser.tokens).refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
            console.log(newUser);
            return res.json(newUser);
        }
        catch (e) {
            console.log(e);
        }
    }
    
    async auth(req, res) {
        const {email, password} = req.body
        const userData = await userService.checkPassword(email, password)
        res.cookie('refreshToken', (await userData.tokens).refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
        return res.json(userData);
    }

    async logout(req, res) {
        const {refreshToken} = req.cookies
        const token = await userService.logout(refreshToken)
        res.clearCookie('refreshToken')
        return res.json(token)
    }

    async refreshToken(req, res) {
        try {
            const {refreshToken} = req.cookies
            const userToken = await userService.refresh(refreshToken)
            res.cookie('refreshToken', userToken.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
            return res.json(userToken);
        }
        catch (e) {
            console.log(e);
        }
    }

    async profile(req, res) {
        try {
            const {userId} = req.body;
            const data = await userService.account(userId, courseId);
            return res.json(data);
        }
        catch (e) {
            console.log(e);
        }
    
    }
    
    async deleteAccount(req, res) {
       
    }
    
}

module.exports = new UserController();


