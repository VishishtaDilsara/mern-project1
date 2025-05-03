import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import Student from "./models/students.js";

let app = express();

app.use(bodyParser.json());

mongoose
  .connect(
    "mongodb+srv://admin:admin123@cluster0.gsuozyc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Database connected");
  })
  .catch(() => {
    console.log("Database not connected");
  });

app.get("/", (req, res) => {
  Student.find().then((data) => {
    res.json(data);
  });
});

app.post("/", (req, res) => {
  const student = new Student({
    name: req.body.name,
    age: req.body.age,
    town: req.body.town,
  });

  student
    .save()
    .then(() => {
      res.json({
        message: "Student added successfully",
      });
    })
    .catch(() => {
      res.json({
        message: "Student not added",
      });
    });
});

app.put("/", (req, res) => {
  res.json({
    message: "This is a put request",
  });
});

app.delete("/", (req, res) => {
  res.json({
    message: "This is a delete request",
  });
});

app.listen(3000, () => {
  console.log("Server is running in port 3000");
});
