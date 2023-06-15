const studentsController = require("../controllers/StudentControllerDB");
const stdValidator = require("../middleware/StudentValidatorMW");
const express = require('express');
const router=express.Router();

const auth = require("../middleware/AuthMWPermission");

// getAllStudents
router.get("/", studentsController.getAllStudents);

// getStudentByID
router.get("/:id", studentsController.getStudentByID);

// createStudent with MW
router.post("/",stdValidator, auth, studentsController.addStudent);

// createStudent without MW
//  router.post("/",studentsController.addStudent);

// updateStudentByID
router.put("/:id", auth, studentsController.updateStudentByID);

// deleteStudentByID
router.delete("/:id", auth, studentsController.deleteStudentByID);

module.exports=router;