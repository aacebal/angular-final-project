const express = require('express');

const User = require('../models/user-model');

const usersRoutes = express.Router();

usersRoutes.post('/api/addBeer/:list', (req, res, next) => {

  User.findById(req.user._id, (err, theUser) => {
    const beerId = req.body.data[0].id;
    const beerName = req.body.data[0].name;
    if (req.body.data[0].labels) {
      const beerImage = req.body.data[0].labels.large;
    }
    const beerList = req.params.list;

    if (beerList === "ownList") {
      theUser.beers.ownList.push({ id: beerId, name: beerName, image: "" });
    }
    else if (beerList === "wishList") {
      theUser.beers.wishList.push({ id: beerId, name: beerName, image: "" });
    }
    else if (beerList === "historyList") {
      theUser.beers.historyList.push({ id: beerId, name: beerName, image: ""});
    }

  theUser.save((err) => {
    res.status(200).json(theUser);
    });
  });
});

module.exports = usersRoutes;
