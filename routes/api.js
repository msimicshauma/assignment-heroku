const express = require('express');
const router = express.Router();
const User = require('../models/users');

//API FOR ALL USERS
router.get('/users', function(req, res) {
  User.find({}, function(err, data) {
    if (err) console.log(err);
    else res.send(data);
  });
});

//API FOR SINGLE USER
router.get('/users/:id', function(req, res) {
  User.findOne({id: req.params.id}, function(err, data) {
    if (err) console.log(err);
    else res.send(data);
  });
});

module.exports = router;
