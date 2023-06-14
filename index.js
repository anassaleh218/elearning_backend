const express = require('express');
const router = express();

// important!!!! middleware to parse json to add it 
router.use(express.json());


router.use("/api/student", require("./routes/StudentsRoutes"));
router.use("/api/user", require("./routes/UserRoutes"));





const port= process.env.PORT||3000;

router.listen(port, () => {
  console.log(`listening on ${port}.....!!!`);
});


