const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  lastName: String,
  username: String,
  password: String,
  friends: [
    { id: String,
      username: String,
      fullName: String,
      image: String
    }
  ],
  notifications: [
    { friendRequest: String,
      fullName: String,
      requestSent: String
    }
  ],
  events:
    { organized: [ String ],
      invited: [String]
    },
  beers: {
    //beers currently owned by user
    ownList: [
      { id: String,
        name: String,
        image: String
      }],
    //beers the user wants
    wishList: [{ id: String,
      name: String,
      image: String
    }],
    //all the beers the user has tried
    historyList: [{ id: String,
      name: String,
      image: String
    }]
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
