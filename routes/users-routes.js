const express = require('express');

const User = require('../models/user-model');

const usersRoutes = express.Router();

usersRoutes.post('/api/addBeer', (req, res, next) => {

  User.findByIdAndUpdate(req.user._id,
  { $push: { beers: ownList: req.body.data[0].id }  },
  (err, updatedUser) => {
    if (err) {
      res.status(500).json({ message: "User update failed" });
      return;
    }
    res.status(200).json(updatedUser);
  });

});

module.exports = usersRoutes;
