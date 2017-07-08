const express       = require('express');
const router        = express.Router();

require('dotenv').config();

router.get(`http://api.brewerydb.com/v2/?name=:id&key=API_KEY`, (req, res, next) => {
  Beer.find({}, (err, beer) => {
    if (err) { return res.json(err).status(500); }

    return res.json(beer);
  });
});

router.get('/journal-entries/:id', (req, res, next) => {
  Entry.findById(req.params.id, (err, entry) => {
    if (err)    { return res.json(err).status(500); }
    if (!entry) { return res.json(err).status(404); }

    return res.json(entry);
  });
});

router.post('/journal-entries', (req, res, next) => {
  console.log("should work");
  const newEntry = new Entry({
    title: req.body.title,
    content: req.body.content
  });

  newEntry.save( (err) => {
    if (err)             { return res.status(500).json(err); }
    if (newEntry.errors) { return res.status(400).json(newEntry); }
                           return res.json(newEntry);
  });
});

module.exports = router;
