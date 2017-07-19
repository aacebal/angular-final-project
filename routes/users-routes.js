var express = require('express');

const User = require('../models/user-model');

const usersRoutes = express.Router();

usersRoutes.get('/api/addBeer/:id', (req, res, next) => {

  console.log(req.params.id);

  res.status(500).json({ message: `This shit don't work` });

  res.status(200).json(req.params.id);

});

module.exports = usersRoutes;
