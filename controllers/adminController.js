const router = require('express').Router();
const sequelize = require('../db');
const Admin = sequelize.import('../models/admin');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//! SIGNUP

router.post('/signup', (req,res) => {
    Admin.create({
        name: req.body.name,
        email: req.body.email,
        userName: req.body.userName,
        password: bcrypt.hashSync(req.body.password, 10)
    }).then(
        createSuccess = (admin) => {
            let token = jwt.sign({ id: admin.id }, process.env.JWT_SECRET, { expiresIn: 60*60*24 })
            res.json({
                admin: admin,
                message: 'Admin Created',
                sessionToken: token
            })
        },
        createError = err => res.send(500, err)
    )
})

//! LOGIN

router.post('/login', (req,res) => {
    Admin.findOne({
        where: {
            userName: req.body.userName
        }
    }).then(admin => {
        if(admin){
            bcrypt.compare(req.body.password, admin.password, (err, matches) => {
                if(matches){
                    let token = jwt.sign({ id: admin.id }, process.env.JWT_SECRET, { expiresIn: 60*60*24 })
                    res.json({
                        admin: admin,
                        message: 'Admin Successfully Authenticated!',
                        sessionToken: token
                    })
                } else {
                    res.status(502).send({error: 'Bad Gateway'})
                }
            })
        } else {
            res.status(500).send({error: 'Admin failed to Authenticate'})
        }
    }, err => res.status(501).send({error: 'Admin failed to Process' }))
})

module.exports = router;