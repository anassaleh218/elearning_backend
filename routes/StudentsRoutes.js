const studentsController = require("../controllers/StudentControllerDB");
const stdValidator = require("../middleware/StudentValidatorMW");
const express = require('express');
const router=express.Router();

// getAllStudents
router.get("/", studentsController.getAllStudents);

// getStudentByID
router.get("/:id", studentsController.getStudentByID);

// createStudent with MW
router.post("/",stdValidator,studentsController.addStudent);

// createStudent without MW
//  router.post("/",studentsController.addStudent);

// updateStudentByID
router.put("/:id",studentsController.updateStudentByID);

// deleteStudentByID
router.delete("/:id",studentsController.deleteStudentByID);

module.exports=router;