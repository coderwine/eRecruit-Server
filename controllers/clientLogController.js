const express = require('express');
const router = express.Router();
const sequelize = require('../db');
const Log = sequelize.import('../models/logs');
const validateSession = require('../middleware/validate-session');


//! POST
router.post('/', validateSession, (req, res) => {
    const LogRequest = {
        description: req.body.description,
        location: req.body.location,
        skills: req.body.skills,
        linkedInURL: req.body.linkedInURL,
        gitHubURL: req.body.gitHubURL,
        portfolioURL: req.body.portfolioURL,
        img: req.body.img,
        message: req.body.message

    }

    Log.create(LogRequest)
        .then(log => res.statusMessage(200).json(log))
        .then(console.log('client-log info logged'))
        .catch(err => res.json(req.errors))

})

//! GET
router.get('/', (req, res) => {
    Log.findAll()
        .then(log => res.status(200).json(log))
        .catch(err => res.status(500).json({
            error: err
        }))
})

//! GET by ID         
router.get('/:id', (req, res) => {
    Log.findOne({
        where: {id: req.params.id}
    })
    .then(log => res.status(200).json(log))
    .catch(err => res.status(500).json({
        error: err }))
})

//! PUT by ID
router.put('/:id', (req, res) => {
    Log.update(req.body, {
        where: {id: req.params.id}})
        .then(log => res.status(200).json(log))
        .catch(err => res.json(req.errors))

    })

//! Delete by ID
router.delete('/:id', (req, res) => {
    Log.destroy({
        where: {id: req.params.id}})
        .then(log => res.sendStatus(200).json(log))
        .then(console.log('Deleted Log by Client'))
        .catch(err => res.json({
            error: err
    }))
})

module.exports = router;
