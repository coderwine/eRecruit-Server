require('dotenv').config();

const sequelize = require('./db');
const express = require('express');
const app = express();

const Users = require('./controllers/userController');
const Admin = require('./controllers/adminController');
const Client = require('./controllers/clientController');
const Logs = require('./controllers/logController');
const ClientLogs = require('./controllers/clientLogController');

// sequelize.sync({force: true});
sequelize.sync();
app.use(express.json());

app.use(require('./middleware/header'));

app.use('/users', Users);
app.use('/admin', Admin);
app.use('/client', Client);
app.use('/logs', Logs);
app.use('/client-logs', ClientLogs);

app.listen(process.env.PORT, function(){
    console.log(`its alive... alive!  .... ALIVE! ... on port ${process.env.PORT}`)
});