const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const beerSchema = new Schema({
  id: String,
  name: String,
});

const Beer = mongoose.model('Beer', beerSchema);
module.exports = Beer;
