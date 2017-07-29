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

profileRoutes.post('/api/rate-beer/:rating', (req, res, next) => {
  var theBeer = JSON.stringify(req.body);
  var indexToRate;
  var beerArray = [];

  User.findOne({ _id: req.user._id }, (err, theUser) => {
    if (err) {
      res.status(400).json({ message: "error finding the user"});
    }

      theUser.beers.historyList.forEach((oneBeer, index) => {
        beerArray.push(oneBeer.id);
        if (index == theUser.beers.historyList.length -1) {
          var indexToRate = beerArray.indexOf(req.body.id);
          console.log(indexToRate);
          theUser.beers.historyList.splice(indexToRate, 1, req.body);
          theUser.save((err) => {
            if (err) {
              res.status(500).json({ message: 'error saving user' });
            }
            res.status(200).json(req.user);

        });
      }
    });
  });
});

module.exports = profileRoutes;
