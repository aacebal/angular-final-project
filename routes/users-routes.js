const express = require('express');

const User = require('../models/user-model');

const usersRoutes = express.Router();

usersRoutes.post('/api/addBeer', (req, res, next) => {

  const beerId = req.body.data[0].id;

  User.findByIdAndUpdate(req.user._id, {
    beers: { $push: { ownList: beerId } }
  },
  (err, updatedUser) => {
    if (err) {
      res.status(500).json({ message: "no luck" });
    }
    res.status(200).json(updatedUser);
  });
});

module.exports = usersRoutes;
