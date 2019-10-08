require('dotenv').config();

const express = require('express');
const app = express();
const recLogs = require('./controllers/recruiterController');
const clientLogs = require('./controllers/clientController');
const adminLogs = require('./controllers/adminController');

// sequelize.sync();
app.use(express.json());

app.use(require('./middleware/header'));

app.use('/recruiter', recLogs);
app.use('/client', clientLogs);
app.use('/admin', adminLogs);

app.listen(process.env.PORT, function(){
    console.log(`its alive... alive!  .... ALIVE! ... on port ${process.env.PORT}`)
});