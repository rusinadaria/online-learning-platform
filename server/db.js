require('dotenv').config();
const { Sequelize } = require('sequelize');

const dbname = process.env.DBNAME;
const dbuser = process.env.USERDB;
const dbroot = process.env.ROOT;
const dbhost = process.env.HOST;
const dbport = process.env.DBPORT;

module.exports = new Sequelize(dbname, dbuser, dbroot, {
    dialect: 'postgres',
    host: dbhost,
    port: dbport,
    define: {
        timestamps: false
    }
});
