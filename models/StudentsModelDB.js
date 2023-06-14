const mongoose = require("../config/db");


//create schema
const studentSchema = new mongoose.Schema({
  fn: {
    type: String,
    required: true,
    trim: true,
     uppercase: true,
    // minlength:5,
    // maxlength: 15
  },
  ln: {
    type: String,
    required: true,
    trim: true,
     uppercase: true,
    // minlength:5,
    // maxlength: 15
  },
  dept: {
    type: String,
    enum: ["CS", "IS", "AI", "IT"]
  },
  id: {
    type: Number,
    unique: true,
    // required: true,
    min: 10,
    // set , get , select , match
  }
});

// create Model
const Student = mongoose.model("Students", studentSchema);

module.exports = Student;
