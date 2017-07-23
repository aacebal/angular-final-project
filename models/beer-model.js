const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const beerSchema = new Schema({
  id: Object,
  name: Object,
});

const Beer = mongoose.model('Beer', beerSchema);
module.exports = Beer;
