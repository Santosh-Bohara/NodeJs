const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("First Dummy middleware", req.url, req.method);
  next();
});

app.use((req, res, next) => {
  console.log("Second Dummy middleware", req.url, req.method);
  next();
});

app.get("/", (req, res, next) => {
  console.log("Get Request for Home Page", req.url, req.method);
  res.send(`<h1>Welcome to Node and Express Session.</h1>`);
});

app.get("/contact-us", (req, res, next) => {
  console.log("Contact Us", req.url, req.method);
  res.send(`
    <h1>Please give your details</h1>
    <form action="/contact-us" method="POST">
      <input type="text" name="username" placeholder="Enter your Name"><br><br>
      <input type="email" name="email" placeholder="Enter your Email"><br><br>
      
      <input type="submit"><br>
    </form>
  `);
});

app.post("/contact-us", (req, res, next) => {
  console.log("Contact Us - POST", req.url, req.method);
  res.send(
    "<h1>Thanks for submitting your details. We will get back to you soon.</h1>"
  );
});

// app.use((req, res, next) => {
//   console.log("Third Dummy middleware", req.url, req.method);
//   res.send("<h1>Welcome to Node and Express Session.</h1>");
// });

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
