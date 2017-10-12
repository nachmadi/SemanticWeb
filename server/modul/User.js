const mongoose = require('mongoose');

var UserSchema = new mongoose.Schema(
  {
    user_name: String,
    user_pass: String,
    role: String,
    salt:Number
  }
)

User = mongoose.model('User', UserSchema);

module.exports = User;
