const express = require('express');

const User = require('../models/user-model');

const friendsRoutes = express.Router();

friendsRoutes.get('/api/allUsers', (req, res, next) => {
  var userNames = [];

  User.find({}, (err, allUsers) => {
    res.status(200).json(allUsers);
  });
});

friendsRoutes.get('/api/findUser/:username', (req, res, next) => {

  User.findOne({ username: req.params.username }, (err, foundUser) => {
    res.status(200).json(foundUser);
  });
});

friendsRoutes.post('/api/sendRequest', (req, res, next) => {
  var foundUserId = req.body.id;

  User.find({ id: foundUserId }, (err, foundUser) => {
    foundUser.notifications.push({ friendRequest: req.user._id });
    res.status(200).json({ sentRequest: foundUserId });
  });
});


module.exports = friendsRoutes;
