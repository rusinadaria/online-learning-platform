const {User} = require('../models/models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Token = require('../models/models');
const { response } = require('express');
const userToken = require('../hz/userToken');

class UserController {
    async registration(req, res) {
        const {username, email, password} = req.body
        const hashPassword = await bcrypt.hash(password, 3)
        const user = await User.create({
            username,
            email,
            password: hashPassword
        });

        return res.json(user);
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
                        return res.json({msg: ['Пользователь найден']}), console.log(userpasswd, result);
                        //генерация токена
                        //отправить токен браузеру
                    } else {
                        return res.send({errors: 'Пользователь yt найден'}), console.log(userpasswd, result);
                    }
                }
            }
        });
    }

    async deleteAccount(req, res) {

    }
    
}

module.exports = new UserController();


