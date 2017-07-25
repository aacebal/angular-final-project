const express = require('express');

const User = require('../models/user-model');

const friendsRoutes = express.Router();

friendsRoutes.get('/api/all-users', (req, res, next) => {
  var userNames = [];

  User.find({}, (err, allUsers) => {
    res.status(200).json(allUsers);
  });
});

friendsRoutes.get('/api/find-user/:username', (req, res, next) => {

  User.findOne({ username: req.params.username }, (err, foundUser) => {
    res.status(200).json(foundUser);
  });
});

friendsRoutes.post('/api/add-friend', (req, res, next) => {

  var friendRequestedId = req.body._id;
  var requesterId = req.user._id;
  var requestsArray = [];
  var foundId;

  User.findById(friendRequestedId, (err, theUser) => {
    theUser.notifications.forEach((oneNotification) => {
      requestsArray.push(JSON.stringify(oneNotification.friendRequest));
      requestsArray.push(JSON.stringify(oneNotification.requestSent));
    });
    foundId = requestsArray.indexOf(JSON.stringify(requesterId));


    if (foundId == -1) {
      theUser.notifications.push({ friendRequest: requesterId });
      req.user.notifications.push({ requestSent: friendRequestedId });
    }

    theUser.save((err) => {
      if (err) {
        res.status(500).json({ message: 'Saving user failed' });
      }
    });

    req.user.save((err) => {
      res.status(200).json(req.user);
    });
  });
});

  friendsRoutes.post('/api/accept-friend', (req, res, next) => {
    var friendRequestedId = req.body._id;
    var friendRequestedName = req.body.name + req.body.lastName;
    var requesterId = req.user._id;
    var requesterName = req.user.name + req.user.lastName;
    var friendsArray = [];
    var foundId;

    User.findById(friendRequestedId, (err, theUser) => {
      theUser.friends.forEach((oneFriend) => {
        friendsArray.push(JSON.stringify(oneFriend.id));
      });
      foundId = friendsArra.indexOf(JSON.stringify(requesterId));

      if (foundId == -1) {
        theUser.friends.push({ id: requesterId, name: requesterName});
        req.user.friends.push({ id: friendRequestedId, name: friendRequestedName });
      }
    });
  });

module.exports = friendsRoutes;
