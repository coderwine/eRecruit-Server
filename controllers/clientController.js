const router = require('express').Router();
const sequelize = require('../db');
const Client = sequelize.import('../models/client');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//! SIGNUP
router.post('/signup', (req,res) => {
    Client.create({
        fullName: req.body.fullName,
        email: req.body.email,
        passwordhash: bcrypt.hashSync(req.body.passwordhash, 10)
    }).then(
        createSuccess = (client) => {
            let token = jwt.sign({ id: client.id }, process.env.JWT_SECRET, { expiresIn: 60*60*24 })
            res.json({
                client: client,
                message: 'Client Created',
                sessionToken: token
            })
        },
        createError = err => res.send(500, err)
    )
})

//! LOGIN

router.post('/login', (req,res) => {
    Client.findOne({
        where: {
            email: req.body.email
        }
    }).then(client => {
        if(client){
            bcrypt.compare(req.body.passwordhash, client.passwordhash, (err, matches) => {
                if(matches){
                    let token = jwt.sign({ id: client.id }, process.env.JWT_SECRET, { expiresIn: 60*60*24 })
                    res.json({
                        client: client,
                        message: 'Client Successfully Authenticated!',
                        sessionToken: token
                    })
                } else {
                    res.status(502).send({error: 'Bad Gateway'})
                }
            })
        } else {
            res.status(500).send({error: 'Client failed to Authenticate'})
        }
    }, err => res.status(501).send({error: 'Client failed to Process' }))
})

module.exports = router;