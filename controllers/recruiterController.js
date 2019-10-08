var express = require('express');
var router = express.Router();
var sequelize = require('../db');
var Log = sequelize.import('../models/recruiter');




//http://localhost:3000/recruiter/log

/*
{

    "name": "recruiterguy",
    "email": "recruit@gmail.com",
    "username": "recruiter55",
    "password": "password",
    "comments": "i like this service",
    "linkedin": "linkedin.com/anyone"

}
*/

//    /recruiter/log     (POST)
router.post('/log', (req, res) => {
    const logRequest = {
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        comments: req.body.comments,
        linkedin: req.body.linkedin

    }

    Log.create(logRequest)
        .then(log => res.status(200).json(log))
        .catch(err => res.json(req.errors))

})

//      /recruiter/log            (GET)
router.get('/log', function(req, res) {

    Log
      .findAll({ //1
          attributes: ['name', 'email', 'username', 'password', 'comments', 'linkedin']
      })
      .then(
          function findAllSuccess(logRequest) {
              console.log("Recruiter Profile", logRequest);
              res.json(logRequest);
          },
          function findAllError(err) {
              res.send(500, err.message);
          }
      );
  });




//     /recruiter/log/:username    (GET)         
router.get('/log/:username', (req, res) => {
    Log.findOne({
        where: {username: req.params.username}
    })
    .then(log => res.status(200).json(log))
    .catch(err => res.status(500).json({
        error: err }))
})


//          /recruiter/log/:username   (PUT)
router.put('/log/:username', (req, res) => {
    Log.update(req.body, {
        where: {username: req.params.username}})
        .then(log => res.status(200).json(log))
        .catch(err => res.json(req.errors))

    })



//          /recruiter/log/:username   (DELETE)
router.delete('/log/:username', (req, res) => {
    Log.destroy({
        where: {
            username: req.params.username
        }
    })
    .then(log => res.status(200).json(log))
    .catch(err => res.json({
        error: err
    }))
})



module.exports = router;
