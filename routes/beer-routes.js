const express    = require('express');
const request    = require('request');

// Our user model
const User       = require('../models/user-model');

const beerRoutes = express.Router();

const BASE_URL = 'http://api.brewerydb.com/v2/beers/';

beerRoutes.get('/api/beers/:id', (req, res, next) => {
  const beerName = req.params.id;

    request(`${BASE_URL}/?name=${beerName}&key=${process.env.API_KEY}/&withBreweries=Y`, (error, response, body) => {
      res.status(200).json(body);
    });
  });

module.exports = beerRoutes;
