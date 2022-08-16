const express = require("express");
const fs = require("fs");

const app = express();

app.use(express.json({ limit: "100kb" }));

app.post("/", (req, res) => {
  console.log(req.body);

  res.send(req.body);
});

app.get("/create-error", (req, res, next) => {
  // throw new Error("Generating new error");
  //   next(new Error("Generating new error"));
  fs.readFile("/file-does-not-exist", (err, data) => {
    if (err) {
      next(err);
    } else {
      res.send(data);
    }
  });
});

app.use((err, req, res, next) => {
  console.log("error");

  res.status(err.status || 500).json({
    message: err.message,
  });
});

app.listen(9000, () => {
  console.log("server started");
});
