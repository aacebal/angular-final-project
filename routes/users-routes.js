var express = require('express');

const User = require('../models/user-model');

var usersRoutes = express.Router();

usersRoutes.post('/api/addBeer', (req, res, next) => {
  const userBeers = req.user.beers.ownList;

  const beerAdded = req.body.id;
  console.log(beerAdded);

  User.findByIdAndUpdate(req.user._id,
    { $push: { userBeers: beerAdded } },
    (err, theUser) => {
    if (err) {
      res.status(500).json({ message: 'Update not successful '});
      return;
    }
    res.status(200).json(theUser);
  });
});

module.exports = usersRoutes;
