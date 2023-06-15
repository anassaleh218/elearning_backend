const mongoose = require("../config/db");
const validator = require("validator");
// const jwt = require("jsonwebtoken");

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
        validator: (val) => {
          return validator.isEmail(val);
        },
        message: "Invalid email address",
      },
    ],
  },
  isAdmin: { type: Boolean },
  password: {
    type: String,
    minlength: 5,
  },
});

// userSchema.method.genAuthToken= ()=>{
//   const token = jwt.sign({ userid: this._id }, process.env.JWT_SECRET, {expiresIn: "72h"});
//   return token;
// }

// create Model
const User = mongoose.model("Users", userSchema);

module.exports = { User };
