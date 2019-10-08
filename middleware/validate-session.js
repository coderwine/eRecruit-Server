let jwt = require('jsonwebtoken');
let sequelize = require('../db');
let Client = sequelize.import('../models/client');
let Recruiter = sequelize.import('../models/recruiter');
let Admin = sequelize.import('../models/admin');