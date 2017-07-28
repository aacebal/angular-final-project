const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  organizer: {
    id: String,
    fullName: String,
    image: String
  },
  date: Date,
  address: String,
  guests: [
    {
      id: String,
      fullName: String,
      image: String
    }
  ],
  beers: [
    //beers added to the event
    {
      id: String,
      name: String,
      image: String
    }
  ]
});

const myEvent = mongoose.model('Event', userSchema);
module.exports = myEvent;
