const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  lastName: String,
  username: String,
  password: String,
  beers: {
    //beers currently owned by user
    ownList: Array,
    //beers the user wants
    wishList: Array,
    //all the beers the user has tried
    historyList: Array
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
