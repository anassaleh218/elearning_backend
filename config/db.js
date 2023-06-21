const mongoose = require("mongoose");

//conn to db
mongoose
  .connect("mongodb://localhost:27017/elearning", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
   
  })
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log(err);
  });

  module.exports=mongoose;