const express    = require('express');
const passport   = require('passport');
const bcrypt     = require('bcrypt');

// Our user model
const User       = require('../models/user-model');

const beerRoutes = express.Router();

const BASE_URL = 'http://api.brewerydb.com/v2/beers';

beerRoutes.post('/api/beers', (req, res, next) => {
  const beerName = req.body;

  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", `http://api.brewerydb.com/v2/beers` + beerName, true);
  xhttp.setRequestHeader("Content-type", "application/json");
  xhttp.send();
  return xhttp.responseText;
});

module.exports = beerRoutes;
