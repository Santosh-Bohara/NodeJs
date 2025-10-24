const express = require("express");

const hostRouter = express.Router();

hostRouter.get("/host/add-home", (req, res, next) => {
  res.send(`
    <h1>Register Your Home</h1>
    <form action="/add-home" method="POST">
      <input type="text" name="homeName" placeholder="Enter Home Name"/><br><br>
      <input type="submit"/><br>
    </form>
    `);
});

hostRouter.post("/host/add-home", (req, res, next) => {
  console.log("Home Registered:", req.body.homeName);
  res.send(`
    <h1>Your Home Registered Successfully</h1>
    <a href="/">Go to Homes</a>
  
    `);
});
module.exports = hostRouter;
