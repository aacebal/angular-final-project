const express    = require('express');
const passport   = require('passport');
const bcrypt     = require('bcrypt');
const request    = require('request');

// Our user model
const User       = require('../models/user-model');

const beerRoutes = express.Router();

const BASE_URL = 'http://api.brewerydb.com/v2/beers/';

beerRoutes.post('/api/beers/', (req, res, next) => {
  const beerName = req.body.name;

    request.get('http://api.brewerydb.com/v2/beers/?name=hop stimulator&key=31d91559b00b468e17fd134af7f3097a', (err, foundBeer) => {
      if (err) {
        res.status(401).json({ message: "error finding beer" });
        return;
      }
      if (foundBeer, (err) => {
        if (err) {
          res.status(500).json({ message: "error retrieving beer" });
          return;
        }
       {
        res.status(200).json(foundBeer);
      }
    });
  });
});

module.exports = beerRoutes;
