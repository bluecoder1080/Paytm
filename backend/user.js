const { default: mongoose } = require("mongoose");

const mongoose = require(mongoose);

const userSchema = new mongoose.Schema({
  Fisrtname: {
    type: String,
    required: [true, "First Name is Required"],
    minlength: [2, "First Name Should atleast be 2 characters Long"],
  },
  Lastname: {
    type: String,
    required: [true, "First Name is Required"],
    minlength: [2, "First Name Should atleast be 2 characters Long"],
  },
  phoneNumber: {
    type: String,
    match: [
      /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/,
      "Enter a valid phone number",
    ],
  },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
  },

  password: {
    type: String,
    required: [true, "Password Is Required"],
    minlength: [6, "Password must be at least 6 characters long"],
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
