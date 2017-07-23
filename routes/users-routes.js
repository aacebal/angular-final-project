const express = require('express');

const User = require('../models/user-model');

const usersRoutes = express.Router();

usersRoutes.post('/api/addBeer/:list', (req, res, next) => {

  User.findById(req.user._id, (err, theUser) => {
    var idArray = [];
    var foundId;
    const beerId = req.body.data[0].id;
    const beerName = req.body.data[0].name;
    const beerList = req.params.list;
    var beerImage;

    if (req.body.data[0].labels) {
      beerImage = req.body.data[0].labels.large;
    }
    else {
      beerImage = "../assets/images/beer-flat.png";
    }

    if (beerList === "ownList") {
      theUser.beers.ownList.forEach((oneBeer) => {
        idArray.push(oneBeer.id);
      });
      foundId = idArray.indexOf(beerId);

      if (foundId == -1) {
        theUser.beers.ownList.unshift({ id: beerId, name: beerName, image: beerImage });
      }

    }

    else if (beerList === "wishList") {
      theUser.beers.wishList.forEach((oneBeer) => {
        idArray.push(oneBeer.id);
      });
      foundId = idArray.indexOf(beerId);

      if (foundId == -1) {
        theUser.beers.wishList.unshift({ id: beerId, name: beerName, image: beerImage });
    }

    }
    else if (beerList === "historyList") {
      theUser.beers.historyList.forEach((oneBeer) => {
        idArray.push(oneBeer.id);
      });
      foundId = idArray.indexOf(beerId);

      if (foundId == -1) {
        theUser.beers.historyList.unshift({ id: beerId, name: beerName, image: beerImage});
    }
    }

  theUser.save((err) => {
    res.status(200).json(theUser);
    });
  });
});

usersRoutes.post('/api/delete/:list', (req, res, next) => {

  User.findById(req.user._id, (err, theUser) => {
    var beerId = req.body.id;
    var beerList = req.params.list;
    var idArray = [];
    var foundId;

    if (beerList === "ownList") {
      theUser.beers.ownList.forEach((oneBeer) => {
        idArray.push(oneBeer.id);
      });
      console.log(idArray);
      foundId = idArray.indexOf(beerId);
      theUser.beers.ownList.splice(foundId, 1);
    }

    else if (beerList === "wishList") {
      theUser.beers.wishList.forEach((oneBeer) => {
        idArray.push(oneBeer.id);
      });
      console.log(idArray);
      foundId = idArray.indexOf(beerId);
      theUser.beers.wishList.splice(foundId, 1);
    }

    else if (beerList === "historyList") {
      theUser.beers.historyList.forEach((oneBeer) => {
        idArray.push(oneBeer.id);
      });
      console.log(idArray);
      foundId = idArray.indexOf(beerId);
      theUser.beers.historyList.splice(foundId, 1);
    }

      theUser.save((err) => {
        res.status(200).json(theUser);
    });
  });
});

  usersRoutes.post('/api/history/:list', (req, res, next) => {

    User.findById(req.user._id, (err, theUser) => {
      const beerId = req.body.id;
      const beerName = req.body.name;
      const beerImage = req.body.image;
      var foundId;
      var idArray = [];
      var foundIdHistory;
      var idArrayHistory = [];


      theUser.beers.ownList.forEach((oneBeer) => {
        idArray.push(oneBeer.id);
      });
      foundId = idArray.indexOf(beerId);

      theUser.beers.ownList.splice(foundId, 1);

      theUser.beers.historyList.forEach((oneBeer) => {
        idArrayHistory.push(oneBeer.id);
      });
      foundIdHistory = idArrayHistory.indexOf(beerId);

        if (foundIdHistory == -1) {
          theUser.beers.historyList.unshift({ id: beerId, name: beerName, image: beerImage});
      }

      theUser.save((err) => {
        res.status(200).json(theUser);
      });
    });
  });

  usersRoutes.post('/api/own/:list', (req, res, next) => {

    User.findById(req.user._id, (err, theUser) => {
      const beerId = req.body.id;
      const beerName = req.body.name;
      const beerImage = req.body.image;
      var foundId;
      var idArray = [];
      var foundIdOwn;
      var idArrayOwn = [];


      theUser.beers.wishList.forEach((oneBeer) => {
        idArray.push(oneBeer.id);
      });
      foundId = idArray.indexOf(beerId);

      theUser.beers.wishList.splice(foundId, 1);

      theUser.beers.ownList.forEach((oneBeer) => {
        idArrayOwn.push(oneBeer.id);
      });
      foundIdOwn = idArrayOwn.indexOf(beerId);

        if (foundIdOwn == -1) {
          theUser.beers.ownList.unshift({ id: beerId, name: beerName, image: beerImage});
      }

      theUser.save((err) => {
        res.status(200).json(theUser);
      });
    });
  });


module.exports = usersRoutes;
