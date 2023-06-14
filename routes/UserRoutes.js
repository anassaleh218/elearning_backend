const userValidator = require("../middleware/UserValidatorMW");
const { User } = require("../models/UserModelDB");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");


// Regestration
router.post("/", userValidator, async (req, res) => {
  try {
    // check if already exist
    let user = await User.findOne({ email: req.body.email }).exec();
    if (user) return res.status(400).send("user already exist");

    // add new user
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPswd = await bcrypt.hash(req.body.password, salt);

    user= new User({
        name:req.body.name,
        email:req.body.email,
        password:hashedPswd
    })

    await user.save();
    res.status(200).send("user Added Successfully")


  } catch (err) {
    for (let i in err.errors) {
      console.log(err.errors[i].message);
    }
    res.status(400).send("data of user not added");
  }
});

module.exports = router;
