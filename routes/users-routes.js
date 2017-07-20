const express = require('express');

const User = require('../models/user-model');

const usersRoutes = express.Router();

usersRoutes.post('/api/addBeer/:list', (req, res, next) => {

  User.findById(req.user._id, (err, theUser) => {
    const beerId = req.body.data[0].id;
    const beerList = req.params.list;

    if (beerList === "ownList") {
      theUser.beers.ownList.push(beerId);
    }
    else if (beerList === "wishList") {
      theUser.beers.wishList.push(beerId);
    }
    else if (beerList === "historyList") {
      theUser.beers.historyList.push(beerId);
    }


  theUser.save((err) => {
    res.status(200).json(theUser);
    });
  });
});

module.exports = usersRoutes;
