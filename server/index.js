const express = require('express');
const sequelize = require('./db');
const models = require('./models/models');
const router = require('./routes/index');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();


const app = express();

app.use(cors( {
    credentials:true,
    origin: process.env.URL
}));
app.use(express.json());
app.use(cookieParser());
app.use('/api', router);


async function main() {
    try {
        await sequelize.authenticate();
        await sequelize.sync({ alter: true })
        app.listen(process.env.PORT, console.log('OK'));
    }
    catch (e) {
        console.log(e);
    }
}

main();
