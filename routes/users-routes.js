const express = require('express');

const User = require('../models/user-model');

const usersRoutes = express.Router();

usersRoutes.get('/api/addBeer/:id', (req, res, next) => {

  var beerId = req.params.id;

  res.status(200).json(beerId);

});

module.exports = usersRoutes;
