const {DataTypes} = require('sequelize');
const sequelize = require('../db');

const User = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    }
});

const Course = sequelize.define('course', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    }
});

const Token = sequelize.define('token', {
    userid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    refresh: {
        type: DataTypes.STRING
    }
})

Course.hasMany(User);
// User.belongsTo(Course)

User.hasOne(Token, {foreignKey: 'userId'});
Token.belongsTo(User, {foreignKey: 'userId'})


module.exports = {User, Course, Token};