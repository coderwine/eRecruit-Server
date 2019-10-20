const router = require('express').Router();
const sequelize = require('../db');
const User = sequelize.import('../models/users');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//! SIGNUP

router.post('/signup', (req,res) => {
    User.create({
        fullName: req.body.fullName,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10)
    }).then(
        createSuccess = (user) => {
            let token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: 60*60*48 })
            res.json({
                user: user,
                message: 'Admin Created',
                sessionToken: token
            })
        },
        createError = err => res.send(500, err)
    )
})

//! LOGIN

router.post('/login', (req,res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(user => {
        if(user){
            bcrypt.compare(req.body.password, user.password, (err, matches) => {
                if(matches){
                    let token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: 60*60*48 })
                    res.json({
                        user: user,
                        message: 'Admin has Successfully Authenticated!',
                        sessionToken: token
                    })
                } else {
                    res.status(502).send({error: 'Bad Gateway'})
                }
            })
        } else {
            res.status(500).send({error: 'Admin has failed to Authenticate'})
        }
    }, err => res.status(501).send({error: 'Admin has failed to Process' }))
})

module.exports = router;