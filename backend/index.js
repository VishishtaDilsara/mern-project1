import express from "express";

let app = express();
app.listen(3000, () => {
  console.log("Server is running in port 3000");
});
