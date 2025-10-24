const path = require("path");
const express = require("express");

const rootDir = require("./utils/pathUtil");

const homeRouter = require("./routes/homeRouter");
const contactRouter = require("./routes/contactRouter");

const app = express();

app.use(express.urlencoded());

app.use(homeRouter);
app.use(contactRouter);
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
});

// app.use((req, res, next) => {
//   console.log("First Dummy middleware", req.url, req.method);
//   next();
// });

// app.use((req, res, next) => {
//   console.log("Second Dummy middleware", req.url, req.method);
//   next();
// });

// app.use((req, res, next) => {
//   console.log("Third Dummy middleware", req.url, req.method);
//   res.send("<h1>Welcome to Node and Express Session.</h1>");
// });

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
