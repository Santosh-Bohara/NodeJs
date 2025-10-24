const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});

app.use(express.urlencoded());

app.get("/", (req, res, next) => {
  res.send(`
    <h1>Welcome to Airbnb Clone Application</h1>
    <a href="/add-home">Add Homes</a>
    `);
});

app.get("/add-home", (req, res, next) => {
  res.send(`
    <h1>Register Your Home</h1>
    <form action="/add-home" method="POST">
      <input type="text" name="homeName" placeholder="Enter Home Name"/><br><br>
      <input type="submit"/><br>
    </form>
    `);
});

app.post("/add-home", (req, res, next) => {
  console.log("Home Registered:", req.body.homeName);
  res.send(`
    <h1>Your Home Registered Successfully</h1>
    <a href="/">Go to Homes</a>
  
    `);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
