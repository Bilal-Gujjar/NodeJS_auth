// importing packages
const express = require("express");

// importing controllers
const { gteMyName, readFile, login ,auth } = require("./controllers");

// the express app
const app = express();

// body parser middleware
app.use(express.json({ limit: "100kb" }));

// logger middleware
app.use((req, res, next) => {
  const path = req.originalUrl;
  const method = req.method;

  console.log(`${method} ${path}`);

  next();
});

// port setter
app.set("port", 3002);

// routes declarartions
app.get("/name", gteMyName);
app.get("/read-file", readFile);
app.post("/login", login);
app.post("/auth",auth)
// Error handling middleware
app.use((err, req, res, next) => {
  console.log("error");

  res.status(err.status || 500).json({
    message: err.message,
  });
});

// server listening
app.listen(app.get("port"), () =>
  console.log(`Server started on port ${app.get("port")}`)
);
