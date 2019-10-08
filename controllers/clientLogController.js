var express = require('express');
var router = express.Router();
var sequelize = require('../db');
var ClientLog = sequelize.import('../models/clientLog');
const validateSession = require('../middleware/validate-session');



//! POST
router.post('/', validateSession, (req, res) => {
    const ClientLogReq = {
        location: req.body.location,
        skills: req.body.skills,
        messages: req.body.name,
        linkedInURL: req.body.linkedInURL,
        gitHubURL: req.body.gitHubURL,
        portfolioURL: req.body.portfolioURL,
        img: Request.body.img  //!NEED TO VERIFY IMG PLACEMENT

    }

    ClientLog.create(ClientLogReq)
        .then(clientLog => res.status(200).json(clientLog))
        .catch(err => res.json(req.errors))

})

//! GET
router.get('/', (req, res) => {
    ClientLog.findAll()
        .then(clientLog => res.status(200).json(clientLog))
        .catch(err => res.status(500).json({
            error: err
        }))
})

//! GET by ID         
router.get('/:id', (req, res) => {
    ClientLog.findOne({
        where: {id: req.params.id}
    })
    .then(clientLog => res.status(200).json(clientLog))
    .catch(err => res.status(500).json({
        error: err }))
})


//! PUT by ID
router.put('/:id', (req, res) => {
    ClientLog.update(req.body, {
        where: {id: req.params.id}})
        .then(clientLog => res.status(200).json(clientLog))
        .catch(err => res.json(req.errors))

    })



//! Delete by ID
router.delete('/:id', (req, res) => {
    ClientLog.destroy({
        where: {id: req.params.id}})
        .then(clientLog => res.status(200).json(clientLog))
        .catch(err => res.json({
            error: err
    }))
})

module.exports = router;
