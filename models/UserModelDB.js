const mongoose = require("../config/db");
const validator = require("validator");

//create schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 15,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    // validate: {
    //   validator: (val) => {
    //     return valid.isEmail(val);
    //   },
  // }
    validate: [
      {
        validator: function (val) {
          return validator.isEmail(val);
        },
        message: "Invalid email address",
      },
    ],
    
  },
  password: {
    type: String,
    minlength: 5,
  },
});

// create Model
const User = mongoose.model("Users", userSchema);

module.exports = {User};
