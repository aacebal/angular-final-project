const express    = require('express');
const passport   = require('passport');
const bcrypt     = require('bcrypt');
const request    = require('request');

// Our user model
const User       = require('../models/user-model');

const beerRoutes = express.Router();

const BASE_URL = 'http://api.brewerydb.com/v2/beers/';

beerRoutes.get('/api/beers/:id', (req, res, next) => {
  const beerName = req.params.id;

    request(`${BASE_URL}/?name=${beerName}&key=${process.env.API_KEY}`, (error, response, body) => {
      res.status(200).json(body);
    });
  });

module.exports = beerRoutes;
