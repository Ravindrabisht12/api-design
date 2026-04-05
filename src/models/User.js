const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  confirmPassword: String,
});

userSchema.pre("save", function (next) {
  if (this.confirmPassword) {
    this.confirmPassword = undefined;
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
