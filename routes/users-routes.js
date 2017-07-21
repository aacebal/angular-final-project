const express = require('express');

const User = require('../models/user-model');

const usersRoutes = express.Router();

usersRoutes.post('/api/addBeer/:list', (req, res, next) => {

  User.findById(req.user._id, (err, theUser) => {
    var idArray = [];
    var foundId;
    const beerId = req.body.data[0].id;
    const beerName = req.body.data[0].name;
    var beerImage;

    if (req.body.data[0].labels) {
      const beerImage = req.body.data[0].labels.large;
    }
    const beerList = req.params.list;

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
        theUser.beers.ownList.push({ id: beerId, name: beerName, image: beerImage });
      }

    }

    else if (beerList === "wishList") {
      theUser.beers.wishList.forEach((oneBeer) => {
        idArray.push(oneBeer.id);
      });
      foundId = idArray.indexOf(beerId);

      if (foundId == -1) {
        theUser.beers.wishList.push({ id: beerId, name: beerName, image: beerImage });
    }

    }
    else if (beerList === "historyList") {
      theUser.beers.historyList.forEach((oneBeer) => {
        idArray.push(oneBeer.id);
      });
      foundId = idArray.indexOf(beerId);

      if (foundId == -1) {
        theUser.beers.historyList.push({ id: beerId, name: beerName, image: beerImage});
    }
    }

  theUser.save((err) => {
    res.status(200).json(theUser);
    });
  });
});

function searchArray(id, beerId) {
  console.log(id);
  return id.id == beerId;
}

module.exports = usersRoutes;
