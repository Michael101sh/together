const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: String,
  phone: String,
  name: String,
  age: String,
  gender: String,
  nickname: String,
  psw: String,
  icon: String,
  isVerified: Boolean,
  isPsychologist: Boolean
});

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
