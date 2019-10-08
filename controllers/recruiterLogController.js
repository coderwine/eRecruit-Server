var express = require('express');
var router = express.Router();
var sequelize = require('../db');
var RecLog = sequelize.import('../models/recruiterLog');
const validateSession = require('../middleware/validate-session');



//! POST
router.post('/', validateSession, (req, res) => {
    const RecLogRequest = {
        messages: req.body.name,
        linkedInURL: req.body.linkedin,
        img: Request.body.img  //!NEED TO VERIFY IMG PLACEMENT

    }

    RecLog.create(RecLogRequest)
        .then(reclog => res.status(200).json(reclog))
        .catch(err => res.json(req.errors))

})

//! GET
router.get('/', (req, res) => {
    RecLog.findAll()
        .then(recLog => res.status(200).json(recLog))
        .catch(err => res.status(500).json({
            error: err
        }))
})

// router.get('/log', function(req, res) {

//     Log
//       .findAll({ //1
//           attributes: ['name', 'email', 'username', 'password', 'comments', 'linkedin']
//       })
//       .then(
//           function findAllSuccess(logRequest) {
//               console.log("Recruiter Profile", logRequest);
//               res.json(logRequest);
//           },
//           function findAllError(err) {
//               res.send(500, err.message);
//           }
//       );
//   });




//! GET by ID         
router.get('/:id', (req, res) => {
    RecLog.findOne({
        where: {id: req.params.id}
    })
    .then(reclog => res.status(200).json(reclog))
    .catch(err => res.status(500).json({
        error: err }))
})


//! PUT by ID
router.put('/:id', (req, res) => {
    RecLog.update(req.body, {
        where: {id: req.params.id}})
        .then(reclog => res.status(200).json(reclog))
        .catch(err => res.json(req.errors))

    })



//! Delete by ID
router.delete('/:id', (req, res) => {
    RecLog.destroy({
        where: {id: req.params.id}})
        .then(reclog => res.status(200).json(reclog))
        .catch(err => res.json({
            error: err
    }))
})

module.exports = router;
