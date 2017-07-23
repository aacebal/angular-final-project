const express    = require('express');
const request    = require('request');

// Our user model
const User       = require('../models/user-model');
const Beer       = require('../models/beer-model');
const Brewery    = require('../models/brewery-model');

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

  beerRoutes.get('/api/getBeers', (req, res, next) => {
    Beer.find({}, (err, theBeers) => {
      var beerNames =[];

      theBeers.forEach((oneBeer) => {
        beerNames.push(oneBeer.name);
      });
      res.status(200).json(beerNames);
    });
  });

  beerRoutes.get('/api/getBreweries', (req, res, next) => {
    Brewery.find({}, (err, theBreweries) => {
      var breweryNames =[];

      theBreweries.forEach((oneBrewery) => {
        breweryNames.push(oneBrewery.name);
      });
      res.status(200).json(breweryNames);
    });
  });

module.exports = beerRoutes;
