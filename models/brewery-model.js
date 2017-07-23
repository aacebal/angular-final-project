const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const brewerySchema = new Schema({
  id: Object,
  name: Object,
});

const Brewery = mongoose.model('Brewery', brewerySchema);
module.exports = Brewery;
