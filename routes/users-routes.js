var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/addBeer', (req, res, next) => {
  const userId = req.user._id;

  const beerAdded = {
    beers: beers.ownList.push(req.body.id)
  };

  User.findByIdAndUpdate(userId, beerAdded, (err, theUser) => {
    if (err) {
      res.status(500).json({ message: 'Update not successful '});
      return;
    }
    res.status(200).json(theUser);
  });
});


module.exports = router;
