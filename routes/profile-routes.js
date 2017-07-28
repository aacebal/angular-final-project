const express = require('express');

const User = require('../models/user-model');

const profileRoutes = express.Router();

profileRoutes.get('/api/profile/:id', (req, res, next) => {
  var profileId = req.params.id;

  User.findOne({ _id: profileId }, (err, theUser) => {
    if (err) {
      res.status(400).json({ message: 'User not Found' });
    }
    res.status(200).json(theUser);
  });
});

module.exports = profileRoutes;
