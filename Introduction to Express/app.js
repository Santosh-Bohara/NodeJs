// const http = require("http");
const express = require("express");

const requestHandler = require("./user");

const app = express();
app.use("/", (req, res, next) => {
  console.log("Came in first middleware", req.url, req.method);
  // res.send("<p>Came from First Middleware</p>");
  next();
});

app.get("/submit", (req, res, next) => {
  console.log("Came in second middleware", req.url, req.method);
  res.send("<p>Response from third middleware</p>");
});

app.use("/", (req, res, next) => {
  console.log("Came in another middleware", req.url, req.method);
  res.send("<p>Response from second middleware</p>");
});

// const server = http.createServer(app);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
