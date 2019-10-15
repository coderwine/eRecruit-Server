require('dotenv').config();

const sequelize = require('./db');
const express = require('express');
const app = express();

const Users = require('./controllers/userController');
const Logs = require('./controllers/logController');

// sequelize.sync({force: true});
sequelize.sync();
app.use(express.json());

app.use(require('./middleware/header'));

app.use('/users', Users);
app.use('/logs', Logs);

app.listen(process.env.PORT, function(){
    console.log(`its alive... alive!  .... ALIVE! ... on port ${process.env.PORT}`)
});