const router = require('express').Router();
const Recruiter = require('../db').import('../models/recruiter');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//! SIGNUP

router.post('/signup', (req,res) => {
    Recruiter.create({
        fullName: req.body.fullName,
        email: req.body.email,
        passwordHash: bcrypt.hashSync(req.body.password, 10)
    }).then(
        createSuccess = (rec) => {
            let token = jwt.sign({ id: rec.id }, process.env.JWT_SECRET, { expiresIn: 60*60*24 })
            res.json({
                rec: rec,
                message: 'Rec Created',
                sessionToken: token
            })
        },
        createError = err => res.send(500, err)
    )
})

//! LOGIN

router.post('/login', (req,res) => {
    Recruiter.findOne({
        where: {
            userName: req.body.userName
        }
    }).then(rec => {
        if(rec){
            bcrypt.compare(req.body.password, rec.password, (err, matches) => {
                if(matches){
                    let token = jwt.sign({ id: rec.id }, process.env.JWT_SECRET, { expiresIn: 60*60*24 })
                    res.json({
                        rec: rec,
                        message: 'Recruiter Successfully Authenticated!',
                        sessionToken: token
                    })
                } else {
                    res.status(502).send({error: 'Bad Gateway'})
                }
            })
        } else {
            res.status(500).send({error: 'Recruiter failed to Authenticate'})
        }
    }, err => res.status(501).send({error: 'Recruiter failed to Process' }))
})

module.exports = router;