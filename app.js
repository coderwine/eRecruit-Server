require('dotenv').config();
const sequelize = require('./db');
const express = require('express');
const app = express();

//! FOR PROFILE PIC - 
// const Couchbase = require('couchbase');
// const UUID = require('uuid');
// const BodyParser = require('body-parser');
// const N1qlQuery = Couchbase.N1qlQuery;

const recUser = require('./controllers/recruiterController');
const clientUser = require('./controllers/clientController');
const adminUser = require('./controllers/adminController');
// const recLog = require('./controllers/recruiterLogController');
// const clientLog = require('./controllers/clientLogController');
// const adminLog = require('./controllers/adminLogController');

sequelize.sync();
app.use(express.json());

app.use(require('./middleware/header'));

//! Profile Pic
// app.use(BodyParser.json());
// app.use(BodyParser.urlencoded({ exteded: true }));
// const cluster = new Couchbase.Cluster('couchbase://localhost');
// const bucket = clluster.openBucket('default", '');
//? -INCOMPLETE - see README-eric.txt 10/8 for URL link on instructions.

//! LOGIN/SIGNUP
app.use('/recruiter', recUser);
app.use('/client', clientUser);
app.use('/admin', adminUser);

//! LOGS
// app.use('/recruiter-log', recLog);
// app.use('/client-log', clientLog);
// app.use('/admin-log', adminLog);

app.listen(process.env.PORT, function(){
    console.log(`its alive... alive!  .... ALIVE! ... on port ${process.env.PORT}`)
});