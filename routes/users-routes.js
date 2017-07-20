const express = require('express');

const User = require('../models/user-model');

const usersRoutes = express.Router();

usersRoutes.post('/api/addBeer', (req, res, next) => {

  User.findById(req.user._id, (err, theUser) => {
    const beerId = req.body.data[0].id;

  theUser.beers.ownList.push(beerId);

  theUser.save((err) => {
    res.status(200).json(theUser);
    });
  });
});

module.exports = usersRoutes;
