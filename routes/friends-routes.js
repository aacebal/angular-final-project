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

  User.findByIdAndUpdate( req.body._id,
    { $push: { notifications: { friendRequest: req.user._id } } },
    (err, foundUser) => {
      if (err) {
        res.status(500).json({ message: 'Problem updating user' });
        return;
      }
  });

  User.findByIdAndUpdate( req.user._id,
    { $push: { notifications: { requestSent: req.body._id } } },
    (err, theUser) => {
      if (err) {
        res.status(500).json({ message: 'Problem updating user' });
        return;
      }
      res.status(200).json(theUser.notifications);
  });
});



module.exports = friendsRoutes;
