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
    },
    img: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.STRING,
    },
    server_address: {
        type: DataTypes.STRING,
    },
    file_path: {
        type: DataTypes.STRING,
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

const UserCourse = sequelize.define('userCourse', {
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id'
        },
        allowNull: false
    },
    courseId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'course',
            key: 'id'
        },
        allowNull: false
    },
    favorites: {
        // type: DataTypes.ARRAY(DataTypes.INTEGER)
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    completed: {
        // type: DataTypes.ARRAY(DataTypes.INTEGER)
        type: DataTypes.BOOLEAN,
        
    }
})

Course.hasMany(User);
User.belongsTo(Course)

User.hasOne(Token, {foreignKey: 'userid'});
Token.belongsTo(User, {foreignKey: 'id'});

// User.hasMany(Course, { foreignKey: 'id' });
// Course.belongsTo(User, { foreignKey: 'id' });

User.belongsToMany(Course, {through: UserCourse, foreignKey: 'userId' });
Course.belongsToMany(User, {through: UserCourse, foreignKey: 'courseId' });


module.exports = {User, Course, Token, UserCourse};