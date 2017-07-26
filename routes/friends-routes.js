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
  var requesterFullName = req.user.name + " " + req.user.lastName;
  var requestsArray = [];
  var foundId;

  User.findById(friendRequestedId, (err, theUser) => {
    var friendRequestedFullName = theUser.name + " " + theUser.lastName;
    if (JSON.stringify(theUser) === JSON.stringify(req.user)) {
      return;
    }

    theUser.notifications.forEach((oneNotification) => {
      requestsArray.push(JSON.stringify(oneNotification.friendRequest));
      requestsArray.push(JSON.stringify(oneNotification.requestSent));
    });
    foundId = requestsArray.indexOf(JSON.stringify(requesterId));


    if (foundId == -1) {
      theUser.notifications.push({ friendRequest: requesterId, fullName: requesterFullName });
      req.user.notifications.push({ requestSent: friendRequestedId, fullName: friendRequestedFullName });
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
    var notificationToDelete = req.body;
    var friendRequestedId = req.body.friendRequest;
    var requesterId = req.user._id;
    var requesterName = req.user.name + " " + req.user.lastName;
    var foundUserIndexToDelete;
    var friendsArray = [];
    var foundId;

    User.findById(friendRequestedId, (err, theUser) => {
      var friendRequestedName = theUser.name + " " + theUser.lastName;

      indexToDelete = req.user.notifications.indexOf(JSON.stringify(notificationToDelete));
      foundId = friendsArray.indexOf(JSON.stringify(requesterId));

      theUser.friends.forEach((oneFriend) => {
        friendsArray.push(JSON.stringify(oneFriend.id));
      });

      theUser.notifications.forEach((oneFriend) => {
        friendsArray.push(JSON.stringify(req.user._id));
      });

      foundUserIndexToDelete = friendsArray.indexOf(JSON.stringify(requesterId));

      if (foundId == -1) {
        req.user.notifications.splice(indexToDelete, 1);
        theUser.notifications.splice(foundUserIndexToDelete, 1);
        theUser.friends.push({ id: requesterId, fullName: requesterName});
        req.user.friends.push({ id: friendRequestedId, fullName: friendRequestedName });
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



module.exports = friendsRoutes;
