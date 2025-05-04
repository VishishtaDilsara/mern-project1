import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import studentRouter from "./routes/studentRouter.js";

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

app.use("/students", studentRouter);

app.listen(3000, () => {
  console.log("Server is running in port 3000");
});
