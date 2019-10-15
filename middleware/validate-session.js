const jwt = require('jsonwebtoken');
const sequelize = require('../db');
const Users = sequelize.import('../models/users');

const validateSession = (req, res, next) => {
    const token = req.headers.authorization;

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if(!err && decoded){
            Users.findOne({
                where: {
                    id: decoded.id
                }
            }, console.log(decoded))
            .then(users => {
                if(!users) throw 'err'
                req.users = users
                return next();
            })
            .catch(err => next(err))
        } else {
            req.errors = err
            return res.status(500).send({error:err})
        }

    })

}

module.exports = validateSession;