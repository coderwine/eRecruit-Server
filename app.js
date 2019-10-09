require('dotenv').config();

const sequelize = require('./db');
const express = require('express');
const app = express();

//! FOR PROFILE PIC - 
// const Couchbase = require('couchbase');
// const UUID = require('uuid');
// const BodyParser = require('body-parser');
// const N1qlQuery = Couchbase.N1qlQuery;

const Users = require('./controllers/userController');
const Logs = require('./controllers/logController');

// sequelize.sync({force: true});
sequelize.sync();
app.use(express.json());

app.use(require('./middleware/header'));

//! Profile Pic
// app.use(BodyParser.json());
// app.use(BodyParser.urlencoded({ exteded: true }));
// const cluster = new Couchbase.Cluster('couchbase://localhost');
// const bucket = clluster.openBucket('default", '');
//? -INCOMPLETE - see README-eric.txt 10/8 for URL link on instructions.

app.use('/users', Users);
app.use('/logs', Logs);

app.listen(process.env.PORT, function(){
    console.log(`its alive... alive!  .... ALIVE! ... on port ${process.env.PORT}`)
});