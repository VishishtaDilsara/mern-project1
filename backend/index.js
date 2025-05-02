import express from "express";

let app = express();

app.get("/", (req, res) => {
  res.json({
    message: "Hello World",
    message2: "Hello World 2",
  });
});

app.listen(3000, () => {
  console.log("Server is running in port 3000");
});
