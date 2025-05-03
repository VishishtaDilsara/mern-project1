import express from "express";
import bodyParser from "body-parser";

let app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  {
    console.log(req.body);
  }
  res.json({
    message: "This is a get request",
  });
});

app.post("/", (req, res) => {
  res.json({
    message: "This is a post request",
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
