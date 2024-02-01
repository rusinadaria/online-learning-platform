const {User} = require('../models/models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {Token} = require('../models/models');
const { response } = require('express');
const tokenService = require('../services/tokenService');
const userService = require('../services/userService');

class UserController {
    async registration(req, res) {
        const {body} = req
        const newUser = await userService.create(body);

        return res.json(body);
    }
    
    async authorization(req, res) {
        const {email, password} = req.body
        const finduser = await User.findOne({where: {email: email}})
        const userpasswd = finduser.get('password')
        await bcrypt.compare(password, userpasswd, function(err, result) {
            if (err) {
                // return res.send({errors: ['Пользователь не найден']})
            } else {
                if (!finduser) {
                    return res.send({errors: ['Пользователь не найден']})
                } else {
                    if (result) {
                        //return res.json({msg: ['Пользователь найден']}), console.log(userpasswd, result);
                        //генерация токена
                        const payload = {id: user.id}
                        //отправить токен браузеру
                    } else {
                        return res.send({errors: 'Пользователь yt найден'}), console.log(userpasswd, result);
                    }
                }
            }
        });
    }

    async logout(req, res) {

    }
    
    async deleteAccount(req, res) {

    }
    
}

module.exports = new UserController();


