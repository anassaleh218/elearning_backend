const express = require('express');
const router = express();
require("dotenv").config();

// important!!!! middleware to parse json to add it 
router.use(express.json());


router.use("/api/student", require("./routes/StudentsRoutes"));
router.use("/api/user", require("./routes/UserRoutes"));
router.use("/api/auth", require("./routes/Auth"));
router.use("/api/admin", require("./routes/Admin"));



const port= process.env.PORT||3000;

router.listen(port, () => {
  console.log(`listening on ${port}.....!!!`);
});


