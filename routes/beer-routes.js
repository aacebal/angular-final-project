const express    = require('express');
const request    = require('request');

// Our user model
const User       = require('../models/user-model');

const beerRoutes = express.Router();

const BASE_URL = 'http://api.brewerydb.com/v2/';

beerRoutes.get('/api/beers/:name', (req, res, next) => {
  const beerName = req.params.name;

    request(`${BASE_URL}/beers/?name=${beerName}&key=${process.env.API_KEY}/&withBreweries=Y`, (error, response, body) => {
      res.status(200).json(body);
    });
  });

  beerRoutes.get('/api/breweries/:name', (req, res, next) => {
    const breweryName = req.params.name;

      request(`${BASE_URL}/breweries/?name=${breweryName}&key=${process.env.API_KEY}`, (error, response, body) => {
        res.status(200).json(body);
      });
    });

module.exports = beerRoutes;
