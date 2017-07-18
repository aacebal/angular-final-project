var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/api/addBeer', (req, res, next) => {
  const userBeers = req.user.beers;

  const beerAdded = req.body.id;
  console.log(beerAdded);

  User.findByIdAndUpdate(req.user._id,
    { $push: { ownList: beerAdded } },
    (err, theUser) => {
    if (err) {
      res.status(500).json({ message: 'Update not successful '});
      return;
    }
    res.status(200).json(theUser);
  });
});


module.exports = router;
