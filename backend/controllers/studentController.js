import Student from "../models/students.js";

export function getStudent(req, res) {
  Student.find().then((data) => {
    res.json(data);
  });
}

export function saveStudent(req, res) {
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
}
