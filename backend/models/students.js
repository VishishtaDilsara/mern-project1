import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
  name: String,
  age: Number,
  town: String,
});

const Student = mongoose.model("student", studentSchema);

export default Student;
