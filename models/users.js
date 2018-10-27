const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  id: Number,
  firstName: String,
  surname: String,
  age: Number,
  gender: String,
  friends: [Number]
});

const User = mongoose.model('user', UserSchema);

module.exports = User;
