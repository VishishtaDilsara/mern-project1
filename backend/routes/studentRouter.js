import express from "express";
import Student from "../models/students.js";

const studentRouter = express.Router();

studentRouter.get("/", (req, res) => {
  Student.find().then((data) => {
    res.json(data);
  });
});

studentRouter.post("/", (req, res) => {
  const student = new Student({
    name: req.body.name,
    age: req.body.age,
    town: req.body.town,
  });
  student
    .save()
    .then(() => {
      res.json({
        messsage: "Student Saved Successfully",
      });
    })
    .catch(() => {
      res.json({
        messsage: "Student not saved",
      });
    });
});

export default studentRouter;
