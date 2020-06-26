const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: String,
  id: {
    type: String,
  },
  apikey: {
    type: String,
  },
});

const User = mongoose.model('Users', userSchema);

module.exports = User;
